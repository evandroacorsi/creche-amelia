import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";
import { Heart, Target, Shield, Users, Award, Clock } from "lucide-react";
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
    title: "Compromisso com a Educação",
    description: "Buscamos excelência no processo educativo, respeitando o ritmo de cada criança.",
  },
  {
    icon: Shield,
    title: "Segurança em Primeiro Lugar",
    description: "Ambiente seguro e monitorado para tranquilidade dos pais e bem-estar das crianças.",
  },
  {
    icon: Users,
    title: "Parceria com as Famílias",
    description: "Trabalhamos em conjunto com os pais para o melhor desenvolvimento das crianças.",
  },
  {
    icon: Award,
    title: "Excelência e Qualidade",
    description: "Equipe qualificada e dedicada ao desenvolvimento integral infantil.",
  },
  {
    icon: Clock,
    title: "Dedicação Integral",
    description: "Atendimento em período integral com atenção individualizada.",
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
        <div className="container-custom">
          <div className="max-w-3xl">
            <SectionHeader
              title="Sobre a Creche Amélia"
              subtitle="Há mais de uma década cuidando, educando e acolhendo as crianças de Rancharia/SP com todo amor e dedicação."
              centered={false}
              colorAccent="red"
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
                  A Creche Amélia nasceu do sonho de oferecer às crianças de Rancharia 
                  um espaço onde pudessem crescer com amor, segurança e educação de qualidade. 
                  Fundada há mais de 10 anos, nossa instituição se tornou referência em 
                  educação infantil na região.
                </p>
                <p>
                  Ao longo dos anos, crescemos e evoluímos, sempre mantendo nosso 
                  compromisso original: proporcionar um ambiente acolhedor onde cada 
                  criança possa desenvolver todo o seu potencial.
                </p>
                <p>
                  Hoje, atendemos mais de 150 crianças de 0 a 5 anos, oferecendo 
                  berçário, educação infantil, alimentação balanceada e diversas 
                  atividades pedagógicas e recreativas.
                </p>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-card">
              <img src={heroImage} alt="Creche Amélia" className="w-full h-[400px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Missão e Visão */}
      <section className="py-20 bg-card">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="block-card border-l-4 border-primary">
              <h3 className="font-display text-2xl font-bold mb-4 text-primary">Nossa Missão</h3>
              <p className="text-muted-foreground">
                Promover o desenvolvimento integral das crianças, respeitando suas 
                individualidades e potencialidades, através de uma educação de qualidade, 
                em um ambiente seguro, acolhedor e estimulante, em parceria constante 
                com as famílias.
              </p>
            </div>
            <div className="block-card border-l-4 border-block-blue">
              <h3 className="font-display text-2xl font-bold mb-4 text-block-blue">Nossa Visão</h3>
              <p className="text-muted-foreground">
                Ser reconhecida como uma instituição de excelência em educação infantil, 
                formando cidadãos conscientes, criativos e preparados para enfrentar 
                os desafios do futuro, contribuindo para uma sociedade mais justa e humana.
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
