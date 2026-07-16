import logo from "@/assets/logo-creche-amelia.png";
import { Turnstile } from "@/components/security/Turnstile";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PasswordInput } from "@/components/ui/password-input";
import { useToast } from "@/hooks/use-toast";
import { isSupabaseConfigured, supabase } from "@/integrations/supabase/client";
import { ADMIN_PATH, RESET_PASSWORD_PATH } from "@/lib/adminRoutes";
import { isTurnstileConfigured } from "@/lib/security";
import { AlertCircle, Loader2 } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileKey, setTurnstileKey] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const handleTurnstileVerify = useCallback((token: string) => setTurnstileToken(token), []);

  useEffect(() => {
    if (!isSupabaseConfigured) return;

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) navigate(ADMIN_PATH);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) navigate(ADMIN_PATH);
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleAuth = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    try {
      if (!isSupabaseConfigured) {
        throw new Error("Configure as credenciais do Supabase no arquivo .env.");
      }
      if (isTurnstileConfigured && !turnstileToken) {
        throw new Error("Confirme a validação anti-spam antes de entrar.");
      }

      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
        options: {
          captchaToken: turnstileToken || undefined,
        },
      });

      if (error) throw error;

      toast({
        title: "Login realizado com sucesso",
        description: "Bem-vindo ao painel administrativo.",
      });
    } catch (error: unknown) {
      toast({
        title: "Erro ao entrar",
        description: error instanceof Error ? error.message : "Ocorreu um erro. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      if (isTurnstileConfigured) {
        setTurnstileToken("");
        setTurnstileKey((current) => current + 1);
      }
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-muted p-4">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <Card className="w-full max-w-md animate-fade-in shadow-lg">
        <CardHeader className="space-y-4 text-center">
          <img src={logo} alt="Creche Amélia" className="mx-auto h-20 w-auto" />
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>
            Entre com suas credenciais para acessar o painel administrativo.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!isSupabaseConfigured && (
            <div className="mb-4 flex items-start gap-3 rounded-md border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
              <span>Preencha o `.env` antes de usar o login.</span>
            </div>
          )}

          <form onSubmit={handleAuth} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                disabled={loading || !isSupabaseConfigured}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <PasswordInput
                id="password"
                placeholder="Senha"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                disabled={loading || !isSupabaseConfigured}
                minLength={6}
              />
            </div>
            <Turnstile
              key={turnstileKey}
              onVerify={handleTurnstileVerify}
              onExpire={() => setTurnstileToken("")}
              theme="auto"
            />
            <Button type="submit" className="w-full" disabled={loading || !isSupabaseConfigured}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Entrar
            </Button>
            <div className="text-center text-sm">
              <Link to={RESET_PASSWORD_PATH} className="text-primary hover:underline">
                Esqueci minha senha
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
