import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";
import { Calendar, ArrowLeft, Share2 } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
  },
  {
    id: 2,
    titulo: "Prestação de Contas 2024",
    resumo: "Disponibilizamos o relatório completo de atividades e prestação de contas referente ao ano de 2024.",
    conteudo: `Em consonância com nosso compromisso de transparência, disponibilizamos o relatório completo de atividades e prestação de contas referente ao ano de 2024.

O documento apresenta detalhadamente:

• Balanço financeiro do exercício
• Relatório de atividades pedagógicas realizadas
• Investimentos em infraestrutura
• Número de crianças atendidas
• Parcerias e convênios mantidos

Acesse a página de Transparência para baixar o documento completo ou entre em contato conosco para mais informações.

A prestação de contas é um compromisso da nossa instituição com a sociedade e com as famílias que confiam seus filhos aos nossos cuidados.`,
    data: "05/01/2025",
    categoria: "Transparência",
    cor: "bg-block-blue",
  },
  {
    id: 3,
    titulo: "Matrículas Abertas para 2025",
    resumo: "Estão abertas as matrículas para o ano letivo de 2025. Vagas limitadas para todas as turmas.",
    conteudo: `Estão abertas as matrículas para o ano letivo de 2025 na Creche Berçário Amélia Teixeira Lins!

Oferecemos atendimento gratuito para crianças de 4 meses a 3 anos e 11 meses, em período integral.

Documentos necessários para matrícula:
• Certidão de nascimento (cópia)
• RG e CPF dos responsáveis (cópia)
• Comprovante de residência atualizado
• Carteira de vacinação atualizada
• Foto 3x4 da criança
• Comprovante de renda familiar

As vagas são limitadas e a prioridade é dada às famílias em situação de vulnerabilidade social.

Para mais informações ou agendamento de visita, entre em contato pelo WhatsApp (18) 99787-6081 ou presencialmente na Rua Allan Kardec, nº 778, Vila Righeti.`,
    data: "15/12/2024",
    categoria: "Matrículas",
    cor: "bg-block-green",
  },
  {
    id: 4,
    titulo: "Projeto de Leitura - Resultados",
    resumo: "Confira os resultados do nosso projeto de incentivo à leitura realizado durante o segundo semestre.",
    conteudo: `Com grande satisfação, apresentamos os resultados do Projeto de Leitura desenvolvido durante o segundo semestre de 2024.

O projeto teve como objetivo estimular o gosto pela leitura desde a primeira infância, através de atividades lúdicas e interativas.

Destaques do projeto:
• Mais de 200 livros lidos pelas turmas
• Contação de histórias semanais
• Visita da biblioteca itinerante
• Confecção de livrinhos pelas crianças
• Apresentações teatrais baseadas em histórias

O envolvimento das famílias foi fundamental para o sucesso do projeto, com a participação ativa na leitura em casa e nas atividades propostas.

Agradecemos a todos que contribuíram para este lindo trabalho!`,
    data: "10/12/2024",
    categoria: "Pedagógico",
    cor: "bg-block-orange",
  },
  {
    id: 5,
    titulo: "Formatura da Turma 2024",
    resumo: "Celebramos a formatura das crianças que seguirão para o ensino fundamental. Parabéns aos nossos formandos!",
    conteudo: `Foi com muita emoção que celebramos a formatura da turma 2024 da Creche Amélia Teixeira Lins!

A cerimônia aconteceu no dia 15 de dezembro, reunindo familiares, equipe pedagógica e toda a comunidade escolar para celebrar esta conquista tão especial.

Os pequenos formandos, que passarão para a próxima etapa da educação básica, apresentaram números musicais e receberam seus certificados com muito orgulho.

Parabenizamos todas as crianças pelo esforço e dedicação, e agradecemos às famílias pela confiança depositada em nossa instituição durante esses anos tão importantes de formação.

Desejamos muito sucesso na nova jornada escolar!`,
    data: "05/12/2024",
    categoria: "Eventos",
    cor: "bg-block-red",
  },
  {
    id: 6,
    titulo: "Novo Playground Inaugurado",
    resumo: "Com alegria anunciamos a inauguração do nosso novo playground, com brinquedos modernos e seguros.",
    conteudo: `É com grande alegria que anunciamos a inauguração do nosso novo playground!

O espaço foi completamente reformado e agora conta com:
• Brinquedos modernos e coloridos
• Piso emborrachado de segurança
• Área sombreada para conforto das crianças
• Equipamentos adequados para diferentes faixas etárias

A reforma foi possível graças às doações recebidas ao longo do ano e ao apoio da comunidade e parceiros.

O novo playground proporciona às crianças um ambiente seguro e estimulante para brincadeiras ao ar livre, fundamentais para o desenvolvimento motor e social.

Agradecemos a todos que contribuíram para esta conquista!`,
    data: "20/11/2024",
    categoria: "Estrutura",
    cor: "bg-block-yellow",
  },
];

const NoticiaDetalhe = () => {
  const { id } = useParams();
  const noticia = noticias.find((n) => n.id === Number(id));

  if (!noticia) {
    return <Navigate to="/noticias" replace />;
  }

  return (
    <Layout>
      {/* Hero */}
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

      {/* Conteúdo */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {noticia.conteudo.split('\n\n').map((paragrafo, index) => (
                <p key={index} className="text-muted-foreground mb-4 leading-relaxed">
                  {paragrafo}
                </p>
              ))}
            </div>

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

      {/* Outras Notícias */}
      <section className="py-16 bg-card">
        <div className="container-custom">
          <h2 className="font-display text-2xl font-bold mb-8 text-center">Outras Notícias</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {noticias
              .filter((n) => n.id !== noticia.id)
              .slice(0, 3)
              .map((outraNoticia) => (
                <Link
                  to={`/noticias/${outraNoticia.id}`}
                  key={outraNoticia.id}
                  className="block-card group"
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
      </section>
    </Layout>
  );
};

export default NoticiaDetalhe;
