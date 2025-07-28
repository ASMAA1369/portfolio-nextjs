import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto mt-20 px-6">
      {/* Titre */}
      <h1 className="text-4xl font-bold text-center mb-6">Contactez-moi</h1>
      <p className="text-lg text-center mb-10 text-gray-700 dark:text-gray-300">
        Vous avez un projet, une question ou envie de collaborer ? N’hésitez pas à me contacter.
      </p>

      {/* Coordonnées + Réseaux sociaux */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
        <div className="text-center space-y-4">
          <p className="text-xl font-semibold">📧 Email</p>
          <a
            href="mailto:monemail@example.com"
            className="flex items-center justify-center gap-2 text-blue-600 dark:text-purple-400 hover:underline"
          >
            <FaEnvelope /> monemail@example.com
          </a>
        </div>

        <div className="text-center space-y-4">
          <p className="text-xl font-semibold">🔗 LinkedIn</p>
          <a
            href="https://linkedin.com/in/monprofil"
            target="_blank"
            className="flex items-center justify-center gap-2 text-blue-600 dark:text-purple-400 hover:underline"
          >
            <FaLinkedin /> linkedin.com/in/monprofil
          </a>
        </div>

        <div className="text-center space-y-4">
          <p className="text-xl font-semibold">💻 GitHub</p>
          <a
            href="https://github.com/monprofil"
            target="_blank"
            className="flex items-center justify-center gap-2 text-blue-600 dark:text-purple-400 hover:underline"
          >
            <FaGithub /> github.com/monprofil
          </a>
        </div>
      </div>

      {/* Formulaire */}
      <form className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md max-w-lg mx-auto mb-12">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Votre nom"
            className="w-full p-3 border rounded dark:bg-gray-700 dark:border-gray-600"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Votre email"
            className="w-full p-3 border rounded dark:bg-gray-700 dark:border-gray-600"
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Votre message"
            rows={4}
            className="w-full p-3 border rounded dark:bg-gray-700 dark:border-gray-600"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded transition"
        >
          Envoyer
        </button>
      </form>

      {/* Google Map */}
      <div className="rounded-lg overflow-hidden shadow-lg max-w-4xl mx-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093046!2d144.95373531531677!3d-37.81627927975159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577e40d2f3b5e0!2sMelbourne%20VIC%2C%20Australie!5e0!3m2!1sfr!2sfr!4v1679611791578!5m2!1sfr!2sfr"
          width="100%"
          height="350"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
