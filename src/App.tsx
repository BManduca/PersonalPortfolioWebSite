import { MoonIcon } from "@heroicons/react/24/outline";
import { SunIcon } from "@heroicons/react/24/outline";
import { Gmail } from "@styled-icons/boxicons-logos/Gmail";
import { FaGithub } from "react-icons/fa";
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare";
import { useEffect, useState } from "react";
import { ProjectsGrid } from "./components/ProjectsGrid";
import { SocialLinks } from "./components/SocialLinks";
import { ScrollToTopButton } from "./components/ScrollToTopButton";
import { SkillsGrid } from "./components/SkillsGrid";
import { SectionTransition } from "./components/SectionTransition";
import { Link } from "react-scroll";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// https://www.youtube.com/watch?v=fufgnJopoZc
// https://icongr.am/devicon

export default function App() {
  const navItems = [
    { name: "Início", to: "header" },
    { name: "Sobre mim", to: "about" },
    { name: "Tecnologias", to: "technologies" },
    { name: "Projetos", to: "projects" },
  ];

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [menuOpen, setMenuOpen] = useState(false);
  const email = "brunnomanducarfe@gmail.com";
  const mailto = `mailto:${email}`;

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <>
      <div
        className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}
      >
        {/* Navbar */}
        <nav className="p-6 flex justify-between items-center border-b border-gray-300 dark:border-gray-700">
          <div className="md:hidden">
            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Bars3Icon className={`w-6 h-6 transition-transform duration-300 ${menuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}`} />
            </button>
          </div>
          <img
            className="rounded-[14px] w-12"
            src="/imagens/favicon_bm2.png"
            alt="icon name Brunno Manduca"
          />
          <ul className="hidden md:flex gap-10">
            {navItems.map((item) => (
              <li
                key={item.to}
                className="relative text-2xl font-serif font-semibold hover:scale-105 transition duration-300 ease-in-out after:absolute after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-300 after:to-blue-800 after:left-0 after:bottom-0 after:transition-all after:duration-500 hover:after:w-full"
              >
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition duration-700"
          >
            {darkMode ? (
              <SunIcon className="w-6 h-6 text-yellow-500" />
            ) : (
              <MoonIcon className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </nav>

        {/* Menu Mobile */}
        <div
          className={`fixed inset-x-0 top-0 z-40 transition-transform duration-500 ${
            menuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }`}
        >
          <div className="relative bg-white dark:bg-gray-900 shadow-lg rounded-b-lg border-b border-gray-300 dark:border-gray-700">
            {/* Botão de fechar */}
            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-3 right-3 p-2 text-gray-700 dark:text-gray-300 focus:outline-none"
              aria-label="Close menu"
            >
              <XMarkIcon className={`w-6 h-6 transition-transform duration-500 ease-in-out ${menuOpen ? "rotate-90 scale-100" : "-rotate-75"}`} />
            </button>

            {/* Links do menu */}
            <div className="flex flex-col items-center p-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="text-lg font-semibold cursor-pointer hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onClick={() => setMenuOpen(false)} // Fecha ao clicar em um link
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Header */}
        <SectionTransition>
          <header className="grid grid-cols-1 md:grid-cols-2">
            <div
              className=" p-6 lg:p-24 flex flex-col gap-4 lg:gap-6 items-center"
              id="header"
            >
              <p className="text-2xl lg:text-4xl font-bold font-serif">
                Brunno Manduca
              </p>
              <div className="flex space-x-3">
                <p className="text-xl lg:text-3xl font-bold font-serif">
                  Desenvolvedor
                </p>
                <span className="text-xl lg:text-3xl">💻</span>
              </div>
              <p className="text-xl lg:text-3xl font-bold font-serif">
                Front-end.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/BManduca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-200"
                >
                  <FaGithub className="w-6 h-6 lg:w-7 lg:h-7 hover:scale-125 duration-700" />
                </a>
                <a
                  href="https://www.linkedin.com/in/brunnomanduca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 dark:text-gray-400 hover:text-blue-500 dark:hover:text-gray-400 transition-colors duration-200"
                >
                  <LinkedinSquare className="w-6 h-6 lg:w-8 lg:h-8 hover:scale-125 duration-700" />
                </a>
                <a
                  href={mailto}
                  rel="noopener noreferrer"
                  className="text-red-500 dark:text-gray-400 hover:text-red-400 dark:hover:text-gray-400 transition-colors duration-200"
                >
                  <Gmail className="w-7 h-7 lg:w-8 lg:h-8 hover:scale-125 duration-700" />
                </a>
              </div>
              <div className="flex gap-3">
                <a
                  href="/files/Currículo_Brunno Manduca_do_Prado.pdf"
                  download="CV_Brunno_Manduca.pdf"
                  className="ring-1 border p-3 rounded-xl px-6 hover:bg-blue-500 hover:text-white dark:bg-white dark:text-black dark:hover:bg-gray-500 dark:hover:text-white dark:duration-700 transition duration-700"
                >
                  Download CV
                </a>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <img
                src="/imagens/my_picture.jpg" // Caminho ajustado
                alt="foto perfil Brunno"
                className="rounded-3xl h-[350px] lg:h-[400px] transform transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:translate-x-2"
              />
            </div>
          </header>
        </SectionTransition>

        {/* About */}
        <SectionTransition>
          <div className="w-full px-7 py-6">
            <div className="flex justify-center items-center p-8" id="about">
              <h1 className="text-3xl lg:text-4xl font-bold font-serif">
                Sobre mim
              </h1>
              <hr className="w-1/2 border-t-2 ml-4 border-blue-600 dark:border-sky-500 hidden md:block" />
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <img
                src="/imagens/picart_desenvolvedor_eu2.png"
                className="lg:h-[550px] rounded-3xl transform transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:translate-x-4 hidden md:block"
                alt="Brunno Manduca"
              />
              <div className="p-4 px-2 lg:px-24 flex flex-col gap-5 rounded-3xl">
                <div className="border text-xl font-serif font-bold rounded-2xl p-5">
                  <div className="flex justify-center items-center font-serif text-xl font-bold rounded-2xl p-2">
                    {/* text-4xl font-bold font-serif underline md:underline-none border-b-2 border-blue-600 md:border-none */}
                    {/* text-xl font-bold lg:mr-4 font-serif */}
                    <h2 className="text-xl lg:text-4xl lg:mr-4 font-bold font-serif md:underline-none border-b-2 border-blue-600 md:border-none">
                      Brunno Manduca
                    </h2>
                    <hr className="w-1/4 border-t-2 border-blue-600 dark:border-sky-500 hidden md:block" />
                  </div>
                  <div className="text-sm loading-relaxed">
                    <p className="mt-2">
                      Sou Desenvolvedor Front-end apaixonado pelo que eu faço,
                      com experiência nas seguintes tecnologias:{" "}
                      <span className="font-semibold text-sky-600">
                        React, JavaScript, TypeScript, Python, Tailwind CSS,
                        MySQL, MongoDB, Node.js
                      </span>
                      , entre outras.
                    </p>
                    <p className="mt-4">
                      Como desenvolvedor busco focar em dedicação, organização,
                      perseverança e sempre busco oferecer soluções eficientes e
                      inovadoras, para entregar resultados e aplicações Web
                      modernas e eficientes que venham fazer a diferença na
                      utilização no dia a dia dos clientes e parceiros.
                    </p>
                    <p className="mt-4">
                      Acredito que o sucesso se encontra nos detalhes e, por
                      isso, mantenho um olhar em cada etapa do processo, focando
                      em performance, acessibilidade, responsividade e entre
                      outros aspectos, trazendo assim soluções personalizadas
                      que agreguem valor e impacto.
                    </p>
                  </div>
                </div>
                <div className="border p-5 rounded-2xl">
                  <div className="flex justify-center items-center font-serif text-xl font-bold rounded-2xl p-2">
                    <h2 className="text-xl lg:text-4xl lg:mr-4 font-bold font-serif md:underline-none border-b-2 border-blue-600 md:border-none">
                      Redes
                    </h2>
                    <hr className="w-1/4 border-t-2 border-blue-600 dark:border-sky-500 hidden md:block" />
                  </div>
                  <div className="flex gap-4 p-4 justify-center">
                    <SocialLinks
                      platform="github"
                      url="https://github.com/BManduca"
                    />
                    <SocialLinks
                      platform="linkedin"
                      url="https://www.linkedin.com/in/brunnomanduca/"
                    />
                    <SocialLinks
                      platform="instagram"
                      url="https://www.instagram.com/brunnomanduca"
                    />
                    <SocialLinks platform="gmail" url={email} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionTransition>

        {/* Technologies */}
        <SectionTransition>
          <div className="w-full px-8 py-6">
            <div
              className="flex justify-center items-center p-8"
              id="technologies"
            >
              <h1 className="text-4xl font-bold font-serif">Tecnologias</h1>
              <hr className="w-1/2 border-t-2 ml-4 border-blue-600 dark:border-sky-500 hidden md:block" />
            </div>
            <SkillsGrid />
          </div>
        </SectionTransition>

        {/* Projects */}
        <SectionTransition>
          <div className="w-full px-8 py-6">
            <div className="flex justify-center items-center p-8" id="projects">
              <h1 className="text-4xl font-bold font-serif">Projetos</h1>
              <hr className="w-1/2 border-t-2 ml-4 border-blue-600 dark:border-sky-500 hidden md:block" />
            </div>
            <ProjectsGrid />
          </div>
        </SectionTransition>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-4">
          <div className="container mx-auto flex justify-between items-center flex-col sm:flex-row font-serif">
            <p className="text-center sm:text-left text-sm">
              Copyright &copy; {new Date().getFullYear()}. Todos os direitos
              reservados.
            </p>
            <p className="text-center sm:text-left text-sm mt-2 sm:mt-0">
              Desenvolvido por{" "}
              <a
                href="https://github.com/BManduca"
                className="text-blue-400 hover:text-blue-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Brunno Manduca 🤘
              </a>
            </p>
          </div>
        </footer>
      </div>
      <ScrollToTopButton />
    </>
  );
}
