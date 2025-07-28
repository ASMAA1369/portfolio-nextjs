export default function AboutPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 text-center max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">À propos de moi</h1>

      <p className="text-lg mb-4">
        Développeuse web passionnée et rigoureuse, je combine créativité et expertise technique pour concevoir des applications performantes et intuitives. Forte d’une expérience solide dans les technologies modernes telles que React, Next.js, et Tailwind CSS, ainsi que dans le développement backend avec Node.js et Express, je m’efforce d’apporter des solutions digitales élégantes et efficaces. Mon objectif est de transformer les idées en expériences utilisateur engageantes, tout en respectant les bonnes pratiques et les contraintes techniques.
      </p>

      <p className="text-lg mb-4">
        Je maîtrise React, Next.js, Tailwind CSS, ainsi que Node.js et Express.
      </p>

      <p className="text-lg mb-8">
        N’hésitez pas à visiter mes <a href="/projects" className="text-blue-600 hover:underline">projets</a> ou à <a href="/contact" className="text-blue-600 hover:underline">me contacter</a> !
      </p>
    </main>
  );
}
