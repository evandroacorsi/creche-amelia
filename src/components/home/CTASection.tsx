import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 gradient-primary">
      <div className="container-custom text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-foreground/20 rounded-2xl mb-6">
            <Heart className="w-8 h-8 text-primary-foreground" />
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Faça Parte da Nossa Família
          </h2>

          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Agende uma visita e conheça de perto todo o carinho e dedicação que 
            oferecemos às nossas crianças. Estamos esperando você!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8 h-14 text-base rounded-xl"
              asChild
            >
              <a href="https://wa.me/5518999999999" target="_blank" rel="noopener noreferrer">
                Agende uma Visita
                <ArrowRight className="ml-2" size={20} />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8 h-14 text-base rounded-xl"
              asChild
            >
              <Link to="/contato">Entre em Contato</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
