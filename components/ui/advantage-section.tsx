import CardBody from "./cardbody";
export default function Advantage(){
    return(
        <div className="flex flex-col justify-around p-10 mt-10">
            <div className="flex flex-row justify-center md:justify-start gap-2 m-3">
                <div className="text-3xl md:text-5xl font-semibold text-center md:text-start m-0 md:mx-3">Les Avantages</div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 mt-4 items-stretch">
                {/* Article principal à gauche */}
                <div className="flex-1">
                    <div className="bg-muted rounded-xl shadow-lg">
                        <div className="text-center md:text-start p-6">
                            <h2 className="text-2xl font-bold mb-2">Notre Expertise</h2>
                            <p className="text-foreground mb-4">
                            ETS Global Transport, spécialiste en BTP et Transport Logistique Service, est basé à Yopougon Carrefour OBAMA, aux portes d&apos;Abidjan. Forts de notre expertise, nous gérons et optimisons le transport de vos marchandises, que ce soit en Côte d&apos;Ivoire, à travers l&apos;Afrique ou à l&apos;international. Grâce à notre savoir-faire inégalé dans le transport et les travaux publics, nous proposons des solutions sur mesure qui allient fiabilité, sécurité et flexibilité. Notre priorité est de répondre à vos besoins spécifiques tout en garantissant une expérience client exceptionnelle, quel que soit l&apos;ampleur ou la complexité de vos projets.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Articles secondaires à droite */}
                <div className="flex-1 relative">
                    <CardBody />
                </div>
            </div>
        </div>
    );
}