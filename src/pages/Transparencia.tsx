import Layout from "@/components/layout/Layout";
import { FileText, Calendar, Building2, Eye, Scale, BookOpen, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const diretoria = [
  { cargo: "Presidente", nome: "A definir", destaque: true },
  { cargo: "Vice-Presidente", nome: "A definir" },
  { cargo: "1º Secretário", nome: "A definir" },
  { cargo: "2º Secretário", nome: "A definir" },
  { cargo: "1º Tesoureiro", nome: "A definir" },
  { cargo: "2º Tesoureiro", nome: "A definir" },
];

const documentos = [
  {
    categoria: "Documentos Institucionais",
    icon: Building2,
    items: [
      { nome: "Estatuto Social", data: "2024" },
      { nome: "Regimento Interno", data: "2024" },
      { nome: "Certidão de Regularidade Fiscal", data: "2024" },
      { nome: "Cartão CNPJ", data: "2026", link: "/CNPJ Creche.pdf" },
    ],
  },
  {
    categoria: "Prestação de Contas",
    icon: FileText,
    items: [
      { nome: "Relatório Anual 2024", data: "Jan/2025" },
      { nome: "Relatório Anual 2023", data: "Jan/2024" },
      { nome: "Balanço Patrimonial 2024", data: "Dez/2024" },
      { nome: "Demonstrativo de Receitas e Despesas 2024", data: "Dez/2024" },
    ],
  },
  {
    categoria: "Convênios e Parcerias",
    icon: Calendar,
    items: [
      { nome: "Termo de Convênio Municipal", data: "2024" },
      { nome: "Plano de Trabalho", data: "2024" },
      { nome: "Relatório de Execução", data: "2024" },
    ],
  },
];

const Transparencia = () => {
  return (
    <Layout>
      <section className="relative py-20 bg-primary/5 border-b border-primary/10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-8 left-12 w-10 h-10 bg-primary/10 rounded-xl rotate-6" />
          <div className="absolute bottom-10 right-12 w-6 h-6 bg-primary/10 rounded-full" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block mb-4 px-4 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary">
              Compromisso institucional
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              <span className="text-primary">Transparência</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-muted-foreground">
              Compromisso com a transparência e a prestação de contas à sociedade.
              Acesse nossos documentos públicos de forma clara e responsável.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background border-b border-primary/5">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Scale className="text-primary" size={32} />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Fundamentação Legal
              </h2>
            </div>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6 rounded-full" />
            <p className="text-muted-foreground max-w-3xl mx-auto text-center leading-relaxed">
              Nossa instituição atua em estrita conformidade com a legislação brasileira, garantindo a publicidade e a transparência na aplicação dos recursos públicos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-card border-l-4 border-l-primary shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-secondary/50 rounded-lg">
                    <Info className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-primary">Lei de Acesso à Informação</h3>
                </div>
                <p className="text-sm font-bold text-foreground mb-2">Lei nº 12.527/2011</p>
                <p className="text-muted-foreground text-justify text-sm leading-relaxed mb-0">
                  Esta lei aplica-se às entidades privadas sem fins lucrativos que recebem recursos públicos. Em cumprimento a este dispositivo, tornamos público o acesso às informações sobre o recebimento e destinação de tais recursos.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-l-4 border-l-primary shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <BookOpen className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-primary">Marco Regulatório (MROSC)</h3>
                </div>
                <p className="text-sm font-bold text-foreground mb-2">Lei nº 13.019/2014</p>
                <p className="text-muted-foreground text-justify text-sm leading-relaxed mb-0">
                  Estabelece o regime jurídico das parcerias entre a administração pública e as organizações da sociedade civil, exigindo total transparência nas parcerias celebradas e na execução dos planos de trabalho.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary/5">
        <div className="container-custom">
          <div className="space-y-14">
            {documentos.map((categoria) => (
              <div key={categoria.categoria}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-card shadow-sm flex items-center justify-center">
                    <categoria.icon size={24} className="text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">
                    {categoria.categoria}
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {categoria.items.map((doc, index) => (
                    <div
                      key={doc.nome}
                      className="block-card bg-card p-4 rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-all flex items-center justify-between gap-4 animate-fade-in"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                          <FileText
                            size={20}
                            className="text-secondary-foreground"
                          />
                        </div>

                        <div>
                          <h3 className="font-semibold text-foreground">
                            {doc.nome}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {doc.data}
                          </p>
                        </div>
                      </div>

                      {doc.link ? (
                        <Button
                          variant="outline"
                          size="sm"
                          className="rounded-lg flex-shrink-0 border-primary/20 hover:bg-primary/10"
                          asChild
                        >
                          <a
                            href={doc.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Eye size={16} className="mr-2 text-primary" />
                            <span className="text-primary">Visualizar</span>
                          </a>
                        </Button>
                      ) : (
                        <Button
                          variant="ghost"
                          size="sm"
                          disabled
                          className="rounded-lg flex-shrink-0 opacity-50"
                        >
                          <Eye size={16} className="mr-2" />
                          Em breve
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Transparencia;
