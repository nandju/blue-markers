import CardBody from "./cardbody";
export default function Advantage(){
    return(
        <div className="flex flex-col justify-around p-10 mt-10">
            <div className="flex flex-row justify-center md:justify-start gap-2 m-3">
                <div className="text-3xl md:text-5xl text-primary font-semibold text-center md:text-start m-0 md:mx-3">L&apos;équipe</div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 mt-4 items-stretch">
                {/* Article principal à gauche */}
                <div className="flex-1">
                    <div className="bg-muted rounded-xl shadow-lg">
                        <div className="text-center md:text-start p-6">
                            <h2 className="text-2xl text-primary font-bold mb-2">
                            Rencontrez notre équipe
                            </h2>
                            <p className="text-foreground mb-4">
                            L&apos;équipe de l&apos;ONG BLUE est composée de jeunes dynamiques et engagés, animés par une passion commune pour la préservation de l&apos;environnement. Avec des idées innovantes et une énergie débordante, nous unissons nos forces pour lutter contre la pollution plastique et sensibiliser les communautés. Ensemble, nous construisons un avenir plus durable, en combinant créativité, détermination et esprit d&apos;équipe pour atteindre nos objectifs ambitieux.
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