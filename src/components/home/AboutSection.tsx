import { Link } from "react-router-dom";
import SectionHeader from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";
import { Heart, Target, Shield, Users } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Amor e Carinho",
    description: "Tratamos cada criança com o amor e atenção que ela merece.",
    color: "bg-block-red/10 text-block-red",
  },
  {
    icon: Target,
    title: "Compromisso",
    description: "Comprometidos com o desenvolvimento integral de cada criança.",
    color: "bg-block-blue/10 text-block-blue",
  },
  {
    icon: Shield,
    title: "Segurança",
    description: "Ambiente seguro e acolhedor para o bem-estar das crianças.",
    color: "bg-block-green/10 text-block-green",
  },
  {
    icon: Users,
    title: "Família",
    description: "Parceria constante com as famílias no processo educativo.",
    color: "bg-block-yellow/10 text-block-yellow",
  },
];

const AboutSection = () => {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <SectionHeader
              title="Sobre a Creche Amélia"
              subtitle="Uma história de amor e dedicação à educação infantil em Rancharia/SP."
              centered={false}
              colorAccent="red"
            />

            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                Fundada há mais de 10 anos, a Creche Amélia nasceu do sonho de oferecer 
                às crianças de Rancharia um espaço onde pudessem crescer com amor, 
                segurança e educação de qualidade.
              </p>
              <p>
                Nossa missão é promover o desenvolvimento integral das crianças, 
                respeitando suas individualidades e potencialidades, em parceria 
                constante com as famílias.
              </p>
              <p>
                Atendemos crianças de 0 a 5 anos, oferecendo berçário, educação 
                infantil, alimentação balanceada e atividades pedagógicas e recreativas 
                que estimulam o aprendizado de forma lúdica e prazerosa.
              </p>
            </div>

            <Button className="gradient-primary text-primary-foreground font-semibold rounded-xl" asChild>
              <Link to="/sobre">Conheça Nossa História</Link>
            </Button>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-2 gap-4">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`block-card text-center p-6 ${index % 2 === 1 ? "mt-8" : ""}`}
              >
                <div className={`w-14 h-14 rounded-xl ${value.color} flex items-center justify-center mx-auto mb-4`}>
                  <value.icon size={28} />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
