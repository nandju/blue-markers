"use client"

import { WordRotate } from "./wordrotate";
import DropdownUI from "./dropdown1";

export default function Hero() {
  return (
    <div className="relative flex items-center justify-between w-full h-[calc(100vh-100px)]">
      <img
        className="absolute inset-0 w-full h-full object-cover shrink-0"
        src="/assets/images/activite.jpg"
        alt="herosection"
      />
      <div className="absolute w-full h-full bg-black/25 px-4"></div>
      <div className="absolute px-4 inset-0 flex flex-col items-center justify-center text-center text-white text-xl sm:text-2xl lg:text-2xl font-semibold gap-20 lg:gap-32">
        {/* Texte principal */}
        <WordRotate 
            className="text-2xl md:text-5xl lg:text-7xl  max-w-screen-sm lg:max-w-screen-lg font-bold"
            words={[
                    "Ensemble, agissons contre la pollution plastique pour préserver nos océans",
                    "Soutenez nos projets pour un environnement durable et responsable",
                    "Rejoignez-nous dans notre lutte pour un avenir sans déchets plastiques",
                    "ONG BLUE : des solutions concrètes pour protéger la biodiversité marine"
                  ]}
        />

        {/* Bouton bien espacé */}
        <DropdownUI/>
      </div>
      {/* Bouton gauche */}
      <div className="absolute hidden sm:flex lg:flex left-4 top-1/2 transform -translate-y-1/2 px-6 py-4 text-foreground bg-background rounded-full shadow-md cursor-pointer hover:bg-gray-200 transition">
        {"<"}
      </div>
      {/* Bouton droit */}
      <div className="absolute hidden sm:flex lg:flex right-4 top-1/2 transform -translate-y-1/2 px-6 py-4 text-foreground bg-background rounded-full shadow-md cursor-pointer hover:bg-gray-200 transition">
        {">"}
      </div>
    </div>
  );
}
