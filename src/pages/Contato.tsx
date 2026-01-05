import { useState } from "react";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
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
    const whatsappUrl = `https://wa.me/5518999999999?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Mensagem enviada!",
      description: "Você será redirecionado para o WhatsApp.",
    });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 gradient-hero">
        <div className="container-custom">
          <div className="max-w-3xl">
            <SectionHeader
              title="Entre em Contato"
              subtitle="Estamos prontos para atender você e esclarecer todas as suas dúvidas sobre a Creche Amélia."
              centered={false}
              colorAccent="orange"
            />
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulário */}
            <div>
              <h2 className="font-display text-2xl font-bold mb-6">Envie sua Mensagem</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Nome completo</label>
                  <Input
                    type="text"
                    placeholder="Seu nome"
                    className="h-12 rounded-xl"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Telefone</label>
                  <Input
                    type="tel"
                    placeholder="(00) 00000-0000"
                    className="h-12 rounded-xl"
                    value={formData.telefone}
                    onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Mensagem</label>
                  <Textarea
                    placeholder="Como podemos ajudar?"
                    className="min-h-32 rounded-xl resize-none"
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full gradient-primary text-primary-foreground font-semibold h-14 rounded-xl">
                  <MessageCircle className="mr-2" size={20} />
                  Enviar via WhatsApp
                </Button>
              </form>
            </div>

            {/* Informações */}
            <div>
              <h2 className="font-display text-2xl font-bold mb-6">Informações de Contato</h2>
              <div className="space-y-6">
                <div className="block-card flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-block-green/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-block-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Endereço</h3>
                    <p className="text-muted-foreground text-sm">
                      Rua das Flores, 123<br />
                      Centro - Rancharia/SP<br />
                      CEP: 19600-000
                    </p>
                  </div>
                </div>

                <div className="block-card flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-block-blue/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-block-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Telefone</h3>
                    <p className="text-muted-foreground text-sm">
                      (18) 99999-9999<br />
                      (18) 3265-0000
                    </p>
                  </div>
                </div>

                <div className="block-card flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-block-yellow/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-block-yellow" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">E-mail</h3>
                    <p className="text-muted-foreground text-sm">
                      contato@crecheamelia.com.br
                    </p>
                  </div>
                </div>

                <div className="block-card flex items-start gap-4">
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
      <section className="py-12 bg-card">
        <div className="container-custom">
          <div className="rounded-2xl overflow-hidden shadow-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14828.731234567890!2d-50.8933!3d-22.2364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94912345678901234%3A0x1234567890abcdef!2sRancharia%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890123"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Creche Amélia"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contato;
