import type React from "react";
import { FaGithub } from "react-icons/fa";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  github: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Letmeask",
    description:
      "Aplicação web de uma plataforma, aonde os usuários terão o poder de criar salas de perguntas e respostas em tempo real. Desenvolvida com React e SCSS.",
    image: "../public/images/letmeask_project.png",
    link: "https://letmeask-8ff68.web.app/",
    github: "https://github.com/BManduca/nlw6_letmeask_bm"
  },
  {
    id: 2,
    title: "ToDo List",
    description:
      "Aplicação web voltada a auxiliar na criação de TodoList, com foco em organização e execução de tarefas. Desenvolvida com React, TS e CSS.",
    image: "../public/images/todo_list_challenge_project.png",
    link: "https://projectchallengetodolist-mand.vercel.app/",
    github: "https://github.com/BManduca/projects-react-rocketseat/tree/main/ProjectChallengeToDoList"
  },
  {
    id: 3,
    title: "Pomodoro Timer",
    description:
      "Aplicação web para auxiliar na jornada do dia a dia, no intuito de realizar ciclos pomodoros e assim ter um maior aproveitamento do tempo durante as tarefas. Desenvolvida com React, TS e CSS.",
    image: "../public/images/pomodoro_timer_project.png",
    link: "https://projectpomodorotimer-mand.vercel.app/",
    github: "https://github.com/BManduca/projects-react-rocketseat/tree/main/ProjectPomodoroTimer"
  },
  {
    id: 4,
    title: "Coffee Delivery",
    description:
      "Aplicação web de um e-commerce para venda e delivery de cafés. Desenvolvida com React, TS e CSS.",
    image: "../public/images/coffee_delivery_project.png",
    link: "https://projectcoffeedelivery-mand.vercel.app/",
    github: "https://github.com/BManduca/projects-react-rocketseat/tree/main/ProjectChallengeCoffeeDelivery"
  },
];

export const ProjectsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 p-6">
      {projects.map((project, index) => (
        <a
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          key={index}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white shadow-md rounded-lg overflow-hidden transform transition hover:scale-105 dark:text-gray-800 hover:shadow-lg duration-700"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-44 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p>{project.description}</p>
            <div className="flex items-center mt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 hover:scale-125 transition duration-600"
                aria-label={`Github link for ${project.title}`}
              >
                <FaGithub size={20} />
              </a>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};
