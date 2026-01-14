import { Link } from "react-router-dom";
import SectionHeader from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-creche.jpg";

const noticias = [
  {
    id: 1,
    titulo: "Festa Junina 2024 foi um Sucesso!",
    resumo: "Nossa tradicional festa junina reuniu famílias e colaboradores em uma celebração cheia de alegria, danças típicas e comidas deliciosas.",
    data: "15/06/2024",
    imagem: heroImage,
  },
  {
    id: 2,
    titulo: "Matrículas Abertas para 2025",
    resumo: "Estamos recebendo inscrições para novas matrículas. Venha conhecer nossa estrutura!",
    data: "01/06/2024",
    imagem: heroImage,
  },
  {
    id: 3,
    titulo: "Dia das Mães Especial",
    resumo: "As crianças prepararam apresentações especiais para homenagear suas mamães.",
    data: "10/05/2024",
    imagem: heroImage,
  },
];

const NewsSection = () => {
  const [destaque, ...outras] = noticias;

  return (
    <section className="py-20 bg-card">
      <div className="container-custom">
        <SectionHeader
          title="Acompanhe as Novidades"
          subtitle="Fique por dentro das últimas notícias e eventos da nossa creche."
          colorAccent="blue"
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Notícia em Destaque */}
          <Link
            to={`/noticias/${destaque.id}`}
            className=" group block bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ">
            <div className="relative h-64 overflow-hidden">
              <img
                src={destaque.imagem}
                alt={destaque.titulo}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />

              <div className=" absolute top-4 left-4 bg-primary/90 backdrop-blur text-primary-foreground px-3 py-1 rounded-full text-xs font-bold shadow-md ">
                Destaque
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                <Calendar size={14} />
                <span>{destaque.data}</span>
              </div>
              <h3 className=" font-display text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors ">
                {destaque.titulo}
              </h3>
              <p className="text-muted-foreground/90 text-sm line-clamp-3">

                {destaque.resumo}
              </p>
              <div className="flex items-center gap-2 text-primary font-semibold text-sm mt-4 group-hover:gap-3 transition-all">
                Ler mais <ArrowRight size={16} />
              </div>
            </div>
          </Link>

          {/* Outras Notícias */}
          <div className="flex flex-col gap-4">
            {outras.map((noticia) => (
              <Link
                key={noticia.id}
                to={`/noticias/${noticia.id}`}
                className=" group flex gap-4 bg-card rounded-xl p-4 shadow-md hover:shadow-lg hover:bg-muted/30 transition-all duration-300"
              >
                <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={noticia.imagem}
                    alt={noticia.titulo}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-muted-foreground text-xs mb-2">
                    <Calendar size={12} />
                    <span>{noticia.data}</span>
                  </div>
                  <h4 className="font-display font-bold text-sm group-hover:text-primary transition-colors line-clamp-2">
                    {noticia.titulo}
                  </h4>
                  <p className="text-muted-foreground text-xs mt-1 line-clamp-2">
                    {noticia.resumo}
                  </p>
                </div>
              </Link>
            ))}

            {/* Botão Ver Todas */}
            <div className="mt-auto pt-4">
              <Button
                variant="secondary"
                className="w-full rounded-xl font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
                asChild
              >
                <Link to="/noticias">
                  Ver Todas as Notícias <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
