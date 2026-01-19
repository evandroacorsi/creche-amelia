import { useState, useRef, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // Assumindo que você tenha
import { Calendar, Eye, ArrowRight, ImageOff, Newspaper, Search } from "lucide-react";
import { NavLink } from "react-router-dom";

import bg1 from "@/assets/bg1.png";
import bg2 from "@/assets/bg2.png";

// --- DADOS ESTÁTICOS (Mantidos) ---
const noticiasEstaticas = [
  {
    id: 1,
    titulo: "Festa Junina 2025 - Venha Participar!",
    resumo: "A tradicional Festa Junina da Creche Amélia acontecerá no dia 28 de junho. Contamos com a presença de toda a família!",
    data: "10/01/2025",
    categoria: "Eventos",
    imagem: bg1, // Adicione URLs de imagens aqui futuramente
    visualizacoes: 124
  },
  {
    id: 2,
    titulo: "Prestação de Contas 2024",
    resumo: "Disponibilizamos o relatório completo de atividades e prestação de contas referente ao ano de 2024.",
    data: "05/01/2025",
    categoria: "Transparência",
    imagem: bg2,
    visualizacoes: 89
  },
  {
    id: 3,
    titulo: "Matrículas Abertas para 2025",
    resumo: "Estão abertas as matrículas para o ano letivo de 2025. Vagas limitadas para todas as turmas.",
    data: "15/12/2024",
    categoria: "Matrículas",
    imagem: bg1,
    visualizacoes: 450
  },
  {
    id: 4,
    titulo: "Projeto de Leitura - Resultados",
    resumo: "Confira os resultados do nosso projeto de incentivo à leitura realizado durante o segundo semestre.",
    data: "10/12/2024",
    categoria: "Pedagógico",
    imagem: bg2,
    visualizacoes: 76
  },
  {
    id: 5,
    titulo: "Formatura da Turma 2024",
    resumo: "Celebramos a formatura das crianças que seguirão para o ensino fundamental. Parabéns aos nossos formandos!",
    data: "05/12/2024",
    categoria: "Eventos",
    imagem: bg1,
    visualizacoes: 312
  },
  {
    id: 6,
    titulo: "Novo Playground Inaugurado",
    resumo: "Com alegria anunciamos a inauguração do nosso novo playground, com brinquedos modernos e seguros.",
    data: "20/11/2024",
    categoria: "Estrutura",
    imagem: bg2,
    visualizacoes: 198
  },

];

// --- COMPONENTE DE IMAGEM (Do Lar) ---
const ImageWithLoading = ({ src, alt }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const imgRef = useRef(null);

  const secureSrc = src?.includes("https://") ? src : src?.replace("http://", "https://");

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setLoading(false);
    }
  }, []);

  return (
    <div className="relative w-full h-48 mb-4 rounded-md overflow-hidden bg-muted">
      {loading && !error && (
        <div className="absolute inset-0 flex justify-center items-center bg-muted z-10">
          <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-b-4 border-primary"></div>
        </div>
      )}

      {error ? (
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-muted text-muted-foreground z-20">
          <ImageOff className="h-8 w-8 mb-2 opacity-50" />
          <span className="text-xs">Imagem indisponível</span>
        </div>
      ) : (
        <img
          ref={imgRef}
          src={secureSrc}
          alt={alt}
          className={`object-cover w-full h-full transition-opacity duration-500 ${loading ? "opacity-0" : "opacity-100"}`}
          onLoad={() => setLoading(false)}
          onError={() => {
            setLoading(false);
            setError(true);
          }}
        />
      )}
    </div>
  );
};

// --- COMPONENTE PRINCIPAL ---
const Noticias = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoriaFiltro, setCategoriaFiltro] = useState("");

  // Lógica de filtro local (substituindo a API por enquanto)
  const filteredNoticias = noticiasEstaticas.filter((noticia) => {
    const matchesSearch = noticia.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      noticia.resumo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategoria = categoriaFiltro ? noticia.categoria === categoriaFiltro : true;

    return matchesSearch && matchesCategoria;
  });

  const resetFilters = () => {
    setSearchTerm("");
    setCategoriaFiltro("");
  };

  const getCategoriaColor = (categoria) => {
    switch (categoria) {
      case "Eventos": return "bg-block-red/10 text-block-red hover:bg-block-red/20";
      case "Transparência": return "bg-block-blue/10 text-block-blue hover:bg-block-blue/20";
      case "Matrículas": return "bg-block-green/10 text-block-green hover:bg-block-green/20";
      case "Pedagógico": return "bg-block-orange/10 text-block-orange hover:bg-block-orange/20";
      case "Estrutura": return "bg-block-yellow/10 text-block-yellow hover:bg-block-yellow/20";
      default: return "bg-gray-100 text-gray-800 hover:bg-gray-200";
    }
  };

  return (
    <Layout>
      {/* Cabeçalho estilo "Lar" */}
      <section className="relative py-20 bg-primary/5 border-b border-primary/10 overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-8 right-12 w-16 h-16 border-2 border-primary/20 rounded-2xl rotate-12" />
          <div className="absolute bottom-10 left-12 w-12 h-12 border-2 border-primary/20 rounded-xl -rotate-12" />
        </div>

        <div className="container-custom relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
            <Newspaper className="w-8 h-8 text-primary" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Notícias e <span className="text-primary">Novidades</span>
          </h1>

          <div className="w-24 h-1 bg-primary/20 mx-auto mb-6 rounded-full" />

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Fique por dentro de tudo o que acontece na Creche Amélia.
            Eventos, atividades, comunicados e prestações de contas.
          </p>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="py-16 bg-gray-50/50">
        <div className="container-custom">

          {/* Filtros */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mb-12">
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <div className="relative w-full md:w-1/3">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Buscar por título ou assunto..."
                  className="pl-10 h-11 rounded-xl bg-gray-50 border-gray-200 focus:bg-white transition-all"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <select
                className="h-11 px-4 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all w-full md:w-1/4 cursor-pointer"
                value={categoriaFiltro}
                onChange={(e) => setCategoriaFiltro(e.target.value)}
              >
                <option value="">Todas categorias</option>
                <option value="Eventos">Eventos</option>
                <option value="Transparência">Transparência</option>
                <option value="Matrículas">Matrículas</option>
                <option value="Pedagógico">Pedagógico</option>
                <option value="Estrutura">Estrutura</option>
              </select>
            </div>
          </div>

          {/* Grid de Notícias */}
          {filteredNoticias.length === 0 ? (
            // Estado Vazio
            <div className="flex flex-col items-center justify-center h-64 text-center text-muted-foreground bg-white rounded-2xl p-8 border border-dashed">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <p className="text-lg mb-2 font-medium text-gray-900">Nenhuma notícia encontrada</p>
              <p className="text-sm text-gray-500 mb-6">Tente limpar os filtros ou buscar por outro termo.</p>
              <Button onClick={resetFilters} variant="outline" className="border-primary/20 text-primary hover:bg-primary/5">
                Limpar Filtros
              </Button>
            </div>
          ) : (
            // Lista de Cards
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNoticias.map((noticia) => (
                <Card key={noticia.id} className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col border-border/60 overflow-hidden bg-white">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-3">
                      <Badge className={`${getCategoriaColor(noticia.categoria)} border-none px-3 py-1 font-semibold`}>
                        {noticia.categoria}
                      </Badge>

                      <div className="flex items-center text-muted-foreground text-xs font-medium">
                        <Eye className="h-3 w-3 mr-1 text-primary/60" />
                        {noticia.visualizacoes}
                      </div>
                    </div>

                    <CardTitle className="text-xl font-bold leading-tight text-gray-900 line-clamp-2 min-h-[3.5rem] group-hover:text-primary transition-colors">
                      {noticia.titulo}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col pt-0">
                    {/* Renderiza imagem se existir, senão renderiza um placeholder visual sutil */}
                    {noticia.imagem ? (
                      <ImageWithLoading src={noticia.imagem} alt={noticia.titulo} />
                    ) : (
                      // Placeholder bonito se não tiver imagem (opcional, pode remover se preferir card só texto)
                      <div className="w-full h-32 mb-4 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-100 flex items-center justify-center">
                        <Newspaper className="text-gray-200 h-10 w-10" />
                      </div>
                    )}

                    <p className="text-gray-600 mb-6 line-clamp-3 text-sm leading-relaxed flex-1">
                      {noticia.resumo}
                    </p>

                    <div className="mt-auto border-t border-gray-100 pt-4">
                      <div className="flex items-center text-gray-400 text-xs mb-4">
                        <Calendar className="h-3 w-3 mr-2 text-primary" />
                        {noticia.data}
                      </div>

                      <NavLink to={`/noticias/${noticia.id}`} className="block w-full">
                        <Button variant="ghost" className="w-full justify-between group-hover:bg-primary group-hover:text-white transition-all duration-300">
                          Ler notícia completa
                          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </NavLink>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Noticias;