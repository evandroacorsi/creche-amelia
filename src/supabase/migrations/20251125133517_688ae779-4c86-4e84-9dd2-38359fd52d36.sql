-- =========================================
-- 1) ENUM PARA ROLES (admin / moderator / user)
-- =========================================
CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');


-- =========================================
-- 2) TABELA DE ROLES DOS USUÁRIOS
-- =========================================
CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    UNIQUE (user_id, role)
);


-- =========================================
-- 3) ATIVAR RLS NA TABELA
-- =========================================
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;


-- =========================================
-- 4) FUNÇÃO PARA CHECAR SE UM USUÁRIO TEM UM PAPEL
-- =========================================
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;


-- =========================================
-- 5) POLÍTICAS DE ACESSO (RLS)
-- =========================================

-- Usuário autenticado só pode ver seus próprios roles
CREATE POLICY "Users can view their own roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- Admin pode gerenciar tudo
CREATE POLICY "Admins can manage all roles"
ON public.user_roles
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- =========================================
-- 6) SEED: CRIAR USUÁRIO ADMIN PADRÃO
-- =========================================

-- Habilita a extensão necessária para criptografar a senha
CREATE EXTENSION IF NOT EXISTS pgcrypto;

DO $$
DECLARE
  -- Defina aqui os dados do admin
  v_user_id UUID := gen_random_uuid();
  v_email TEXT := 'admin@admin.com';
  v_password TEXT := 'admin@123';
BEGIN
  -- Só insere se o usuário ainda não existir
  IF NOT EXISTS (SELECT 1 FROM auth.users WHERE email = v_email) THEN

    -- 1. Inserir na tabela interna de autenticação (auth.users)
    INSERT INTO auth.users (
      id,
      instance_id,
      email,
      encrypted_password,
      email_confirmed_at,
      raw_app_meta_data,
      raw_user_meta_data,
      aud,
      role,
      created_at,
      updated_at
    ) VALUES (
      v_user_id,
      '00000000-0000-0000-0000-000000000000', -- ID de instância padrão do Supabase
      v_email,
      crypt(v_password, gen_salt('bf')), -- Gera o hash Bcrypt da senha
      now(), -- Marca o e-mail como confirmado
      '{"provider":"email","providers":["email"]}',
      '{"full_name": "Administrador"}',
      'authenticated',
      'authenticated',
      now(),
      now()
    );

    -- 2. Inserir na tabela de identidades (necessário para o login funcionar)
    INSERT INTO auth.identities (
      id,
      user_id,
      identity_data,
      provider,
      provider_id,
      last_sign_in_at,
      created_at,
      updated_at
    ) VALUES (
      v_user_id,
      v_user_id,
      format('{"sub":"%s","email":"%s"}', v_user_id, v_email)::jsonb,
      'email',
      v_user_id::text,
      now(),
      now(),
      now()
    );

    -- 3. Inserir na SUA tabela de roles (public.user_roles)
    INSERT INTO public.user_roles (user_id, role)
    VALUES (v_user_id, 'admin');

  END IF;
END $$;