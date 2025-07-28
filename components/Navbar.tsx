"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg z-50 p-4 flex justify-between items-start">
      {/* Logo à gauche */}
      <Link href="/" className="text-2xl font-bold text-blue-700 dark:text-purple-400">
        Mon Portfolio
      </Link>

      {/* Liens verticaux */}
      <ul className="flex flex-col space-y-4 text-lg font-medium items-end">
        <li>
          <Link href="/about" className="hover:text-blue-500 dark:hover:text-purple-400">
            À propos
          </Link>
        </li>
        <li>
          <Link href="/projects" className="hover:text-blue-500 dark:hover:text-purple-400">
            Projets
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-blue-500 dark:hover:text-purple-400">
            Contact
          </Link>
        </li>

        {/* Bouton thème clair/sombre */}
        <li>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="p-2 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </li>
      </ul>
    </nav>
  );
}
