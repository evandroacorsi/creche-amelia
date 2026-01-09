import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";
import { Heart, Target, Shield, Users, Award, Clock, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-creche.jpg";
import salaAula from "@/assets/sala-aula.jpg";
import playground from "@/assets/playground.jpg";
import bercario from "@/assets/bercario.jpg";
import refeitorio from "@/assets/refeitorio.jpg";

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

const spaces = [
  {
    image: salaAula,
    title: "Salas de Aula",
    description: "Espaços amplos, bem iluminados e equipados com materiais pedagógicos adequados para cada faixa etária.",
  },
  {
    image: playground,
    title: "Playground",
    description: "Área de lazer ao ar livre com brinquedos seguros e coloridos, piso emborrachado para amortecer quedas.",
  },
  {
    image: bercario,
    title: "Berçário",
    description: "Ambiente tranquilo e acolhedor com berços individuais e espaço climatizado para o conforto dos bebês.",
  },
  {
    image: refeitorio,
    title: "Refeitório",
    description: "Espaço limpo e organizado para as refeições, com mobiliário adequado para crianças.",
  },
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
      <section className="relative py-20 gradient-hero">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Sparkles className="absolute top-10 right-10 text-block-yellow/30 w-8 h-8" />
          <div className="absolute bottom-10 left-10 w-12 h-12 bg-block-blue/20 rounded-xl rotate-12" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <SectionHeader
              title="Sobre a Creche Amélia"
              subtitle="Há 56 anos cuidando, educando e acolhendo as crianças de Rancharia/SP com todo amor e dedicação."
              centered={false}
              colorAccent="red"
              isPageHeader
            />
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

      {/* Missão */}
      <section className="py-20 bg-card">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="block-card border-l-4 border-primary">
              <h3 className="font-display text-2xl font-bold mb-4 text-primary">Nossa Missão</h3>
              <p className="text-muted-foreground">
                Realizar um trabalho de caráter educativo, buscando a autonomia e o desenvolvimento 
                pessoal e social da criança através das ações voltadas para o desenvolvimento social 
                e cultural com vagas oferecidas gratuitamente, sem distinção de raça, cor, sexo, 
                credo religioso ou qualquer outra forma de discriminação, não tendo caráter político 
                e nem finalidade lucrativa.
              </p>
            </div>
            <div className="block-card border-l-4 border-block-blue">
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

      {/* Estrutura - Galeria */}
      <section className="py-20 bg-card">
        <div className="container-custom">
          <SectionHeader
            title="Nossa Estrutura"
            subtitle="Conheça os espaços cuidadosamente preparados para proporcionar conforto e segurança."
            colorAccent="blue"
          />

          <div className="grid md:grid-cols-2 gap-6">
            {spaces.map((space, index) => (
              <div
                key={space.title}
                className="rounded-2xl overflow-hidden shadow-card bg-background animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={space.image}
                  alt={space.title}
                  className="w-full h-[250px] object-cover"
                />
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold mb-2">{space.title}</h3>
                  <p className="text-muted-foreground text-sm">{space.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20">
        <div className="container-custom">
          <SectionHeader
            title="Diferenciais da Nossa Estrutura"
            subtitle="Instalações pensadas para o bem-estar e desenvolvimento das crianças."
            colorAccent="yellow"
          />

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