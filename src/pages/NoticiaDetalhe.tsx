import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Calendar, ArrowLeft, Share2, ChevronLeft, ChevronRight } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { fetchPublicNewsPost, type NewsPost } from "@/lib/news";
import { useSeo } from "@/hooks/useSeo";

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const isEmptyBlock = (element: Element) => {
  const tag = element.tagName.toLowerCase();
  if (!["p", "div", "h1", "h2", "h3", "h4", "h5", "h6"].includes(tag)) return false;
  if (element.querySelector("img, iframe, video, audio, table, ul, ol, blockquote")) return false;
  return !element.textContent?.trim();
};

const normalizeHtml = (content: string) => {
  if (typeof DOMParser === "undefined") return content;

  const parser = new DOMParser();
  const documentHtml = parser.parseFromString(`<div id="news-content-root">${content}</div>`, "text/html");
  const root = documentHtml.getElementById("news-content-root");
  if (!root) return content;

  root.querySelectorAll("script, style").forEach((element) => element.remove());

  root.querySelectorAll("*").forEach((element) => {
    Array.from(element.attributes).forEach((attribute) => {
      const name = attribute.name.toLowerCase();
      const value = attribute.value.trim().toLowerCase();

      if (name.startsWith("on")) element.removeAttribute(attribute.name);
      if ((name === "href" || name === "src") && value.startsWith("javascript:")) {
        element.removeAttribute(attribute.name);
      }
    });
  });

  root.querySelectorAll("h1,h2,h3,h4,h5,h6").forEach((heading) => {
    const figures = Array.from(heading.querySelectorAll("figure"));
    figures.reverse().forEach((figure) => heading.after(figure));
  });

  Array.from(root.childNodes).forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE && node.textContent?.trim()) {
      const paragraph = documentHtml.createElement("p");
      paragraph.textContent = node.textContent;
      node.replaceWith(paragraph);
      return;
    }

    if (node instanceof HTMLElement && node.tagName.toLowerCase() === "span") {
      const paragraph = documentHtml.createElement("p");
      paragraph.innerHTML = node.outerHTML;
      node.replaceWith(paragraph);
    }
  });

  root.querySelectorAll("p,div,h1,h2,h3,h4,h5,h6").forEach((element) => {
    if (isEmptyBlock(element)) element.remove();
  });

  return root.innerHTML;
};

const contentToHtml = (content: string) => {
  if (!content) return "";
  if (/<[a-z][\s\S]*>/i.test(content)) return normalizeHtml(content);

  return content
    .split(/\n{2,}/)
    .map((paragraph) => `<p>${escapeHtml(paragraph).replace(/\n/g, "<br>")}</p>`)
    .join("");
};

const NoticiaDetalhe = () => {
  const { id } = useParams();
  const [noticia, setNoticia] = useState<NewsPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    let active = true;
    if (!id) return;
    fetchPublicNewsPost(id)
      .then((post) => { if (active) setNoticia(post); })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, [id]);

  useSeo({
    title: noticia?.titulo,
    description: noticia?.descricao,
    image: noticia?.imagens[0],
    type: "article",
  });

  useEffect(() => {
    if (!noticia || noticia.imagens.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % noticia.imagens.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [noticia]);

  if (loading) {
    return (
      <Layout>
        <div className="flex justify-center items-center min-h-[50vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </Layout>
    );
  }

  if (!noticia) {
    return <Navigate to="/noticias" replace />;
  }

  return (
    <Layout>
      <section className="relative py-16 bg-primary/5 border-b border-primary/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="bg-primary text-primary-foreground text-sm font-semibold px-4 py-1.5 rounded-full">
                {noticia.categoria[0] ?? "Notícias"}
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

      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {noticia.imagens.length > 0 && (
              <div className="relative mb-10 w-full h-64 sm:h-80 md:h-[400px] rounded-2xl overflow-hidden shadow-lg group">
                {noticia.imagens.map((img, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}`}
                  >
                    <img src={img} alt={`${noticia.titulo} - imagem ${idx + 1}`} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                  </div>
                ))}
                {noticia.imagens.length > 1 && (
                  <div className="z-20 relative h-full">
                    <button
                      aria-label="Imagem anterior"
                      onClick={() => setCurrentSlide(currentSlide === 0 ? noticia.imagens.length - 1 : currentSlide - 1)}
                      className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background text-foreground p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 shadow-sm"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      aria-label="Próxima imagem"
                      onClick={() => setCurrentSlide((currentSlide + 1) % noticia.imagens.length)}
                      className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background text-foreground p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 shadow-sm"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {noticia.imagens.map((_, idx) => (
                        <button
                          key={idx}
                          aria-label={`Ir para imagem ${idx + 1}`}
                          aria-current={idx === currentSlide}
                          onClick={() => setCurrentSlide(idx)}
                          className={`transition-all duration-300 rounded-full shadow-sm ${idx === currentSlide ? "bg-background w-8 h-2" : "bg-background/60 w-2 h-2 hover:bg-background/80"}`}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            <div
              className="prose prose-lg dark:prose-invert max-w-none break-words prose-headings:font-display prose-a:text-primary prose-img:rounded-2xl"
              dangerouslySetInnerHTML={{ __html: contentToHtml(noticia.conteudo) }}
            />

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
                      text: noticia.descricao,
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
    </Layout>
  );
};

export default NoticiaDetalhe;
