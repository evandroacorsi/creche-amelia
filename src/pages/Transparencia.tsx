import Layout from "@/components/layout/Layout";
import { FileText, Calendar, Building2, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

/* =========================
   DADOS
========================= */

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

/* =========================
   COMPONENTE
========================= */

const Transparencia = () => {
  return (
    <Layout>
      {/* HERO */}
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

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              <span className="text-primary">Transparência</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-600">
              Compromisso com a transparência e a prestação de contas à sociedade.
              Acesse nossos documentos públicos de forma clara e responsável.
            </p>
          </div>
        </div>
      </section>

      {/* DOCUMENTOS */}
      <section className="py-20">
        <div className="container-custom">
          <div className="space-y-14">
            {documentos.map((categoria) => (
              <div key={categoria.categoria}>
                {/* Título da categoria */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <categoria.icon size={24} className="text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {categoria.categoria}
                  </h2>
                </div>

                {/* Lista de documentos */}
                <div className="grid md:grid-cols-2 gap-4">
                  {categoria.items.map((doc, index) => (
                    <div
                      key={doc.nome}
                      className="block-card flex items-center justify-between gap-4 animate-fade-in"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                          <FileText
                            size={20}
                            className="text-secondary-foreground"
                          />
                        </div>

                        <div>
                          <h3 className="font-semibold text-gray-900">
                            {doc.nome}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {doc.data}
                          </p>
                        </div>
                      </div>

                      {/* Ação */}
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
