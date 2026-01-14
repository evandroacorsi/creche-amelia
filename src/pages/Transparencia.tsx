import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";
import { FileText, Download, Calendar, Building2, Users, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const diretoria = [
  { cargo: "Presidente", nome: "A definir", destaque: true },
  { cargo: "Vice-Presidente", nome: "A definir", destaque: false },
  { cargo: "1º Secretário", nome: "A definir", destaque: false },
  { cargo: "2º Secretário", nome: "A definir", destaque: false },
  { cargo: "1º Tesoureiro", nome: "A definir", destaque: false },
  { cargo: "2º Tesoureiro", nome: "A definir", destaque: false },
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
      {/* Hero */}
      <section className="relative py-16 bg-primary/5 border-b border-primary/10">
        <div className="container-custom">
          <SectionHeader
            title="Transparência"
            subtitle="Compromisso com a transparência e prestação de contas à sociedade. Acesse nossos documentos públicos."
            centered={true}
            colorAccent="blue"
            isPageHeader
          />
        </div>
      </section>
      {/* Documentos */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid gap-12">
            {documentos.map((categoria) => (
              <div key={categoria.categoria}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <categoria.icon size={24} className="text-primary" />
                  </div>
                  <h2 className="font-display text-2xl font-bold">{categoria.categoria}</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {categoria.items.map((doc, index) => (
                    <div
                      key={doc.nome}
                      className="block-card flex items-center justify-between gap-4 animate-fade-in"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                          <FileText size={20} className="text-secondary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{doc.nome}</h3>
                          <p className="text-sm text-muted-foreground">{doc.data}</p>
                        </div>
                      </div>

                      {/* LÓGICA DO BOTÃO DE DOWNLOAD AQUI */}
                      {/* ... dentro do map dos itens ... */}

                      {/* LÓGICA DE VISUALIZAÇÃO */}
                      {doc.link ? (
                        /* CASO 1: TEM LINK (Arquivo existe) */
                        <Button
                          variant="outline"
                          size="sm"
                          className="rounded-lg flex-shrink-0 cursor-pointer hover:bg-primary/10 border-primary/20"
                          asChild
                        >
                          <a
                            href={doc.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          /* REMOVIDO: o atributo 'download' para não forçar baixar */
                          >
                            {/* ALTERADO: Ícone de olho e texto Visualizar */}
                            <Eye size={16} className="mr-2 text-primary" />
                            <span className="text-primary">Visualizar</span>
                          </a>
                        </Button>
                      ) : (
                        /* CASO 2: NÃO TEM LINK */
                        <Button
                          variant="ghost"
                          size="sm"
                          className="rounded-lg flex-shrink-0 opacity-50"
                          disabled
                        >
                          <Eye size={16} className="mr-2" />
                          Em breve
                        </Button>
                      )}
                      {/* FIM DA LÓGICA */}

                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ... Restante do código ... */}
    </Layout>
  );
};

export default Transparencia;