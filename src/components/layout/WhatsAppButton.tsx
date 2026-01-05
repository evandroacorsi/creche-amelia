import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "5518999999999";
  const message = "Olá! Gostaria de saber mais informações sobre a Creche Amélia.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float animate-scale-in"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle size={28} className="text-white fill-white" />
    </a>
  );
};

export default WhatsAppButton;
