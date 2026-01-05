import { Link } from "react-router-dom";
import SectionHeader from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";
import salaAula from "@/assets/sala-aula.jpg";
import playground from "@/assets/playground.jpg";
import bercario from "@/assets/bercario.jpg";
import refeitorio from "@/assets/refeitorio.jpg";

const spaces = [
  { image: salaAula, title: "Sala de Aula", description: "Espaço educativo e estimulante" },
  { image: playground, title: "Playground", description: "Área de lazer segura" },
  { image: bercario, title: "Berçário", description: "Ambiente acolhedor para bebês" },
  { image: refeitorio, title: "Refeitório", description: "Alimentação saudável" },
];

const GallerySection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container-custom">
        <SectionHeader
          title="Nossa Estrutura"
          subtitle="Conheça os espaços preparados com carinho para o desenvolvimento das crianças."
          colorAccent="green"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {spaces.map((space, index) => (
            <div
              key={space.title}
              className="group relative rounded-2xl overflow-hidden shadow-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={space.image}
                alt={space.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground">
                <h3 className="font-display text-xl font-bold">{space.title}</h3>
                <p className="text-sm text-primary-foreground/80">{space.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="font-semibold rounded-xl" asChild>
            <Link to="/estrutura">Ver Galeria Completa</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
