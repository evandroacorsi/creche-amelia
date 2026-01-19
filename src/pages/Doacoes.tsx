import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Package,
  HandHeart,
  ArrowRight,
  HeartHandshake,
  Building2,
  Megaphone,
  Users,
  Briefcase,
  Handshake
} from "lucide-react";
import { Link } from "react-router-dom";
import { SiPix } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import heroImage from "@/assets/bg2.png";
import bg1 from "@/assets/bg1.png";

/* =========================
   DADOS
========================= */

const formasDoacao = [
  {
    icon: SiPix,
    title: "PIX",
    description: "Faça uma doação via PIX de forma rápida e segura.",
    destaque: "Chave PIX disponível",
    cor: "bg-block-green/10 text-block-green border-block-green/20",
  },
  {
    icon: Package,
    title: "Doação de Materiais",
    description: "Itens de higiene, materiais pedagógicos, brinquedos e alimentos.",
    destaque: "O que doar?",
    cor: "bg-block-blue/10 text-block-blue border-block-blue/20",
  },
  {
    icon: HandHeart,
    title: "Voluntariado",
    description: "Doe seu tempo e talento. Precisamos de voluntários em diversas áreas.",
    destaque: "Seja voluntário",
    cor: "bg-block-yellow/10 text-block-yellow border-block-yellow/20",
  },
];

const parceriasEmpresariais = [
  {
    icon: Megaphone,
    title: "Patrocínio de Eventos",
    description: "Associe a marca da sua empresa aos nossos eventos e projetos sociais.",
  },
  {
    icon: Package,
    title: "Doações de Produtos",
    description: "Doe estoques, equipamentos ou serviços que sua empresa oferece.",
  },
  {
    icon: Users,
    title: "Voluntariado Corporativo",
    description: "Engaje seus colaboradores em ações sociais transformadoras na creche.",
  },
  {
    icon: Briefcase,
    title: "Campanhas de Arrecadação",
    description: "Realize campanhas internas com sua equipe para arrecadar itens essenciais.",
  },
];

const comoAjudar = [
  "Fraldas descartáveis",
  "Lenços umedecidos",
  "Material de limpeza",
  "Brinquedos educativos",
  "Livros infantis",
  "Material escolar",
  "Alimentos não perecíveis",
  "Roupas infantis",
];

/* =========================
   COMPONENTE
========================= */

const Doacoes = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 bg-primary/5 border-b border-primary/10 overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt=""
            className="w-full h-full object-cover opacity-15"
          />
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-8 left-12 w-16 h-16 border-2 border-primary/30 rounded-2xl rotate-12" />
          <div className="absolute bottom-10 right-12 w-12 h-12 border-2 border-primary/30 rounded-xl -rotate-12" />
          <div className="absolute top-1/2 right-0 w-32 h-32 bg-primary/5 rounded-full translate-x-1/2" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
              <Heart className="w-8 h-8 text-primary" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Faça a Diferença na Vida de uma{" "}
              <span className="text-primary whitespace-nowrap">Criança</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Sua doação ajuda a manter nossos serviços gratuitos e garante melhores
              condições de cuidado, educação e acolhimento para as crianças da
              Creche Amélia há <strong>56 anos</strong>.
            </p>

            <div className="mt-8">
              <Button
                size="lg"
                className="gradient-primary text-primary-foreground font-semibold px-8 h-12 text-base rounded-xl"
                asChild
              >
                <a href="#formas-doacao">
                  Quero Doar <ArrowRight className="ml-2" size={20} />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Formas de Doação (Individual) */}
      <section
        id="formas-doacao"
        className="relative py-20 bg-red-50/50 border-t border-red-100 overflow-hidden"
      >
        {/* Elementos decorativos */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-red-200/60 rounded-2xl rotate-12" />
          <div className="absolute bottom-16 right-12 w-14 h-14 border-2 border-red-200/60 rounded-xl -rotate-12" />
          <div className="absolute top-1/2 right-0 w-40 h-40 bg-red-100/40 rounded-full translate-x-1/2" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-2xl mb-6">
              <HeartHandshake className="w-8 h-8 text-red-600" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Como <span className="text-red-600">Doar</span>
            </h2>

            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Existem diversas formas de contribuir com a nossa causa.
              Escolha a que melhor se adapta a você.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {formasDoacao.map((forma, index) => (
              <div
                key={forma.title}
                className="group relative bg-white/80 backdrop-blur-sm border border-red-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Topo */}
                <div>
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-red-100 text-red-600 group-hover:scale-105 transition-transform">
                    <forma.icon size={28} />
                  </div>

                  <h3 className="font-display text-xl font-bold mb-2 text-gray-900">
                    {forma.title}
                  </h3>
                </div>

                {/* Meio (flexível) */}
                <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">
                  {forma.description}
                </p>

                {/* Base (fixa e alinhada) */}
                <div className="pt-4 border-t border-red-100 flex items-center justify-between">
                  <span className="font-mono font-semibold text-red-600">
                    {forma.destaque}
                  </span>

                  <span className="text-xs text-gray-400 group-hover:text-red-500 transition-colors">
                    <Link to="/contato">
                      Entre em Contato →
                    </Link>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- NOVA SEÇÃO: PARCERIAS EMPRESARIAIS --- */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container-custom">
          <SectionHeader
            title="Parcerias Empresariais"
            subtitle="Sua empresa pode transformar vidas e obter benefícios fiscais ao apoiar nossa causa."
            colorAccent="blue"
          />

          <div className="mt-10 grid lg:grid-cols-2 gap-10 items-center">
            {/* Texto Descritivo */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
                    <Building2 size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Por que ser um parceiro?</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Empresas podem contribuir de diversas formas, inclusive com <strong>benefícios fiscais</strong> para doações a Organizações da Sociedade Civil (OSC). Ao apoiar a Creche Amélia, sua empresa reforça a responsabilidade social e impacta diretamente a comunidade local.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {parceriasEmpresariais.map((item) => (
                  <div key={item.title} className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                    <item.icon className="text-primary mb-3" size={24} />
                    <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10 text-center lg:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Quer tornar sua empresa uma parceira?
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Entre em contato com nossa diretoria para conhecer os projetos disponíveis para patrocínio e entender como funciona a dedução fiscal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="gradient-primary text-white" asChild>
                  <Link to="/contato">
                    Falar sobre Parceria
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5 text-primary" asChild>
                  <a href="https://wa.me/5518997876081" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="mr-2" /> WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dados Bancários */}
      <section className="py-20 bg-gradient-to-b from-card to-background">

        <div className="container-custom">
          <SectionHeader
            title="Dados para Doação"
            subtitle="Informações institucionais para contato, transferência ou depósito."
            colorAccent="blue"
          />

          <div className="max-w-2xl mx-auto">
            <div className="rounded-2xl border border-border bg-background shadow-sm p-6">
              {/* Lista de dados */}
              <div className="divide-y divide-border">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 py-4">
                  <span className="text-sm text-muted-foreground">Razão Social</span>
                  <span className="font-semibold text-sm sm:text-right">
                    Escola de Educação Infantil “Amélia Teixeira Lins”
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 py-4">
                  <span className="text-sm text-muted-foreground">Telefone</span>
                  <span className="font-semibold text-sm">(18) 3265-6789</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 py-4">
                  <span className="text-sm text-muted-foreground">WhatsApp</span>
                  <span className="font-semibold text-sm">(18) 99787-6081</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 py-4">
                  <span className="text-sm text-muted-foreground">E-mail</span>
                  <span className="font-semibold text-sm break-all">
                    crecheamelia@hotmail.com
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 py-4">
                  <span className="text-sm text-muted-foreground">Endereço</span>
                  <span className="font-semibold text-sm sm:text-right">
                    Rua Allan Kardec, nº 778 – Vila Righeti, Rancharia/SP
                  </span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-block-green/10 rounded-xl text-center">
                <p className="text-sm text-muted-foreground">
                  Para informações sobre PIX e dados bancários, entre em contato pelo WhatsApp
                </p>
                <Button className="mt-4 gradient-primary text-primary-foreground" asChild>
                  <a href="https://wa.me/5518997876081" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="text-xl mr-2" />Falar no WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* O que precisamos */}
      <section className="py-20 bg-gradient-to-b from-emerald-50/60 to-background dark:from-emerald-900/10">
        <div className="container-custom">
          <SectionHeader
            title="O Que Mais Precisamos"
            subtitle="Itens que fazem diferença no dia a dia da creche."
            colorAccent="green"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {comoAjudar.map((item, index) => (
              <div
                key={item}
                className="
                  group flex items-center gap-4 p-4
                  rounded-xl
                  border border-emerald-100 dark:border-emerald-900/40
                  bg-white dark:bg-background
                  shadow-sm hover:shadow-md
                  transition-all duration-300
                  hover:-translate-y-1
                  animate-fade-in
                "
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Indicador */}
                <div
                  className="
                    w-3.5 h-3.5 rounded-full
                    bg-emerald-500
                    group-hover:bg-emerald-600
                    transition-colors
                    flex-shrink-0
                  "
                />

                <span className="text-sm font-medium text-foreground/80">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-block-red">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto">
            <Handshake size={36} className="text-white mb-4 mx-auto" />

            <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">
              Toda Ajuda Faz a Diferença
            </h2>
            <p className="text-primary-foreground/90 mb-8">
              Entre em contato para saber mais sobre como você pode contribuir
              com a Creche Amélia e fazer parte dessa história de amor e cuidado há 56 anos.
            </p>
            <Button
              size="lg"
              className="bg-primary-foreground text-block-red hover:bg-primary-foreground/90 font-semibold px-8 h-14 text-base rounded-xl"
              asChild
            >
              <Link to="/contato">
                Entre em Contato <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Doacoes;