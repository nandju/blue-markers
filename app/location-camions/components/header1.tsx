import { Button } from "@nextui-org/react";


export default function Header1(){
    return(
        <div className="hidden md:block relative flex items-center justify-between w-full h-[calc(100vh-100px)]">
            <img
                className="absolute inset-0 w-full h-full object-cover shrink-0"
                src="https://images.unsplash.com/photo-1721054939742-713e1cd8e314?q=80&w=1466&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="herosection"
            />
            <div className="absolute w-full h-screen bg-black/25"></div>
            <div className="absolute bottom-2 right-2 flex flex-col items-center justify-center text-center text-white text-xs font-semibold space-y-6 bg-black/40 rounded-2xl h-2/5 w-1/4 p-8 m-4">
                {/* Texte principal */}
                  <p>ETS Global Transport propose une gamme variée de camions à la location pour répondre aux besoins de transport de ses clients. Les solutions sont conçues pour offrir de la flexibilité et une large couverture géographique.</p>

                {/* Bouton bien espacé */}
                <Button color="primary">Souscrire nos services</Button>
            </div>
            {/* Bouton gauche */}
            <div className="absolute hidden md:block left-4 top-1/2 transform -translate-y-1/2 px-6 py-4 text-black bg-white/90 rounded-full shadow-md cursor-pointer hover:bg-gray-200 transition">
                {"<"}
            </div>
            {/* Bouton droit */}
            <div className="absolute hidden md:block right-4 top-1/2 transform -translate-y-1/2 px-6 py-4 text-black bg-white/90 rounded-full shadow-md cursor-pointer hover:bg-gray-200 transition">
                {">"}
            </div>
        </div>
    )
}