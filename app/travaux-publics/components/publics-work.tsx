"use client"

import Link from "next/link";

import { Button } from "@nextui-org/react";

type PublicsWork = {
    picture: string;
    title: string;
    subtitle: string;
    link: string;
};

const publicsWorks: PublicsWork[] = [
    {
        picture: "https://i.pinimg.com/736x/49/71/21/49712189530a06a196ce2c356786e6e3.jpg",
        title: "Terrassement",
        subtitle: "Travaux de préparation du terrain pour les constructions, incluant le nivellement, le creusage de tranchées, et la mise en forme du terrain.",
        link: "../travaux-publics/"
    },
    {
        picture: "https://i.pinimg.com/736x/e8/a8/aa/e8a8aa1cb5f2543b9a061045d02ed2e8.jpg",
        title: "Voirie et réseaux divers (VRD)",
        subtitle: "Aménagement de routes, trottoirs, et installation de réseaux de canalisations et d'évacuation.",
        link: "../travaux-publics/"
    },
    {
        picture: "https://i.pinimg.com/736x/59/93/60/5993601ae8283ce3c5c832925999befb.jpg",
        title: "Aménagement paysager",
        subtitle: "Services de préparation des terrains pour des projets de jardins, espaces verts et parcs publics ou privés.",
        link: "../travaux-publics/"
    },
    {
        picture: "https://i.pinimg.com/736x/6c/19/e4/6c19e469adaa09001ab977bd27d0bbdd.jpg",
        title: "Démolition contrôlée",
        subtitle: "Services de démolition d’anciennes structures pour préparer le terrain en vue de nouveaux aménagements.",
        link: "../travaux-publics/"
    },
    {
        picture: "https://i.pinimg.com/736x/2c/6f/06/2c6f0601a405c210e43388294c08fe60.jpg",
        title: "Équipements spécialisés",
        subtitle: "Pelle hydraulique, bulldozer, compacteur, chargeuse, camions-bennes, et autres matériels adaptés aux travaux publics.",
        link: "../travaux-publics/"
    },
    {
        picture: "https://i.pinimg.com/736x/6c/08/d9/6c08d9a1e2b0985edfaa0a979d0085ab.jpg",
        title: "Équipes qualifiées",
        subtitle: "Personnel formé et expérimenté pour la réalisation de travaux de terrassement, voirie et autres aménagements.",
        link: "../travaux-publics/"
    },
    {
        picture: "https://i.pinimg.com/736x/8a/ef/6f/8aef6ffc137bd60b472dcc242d243e14.jpg",
        title: "Respect des normes",
        subtitle: "Travaux réalisés en conformité avec les normes de sécurité et de qualité locales et internationales.",
        link: "../travaux-publics/"
    },
    {
        picture: "https://i.pinimg.com/736x/22/22/d5/2222d5ee0b00555eaf475e588915dbd1.jpg",
        title: "Gestion des déchets",
        subtitle: "Système de gestion des déchets pour s'assurer que les matériaux et débris issus des travaux sont correctement collectés, recyclés, ou éliminés.",
        link: "../travaux-publics/"
    }
];


export default function PublicsWork() {
    return (
        <div className=" p-16 bg-muted">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                {publicsWorks.map((item)=>(
                    <div key={item.title} className="relative group h-[350px] w-full overflow-hidden bg-cover bg-center" 
                    style={{
                        backgroundImage: `url(${item.picture})`
                    }}
                >
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-all duration-300"></div>
                    <div className="absolute bottom-8 left-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                        <p className="text-sm mb-4 max-w-[250px]">
                        {item.subtitle}
                        </p>
                        <Button color="primary" variant="shadow">
                            <Link href={item.link}>
                                Payer
                            </Link>
                        </Button>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}