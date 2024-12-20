import {Button} from "@nextui-org/react";
import { NumberTicker } from "./numberticker";

export default function Testimonial(){
    return(
        <div className="flex flex-col md:flex-row justify-around bg-muted p-20">
            <div className="flex flex-col justify-between md:justify-start md:items-start text-center md:text-start gap-8">
                <div className="text-3xl md:text-5xl font-semibold">Nos chiffres clés</div>
                <div className="text-gray-600 dark:text-gray-200 md:text-lg lg:text-xl text-center md:text-start sm:my-2 my-0 lg:my-2">Des résultats qui témoignent de notre engagement et de notre <br /> expertise dans le secteur du transport et des travaux publics.</div>
                <Button color="primary" className="mt-4">En savoir plus</Button>
            </div>
            <div className="flex flex-col md:grid md:grid-cols-2 pt-6 gap-8">
                <div className="flex flex-col justify-center text-primary text-center bg-card border dark:border-primary scale-105 cursor-pointer rounded-lg p-8">
                    <div className="text-2xl font-semibold "><span className="text-primary">+</span> <NumberTicker value={500} /></div>
                    <div className="text-sm">projets réalisés</div>
                </div>
                <div className="flex flex-col justify-center text-primary text-center  bg-card border dark:border-primary  scale-105 cursor-pointer rounded-lg p-8">
                    <div className="text-2xl font-semibold"> <NumberTicker value={95} decimalPlaces={2} /> <span className="text-primary">%</span></div>
                    <div className="text-sm">de satisfaction client</div>
                </div>
                <div className="flex flex-col justify-center text-primary text-center  bg-card border dark:border-primary  scale-105 cursor-pointer rounded-lg p-8">
                    <div className="text-2xl font-semibold"><span className="text-primary">+</span> <NumberTicker value={100} /></div>
                    <div className="text-sm">véhicules disponibles</div>
                </div>
                <div className="flex flex-col justify-center text-primary text-center  bg-card border dark:border-primary  scale-105 cursor-pointer rounded-lg p-8">
                    <div className="text-2xl font-semibold"><NumberTicker value={20} /> <span className="text-primary">ans</span></div>
                    <div className="text-sm">d&apos;expérience</div>
                </div>
            </div>
        </div>
    )
}