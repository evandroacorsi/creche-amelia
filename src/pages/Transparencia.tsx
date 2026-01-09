import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";
import { FileText, Download, Calendar, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const documentos = [
  {
    categoria: "Documentos Institucionais",
    icon: Building2,
    items: [
      { nome: "Estatuto Social", data: "2024" },
      { nome: "Regimento Interno", data: "2024" },
      { nome: "Certidão de Regularidade Fiscal", data: "2024" },
      { nome: "CNPJ e Documentação Legal", data: "2024" },
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
                      <Button variant="outline" size="sm" className="rounded-lg flex-shrink-0">
                        <Download size={16} className="mr-2" />
                        Baixar
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Informações Institucionais */}
      <section className="py-20 bg-card">
        <div className="container-custom">
          <SectionHeader
            title="Informações Institucionais"
            subtitle="Dados da entidade mantenedora."
            colorAccent="green"
          />

          <div className="max-w-2xl mx-auto">
            <div className="block-card">
              <div className="grid gap-4">
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Razão Social</span>
                  <span className="font-semibold text-right">Escola de Educação Infantil "Amélia Teixeira Lins"</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Natureza Jurídica</span>
                  <span className="font-semibold text-right">Entidade Filantrópica sem fins lucrativos</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Fundação</span>
                  <span className="font-semibold">26/01/1969</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Município</span>
                  <span className="font-semibold">Rancharia - SP</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-muted-foreground">Endereço</span>
                  <span className="font-semibold text-right">Rua Allan Kardec, nº 778 - Vila Righeti</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Transparencia;
