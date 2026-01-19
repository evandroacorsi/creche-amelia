import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Calendar, ArrowLeft, Share2, ChevronLeft, ChevronRight } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

import bg1 from "@/assets/bg1.png";
import bg2 from "@/assets/bg2.png";
import bg3 from "@/assets/hero-creche.jpg";

// --- DADOS ESTÁTICOS COM ARRAY DE IMAGENS ---
const noticias = [
  {
    id: 1,
    titulo: "Festa Junina 2025 - Venha Participar!",
    resumo: "A tradicional Festa Junina da Creche Amélia acontecerá no dia 28 de junho. Contamos com a presença de toda a família!",
    conteudo: `A tradicional Festa Junina da Creche Amélia Teixeira Lins está chegando e promete ser uma celebração inesquecível!

Neste ano, o evento acontecerá no dia 28 de junho, a partir das 17h, nas dependências da creche. Teremos muitas atrações preparadas com carinho para toda a família:

• Apresentações das crianças com danças típicas
• Barraquinhas de comidas típicas
• Pescaria, correio elegante e outras brincadeiras
• Quadrilha com participação dos pais

A festa é uma oportunidade única de integração entre famílias, equipe e comunidade. Venha celebrar conosco essa tradição tão especial da cultura brasileira!

A entrada é gratuita e os valores arrecadados nas barraquinhas serão revertidos para melhorias na estrutura da creche.

Contamos com a presença de todos!`,
    data: "10/01/2025",
    categoria: "Eventos",
    cor: "bg-block-yellow",
    // Adicione URLs reais aqui. Usando placeholders para demonstração.
    imagens: [
      bg1,
      bg2,
      bg3
    ]
  },
  {
    id: 2,
    titulo: "Prestação de Contas 2024",
    resumo: "Disponibilizamos o relatório completo de atividades e prestação de contas referente ao ano de 2024.",
    conteudo: `Em consonância com nosso compromisso de transparência, disponibilizamos o relatório completo de atividades e prestação de contas referente ao ano de 2024...`, // (Conteúdo abreviado para o exemplo)
    data: "05/01/2025",
    categoria: "Transparência",
    cor: "bg-block-blue",
    imagens: [] // Sem imagens
  },
  {
    id: 3,
    titulo: "Matrículas Abertas para 2025",
    resumo: "Estão abertas as matrículas para o ano letivo de 2025. Vagas limitadas para todas as turmas.",
    conteudo: `Estão abertas as matrículas para o ano letivo de 2025 na Creche Berçário Amélia Teixeira Lins!...`,
    data: "15/12/2024",
    categoria: "Matrículas",
    cor: "bg-block-green",
    imagens: ["https://placehold.co/800x450/22c55e/ffffff?text=Matriculas+Abertas"] // Apenas 1 imagem
  },
  // ... outros itens (mantidos iguais)
  {
    id: 4,
    titulo: "Projeto de Leitura - Resultados",
    resumo: "Confira os resultados do nosso projeto de incentivo à leitura realizado durante o segundo semestre.",
    conteudo: `Com grande satisfação, apresentamos os resultados do Projeto de Leitura desenvolvido durante o segundo semestre de 2024...`,
    data: "10/12/2024",
    categoria: "Pedagógico",
    cor: "bg-block-orange",
    imagens: []
  },
  {
    id: 5,
    titulo: "Formatura da Turma 2024",
    resumo: "Celebramos a formatura das crianças que seguirão para o ensino fundamental. Parabéns aos nossos formandos!",
    conteudo: `Foi com muita emoção que celebramos a formatura da turma 2024 da Creche Amélia Teixeira Lins!...`,
    data: "05/12/2024",
    categoria: "Eventos",
    cor: "bg-block-red",
    imagens: []
  },
  {
    id: 6,
    titulo: "Novo Playground Inaugurado",
    resumo: "Com alegria anunciamos a inauguração do nosso novo playground, com brinquedos modernos e seguros.",
    conteudo: `É com grande alegria que anunciamos a inauguração do nosso novo playground!...`,
    data: "20/11/2024",
    categoria: "Estrutura",
    cor: "bg-block-yellow",
    imagens: []
  }
];

const NoticiaDetalhe = () => {
  const { id } = useParams();
  const noticia = noticias.find((n) => n.id === Number(id));

  // Estado do Carrossel
  const [currentSlide, setCurrentSlide] = useState(0);

  // Lógica de Rotação Automática
  useEffect(() => {
    if (!noticia || !noticia.imagens || noticia.imagens.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % noticia.imagens.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [noticia]);

  if (!noticia) {
    return <Navigate to="/noticias" replace />;
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 bg-primary/5 border-b border-primary/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className={`${noticia.cor} text-primary-foreground text-sm font-semibold px-4 py-1.5 rounded-full`}>
                {noticia.categoria}
              </span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {noticia.titulo}
            </h1>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Calendar size={16} />
              <span>{noticia.data}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">

            {/* --- CARROSSEL DE IMAGENS (Adaptado do Lar) --- */}
            {noticia.imagens && noticia.imagens.length > 0 && (
              <div className="relative mb-10 w-full h-64 sm:h-80 md:h-[400px] rounded-2xl overflow-hidden shadow-lg group">
                {noticia.imagens.map((img, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                      }`}
                  >
                    <img
                      src={img}
                      alt={`${noticia.titulo} - imagem ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {/* Gradiente sutil para melhorar contraste se houver texto sobreposto futuramente */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                  </div>
                ))}

                {/* Botões de navegação e Indicadores (Aparecem só se houver > 1 imagem) */}
                {noticia.imagens.length > 1 && (
                  <div className="z-20 relative h-full">
                    <button
                      onClick={() =>
                        setCurrentSlide(
                          currentSlide === 0
                            ? noticia.imagens.length - 1
                            : currentSlide - 1
                        )
                      }
                      className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 shadow-sm"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>

                    <button
                      onClick={() =>
                        setCurrentSlide((currentSlide + 1) % noticia.imagens.length)
                      }
                      className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 shadow-sm"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>

                    {/* Bolinhas indicadoras */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {noticia.imagens.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentSlide(idx)}
                          className={`transition-all duration-300 rounded-full shadow-sm ${idx === currentSlide
                            ? "bg-white w-8 h-2"
                            : "bg-white/60 w-2 h-2 hover:bg-white/80"
                            }`}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Texto da Notícia */}
            <div className="prose prose-lg max-w-none prose-headings:font-display prose-a:text-primary">
              {noticia.conteudo.split('\n\n').map((paragrafo, index) => (
                <p key={index} className="text-muted-foreground mb-4 leading-relaxed">
                  {paragrafo}
                </p>
              ))}
            </div>

            {/* Ações de Rodapé */}
            <div className="flex flex-col sm:flex-row gap-4 mt-12 pt-8 border-t border-border">
              <Button variant="outline" className="rounded-xl" asChild>
                <Link to="/noticias">
                  <ArrowLeft size={16} className="mr-2" />
                  Voltar para Notícias
                </Link>
              </Button>
              <Button
                variant="outline"
                className="rounded-xl"
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: noticia.titulo,
                      text: noticia.resumo,
                      url: window.location.href,
                    });
                  }
                }}
              >
                <Share2 size={16} className="mr-2" />
                Compartilhar
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Outras Notícias
      <section className="py-16 bg-card border-t border-border/50">
        <div className="container-custom">
          <h2 className="font-display text-2xl font-bold mb-8 text-center">Leia Também</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {noticias
              .filter((n) => n.id !== noticia.id)
              .slice(0, 3)
              .map((outraNoticia) => (
                <Link
                  to={`/noticias/${outraNoticia.id}`}
                  key={outraNoticia.id}
                  className="block-card group hover:-translate-y-1 transition-transform duration-300"
                >
                  <span className={`${outraNoticia.cor} text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full`}>
                    {outraNoticia.categoria}
                  </span>
                  <h3 className="font-display text-lg font-bold mt-3 mb-2 group-hover:text-primary transition-colors">
                    {outraNoticia.titulo}
                  </h3>
                  <p className="text-sm text-muted-foreground">{outraNoticia.data}</p>
                </Link>
              ))}
          </div>
        </div>
      </section> */}
    </Layout>
  );
};

export default NoticiaDetalhe;