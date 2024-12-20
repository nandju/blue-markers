import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
  {
    name: "Alice Zadi",
    username: "DG",
    body: "Ce qui me plaît le plus chez GLOBALTRANSPORT, c’est de contribuer à la réalisation de défis logistiques à l’échelle internationale.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Tano Arnaud",
    username: "Ceo & Founder",
    body: "Les équipes de GLOBAL TRANSPORT soutiennent nos rêves les plus grands et nous aident à les concrétiser. À tous niveaux, c'est une relation d'une valeur inestimable.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Sara Konan",
    username: "PCA",
    body: "GLOBAL TRANSPORT est hautement très bien ! Toute l’équipe est allée au-delà pour m’aider à résoudre mon problème. Je recommande vivement GLOBALTRANSPORT.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Kouakou Kouakou",
    username: "Responsable Logistique",
    body: "Grâce à ETS Global Transport, nous avons pu optimiser notre chaîne logistique et respecter nos délais de livraison.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Loukou Emmanuella",
    username: "Directrice des Achats",
    body: "La qualité du service et la fiabilité des camions sont irréprochables. Une collaboration de confiance.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Souleymane Ibrahima",
    username: "Chef de Projet BTP",
    body: "Les solutions de transport adaptées aux travaux publics ont été essentielles pour la réussite de nos chantiers.",
    img: "https://avatar.vercel.sh/james",
  },
  
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl p-4 mx-2",
        // light styles
        "bg-white shadow-lg hover:shadow-xl transition-all duration-300",
        // dark styles
        "dark:bg-gray-800 dark:hover:bg-gray-700",
        "border border-blue-100 dark:border-gray-700"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-bold text-blue-900 dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-blue-600 dark:text-blue-400">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-gray-600 dark:text-gray-300">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <section className="py-24 px-6 md:px-8 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="text-center md:text-start px-10 mb-12">
          <h2 className="text-3xl md:text-5xl lg:text-5xl font-bold mb-4">
            Témoignages
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl">
            Découvrez ce que nos clients disent de nos services
          </p>
        </div>
        
        <div className="relative flex flex-col h-[400px] md:h-[500px] w-full items-center justify-center overflow-hidden rounded-lg bg-transparent">
          <Marquee pauseOnHover className="[--duration:30s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:30s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          
          {/* Gradients */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-blue-50 dark:from-muted"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-blue-50 dark:from-muted"></div>
        </div>
      </div>
    </section>
  );
}
