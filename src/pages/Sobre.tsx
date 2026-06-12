import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";
import { Heart, Target, Shield, Users, Award, Clock, Sun } from "lucide-react";
import heroImage from "@/assets/hero-creche.jpg";
// 1. Importe a logo aqui
import logoPrefeitura from "@/assets/logo-prefeitura.webp";

const values = [
  {
    icon: Heart,
    title: "Amor e Acolhimento",
    description: "Cada criança é recebida com carinho e tratada como um membro da nossa família.",
  },
  {
    icon: Target,
    title: "Autonomia e Desenvolvimento",
    description: "Buscamos a autonomia e o desenvolvimento pessoal e social de cada criança.",
  },
  {
    icon: Shield,
    title: "Segurança em Primeiro Lugar",
    description: "Ambiente seguro e monitorado para tranquilidade dos pais e bem-estar das crianças.",
  },
  {
    icon: Users,
    title: "Rede de Apoio Familiar",
    description: "Mais do que um lugar de cuidado, somos uma rede de apoio para as famílias.",
  },
  {
    icon: Award,
    title: "56 Anos de Tradição",
    description: "Desde 1969, mantendo nosso foco no cuidado e educação infantil de qualidade.",
  },
  {
    icon: Clock,
    title: "Dedicação Integral",
    description: "Atendimento em período integral com atenção individualizada para cada criança.",
  },
];

const equipe = [
  { nome: "Maria da Silva", cargo: "Coordenadora Pedagógica" },
  { nome: "Ana Santos", cargo: "Professora - Maternal I" },
  { nome: "Joana Oliveira", cargo: "Professora - Maternal II" },
  { nome: "Carla Souza", cargo: "Auxiliar de Desenvolvimento Infantil" },
  { nome: "Fernanda Lima", cargo: "Auxiliar de Desenvolvimento Infantil" },
  { nome: "Rosa Pereira", cargo: "Berçarista" },
  { nome: "Lucia Almeida", cargo: "Cozinheira" },
  { nome: "Sandra Costa", cargo: "Auxiliar de Serviços Gerais" },
];

const features = [
  "Salas climatizadas e bem ventiladas",
  "Banheiros adaptados para crianças",
  "Cozinha industrial equipada",
  "Área verde e pátio coberto",
  "Sistema de segurança e monitoramento",
  "Acessibilidade para pessoas com deficiência",
  "Fraldário e lactário equipados",
  "Espaço para eventos e apresentações",
];

const Sobre = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 bg-primary/5 border-b border-primary/10">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block mb-4 px-4 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary">
              Educação infantil de qualidade
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Sobre a <span className="text-primary">Creche Amélia</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600">
              Há <strong>56 anos</strong> cuidando, educando e acolhendo as crianças de
              <strong> Rancharia/SP</strong> com amor, responsabilidade e dedicação.
            </p>
          </div>
        </div>
      </section>

      {/* História */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold mb-6">Nossa História</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  A Creche Berçário Espírita de Rancharia "Amélia Teixeira Lins" foi fundada
                  em 26 de janeiro de 1969, nascendo do sonho de oferecer às crianças um espaço
                  onde pudessem crescer com amor, segurança e educação de qualidade.
                </p>
                <p>
                  Ao longo dos 56 anos de existência, nossa creche manteve seu foco principal:
                  ser mais do que um lugar de cuidado. Somos uma rede de apoio familiar onde o
                  desenvolvimento emocional da criança caminha lado a lado com a segurança física
                  e a nutrição de qualidade.
                </p>
                <p>
                  Atendemos crianças de 4 meses a 3 anos e 11 meses, oferecendo berçário, maternal,
                  educação infantil, alimentação balanceada e atividades pedagógicas e recreativas
                  em período integral, de forma totalmente gratuita.
                </p>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-card">
              <img src={heroImage} alt="Creche Amélia" className="w-full h-[400px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-slate-100 border-y border-slate-300">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">

            <div className="text-center md:text-right max-w-lg">
              <h3 className="text-lg font-extrabold text-slate-900 mb-1">
                Parceria Institucional
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Trabalhamos em convênio com a <strong>Prefeitura Municipal de Rancharia</strong>,
                uma parceria fundamental para garantir a gratuidade e a excelência
                do atendimento oferecido às nossas crianças.
              </p>
            </div>

            <div className="hidden md:block w-px h-16 bg-slate-300"></div>

            <div className="flex-shrink-0 grayscale-[30%] hover:grayscale-0 transition-all duration-500">
              <img
                src={logoPrefeitura}
                alt="Logo Prefeitura de Rancharia"
                className="h-16 md:h-20 w-auto object-contain"
              />
            </div>

          </div>
        </div>
      </section>


      {/* Missão */}
      <section className="py-20 bg-card">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="block-card border-l-4 border-primary bg-white">
              <h3 className="font-display text-2xl font-bold mb-4 text-primary">Nossa Missão</h3>
              <p className="text-muted-foreground">
                Realizar um trabalho de caráter educativo, buscando a autonomia e o desenvolvimento
                pessoal e social da criança através das ações voltadas para o desenvolvimento social
                e cultural com vagas oferecidas gratuitamente, sem distinção de raça, cor, sexo,
                credo religioso ou qualquer outra forma de discriminação, não tendo caráter político
                e nem finalidade lucrativa.
              </p>
            </div>
            <div className="block-card border-l-4 border-block-blue bg-white">
              <h3 className="font-display text-2xl font-bold mb-4 text-block-blue">O Que Nos Torna Especiais</h3>
              <p className="text-muted-foreground">
                Nossa creche é especial porque aqui, cada criança é vista em sua individualidade,
                recebendo o afeto e a segurança necessários para que se sinta encorajada a explorar
                o mundo. O desenvolvimento emocional da criança caminha lado a lado com a segurança
                física e a nutrição de qualidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20">
        <div className="container-custom">
          <SectionHeader
            title="Nossos Valores"
            subtitle="Os princípios que guiam nossa atuação diária no cuidado e educação das crianças."
            colorAccent="green"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div key={value.title} className="block-card animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nossa Equipe */}
      <section className="py-20 bg-card">
        <div className="container-custom">
          <SectionHeader
            title="Nossa Equipe"
            subtitle="Profissionais dedicados ao cuidado e desenvolvimento das nossas crianças."
            colorAccent="blue"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {equipe.map((membro, index) => (
              <div
                key={membro.nome}
                className="block-card text-center animate-fade-in p-4"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Users size={24} className="text-primary" />
                </div>
                <h3 className="font-display text-base font-bold mb-1">{membro.nome}</h3>
                <p className="text-muted-foreground text-xs">{membro.cargo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-block-yellow">
        <div className="container-custom">
          <div className="mx-auto text-center">
            <Sun size={36} className="text-white mb-4 mx-auto" />
            <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">
              Diferenciais da Nossa Estrutura
            </h2>
            <p className="text-primary-foreground/90 mb-8">
              Instalações pensadas para o bem-estar e desenvolvimento das crianças.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div
                key={feature}
                className="flex items-center gap-3 bg-card p-4 rounded-xl shadow-soft animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-3 h-3 rounded-full bg-block-green flex-shrink-0" />
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sobre;