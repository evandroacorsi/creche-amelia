import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Star } from "lucide-react";
import logo from "@/assets/logo-creche-amelia.png";
import heroImage from "@/assets/hero-creche.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center gradient-hero overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-16 h-16 bg-block-yellow/20 rounded-2xl rotate-12 animation-float" />
        <div className="absolute top-40 right-20 w-12 h-12 bg-block-blue/20 rounded-xl -rotate-12 animation-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-40 left-20 w-10 h-10 bg-block-green/20 rounded-lg rotate-45 animation-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-20 right-40 w-14 h-14 bg-block-red/20 rounded-2xl -rotate-6 animation-float" style={{ animationDelay: "0.5s" }} />
        <Star className="absolute top-32 right-1/3 text-block-yellow/30 w-8 h-8 animation-float" style={{ animationDelay: "1.5s" }} />
        <Heart className="absolute bottom-32 left-1/3 text-block-red/30 w-6 h-6 animation-float" style={{ animationDelay: "2.5s" }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-secondary/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-block-green rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-secondary-foreground">Matrículas Abertas 2025</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight animate-fade-in">
              Lugar de carinho, cuidado e{" "}
              <span className="text-gradient-primary">descobertas</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in">
              Há 56 anos transformando a infância em Rancharia/SP. 
              Oferecemos um ambiente seguro, acolhedor e estimulante para o desenvolvimento 
              integral das crianças de 4 meses a 3 anos e 11 meses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in">
              <Button size="lg" className="gradient-primary text-primary-foreground font-semibold px-8 h-14 text-base rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105" asChild>
                <a href="https://wa.me/5518997876081" target="_blank" rel="noopener noreferrer">
                  Agende uma Visita
                  <ArrowRight className="ml-2" size={20} />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="font-semibold px-8 h-14 text-base rounded-xl border-2" asChild>
                <Link to="/sobre">Conheça a Creche</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border animate-fade-in">
              <div>
                <div className="font-display text-3xl md:text-4xl font-bold text-primary">56</div>
                <div className="text-sm text-muted-foreground">Anos de história</div>
              </div>
              <div>
                <div className="font-display text-3xl md:text-4xl font-bold text-block-blue">4m-4a</div>
                <div className="text-sm text-muted-foreground">Idade atendida</div>
              </div>
              <div>
                <div className="font-display text-3xl md:text-4xl font-bold text-block-green">100%</div>
                <div className="text-sm text-muted-foreground">Gratuito</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Crianças brincando na Creche Amélia"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
            
            {/* Logo Badge */}
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-2xl shadow-xl">
              <img src={logo} alt="Creche Amélia" className="h-24 w-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;