import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, School } from "lucide-react";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";


import logo from "@/assets/logo.png";
import heroImage from "@/assets/hero-creche.jpg";

/* =========================
   COUNT UP
========================= */
interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
}

const CountUp = ({ end, duration = 1500, suffix = "" }: CountUpProps) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setValue(end);
        clearInterval(timer);
      } else {
        setValue(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <span>
      {value}
      {suffix}
    </span>
  );
};

const HeroSection = () => {
  const animationStyles = `
    @keyframes subtle-zoom {
      from { transform: scale(1.15); }
      to { transform: scale(1); }
    }

    @keyframes gradient-shift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    @keyframes fade-in-up {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* FLOAT COM ROTAÇÃO (ORIGINAL) */
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(var(--tw-rotate)); }
      50% { transform: translateY(-10px) rotate(var(--tw-rotate)); }
    }

    .animate-subtle-zoom {
      animation: subtle-zoom 2s ease forwards;
    }

    .animate-gradient-text {
      background-size: 200% auto;
      animation: gradient-shift 5s ease infinite;
    }

    .animate-fade-in {
      opacity: 0;
      animation: fade-in-up 0.8s ease-out forwards;
    }

    .animation-float {
      animation: float 3s ease-in-out infinite;
    }
  `;

  return (
    <section className="relative min-h-[100vh] lg:min-h-[90vh] flex items-center gradient-hero overflow-hidden pt-10 pb-16 lg:py-0 ">
      <style>{animationStyles}</style>
      {/* BLOCOS DECORATIVOS NUMERADOS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">

        {/* BLOCO 1 */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-block-yellow/30 rounded-2xl rotate-12 animation-float flex items-center justify-center font-display text-2xl font-bold text-block-yellow">
          1
        </div>

        {/* BLOCO 2 */}
        <div
          className="absolute top-40 right-20 w-12 h-12 bg-block-blue/30 rounded-xl -rotate-12 animation-float flex items-center justify-center font-display text-xl font-bold text-block-blue"
          style={{ animationDelay: "1s" }}
        >
          2
        </div>

        {/* BLOCO 3 */}
        <div
          className="absolute bottom-40 left-20 w-10 h-10 bg-block-green/30 rounded-lg rotate-45 animation-float flex items-center justify-center font-display text-lg font-bold text-block-green"
          style={{ animationDelay: "2s" }}
        >
          3
        </div>

        {/* BLOCO 4 */}
        <div
          className="absolute bottom-20 right-40 w-14 h-14 bg-block-red/30 rounded-2xl -rotate-6 animation-float flex items-center justify-center font-display text-xl font-bold text-block-red"
          style={{ animationDelay: "0.5s" }}
        >
          4
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">


          {/* TEXTO */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">

              Lugar de carinho, cuidado e{" "}
              <span className="text-gradient-primary animate-gradient-text">
                descobertas
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Há 56 anos transformando a infância em Rancharia/SP.
              Oferecemos um ambiente seguro, acolhedor e estimulante para o
              desenvolvimento integral das crianças de 4 meses a 3 anos e 11 meses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">

              {/* WHATSAPP */}
              <Button
                size="lg"
                className="gradient-primary px-8 h-14 rounded-xl shadow-lg hover:scale-105 transition-all flex items-center gap-3 w-full sm:w-auto"
                asChild
              >
                <a
                  href="https://wa.me/5518997876081"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="text-xl" />
                  Agende uma Visita
                  <ArrowRight className="ml-1" />
                </a>
              </Button>

              {/* CONHEÇA A CRECHE */}
              <Button
                size="lg"
                variant="outline"
                className="
                  px-8 h-14 rounded-xl
                  flex items-center gap-3
                "
                asChild
              >
                <Link to="/sobre">
                  <School className="w-5 h-5" />
                  Conheça a Creche
                </Link>
              </Button>
            </div>


            {/* STATS */}
            <div
              className=" grid grid-cols-3 gap-3 border-t pt-6 text-center text-sm">
              <div>
                <div className="font-display text-3xl font-bold text-primary">
                  <CountUp end={56} />
                </div>
                <div className="text-sm text-muted-foreground">Anos de história</div>
              </div>

              <div>
                <div className="font-display text-3xl font-bold text-block-blue">
                  <CountUp end={4} suffix="m" /> - <CountUp end={4} suffix="a" />
                </div>
                <div className="text-sm text-muted-foreground">Idade atendida</div>
              </div>

              <div>
                <div className="font-display text-3xl font-bold text-block-green">
                  <CountUp end={100} suffix="%" />
                </div>
                <div className="text-sm text-muted-foreground">Gratuito</div>
              </div>
            </div>
          </div>

          {/* IMAGEM */}
          <div className="relative animate-fade-in">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Crianças brincando na Creche Amélia"
                className=" w-full h-[220px] sm:h-[320px] md:h-[380px] lg:h-[400px] object-coveranimate-subtle-zoom"/>
                </div>

            <div
              className="
                absolute -bottom-3 left-3 sm:-bottom-5 sm:-left-5 bg-white p-2 rounded-lg shadow-sm animation-float ">
              <img src={logo} alt="Creche Amélia" className="h-14 sm:h-24" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
