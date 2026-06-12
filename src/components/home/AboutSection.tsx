import { Link } from "react-router-dom";
import SectionHeader from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";
import { Heart, Target, Shield, Users } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Afeto e Segurança",
    description: "Cada criança é vista em sua individualidade, recebendo afeto e segurança.",
    color: "bg-block-red/10 text-block-red",
  },
  {
    icon: Target,
    title: "Desenvolvimento",
    description: "Desenvolvimento emocional lado a lado com segurança física e nutrição.",
    color: "bg-block-blue/10 text-block-blue",
  },
  {
    icon: Shield,
    title: "Rede de Apoio",
    description: "Mais do que um lugar de cuidado, somos uma rede de apoio familiar.",
    color: "bg-block-green/10 text-block-green",
  },
  {
    icon: Users,
    title: "56 Anos de Tradição",
    description: "Desde 1969 mantendo nosso foco no cuidado e educação infantil.",
    color: "bg-block-yellow/10 text-block-yellow",
  },
];

const AboutSection = () => {
  return (
    // Ajustei o padding vertical para mobile e desktop
    <section className="py-12 lg:py-20">
      {/* Container padronizado */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Content */}
          {/* ADICIONADO: Classes para centralizar no mobile e alinhar à esquerda no desktop */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-1">
            <SectionHeader
              title="Sobre a Creche Amélia"
              subtitle="Uma história de amor e dedicação à educação infantil em Rancharia/SP."
              centered={false} // Nota: Se o componente SectionHeader for rígido, talvez precise de CSS extra, mas o pai (flex-col items-center) deve forçar o centro.
              colorAccent="red"
            />

            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                Fundada em 26 de janeiro de 1969, a Creche Berçário Espírita de Rancharia
                "Amélia Teixeira Lins" nasceu do sonho de oferecer às crianças um espaço
                onde pudessem crescer com amor, segurança e educação de qualidade.
              </p>
              <p>
                Nossa missão é realizar um trabalho de caráter educativo, buscando a autonomia
                e o desenvolvimento pessoal e social da criança através de ações voltadas para
                o desenvolvimento social e cultural, com vagas oferecidas gratuitamente.
              </p>
              <p>
                Atendemos crianças de 4 meses a 3 anos e 11 meses, oferecendo berçário, maternal,
                educação infantil, alimentação balanceada e atividades pedagógicas e recreativas
                em período integral.
              </p>
            </div>

            <Button className="gradient-primary text-primary-foreground font-semibold rounded-xl" asChild>
              <Link to="/sobre">Conheça Nossa História</Link>
            </Button>
          </div>

          {/* Values Grid */}
          {/* MUDANÇA: grid-cols-1 no mobile (resolve o aperto) e sm:grid-cols-2 (tablet/pc) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 mt-8 lg:mt-0 order-2 lg:order-2 w-full">
            {values.map((value, index) => (
              <div
                key={value.title}
                // MUDANÇA 1: h-full para altura igual
                // MUDANÇA 2: sm:mt-8 aplica o efeito "escada" apenas quando houver 2 colunas
                className={`block-card text-center p-6 h-full flex flex-col items-center justify-center ${index % 2 === 1 ? "sm:mt-8" : ""
                  }`}
              >
                <div className={`w-14 h-14 rounded-xl ${value.color} flex items-center justify-center mx-auto mb-4 shrink-0`}>
                  <value.icon size={28} />
                </div>

                {/* MUDANÇA: break-words impede que 'Desenvolvimento' saia do card */}
                <h3 className="font-display text-lg font-bold mb-2 break-words w-full">
                  {value.title}
                </h3>

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