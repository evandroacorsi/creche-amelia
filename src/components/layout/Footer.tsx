import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Heart, Facebook } from "lucide-react";
import logo from "@/assets/logo-creche-amelia.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <img src={logo} alt="Creche Amélia" className="h-40 w-auto bg-white/95 rounded-lg p-2" />
          </div>

          <div>
            <h4 className="font-display text-lg font-bold mb-4">Links Rápidos</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/sobre" className="text-white/80 hover:text-white transition-colors text-sm">
                Sobre a Creche
              </Link>
              <Link to="/transparencia" className="text-white/80 hover:text-white transition-colors text-sm">
                Transparência
              </Link>
              <Link to="/noticias" className="text-white/80 hover:text-white transition-colors text-sm">
                Notícias
              </Link>
              <Link to="/doacoes" className="text-white/80 hover:text-white transition-colors text-sm">
                Faça uma Doação
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold mb-4">Contato</h4>
            <div className="space-y-3">
              <a href="tel:+551832656789" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors text-sm">
                <Phone size={16} />
                (18) 3265-6789
              </a>
              <a href="https://wa.me/5518997876081" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors text-sm">
                <Phone size={16} />
                (18) 99787-6081
              </a>
              <a href="mailto:crecheamelia@hotmail.com" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors text-sm">
                <Mail size={16} />
                crecheamelia@hotmail.com
              </a>
              <div className="flex items-start gap-3 text-white/80 text-sm">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Rua Allan Kardec, nº 778<br />Vila Righeti - Rancharia/SP</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/crechebercario_amelia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/CrecheAmeliaLins/?locale=pt_BR"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <div className="text-center md:text-left">
              <p className="font-semibold text-white/80">Escola de Educação Infantil "Amélia Teixeira Lins"</p>
              <p>CNPJ: 44.935.773/0001-35</p>
              <p>Entidade filantrópica sem fins lucrativos - Fundada em 26/01/1969</p>
            </div>
            <p className="flex flex-col md:flex-row items-center gap-1 text-center md:text-right">
              <span>© {currentYear} Creche Amélia Teixeira Lins.</span>
              <span>Todos os direitos reservados.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
