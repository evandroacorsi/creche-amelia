import { Baby, BookOpen, UtensilsCrossed, Palette, Gamepad2, Clock } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ServiceCard from "@/components/ui/ServiceCard";

const services = [
  {
    icon: BookOpen,
    title: "Desenvolvimento Infantil",
    description: "Programa pedagógico focado no desenvolvimento cognitivo, social e emocional, respeitando a individualidade de cada criança.",
    color: "green" as const,
  },
  {
    icon: Baby,
    title: "Berçário",
    description: "Cuidados especializados para bebês de 4 meses a 2 anos, com ambiente acolhedor e equipe preparada.",
    color: "blue" as const,
  },
  {
    icon: UtensilsCrossed,
    title: "Alimentação",
    description: "Refeições balanceadas e nutritivas, garantindo nutrição de qualidade para o desenvolvimento saudável.",
    color: "red" as const,
  },
  {
    icon: Palette,
    title: "Atividades Pedagógicas",
    description: "Projetos educativos que estimulam a criatividade, coordenação motora e aprendizado lúdico.",
    color: "yellow" as const,
  },
  {
    icon: Gamepad2,
    title: "Atividades Recreativas",
    description: "Brincadeiras e jogos que promovem a socialização e o desenvolvimento físico das crianças.",
    color: "orange" as const,
  },
  {
    icon: Clock,
    title: "Período Integral",
    description: "Atendimento em período integral para melhor apoiar as famílias e o desenvolvimento infantil.",
    color: "green" as const,
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container-custom">
        <SectionHeader
          title="O que Oferecemos"
          subtitle="Proporcionamos uma experiência completa de cuidado e educação gratuita para o desenvolvimento integral das crianças."
          colorAccent="blue"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              color={service.color}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;