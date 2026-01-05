import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";
import salaAula from "@/assets/sala-aula.jpg";
import playground from "@/assets/playground.jpg";
import bercario from "@/assets/bercario.jpg";
import refeitorio from "@/assets/refeitorio.jpg";

const spaces = [
  {
    image: salaAula,
    title: "Salas de Aula",
    description: "Espaços amplos, bem iluminados e equipados com materiais pedagógicos adequados para cada faixa etária. Mobiliário adaptado para crianças, com cantinhos de leitura, artes e brincadeiras.",
  },
  {
    image: playground,
    title: "Playground",
    description: "Área de lazer ao ar livre com brinquedos seguros e coloridos, piso emborrachado para amortecer quedas, e espaço verde para atividades ao ar livre.",
  },
  {
    image: bercario,
    title: "Berçário",
    description: "Ambiente tranquilo e acolhedor com berços individuais, área de troca, espaço para amamentação e ambiente climatizado para o conforto dos bebês.",
  },
  {
    image: refeitorio,
    title: "Refeitório",
    description: "Espaço limpo e organizado para as refeições, com mobiliário adequado para crianças e ambiente que estimula a alimentação saudável.",
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

const Estrutura = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 gradient-hero">
        <div className="container-custom">
          <div className="max-w-3xl">
            <SectionHeader
              title="Nossa Estrutura"
              subtitle="Conheça os espaços cuidadosamente preparados para proporcionar conforto, segurança e estímulo ao desenvolvimento das crianças."
              centered={false}
              colorAccent="green"
            />
          </div>
        </div>
      </section>

      {/* Galeria Principal */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid gap-12">
            {spaces.map((space, index) => (
              <div
                key={space.title}
                className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="rounded-3xl overflow-hidden shadow-card">
                    <img
                      src={space.image}
                      alt={space.title}
                      className="w-full h-[350px] object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <h3 className="font-display text-2xl font-bold mb-4">{space.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{space.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-card">
        <div className="container-custom">
          <SectionHeader
            title="Diferenciais da Nossa Estrutura"
            subtitle="Instalações pensadas para o bem-estar e desenvolvimento das crianças."
            colorAccent="blue"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div
                key={feature}
                className="flex items-center gap-3 bg-background p-4 rounded-xl shadow-soft animate-fade-in"
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

export default Estrutura;
