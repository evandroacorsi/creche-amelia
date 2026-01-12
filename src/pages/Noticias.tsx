import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const noticias = [
  {
    id: 1,
    titulo: "Festa Junina 2025 - Venha Participar!",
    resumo: "A tradicional Festa Junina da Creche Amélia acontecerá no dia 28 de junho. Contamos com a presença de toda a família!",
    data: "10/01/2025",
    categoria: "Eventos",
    cor: "bg-block-yellow",
  },
  {
    id: 2,
    titulo: "Prestação de Contas 2024",
    resumo: "Disponibilizamos o relatório completo de atividades e prestação de contas referente ao ano de 2024.",
    data: "05/01/2025",
    categoria: "Transparência",
    cor: "bg-block-blue",
  },
  {
    id: 3,
    titulo: "Matrículas Abertas para 2025",
    resumo: "Estão abertas as matrículas para o ano letivo de 2025. Vagas limitadas para todas as turmas.",
    data: "15/12/2024",
    categoria: "Matrículas",
    cor: "bg-block-green",
  },
  {
    id: 4,
    titulo: "Projeto de Leitura - Resultados",
    resumo: "Confira os resultados do nosso projeto de incentivo à leitura realizado durante o segundo semestre.",
    data: "10/12/2024",
    categoria: "Pedagógico",
    cor: "bg-block-orange",
  },
  {
    id: 5,
    titulo: "Formatura da Turma 2024",
    resumo: "Celebramos a formatura das crianças que seguirão para o ensino fundamental. Parabéns aos nossos formandos!",
    data: "05/12/2024",
    categoria: "Eventos",
    cor: "bg-block-red",
  },
  {
    id: 6,
    titulo: "Novo Playground Inaugurado",
    resumo: "Com alegria anunciamos a inauguração do nosso novo playground, com brinquedos modernos e seguros.",
    data: "20/11/2024",
    categoria: "Estrutura",
    cor: "bg-block-yellow",
  },
];

const Noticias = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-16 bg-primary/5 border-b border-primary/10">
        <div className="container-custom">
          <SectionHeader
            title="Notícias e Novidades"
            subtitle="Fique por dentro de tudo que acontece na Creche Amélia. Eventos, atividades, prestações de contas e muito mais."
            centered={true}
            colorAccent="yellow"
            isPageHeader
          />
        </div>
      </section>

      {/* Lista de Notícias */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {noticias.map((noticia, index) => (
              <Link
                to={`/noticias/${noticia.id}`}
                key={noticia.id}
                className="block-card group cursor-pointer animate-fade-in flex flex-col h-full"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className={`${noticia.cor} text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full`}>
                    {noticia.categoria}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {noticia.titulo}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-grow">
                  {noticia.resumo}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={14} />
                    <span>{noticia.data}</span>
                  </div>
                  <span className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Ler mais <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Paginação */}
          <div className="flex justify-center mt-12">
            <Button variant="outline" className="rounded-xl">
              Carregar mais notícias
            </Button>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Noticias;
