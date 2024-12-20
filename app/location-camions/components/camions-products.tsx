"use client";

// Importations des bibliothèques et composants nécessaires
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@nextui-org/react";
import Link from "next/link";

// Définition du type pour un camion
type Camion = {
  picture: string;
  title: string;
  subtitle: string;
  link: string;
};

// Liste des camions avec leurs détails
const camions: Camion[] = [
  {
    picture: "/assets/images/camions-bernes-removebg-preview.png",
    title: "Camions-bennes",
    subtitle:
      "Transport de matériaux lourds avec bennes arrière ou latérales (jusqu'à 30 tonnes)",
    link: "#",
  },
  {
    picture: "/assets/images/camions-citernes-removebg-preview.png",
    title: "Camions-citernes",
    subtitle: "Transport de liquides avec des citernes de 5 000 à 30 000 litres",
    link: "#",
  },
  {
    picture: "/assets/images/camions-plateaux-removebg-preview.png",
    title: "Camions plateaux",
    subtitle: "Transport de marchandises volumineuses (10 à 40 tonnes)",
    link: "#",
  },
  {
    picture: "/assets/images/camions-grues-removebg-preview.png",
    title: "Camions-grues",
    subtitle:
      "Manutention et transport de charges lourdes avec capacité de levage jusqu'à 50 tonnes",
    link: "#",
  },
];

// Composant principal pour afficher le carrousel des camions
export default function CamionsProducts() {
  // État pour suivre l'index du camion actuellement affiché
  const [currentIndex, setCurrentIndex] = useState(0);
  // État pour suivre la direction du défilement
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  // État pour gérer la pause du défilement automatique
  const [isPaused, setIsPaused] = useState(false);

  // Fonction pour passer au camion suivant
  const goToNextTruck = () => {
    setDirection('next');
    setCurrentIndex((prevIndex) => 
      prevIndex === camions.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Fonction pour passer au camion précédent
  const goToPrevTruck = () => {
    setDirection('prev');
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? camions.length - 1 : prevIndex - 1
    );
  };

  // Défilement automatique
  useEffect(() => {
    if (isPaused) return;

    const autoScroll = setInterval(() => {
      goToNextTruck();
    }, 5000); // Change de camion toutes les 5 secondes

    return () => clearInterval(autoScroll);
  }, [isPaused]);

  // Récupérer le camion actuel
  const currentTruck = camions[currentIndex];

  // Variants pour l'animation de transition
  const variants = {
    enter: (direction: 'next' | 'prev') => {
      return {
        x: direction === 'next' ? 1000 : -1000,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: 'next' | 'prev') => {
      return {
        zIndex: 0,
        x: direction === 'next' ? -1000 : 1000,
        opacity: 0
      };
    }
  };

  return (
    <div 
      className="flex flex-col items-center justify-center min-h-screen bg-muted p-6 lg:p-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Conteneur du camion actuel */}
      <div className="w-full max-w-6xl relative h-[800px]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute w-full"
          >
            <div className="bg-muted rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500">
              {/* Section Image et Texte */}
              <div className="flex flex-col lg:flex-row items-center justify-between p-8 lg:p-16">
                {/* Conteneur image TRES GRAND */}
                <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                  <div className="w-full h-[300px] lg:h-[400px] overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src={currentTruck.picture}
                      alt={currentTruck.title}
                      className="w-full h-full object-contain scale-110 transition-all duration-500 hover:scale-125 ease-in-out"
                    />
                  </div>
                </div>

                {/* Section Texte */}
                <div className="w-full lg:w-1/2 lg:pl-16 text-center lg:text-left">
                  <motion.h2 
                    key={`title-${currentIndex}`}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl lg:text-5xl font-bold text-primary mb-6 hover:text-primary-700 transition-colors"
                  >
                    {currentTruck.title}
                  </motion.h2>

                  <motion.p 
                    key={`subtitle-${currentIndex}`}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-lg lg:text-xl text-foreground mb-10 leading-relaxed"
                  >
                    {currentTruck.subtitle}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Button 
                      color="primary" 
                      variant="shadow" 
                      size="lg"
                    >
                      <Link href={currentTruck.link} className="w-full text-center">
                        Payer
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Boutons de navigation */}
      <div className="flex justify-center gap-8 z-10 relative">
        <button 
          onClick={goToPrevTruck}
          className="bg-primary/10 text-primary text-2xl p-4 rounded-full hover:bg-primary/20 transition duration-300 shadow-md"
        >
          ← Précédent
        </button>
        <button 
          onClick={goToNextTruck}
          className="bg-primary/10 text-primary text-2xl p-4 rounded-full hover:bg-primary/20 transition duration-300 shadow-md"
        >
          Suivant →
        </button>
      </div>

      {/* Indicateur de progression */}
      <div className="mt-6 flex space-x-2">
        {camions.map((_, index) => (
          <span 
            key={index}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-primary w-8' 
                : 'bg-primary/30 w-2'
            }`}
            onClick={() => {
              setCurrentIndex(index);
              setDirection(index > currentIndex ? 'next' : 'prev');
            }}
          />
        ))}
      </div>
    </div>
  );
}