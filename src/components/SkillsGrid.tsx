interface Skill {
  name: string;
  icon: string; // Pode ser o link de um ícone ou componente de ícone
  description: string;
}

const skills: Skill[] = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    description: "Biblioteca JavaScript para desenvolver interfaces de usuário interativas e dinâmicas.",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    description: "Linguagem baseada em JavaScript com tipagem estática, facilitando a detecção de erros em grandes projetos.",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    description: "Linguagem de programação usada para criar interatividade e dinamismo em páginas web.",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    description: "Linguagem de programação de alto nível, simples, poderosa e conhecida por sua sintaxe clara.",
  },
  {
    name: "Node.js",
    icon: "https://icongr.am/devicon/nodejs-original.svg?size=128&color=currentColor",
    description: "Ambiente de execução de código JavaScript no lado do servidor.",
  },
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    description: "Linguagem de marcação utilizada para estruturar o conteúdo de páginas web.",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    description: "Linguagem de estilização usada para definir a aparência e o layout de elementos em uma página web.",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    description: "Framework CSS que fornece classe utilitárias com foco em uma estilização moderna.",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    description: "Sistema de gerenciamento de banco de dados relacional (SGBD) de código aberto amplamente usado para armazenar, organizar e administrar grandes volumes de dados.",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    description: "Sistema de banco de dados NoSQL, orientado a documentos e de código aberto, projetado para gerenciar grandes volumes de dados com flexibilidade e escalabilidade.",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    description: "Sistema de controle de versão distribuído com foco em gerenciar alterações no código-fonte.",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    description: "Plataforma de hospedagem de código-fonte e controle de versão baseada no Git.",
  },
];

export const SkillsGrid: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-7">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="dark:bg-white border rounded-lg shadow-lg p-6 hover:scale-110 hover:shadow-xl transition-transform duration-700"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-center mb-2 text-slate-600 dark:text-slate-600">
              {skill.name}
            </h3>
            <p className="text-center font-semibold font-serif text-slate-500 dark:text-slate-500">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
