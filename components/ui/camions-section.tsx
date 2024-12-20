import { Button, Link } from "@nextui-org/react";


type Camion = {
  picture: string;
  title: string;
  subtitle: string;
  link: string;
};

const camions: Camion[] = [
  {
    "picture": "/assets/images/activite-1.jpeg",
    "title": "Gestion des déchets",
    "subtitle": "Collecte et tri des déchets pour un environnement plus propre.",
    "link": "#"
  },
  {
    "picture": "/assets/images/activite-2.jpeg",
    "title": "Sensibilisation à la pollution plastique",
    "subtitle": "Mener des campagnes pour informer et sensibiliser la population sur les dangers du plastique.",
    "link": "#"
  },
  {
    "picture": "/assets/images/activite-3.jpeg",
    "title": "Nettoyage des plages",
    "subtitle": "Organiser des événements de nettoyage pour préserver les écosystèmes marins.",
    "link": "#"
  },
  {
    "picture": "/assets/images/activite-4.jpeg",
    "title": "Reboisement et restauration écologique",
    "subtitle": "Plantation d'arbres pour restaurer les espaces verts et lutter contre la déforestation.",
    "link": "#"
  }
  
  
];
export default function CamionsSection() {
  return (
    <div className="flex flex-col justify-around bg-muted p-6 lg:p-20">
      <div className="flex flex-col justify-center gap-2">
        <div className="text-3xl md:text-5xl lg:text-6xl font-semibold text-center md:text-start mx-3">
          Actualités
        </div>
        <div className="flex flex-col md:flex-row justify-between my-4 sm:gap-4 gap-0 lg:gap-4">
          <div className="md:text-lg lg:text-xl text-center md:text-start sm:my-2 my-0 lg:my-2">
            Les dernières actualités de BLUE
          </div>
          <Button variant="bordered" color="primary" className="mt-4">
            <Link href="/location-camions">
              En savoir plus {">"}
            </Link>
          </Button>
        </div>
      </div>
      <div className="flex flex-row justify-around items-stretch gap-4 flex-wrap mt-3 lg:mt-10">
        {camions.map((camion) => {
          return (
            <div
              key={camion.title} // identifier un élément de la boucle
              className="flex flex-col mt-4 self-stretch rounded-xl shadow-2xl w-72 bg-card"
            >
              <div className="overflow-hidden rounded-t-xl">
                <img
                  className="w-full h-40 object-cover"
                  src={camion.picture}
                  alt={camion.title}
                />
              </div>
              <div className="p-4 flex-1 flex flex-col gap-4 justify-between">
                <div>
                  <h2 className="text-xl font-bold mb-2">{camion.title}</h2>
                  <p className="text-foreground">{camion.subtitle}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
