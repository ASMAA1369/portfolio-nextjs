import Image from "next/image";

export default function Home() {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-red-600 mb-6">
        Bienvenue sur mon portfolio !
      </h1>
      <Image
        src="https://img.freepik.com/photos-gratuite/journaliste-mer_23-2148568138.jpg?t=st=1753618609~exp=1753622209~hmac=1af5a02b6636f8225f539255727f013a3fd7dda8d73fd3fc034db60b9fdacff8&w=1480"
        alt="Photo de profil"
        width={200}
        height={200}
        className="rounded-full mx-auto mb-6"
      />
      <p className="text-lg mb-6">
        Je suis développeuse web, passionnée par le développement frontend et backend.
      </p>
    </div>
  );
}
