import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";
import { Heart, Target, Shield, Users, Award, Clock, Sun } from "lucide-react";
import heroImage from "@/assets/hero-creche.jpg";
import logoPrefeitura from "@/assets/logo-prefeitura.webp";
import { getInstitutionYears } from "@/lib/institution";
import { fetchInstitutionContent, groupTeamByArea, initialTeam, type TeamMember } from "@/lib/team";
import { useEffect, useState } from "react";

const institutionYears = getInstitutionYears();

const values = [
  {
    icon: Heart,
    title: "Amor e Acolhimento",
    description: "Cada criança é recebida com carinho e tratada como um membro da nossa família.",
  },
  {
    icon: Target,
    title: "Autonomia e Desenvolvimento",
    description: "Buscamos a autonomia e o desenvolvimento pessoal e social de cada criança.",
  },
  {
    icon: Shield,
    title: "Segurança em Primeiro Lugar",
    description: "Ambiente seguro e monitorado para tranquilidade dos pais e bem-estar das crianças.",
  },
  {
    icon: Users,
    title: "Rede de Apoio Familiar",
    description: "Mais do que um lugar de cuidado, somos uma rede de apoio para as famílias.",
  },
  {
    icon: Award,
    title: `${institutionYears} Anos de Tradição`,
    description: "Desde 1969, mantendo nosso foco no cuidado e educação infantil de qualidade.",
  },
  {
    icon: Clock,
    title: "Dedicação Integral",
    description: "Atendimento em período integral com atenção individualizada para cada criança.",
  },
];

const features = [
  "Salas climatizadas e bem ventiladas",
  "Banheiros adaptados para crianças",
  "Cozinha industrial equipada",
  "Área verde e pátio coberto",
  "Sistema de segurança e monitoramento",
  "Acessibilidade para pessoas com deficiência",
  "Fraldário e lactário equipados",
  "Espaço para eventos e apresentações",
];

const Sobre = () => {
  const [equipe, setEquipe] = useState<TeamMember[]>(initialTeam);

  useEffect(() => {
    fetchInstitutionContent()
      .then((data) => {
        if (data.equipe.length > 0) setEquipe(data.equipe);
      })
      .catch(() => undefined);
  }, []);

  const equipePorArea = groupTeamByArea(equipe);

  return (
    <Layout>
      <section className="relative py-20 bg-primary/5 border-b border-primary/10">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block mb-4 px-4 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary">
              Educação infantil de qualidade
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Sobre a <span className="text-primary">Creche Amélia</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground">
              Há <strong>{institutionYears} anos</strong> cuidando, educando e acolhendo as crianças de
              <strong> Rancharia/SP</strong> com amor, responsabilidade e dedicação.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold mb-6">Nossa História</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  A Creche Berçário Espírita de Rancharia "Amélia Teixeira Lins" foi fundada em
                  26 de janeiro de 1969 por Walter Haddad, Nicola Rossi, Américo Fabris, Diogo
                  Januário da Silva e Dionísio Trettel. O grupo se mobilizou para acolher as
                  crianças de mães que precisavam trabalhar e não tinham onde deixá-las.
                </p>
                <p>
                  Amélia Teixeira Lins, filha de João Teixeira Lúcio e Maria Inês Mendoncio,
                  nasceu em 15 de junho de 1890, em Correntes, Pernambuco. Casou-se com José
                  Severo Lins e faleceu em 18 de fevereiro de 1962.
                </p>
                <p>
                  Em 1936, Amélia e José chegaram a Rancharia, onde estabeleceram o comércio
                  Casa Santo Antônio. De caráter firme e dinâmico, Amélia teve treze filhos e
                  criou nove deles.
                </p>
                <p>
                  Entre seus filhos estava o ex-prefeito Manoel Severo Lins, que contribuiu para
                  a construção da creche e para a aquisição de seus móveis, com recursos da
                  Prefeitura e também próprios.
                </p>
                <p>
                  A Sociedade Espírita Ranchariense sugeriu que a creche recebesse o nome da
                  matriarca, em reconhecimento à sua caridade e acolhida às pessoas pobres. A
                  homenagem orgulha a família até hoje e mantém viva uma parte importante da
                  história de Rancharia.
                </p>
                <p>
                  Desde 2012, a creche deixou de fazer parte da Secretaria da Assistência Social
                  e, em parceria com a Secretaria Municipal de Educação, assumiu o compromisso
                  de investir na melhoria do atendimento e na qualidade da educação infantil.
                  Há {institutionYears} anos, a entidade atende a comunidade na primeira etapa da
                  educação básica, com atividades voltadas aos aspectos físicos, psicológicos,
                  intelectuais e sociais, complementando a ação da família e da comunidade.
                </p>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-card">
              <img src={heroImage} alt="Creche Amélia" className="w-full h-[400px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-muted border-y border-border">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">

            <div className="text-center md:text-right max-w-lg">
              <h3 className="text-lg font-extrabold text-foreground mb-1">
                Parceria Institucional
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Trabalhamos em convênio com a <strong>Prefeitura Municipal de Rancharia</strong>,
                uma parceria fundamental para garantir a gratuidade e a excelência
                do atendimento oferecido às nossas crianças.
              </p>
            </div>

            <div className="hidden md:block w-px h-16 bg-border"></div>

            <div className="flex-shrink-0 grayscale-[30%] hover:grayscale-0 transition-all duration-500">
              <img
                src={logoPrefeitura}
                alt="Logo Prefeitura de Rancharia"
                className="h-16 md:h-20 w-auto object-contain"
              />
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="block-card border-l-4 border-primary bg-card">
              <h3 className="font-display text-2xl font-bold mb-4 text-primary">Nossa Missão</h3>
              <p className="text-muted-foreground">
                Realizar um trabalho de caráter educativo, buscando a autonomia e o desenvolvimento
                pessoal e social da criança através das ações voltadas para o desenvolvimento social
                e cultural com vagas oferecidas gratuitamente, sem distinção de raça, cor, sexo,
                credo religioso ou qualquer outra forma de discriminação, não tendo caráter político
                e nem finalidade lucrativa.
              </p>
            </div>
            <div className="block-card border-l-4 border-block-blue bg-card">
              <h3 className="font-display text-2xl font-bold mb-4 text-block-blue">O Que Nos Torna Especiais</h3>
              <p className="text-muted-foreground">
                Nossa creche é especial porque aqui, cada criança é vista em sua individualidade,
                recebendo o afeto e a segurança necessários para que se sinta encorajada a explorar
                o mundo. O desenvolvimento emocional da criança caminha lado a lado com a segurança
                física e a nutrição de qualidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <SectionHeader
            title="Nossos Valores"
            subtitle="Os princípios que guiam nossa atuação diária no cuidado e educação das crianças."
            colorAccent="green"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div key={value.title} className="block-card animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container-custom">
          <SectionHeader
            title="Nossa Equipe"
            subtitle="Profissionais dedicados ao cuidado e desenvolvimento das nossas crianças."
            colorAccent="blue"
          />

          <div className="space-y-10">
            {equipePorArea.map((grupo) => (
              <div key={grupo.area}>
                <h3 className="font-display text-xl font-bold mb-4 text-primary">{grupo.area}</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {grupo.membros.map((membro, index) => (
                    <div
                      key={membro.nome}
                      className="block-card text-center animate-fade-in p-4"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      {membro.foto ? (
                        <img src={membro.foto} alt={membro.nome} className="w-14 h-14 rounded-full object-cover mx-auto mb-3" />
                      ) : (
                        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                          <Users size={24} className="text-primary" />
                        </div>
                      )}
                      <h4 className="font-display text-base font-bold mb-1">{membro.nome}</h4>
                      <p className="text-muted-foreground text-xs">{membro.cargo}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-block-yellow">
        <div className="container-custom">
          <div className="mx-auto text-center">
            <Sun size={36} className="text-foreground dark:text-white mb-4 mx-auto" />
            <h2 className="font-display text-3xl font-bold text-foreground dark:text-white mb-4">
              Diferenciais da Nossa Estrutura
            </h2>
            <p className="text-foreground/90 dark:text-white/90 mb-8">
              Instalações pensadas para o bem-estar e desenvolvimento das crianças.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div
                key={feature}
                className="flex items-center gap-3 bg-card p-4 rounded-xl shadow-soft animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-3 h-3 rounded-full bg-block-green flex-shrink-0" />
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sobre;
