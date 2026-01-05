import { Link } from "react-router-dom";
import { Baby, BookOpen, UtensilsCrossed, Palette, Gamepad2, ShieldCheck } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ServiceCard from "@/components/ui/ServiceCard";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: BookOpen,
    title: "Educação Infantil",
    description: "Programa pedagógico completo focado no desenvolvimento cognitivo, social e emocional das crianças.",
    color: "green" as const,
  },
  {
    icon: Baby,
    title: "Berçário",
    description: "Cuidados especializados para bebês de 0 a 2 anos, com ambiente acolhedor e equipe preparada.",
    color: "blue" as const,
  },
  {
    icon: UtensilsCrossed,
    title: "Alimentação",
    description: "Refeições balanceadas e nutritivas, preparadas com carinho por nutricionistas especializados.",
    color: "red" as const,
  },
  {
    icon: Palette,
    title: "Atividades Pedagógicas",
    description: "Projetos educativos que estimulam a criatividade, coordenação motora e aprendizado.",
    color: "yellow" as const,
  },
  {
    icon: Gamepad2,
    title: "Atividades Recreativas",
    description: "Brincadeiras e jogos que promovem a socialização e o desenvolvimento físico.",
    color: "orange" as const,
  },
  {
    icon: ShieldCheck,
    title: "Ambiente Seguro",
    description: "Instalações adaptadas e monitoradas para garantir a segurança e bem-estar das crianças.",
    color: "green" as const,
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container-custom">
        <SectionHeader
          title="O que Oferecemos"
          subtitle="Proporcionamos uma experiência completa de cuidado e educação para o desenvolvimento integral das crianças."
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

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="font-semibold rounded-xl" asChild>
            <Link to="/servicos">Ver Todos os Serviços</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
