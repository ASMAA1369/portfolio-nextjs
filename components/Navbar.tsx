"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Mon Portfolio
        </Link>
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <ul
          className={`md:flex md:items-center md:space-x-6 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <Link href="/" className="block py-2 px-3 hover:text-blue-400 transition">
              Accueil
            </Link>
          </li>
          <li>
            <Link href="/about" className="block py-2 px-3 hover:text-blue-400 transition">
              À propos
            </Link>
          </li>
          <li>
            <Link href="/projects" className="block py-2 px-3 hover:text-blue-400 transition">
              Projets
            </Link>
          </li>
          <li>
            <Link href="/contact" className="block py-2 px-3 hover:text-blue-400 transition">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
