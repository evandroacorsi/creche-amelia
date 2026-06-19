import { useState, useRef, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Eye, ArrowRight, ImageOff, Newspaper, Search } from "lucide-react";
import { NavLink, useParams } from "react-router-dom";
import {
  fetchPublicNews,
  filterNews,
  getNewsCategories,
  findCategoryBySlug,
  type NewsSummary,
} from "@/lib/news";
import { useSeo } from "@/hooks/useSeo";

const formatarData = (data: string) => {
  if (!data) return "";
  const parsed = new Date(`${data}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return data;
  return parsed.toLocaleDateString("pt-BR");
};

const ImageWithLoading = ({ src, alt }: { src?: string; alt: string }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

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

      {error || !secureSrc ? (
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-muted text-muted-foreground z-20">
          <ImageOff className="h-8 w-8 mb-2 opacity-50" />
          <span className="text-xs">Imagem indisponível</span>
        </div>
      ) : (
        <img
          ref={imgRef}
          src={secureSrc}
          alt={alt}
          loading="lazy"
          decoding="async"
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

const Noticias = () => {
  const { categorySlug } = useParams();
  const [posts, setPosts] = useState<NewsSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoriaFiltro, setCategoriaFiltro] = useState("");

  useSeo({
    title: "Notícias e Novidades",
    description: "Fique por dentro de tudo o que acontece na Creche Amélia. Eventos, atividades, comunicados e prestações de contas.",
  });

  useEffect(() => {
    fetchPublicNews()
      .then((data) => setPosts(data))
      .finally(() => setLoading(false));
  }, []);

  const categorias = getNewsCategories(posts);

  useEffect(() => {
    if (categorySlug) {
      setCategoriaFiltro(findCategoryBySlug(categorias, categorySlug) || "");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categorySlug, posts]);

  const filteredNoticias = filterNews(posts, searchTerm, categoriaFiltro || "all");

  const resetFilters = () => {
    setSearchTerm("");
    setCategoriaFiltro("");
  };

  return (
    <Layout>
      <section className="relative py-20 bg-primary/5 border-b border-primary/10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-8 right-12 w-16 h-16 border-2 border-primary/20 rounded-2xl rotate-12" />
          <div className="absolute bottom-10 left-12 w-12 h-12 border-2 border-primary/20 rounded-xl -rotate-12" />
        </div>

        <div className="container-custom relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
            <Newspaper className="w-8 h-8 text-primary" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
            Notícias e <span className="text-primary">Novidades</span>
          </h1>

          <div className="w-24 h-1 bg-primary/20 mx-auto mb-6 rounded-full" />

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Fique por dentro de tudo o que acontece na Creche Amélia.
            Eventos, atividades, comunicados e prestações de contas.
          </p>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container-custom">

          <div className="bg-card p-4 rounded-2xl border border-border shadow-sm mb-12">
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <div className="relative w-full md:w-1/3">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Buscar por título ou assunto..."
                  className="pl-10 h-11 rounded-xl bg-background border-border focus:bg-background transition-all"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <select
                className="h-11 px-4 rounded-xl border border-border bg-background text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all w-full md:w-1/4 cursor-pointer"
                value={categoriaFiltro}
                onChange={(e) => setCategoriaFiltro(e.target.value)}
              >
                <option value="">Todas categorias</option>
                {categorias.map((categoria) => (
                  <option key={categoria} value={categoria}>
                    {categoria}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center h-64 text-center text-muted-foreground">
              <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-primary mb-4"></div>
              <p>Carregando notícias...</p>
            </div>
          ) : filteredNoticias.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-center text-muted-foreground bg-card rounded-2xl p-8 border border-dashed">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <p className="text-lg mb-2 font-medium text-foreground">Nenhuma notícia encontrada</p>
              <p className="text-sm text-muted-foreground mb-6">Tente limpar os filtros ou buscar por outro termo.</p>
              <Button onClick={resetFilters} variant="outline" className="border-primary/20 text-primary hover:bg-primary/5">
                Limpar Filtros
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNoticias.map((noticia) => (
                <Card key={noticia.id} className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col border-border/60 overflow-hidden bg-card">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-3 gap-2">
                      <div className="flex flex-wrap gap-1">
                        {noticia.categoria.map((cat) => (
                          <Badge key={cat} variant="secondary" className="border-none px-3 py-1 font-semibold">
                            {cat}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center text-muted-foreground text-xs font-medium shrink-0">
                        <Eye className="h-3 w-3 mr-1 text-primary/60" />
                        {noticia.visualizacoes}
                      </div>
                    </div>

                    <CardTitle className="text-xl font-bold leading-tight text-foreground line-clamp-2 min-h-[3.5rem] group-hover:text-primary transition-colors">
                      {noticia.titulo}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col pt-0">
                    {noticia.imagem[0] ? (
                      <ImageWithLoading src={noticia.imagem[0]} alt={noticia.titulo} />
                    ) : (
                      <div className="w-full h-32 mb-4 rounded-xl bg-gradient-to-br from-muted to-muted/50 border border-border flex items-center justify-center">
                        <Newspaper className="text-muted-foreground/40 h-10 w-10" />
                      </div>
                    )}

                    <p className="text-muted-foreground mb-6 line-clamp-3 text-sm leading-relaxed flex-1">
                      {noticia.descricao}
                    </p>

                    <div className="mt-auto border-t border-border pt-4">
                      <div className="flex items-center text-muted-foreground text-xs mb-4">
                        <Calendar className="h-3 w-3 mr-2 text-primary" />
                        {formatarData(noticia.data)}
                      </div>

                      <NavLink to={`/noticias/${noticia.slug || noticia.id}`} className="block w-full">
                        <Button variant="ghost" className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
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
