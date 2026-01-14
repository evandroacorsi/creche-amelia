import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/logo-creche-amelia.png";
import heroImage from "@/assets/hero-creche.jpg";

const HeroSection = () => {
  // Definindo os estilos de animação diretamente aqui para garantir que funcionem
  const animationStyles = `
    @keyframes subtle-zoom {
      from { transform: scale(1.15); }
      to { transform: scale(1.0); }
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

    .animate-subtle-zoom {
      animation: subtle-zoom 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    }

    .animate-gradient-text {
      background-size: 200% auto;
      animation: gradient-shift 5s ease infinite;
    }

    .animate-fade-in {
      opacity: 0; /* Começa invisível */
      animation: fade-in-up 0.8s ease-out forwards;
    }
    
    /* Utilitário para garantir que o float (que você já tinha) funcione */
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(var(--tw-rotate)); }
      50% { transform: translateY(-10px) rotate(var(--tw-rotate)); }
    }
    .animation-float {
      animation: float 3s ease-in-out infinite;
    }
  `;

  return (
    <section className="relative min-h-[90vh] flex items-center gradient-hero overflow-hidden pt-6 pb-12 lg:py-0">

      {/* INJEÇÃO DO CSS NO COMPONENTE */}
      <style>{animationStyles}</style>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-16 h-16 bg-block-yellow/20 rounded-2xl rotate-12 animation-float" />
        <div className="absolute top-40 right-20 w-12 h-12 bg-block-blue/20 rounded-xl -rotate-12 animation-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-40 left-20 w-10 h-10 bg-block-green/20 rounded-lg rotate-45 animation-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-20 right-40 w-14 h-14 bg-block-red/20 rounded-2xl -rotate-6 animation-float" style={{ animationDelay: "0.5s" }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Content */}
          <div className="text-center lg:text-left mt-4 order-1 lg:order-1">

            {/* Título com animação Gradient e Fade-in */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight animate-fade-in">
              Lugar de carinho, cuidado e{" "}
              <span className="text-gradient-primary animate-gradient-text inline-block">
                descobertas
              </span>
            </h1>

            {/* Parágrafo com Delay */}
            <p
              className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Há 56 anos transformando a infância em Rancharia/SP.
              Oferecemos um ambiente seguro, acolhedor e estimulante para o desenvolvimento
              integral das crianças de 4 meses a 3 anos e 11 meses.
            </p>

            {/* Botões com Delay */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <Button size="lg" className="gradient-primary text-primary-foreground font-semibold px-8 h-12 sm:h-14 text-sm sm:text-base rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105" asChild>
                <a href="https://wa.me/5518997876081" target="_blank" rel="noopener noreferrer">
                  Agende uma Visita
                  <ArrowRight className="ml-2" size={20} />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="font-semibold px-8 h-12 sm:h-14 text-sm sm:text-base rounded-xl border-2" asChild>
                <Link to="/sobre">Conheça a Creche</Link>
              </Button>
            </div>

            {/* Stats com Delay */}
            <div
              className="grid grid-cols-3 gap-2 sm:gap-6 mt-8 sm:mt-12 pt-4 sm:pt-8 animate-fade-in border-t lg:border-none border-gray-200"
              style={{ animationDelay: "0.6s" }}
            >
              <div>
                <div className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-primary">56</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Anos de história</div>
              </div>
              <div>
                <div className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-block-blue">4m-4a</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Idade atendida</div>
              </div>
              <div>
                <div className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-block-green">100%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Gratuito</div>
              </div>
            </div>
          </div>

          {/* Hero Image e Badge */}
          <div className="relative mt-8 lg:mt-0 order-2 lg:order-2">

            {/* Wrapper da imagem com fade-in */}
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl mx-auto max-w-[500px] lg:max-w-none animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              {/* Imagem com Zoom Sutil */}
              <img
                src={heroImage}
                alt="Crianças brincando na Creche Amélia"
                className="w-full h-64 sm:h-[400px] lg:h-[500px] object-cover animate-subtle-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>

            {/* Logo Badge */}
            <div
              className="absolute -bottom-4 left-4 lg:-bottom-6 lg:-left-6 bg-card p-3 lg:p-4 rounded-2xl shadow-xl animate-float"
              style={{ animationDelay: "1s" }}
            >
              <img src={logo} alt="Creche Amélia" className="h-16 lg:h-24 w-auto" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;