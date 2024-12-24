import Link from "next/link";
import { Facebook, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <div className="flex flex-col bg-primary text-white p-6 gap-8">
      <div className="flex flex-row justify-stretch md:justify-between gap-12 border-b border-gray-700 pb-8">
        {/* Section Logo et Description */}
        <div className="flex flex-col gap-4 max-w-md">
          <div className="text-lg md:text-3xl font-bold">
            <Link href="/" className="hover:text-gray-300 dark:text-gray-800 transition-colors">
              BLUE ONG CI
            </Link>
          </div>
          <div className="text-gray-300 dark:text-gray-800 text-sm leading-relaxed">
          Blue est une organisation non gouvernementale à but non lucratif de jeunes passionné(e)s, qui œuvre pour la protection de l&apos;environnement à travers la lutte contre la pollution plastique de la mer. 
          </div>
        </div>

        {/* Section Services */}
        <div className="hidden md:flex md:flex-col gap-3">
          <h3 className="text-lg font-semibold mb-2 dark:text-gray-800">Informations</h3>
          <Link
            href="/"
            className="text-gray-300 dark:text-gray-800 hover:text-white transition-colors"
          >
            Services
          </Link>
          <Link
            href="/"
            className="text-gray-300 dark:text-gray-800 hover:text-white transition-colors"
          >
            Equipes
          </Link>
          <Link
            href="/"
            className="text-gray-300 dark:text-gray-800 hover:text-white transition-colors"
          >
            Actualités
          </Link>
          <Link
            href="/"
            className="text-gray-300 dark:text-gray-800 hover:text-white transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Section Contact */}
        <div className="hidden md:flex md:flex-col gap-4">
          <h3 className="text-lg font-semibold mb-2 dark:text-gray-800">Contact</h3>
          <div className="flex flex-col gap-3 text-gray-300 dark:text-gray-800">
            <div className="flex flex-col">
              <span className="text-white dark:text-black font-semibold">Téléphone :</span>
              <span>(+225) 07 78 06 09 61</span>
              <span>(+225) 07 09 61 13 41</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white dark:text-black font-semibold">Adresse :</span>
              <span>ABIDJAN, CÔTE D&apos;IVOIRE</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white dark:text-black font-semibold">Email :</span>
              <span>blue@bluemakers.net</span>
            </div>
          </div>
        </div>

        {/* Section Réseaux Sociaux */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold mb-2 dark:text-gray-800">Suivez-nous</h3>
          <div className="flex flex-wrap md:flex-col gap-4 items-center">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <Facebook className="w-6 h-6 text-white hover:text-gray-300" />
            </Link>
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <Linkedin className="w-6 h-6 text-white hover:text-gray-300" />
            </Link>
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <Instagram className="w-6 h-6 text-white hover:text-gray-300" />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-sm text-center text-gray-300 dark:text-gray-800 pt-4 border-t border-gray-700">
        &copy; 2024 BLUE ONG CI. Tous droits réservés
      </div>
    </div>
  );
}
