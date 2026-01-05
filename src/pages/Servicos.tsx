import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";
import ServiceCard from "@/components/ui/ServiceCard";
import { Baby, BookOpen, UtensilsCrossed, Palette, Gamepad2, ShieldCheck, Music, Users, Heart, Clock } from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "Educação Infantil",
    description: "Programa pedagógico completo baseado na BNCC, focado no desenvolvimento cognitivo, social e emocional das crianças de 2 a 5 anos.",
    color: "green" as const,
  },
  {
    icon: Baby,
    title: "Berçário",
    description: "Cuidados especializados para bebês de 0 a 2 anos, com ambiente acolhedor, berços individuais e equipe altamente preparada.",
    color: "blue" as const,
  },
  {
    icon: UtensilsCrossed,
    title: "Alimentação Saudável",
    description: "Cardápio elaborado por nutricionistas, com refeições balanceadas e nutritivas preparadas diariamente na creche.",
    color: "red" as const,
  },
  {
    icon: Palette,
    title: "Atividades Artísticas",
    description: "Projetos de arte que estimulam a criatividade, expressão e desenvolvimento da coordenação motora fina.",
    color: "yellow" as const,
  },
  {
    icon: Gamepad2,
    title: "Recreação",
    description: "Brincadeiras e jogos educativos que promovem a socialização, cooperação e desenvolvimento físico das crianças.",
    color: "orange" as const,
  },
  {
    icon: ShieldCheck,
    title: "Ambiente Seguro",
    description: "Instalações completamente adaptadas para crianças, com monitoramento constante e protocolos de segurança.",
    color: "green" as const,
  },
  {
    icon: Music,
    title: "Musicalização",
    description: "Atividades musicais que desenvolvem a sensibilidade auditiva, ritmo e expressão corporal.",
    color: "blue" as const,
  },
  {
    icon: Users,
    title: "Socialização",
    description: "Ambiente que promove a interação social saudável, respeitando as diferenças e desenvolvendo valores.",
    color: "red" as const,
  },
  {
    icon: Heart,
    title: "Acolhimento",
    description: "Ambiente afetuoso onde cada criança é tratada com carinho, respeito e atenção individualizada.",
    color: "yellow" as const,
  },
  {
    icon: Clock,
    title: "Período Integral",
    description: "Atendimento em período integral das 7h às 17h, com flexibilidade para atender as necessidades das famílias.",
    color: "orange" as const,
  },
];

const Servicos = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 gradient-hero">
        <div className="container-custom">
          <div className="max-w-3xl">
            <SectionHeader
              title="Nossos Serviços"
              subtitle="Oferecemos uma experiência completa de cuidado e educação, com estrutura e atividades pensadas para o desenvolvimento integral das crianças."
              centered={false}
              colorAccent="blue"
            />
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                color={service.color}
                delay={index * 0.05}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Faixas Etárias */}
      <section className="py-20 bg-card">
        <div className="container-custom">
          <SectionHeader
            title="Faixas Etárias Atendidas"
            subtitle="Cada fase do desenvolvimento infantil recebe atenção especializada e adequada."
            colorAccent="green"
          />

          <div className="grid md:grid-cols-3 gap-8">
            <div className="block-card text-center border-2 border-block-blue/20">
              <div className="w-16 h-16 rounded-full bg-block-blue/10 flex items-center justify-center mx-auto mb-4">
                <span className="font-display text-2xl font-bold text-block-blue">0-1</span>
              </div>
              <h3 className="font-display text-xl font-bold mb-2">Berçário I</h3>
              <p className="text-muted-foreground text-sm">
                Cuidados especiais para os primeiros meses de vida, com ambiente tranquilo e acolhedor.
              </p>
            </div>
            <div className="block-card text-center border-2 border-block-green/20">
              <div className="w-16 h-16 rounded-full bg-block-green/10 flex items-center justify-center mx-auto mb-4">
                <span className="font-display text-2xl font-bold text-block-green">1-2</span>
              </div>
              <h3 className="font-display text-xl font-bold mb-2">Berçário II</h3>
              <p className="text-muted-foreground text-sm">
                Estimulação do desenvolvimento motor e sensorial, preparando para a próxima fase.
              </p>
            </div>
            <div className="block-card text-center border-2 border-block-orange/20">
              <div className="w-16 h-16 rounded-full bg-block-orange/10 flex items-center justify-center mx-auto mb-4">
                <span className="font-display text-2xl font-bold text-block-orange">2-5</span>
              </div>
              <h3 className="font-display text-xl font-bold mb-2">Educação Infantil</h3>
              <p className="text-muted-foreground text-sm">
                Programa pedagógico completo com atividades educativas, recreativas e artísticas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Servicos;
