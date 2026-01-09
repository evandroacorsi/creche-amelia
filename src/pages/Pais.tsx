import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";
import { Clock, Calendar, Backpack, AlertCircle, Heart, Phone, Sparkles } from "lucide-react";

const rotina = [
  { hora: "7:00", atividade: "Recepção das crianças" },
  { hora: "7:30", atividade: "Café da manhã" },
  { hora: "8:30", atividade: "Atividades pedagógicas" },
  { hora: "10:00", atividade: "Lanche da manhã" },
  { hora: "10:30", atividade: "Atividades recreativas" },
  { hora: "11:30", atividade: "Almoço" },
  { hora: "12:30", atividade: "Higiene e descanso" },
  { hora: "14:00", atividade: "Atividades pedagógicas" },
  { hora: "15:30", atividade: "Lanche da tarde" },
  { hora: "16:00", atividade: "Atividades livres" },
  { hora: "17:00", atividade: "Saída" },
];

const itensNecessarios = [
  "Mochila identificada com nome",
  "2 trocas de roupa completas",
  "Fraldas (para crianças que usam)",
  "Lenços umedecidos",
  "Pomada para assaduras",
  "Mamadeira ou copo de transição",
  "Bico ou chupeta (se usar)",
  "Cobertor para o soninho",
];

const Pais = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-16 bg-primary/5 border-b border-primary/10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Sparkles className="absolute top-6 right-10 text-block-yellow/20 w-6 h-6" />
          <div className="absolute bottom-6 left-10 w-8 h-8 bg-block-blue/10 rounded-lg rotate-12" />
        </div>
        <div className="container-custom relative z-10">
          <SectionHeader
            title="Informações para Pais"
            subtitle="Tudo o que você precisa saber sobre a rotina, cuidados e parceria entre família e creche."
            centered={true}
            colorAccent="yellow"
            isPageHeader
          />
        </div>
      </section>

      {/* Informações sobre idades */}
      <section className="py-12 bg-card">
        <div className="container-custom">
          <div className="bg-block-blue/10 border-2 border-block-blue/30 rounded-2xl p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-block-blue/20 flex items-center justify-center flex-shrink-0">
              <Heart className="text-block-blue" size={24} />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold mb-2">Idades Atendidas</h3>
              <p className="text-muted-foreground text-sm">
                Atendemos crianças de <strong>4 meses a 3 anos e 11 meses</strong> em período integral, 
                oferecendo berçário, maternal e educação infantil de forma totalmente gratuita. 
                Todas as vagas são oferecidas sem distinção de raça, cor, sexo, credo religioso ou 
                qualquer outra forma de discriminação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rotina */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-block-blue/10 flex items-center justify-center">
                  <Clock size={24} className="text-block-blue" />
                </div>
                <h2 className="font-display text-2xl font-bold">Rotina Diária</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Nossa rotina é organizada para proporcionar um equilíbrio entre 
                atividades pedagógicas, recreativas, alimentação e descanso.
              </p>
              <div className="space-y-3">
                {rotina.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-3 bg-card rounded-lg animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <span className="font-mono font-bold text-primary w-14">{item.hora}</span>
                    <span className="text-muted-foreground">{item.atividade}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-block-green/10 flex items-center justify-center">
                  <Backpack size={24} className="text-block-green" />
                </div>
                <h2 className="font-display text-2xl font-bold">O Que Trazer</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Itens necessários para garantir o conforto e cuidado do seu filho 
                durante a permanência na creche.
              </p>
              <div className="space-y-3">
                {itensNecessarios.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-card rounded-lg animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="w-2 h-2 rounded-full bg-block-green" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compromisso */}
      <section className="py-20 bg-card">
        <div className="container-custom">
          <SectionHeader
            title="Nosso Compromisso com Você"
            subtitle="A parceria entre família e creche é fundamental para o desenvolvimento das crianças."
            colorAccent="red"
          />

          <div className="grid md:grid-cols-3 gap-6">
            <div className="block-card text-center">
              <div className="w-14 h-14 rounded-xl bg-block-red/10 flex items-center justify-center mx-auto mb-4">
                <Heart size={28} className="text-block-red" />
              </div>
              <h3 className="font-display text-xl font-bold mb-2">Cuidado Integral</h3>
              <p className="text-muted-foreground text-sm">
                Cada criança é vista em sua individualidade, recebendo afeto e segurança 
                para explorar o mundo com confiança.
              </p>
            </div>
            <div className="block-card text-center">
              <div className="w-14 h-14 rounded-xl bg-block-blue/10 flex items-center justify-center mx-auto mb-4">
                <Phone size={28} className="text-block-blue" />
              </div>
              <h3 className="font-display text-xl font-bold mb-2">Comunicação Constante</h3>
              <p className="text-muted-foreground text-sm">
                Mantemos os pais sempre informados sobre o desenvolvimento e bem-estar dos filhos.
              </p>
            </div>
            <div className="block-card text-center">
              <div className="w-14 h-14 rounded-xl bg-block-yellow/10 flex items-center justify-center mx-auto mb-4">
                <Calendar size={28} className="text-block-yellow" />
              </div>
              <h3 className="font-display text-xl font-bold mb-2">Rede de Apoio</h3>
              <p className="text-muted-foreground text-sm">
                Mais do que um lugar de cuidado, somos uma rede de apoio familiar 
                para todas as famílias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Aviso */}
      <section className="py-12">
        <div className="container-custom">
          <div className="bg-block-yellow/10 border-2 border-block-yellow/30 rounded-2xl p-6 flex items-start gap-4">
            <AlertCircle className="text-block-yellow flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-display text-lg font-bold mb-2">Importante</h3>
              <p className="text-muted-foreground text-sm">
                Em caso de doença, a criança deve permanecer em casa para sua recuperação 
                e para proteger os coleguinhas. Comunique-nos sempre sobre qualquer 
                alteração na saúde ou rotina do seu filho.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pais;