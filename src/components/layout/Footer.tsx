import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Heart } from "lucide-react";
import logo from "@/assets/logo-creche-amelia.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <img src={logo} alt="Creche Amélia" className="h-20 w-auto bg-card rounded-lg p-2" />
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Lugar de carinho, cuidado e descobertas a cada passo. Há 56 anos transformando a vida de crianças em Rancharia/SP.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4">Links Rápidos</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/sobre" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Sobre a Creche
              </Link>
              <Link to="/transparencia" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Transparência
              </Link>
              <Link to="/noticias" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Notícias
              </Link>
              <Link to="/doacoes" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Faça uma Doação
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4">Contato</h4>
            <div className="space-y-3">
              <a href="tel:+551832656789" className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                <Phone size={16} />
                (18) 3265-6789
              </a>
              <a href="https://wa.me/5518997876081" className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                <Phone size={16} />
                (18) 99787-6081
              </a>
              <a href="mailto:crecheamelia@hotmail.com" className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                <Mail size={16} />
                crecheamelia@hotmail.com
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/80 text-sm">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Rua Allan Kardec, nº 778<br />Vila Righeti - Rancharia/SP</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/crechebercario_amelia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <div className="text-center md:text-left">
              <p>Escola de Educação Infantil "Amélia Teixeira Lins"</p>
              <p>Entidade filantrópica sem fins lucrativos - Fundada em 26/01/1969</p>
            </div>
            <p className="flex items-center gap-1">
              Feito com <Heart size={14} className="text-block-red fill-block-red" /> para nossas crianças
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;