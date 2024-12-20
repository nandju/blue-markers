import { Button } from "@nextui-org/react";
import Link from "next/link";
import {Image} from "@nextui-org/react";


type TransportItem = {
    picture:string;
    title:string;
    subtitle:string;
    link:string;
}

const transportItems: TransportItem[] = [
    {
      picture:
        "https://i.pinimg.com/736x/69/e4/68/69e468c3b656a8711a1e381a786885d8.jpg",
      title: "Transport national et régional",
      subtitle:
        "Couverture de la Côte d’Ivoire et des pays voisins pour permettre une plus grande flexibilité dans la livraison des marchandises.",
      link: "/transport-marchandises",
    },
    {
      picture:
        "https://i.pinimg.com/736x/c2/09/8b/c2098bbe658dd4d3ffea9133f4b6ec10.jpg",
      title: "Transport express",
      subtitle:
        "Solution dédiée aux marchandises nécessitant une livraison rapide, idéale pour les produits frais ou les marchandises à haute valeur ajoutée",
      link: "/transport-marchandises",
    },
    {
      picture:
        "https://i.pinimg.com/736x/54/1c/91/541c91db81c3a1b265064188c9f1e448.jpg",
      title: "Transport dédié",
      subtitle:
        "Option permettant de dédier un camion exclusivement aux marchandises d’un client pour garantir la sécurité et minimiser les risques de mélange de cargaisons.",
      link: "/transport-marchandises",
    },
    {
      picture:
        "https://i.pinimg.com/736x/1b/c9/f8/1bc9f81dcdbf01c665801c42a5fbadd1.jpg",
      title: "Transport groupé",
      subtitle:
        "Possibilité pour les clients de partager un camion pour réduire les coûts, particulièrement adapté pour les petites entreprises.",
      link: "/transport-marchandises",
    },
    {
      picture:
        "https://i.pinimg.com/736x/54/46/07/544607368c18fda7e691afa719cf0167.jpg",
      title: "Service de manutention",
      subtitle:
        "Équipe qualifiée pour charger et décharger les marchandises en toute sécurité.",
      link: "/transport-marchandises",
    },
    {
      picture:
        "https://i.pinimg.com/736x/26/64/76/266476becf4fcd281caaa3939314c7df.jpg",
      title: "Stockage temporaire",
      subtitle:
        "Solution pour les clients ayant besoin d'entreposer temporairement leurs marchandises avant la livraison finale.",
      link: "/transport-marchandises",
    },
  ];


export default function TransportItems() {
    return (
        <div className="flex flex-col gap-6 bg-muted">
                {transportItems.map((item, index) => (
                <div
                    key={item.title}
                    className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse" } justify-between items-center m-8 bg-primary-foreground rounded-xl shadow-xl`}>
                    <Image
                        isZoomed
                        alt={item.title}
                        className="m-5"
                        src={item.picture}
                        width={600}
                        height={400}
                    />
                    <div className="flex flex-col justify-start items-start p-16 gap-6">
                        <div className="text-xl md:text-3xl font-bold">{item.title}</div>
                        <div className="border-b border-gray-300 w-1/2"></div>
                        <div className="text-base md:text-lg">{item.subtitle}</div>
                        <div>
                            <Link href={item.link}>
                                <Button color="primary">
                                    Payer
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        )
}