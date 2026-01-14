import { MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "5518997876081";
  const message = "Olá! Gostaria de saber mais informações sobre a Creche Berçário Espírita de Rancharia 'Amélia Teixeira Lins'.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float animate-scale-in"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <FaWhatsapp size={36} className="text-white fill-white" />
    </a>
  );
};

export default WhatsAppButton;
