import { useState } from "react";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageCircle, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contato = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nome.trim() || !formData.telefone.trim() || !formData.mensagem.trim()) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    const whatsappMessage = `Olá! Meu nome é ${formData.nome}.\n\nTelefone: ${formData.telefone}\n\nMensagem: ${formData.mensagem}`;
    const whatsappUrl = `https://wa.me/5518997876081?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Mensagem enviada!",
      description: "Você será redirecionado para o WhatsApp.",
    });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-16 bg-primary/5 border-b border-primary/10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Sparkles className="absolute top-6 right-10 text-block-yellow/20 w-6 h-6" />
          <div className="absolute bottom-6 left-10 w-8 h-8 bg-block-green/10 rounded-lg rotate-12" />
        </div>
        <div className="container-custom relative z-10">
          <SectionHeader
            title="Entre em Contato"
            subtitle="Estamos prontos para atender você e esclarecer todas as suas dúvidas sobre a Creche Amélia."
            centered={true}
            colorAccent="orange"
            isPageHeader
          />
        </div>
      </section>

      {/* Contato */}
      <section className="py-16">

        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Formulário */}
            <div className="block-card">
              <h2 className="font-display text-xl font-bold mb-5">Envie sua Mensagem</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Nome completo</label>
                  <Input
                    type="text"
                    placeholder="Seu nome"
                    className="h-11 rounded-xl"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Telefone</label>
                  <Input
                    type="tel"
                    placeholder="(00) 00000-0000"
                    className="h-11 rounded-xl"
                    value={formData.telefone}
                    onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Mensagem</label>
                  <Textarea
                    placeholder="Como podemos ajudar?"
                    className="min-h-24 rounded-xl resize-none"
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full gradient-primary text-primary-foreground font-semibold h-12 rounded-xl">
                  <MessageCircle className="mr-2" size={20} />
                  Enviar via WhatsApp
                </Button>
              </form>
            </div>

            {/* Informações */}
            <div>
              <div className="space-y-4">
                <div className="block-card flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-block-green/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-block-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Endereço</h3>
                    <p className="text-muted-foreground text-sm">
                      Rua Allan Kardec, nº 778<br />
                      Vila Righeti - Rancharia/SP
                    </p>
                  </div>
                </div>

                <div className="block-card flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-block-blue/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-block-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Telefone</h3>
                    <p className="text-muted-foreground text-sm">
                      (18) 3265-6789<br />
                      (18) 99787-6081 (WhatsApp)
                    </p>
                  </div>
                </div>

                <div className="block-card flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-block-yellow/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-block-yellow" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">E-mail</h3>
                    <p className="text-muted-foreground text-sm">
                      crecheamelia@hotmail.com
                    </p>
                  </div>
                </div>

                <div className="block-card flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-block-red/10 flex items-center justify-center flex-shrink-0">
                    <Clock size={24} className="text-block-red" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Horário de Funcionamento</h3>
                    <p className="text-muted-foreground text-sm">
                      Segunda a Sexta: 7h às 17h<br />
                      Sábado e Domingo: Fechado
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="w-full p-0 bg-card">
        {/* MUDANÇA 2: Removi a div 'container-custom' e a div de 'rounded/shadow' */}
        {/* O iframe agora é filho direto da section */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3702.5!2d-50.89!3d-22.23!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDEzJzQ4LjAiUyA1MMKwNTMnMjQuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123"
          className="w-full h-[450px] lg:h-[550px]" // MUDANÇA 3: Altura responsiva e w-full via classe
          style={{ border: 0, display: "block" }} // display: block remove uma pequena margem fantasma que iframes tem
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização Creche Amélia - Rua Allan Kardec, 778 - Vila Righeti, Rancharia/SP"
        />
      </section>
    </Layout>
  );
};

export default Contato;