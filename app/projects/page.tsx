import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projets = [
  {
    id: 1,
    title: "Application Web",
    description: "Une application moderne construite avec Next.js et Tailwind CSS.",
    img: "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227_1280.jpg",
    tech: ["Next.js", "Tailwind", "React"],
    github: "https://github.com/monprofil/projet1",
    demo: "https://monprojet1.vercel.app",
  },
  {
    id: 2,
    title: "Application Mobile",
    description: "Une app mobile performante avec React Native.",
    img: "https://img.freepik.com/photos-gratuite/smartphone-concept-interface-utilisateur_52683-104212.jpg",
    tech: ["React Native", "Expo"],
    github: "https://github.com/monprofil/projet2",
    demo: "https://monprojet2.vercel.app",
  },
  {
    id: 3,
    title: "Dashboard",
    description: "Un tableau de bord interactif et responsive.",
    img: "https://img.freepik.com/vecteurs-libre/modele-tableau-bord-administration-design-plat_23-2147869112.jpg",
    tech: ["Next.js", "Chart.js"],
    github: "https://github.com/monprofil/projet3",
    demo: "https://monprojet3.vercel.app",
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto mt-20 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">Mes Projets</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projets.map(({ id, title, description, img, tech, github, demo }) => (
          <div
            key={id}
            className="border rounded-lg shadow-md hover:shadow-xl transition duration-300 p-4 bg-white dark:bg-gray-800 text-center"
          >
            <Image
              src={img}
              alt={title}
              width={400}
              height={250}
              className="rounded-lg mb-4 transform hover:scale-105 transition"
            />
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-3">{description}</p>
            <div className="flex justify-center gap-2 mb-3">
              {tech.map((t) => (
                <span
                  key={t}
                  className="text-sm bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex justify-center gap-4">
              <a
                href={github}
                target="_blank"
                className="flex items-center gap-2 text-blue-600 hover:underline"
              >
                <FaGithub /> Code
              </a>
              <a
                href={demo}
                target="_blank"
                className="flex items-center gap-2 text-green-600 hover:underline"
              >
                <FaExternalLinkAlt /> Démo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
