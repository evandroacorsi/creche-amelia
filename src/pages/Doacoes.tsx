import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";
import { Heart, Gift, Banknote, Package, HandHeart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const formasDoacao = [
  {
    icon: Banknote,
    title: "PIX",
    description: "Faça uma doação via PIX de forma rápida e segura.",
    destaque: "00.000.000/0001-00",
    cor: "bg-block-green/10 text-block-green border-block-green/20",
  },
  {
    icon: Package,
    title: "Doação de Materiais",
    description: "Itens de higiene, materiais pedagógicos, brinquedos e alimentos.",
    destaque: "Entre em contato",
    cor: "bg-block-blue/10 text-block-blue border-block-blue/20",
  },
  {
    icon: HandHeart,
    title: "Voluntariado",
    description: "Doe seu tempo e talento. Precisamos de voluntários em diversas áreas.",
    destaque: "Seja voluntário",
    cor: "bg-block-yellow/10 text-block-yellow border-block-yellow/20",
  },
];

const comoAjudar = [
  "Fraldas descartáveis",
  "Lenços umedecidos",
  "Material de limpeza",
  "Brinquedos educativos",
  "Livros infantis",
  "Material escolar",
  "Alimentos não perecíveis",
  "Roupas infantis",
];

const Doacoes = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 gradient-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-4 border-primary-foreground rounded-3xl rotate-12" />
          <div className="absolute bottom-10 right-10 w-24 h-24 border-4 border-primary-foreground rounded-2xl -rotate-12" />
          <div className="absolute top-1/2 right-1/4 w-16 h-16 border-4 border-primary-foreground rounded-xl rotate-45" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-foreground/20 rounded-3xl mb-6">
              <Heart className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Faça a Diferença na Vida de uma Criança
            </h1>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Sua doação ajuda a manter nossos serviços e proporciona melhores condições 
              de atendimento para as crianças da Creche Amélia.
            </p>
            <Button
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8 h-14 text-base rounded-xl"
              asChild
            >
              <a href="#formas-doacao">
                Quero Doar <ArrowRight className="ml-2" size={20} />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Formas de Doação */}
      <section id="formas-doacao" className="py-20">
        <div className="container-custom">
          <SectionHeader
            title="Como Doar"
            subtitle="Existem diversas formas de contribuir com a nossa causa. Escolha a que melhor se adapta a você."
            colorAccent="red"
          />

          <div className="grid md:grid-cols-3 gap-6">
            {formasDoacao.map((forma, index) => (
              <div
                key={forma.title}
                className={`block-card border-2 ${forma.cor} animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${forma.cor.split(' ')[0]}`}>
                  <forma.icon size={28} className={forma.cor.split(' ')[1]} />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{forma.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{forma.description}</p>
                <div className="pt-4 border-t border-border">
                  <span className="font-mono font-bold text-foreground">{forma.destaque}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dados Bancários */}
      <section className="py-20 bg-card">
        <div className="container-custom">
          <SectionHeader
            title="Dados para Doação"
            subtitle="Informações bancárias para transferência ou depósito."
            colorAccent="blue"
          />

          <div className="max-w-2xl mx-auto">
            <div className="block-card">
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Banco</span>
                  <span className="font-semibold">Banco do Brasil</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Agência</span>
                  <span className="font-semibold">0000-0</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Conta Corrente</span>
                  <span className="font-semibold">00000-0</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">CNPJ</span>
                  <span className="font-semibold">00.000.000/0001-00</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">PIX (CNPJ)</span>
                  <span className="font-semibold font-mono">00000000000100</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-muted-foreground">Titular</span>
                  <span className="font-semibold">Associação Creche Amélia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O que precisamos */}
      <section className="py-20">
        <div className="container-custom">
          <SectionHeader
            title="O Que Mais Precisamos"
            subtitle="Lista de itens que fazem diferença no dia a dia da creche."
            colorAccent="green"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {comoAjudar.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-card p-4 rounded-xl shadow-soft animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <Gift size={20} className="text-primary flex-shrink-0" />
                <span className="font-medium text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-block-red">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">
              Toda Ajuda Faz a Diferença
            </h2>
            <p className="text-primary-foreground/90 mb-8">
              Entre em contato para saber mais sobre como você pode contribuir 
              com a Creche Amélia e fazer parte dessa história de amor e cuidado.
            </p>
            <Button
              size="lg"
              className="bg-primary-foreground text-block-red hover:bg-primary-foreground/90 font-semibold px-8 h-14 text-base rounded-xl"
              asChild
            >
              <Link to="/contato">
                Entre em Contato <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Doacoes;
