import { fetchJson } from "@/lib/api";

export type TeamMember = {
  id: string;
  nome: string;
  cargo: string;
  area: string;
  foto?: string;
};

export type RoutineItem = {
  id: string;
  hora: string;
  atividade: string;
};

export const initialTeam: TeamMember[] = [
  { id: "vivian-dos-santos-fernandes", nome: "Vivian dos Santos Fernandes", cargo: "Diretora Administrativa", area: "Gestão" },
  { id: "giovana-boim-reginato-mingireanov", nome: "Giovana Boim Reginato Mingireanov", cargo: "Coordenadora Pedagógica", area: "Gestão" },
  { id: "noemi-sara-coelho", nome: "Noemi Sara Coelho", cargo: "Professora - Berçário I", area: "Equipe Pedagógica" },
  { id: "larissa-andressa-nunes-dos-santos", nome: "Larissa Andressa Nunes dos Santos", cargo: "Professora - Berçário II", area: "Equipe Pedagógica" },
  { id: "edina-aparecida-correa-de-brito-nunes", nome: "Edina Aparecida Correa de Brito Nunes", cargo: "Professora - Maternal I", area: "Equipe Pedagógica" },
  { id: "leticia-aparecida-neves-da-silva", nome: "Letícia Aparecida Neves da Silva", cargo: "Professora - Maternal II", area: "Equipe Pedagógica" },
  { id: "cristiane-luiza-macedo-mendes", nome: "Cristiane Luiza Macedo Mendes", cargo: "Professora de Ambiente (SEDUC)", area: "Equipe Pedagógica" },
  { id: "emiliana-da-silva-tasso", nome: "Emiliana da Silva Tasso", cargo: "Professora da Sala de Leitura (SEDUC)", area: "Equipe Pedagógica" },
  { id: "thiago-teletka-lopes", nome: "Thiago Teletka Lopes", cargo: "Professor de Música (SEDUC)", area: "Equipe Pedagógica" },
  { id: "vanessa-rodrigues-polimeno", nome: "Vanessa Rodrigues Polimeno", cargo: "Professora de Educação Física (SEDUC)", area: "Equipe Pedagógica" },
  { id: "kemony-de-oliveira", nome: "Kemony de Oliveira", cargo: "Estagiária (SEDUC)", area: "Apoio Pedagógico" },
  { id: "marina-matiko-morimoto-sardinha", nome: "Marina Matiko Morimoto Sardinha", cargo: "Agente de Organização Escolar", area: "Apoio Pedagógico" },
  { id: "barbara-grilo-gurgel-domingos", nome: "Barbara Grilo Gurgel Domingos", cargo: "Auxiliar de Sala", area: "Apoio Pedagógico" },
  { id: "luciana-alves-da-cruz-cordeiro", nome: "Luciana Alves da Cruz Cordeiro", cargo: "Auxiliar de Sala", area: "Apoio Pedagógico" },
  { id: "karoline-andrade-rosa", nome: "Karoline Andrade Rosa", cargo: "Auxiliar de Cozinha", area: "Serviços" },
  { id: "crislaine-alves-dos-santos", nome: "Crislaine Alves dos Santos", cargo: "Agente de Serviço Escolar (CIOP)", area: "Serviços" },
];

export const initialRoutine: RoutineItem[] = [
  { id: "entrada", hora: "7h30", atividade: "Entrada" },
  { id: "cafe-da-manha", hora: "8h00", atividade: "Café da manhã" },
  { id: "atividades-manha", hora: "8h30", atividade: "Atividades" },
  { id: "frutinha", hora: "9h00", atividade: "Frutinha" },
  { id: "parquinho", hora: "9h30", atividade: "Parquinho" },
  { id: "almoco", hora: "10h30", atividade: "Almoço" },
  { id: "higiene-e-descanso", hora: "11h00", atividade: "Higiene e descanso" },
  { id: "atividades-tarde", hora: "13h30", atividade: "Atividades" },
  { id: "atividade-livre", hora: "14h00", atividade: "Atividade livre" },
  { id: "lanche-da-tarde", hora: "15h00", atividade: "Lanche da tarde" },
  { id: "brincadeira", hora: "15h30", atividade: "Brincadeira/atividade" },
  { id: "saida", hora: "16h00", atividade: "Saída" },
];

export const groupTeamByArea = (team: TeamMember[]) =>
  team.reduce<{ area: string; membros: TeamMember[] }[]>((groups, member) => {
    const group = groups.find((item) => item.area === member.area);
    if (group) group.membros.push(member);
    else groups.push({ area: member.area, membros: [member] });
    return groups;
  }, []);

export async function fetchInstitutionContent() {
  return fetchJson<{ equipe: TeamMember[]; rotina: RoutineItem[] }>("/api/team.php");
}
