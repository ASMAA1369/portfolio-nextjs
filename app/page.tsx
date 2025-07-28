import Image from "next/image";
import '../styles/background.css';  // <-- Import du CSS dynamique

export default function Home() {
  return (
    <main className="dynamic-bg min-h-screen flex flex-col items-center justify-center text-white text-center max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-red-400 mb-6">
        Bienvenue sur mon portfolio !
      </h1>
      <Image
        src="https://img.freepik.com/photos-gratuite/journaliste-mer_23-2148568138.jpg?t=st=1753618609~exp=1753622209~hmac=1af5a02b6636f8225f539255727f013a3fd7dda8d73fd3fc034db60b9fdacff8&w=1480"
        alt="Photo de profil"
        width={200}
        height={200}
        className="rounded-full mx-auto mb-6"
      />
      <div className="text-lg mb-6 max-w-md space-y-4">
  <p>
    Je suis développeuse curieuse et passionnée par le monde du développement web,
    spécialisée dans la création d’applications performantes et intuitives.
  </p>
  <p>
    J’aime concevoir des interfaces modernes côté frontend et développer des
    fonctionnalités robustes côté backend, en veillant toujours à offrir une
    expérience utilisateur optimale.
    Mon expertise couvre les technologies modernes telles que React, Next.js,
    et Tailwind CSS pour le frontend, ainsi que Node.js et Express pour le backend.
    Mon objectif est de transformer des idées en solutions digitales élégantes et efficaces.
  </p>
  <p>
    Chaque projet est pour moi une opportunité d’allier créativité, performance et
    expérience utilisateur.
  </p>
</div>
    </main>
  );
}
