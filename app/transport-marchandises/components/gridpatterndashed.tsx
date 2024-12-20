"use client";

import { cn } from "@/lib/utils";
import GridPattern from "@/components/ui/grid-pattern";

export function GridPatternDashed() {
  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden bg-muted p-20">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-12 p-8 bg-muted">
  {/* Image Section */}
  <div className="relative w-72 h-72 lg:w-96 lg:h-96">
    <img 
      src="https://i.pinimg.com/736x/97/3c/dd/973cdd8b21ef6515855e5893b1ac8bb0.jpg" 
      alt="Camions" 
      className="w-full h-full object-cover [clip-path:ellipse(43%_50%_at_50%_50%)] shadow-lg"
    />
  </div>

  {/* Text Section */}
  <div className="max-w-2xl text-center lg:text-left">
    <h2 className="text-3xl font-extrabold text-primary mb-4">
      Transport de Marchandises : Sécurité et Efficacité Garanties
    </h2>
    <p className="text-lg text-foreground leading-relaxed">
      Chez <span className="font-semibold text-primary">ETS Global Transport</span>, nous comprenons l&apos;importance de vos marchandises. C&apos;est pourquoi nous vous proposons des solutions de transport adaptées, rapides et fiables. Avec une flotte moderne et un personnel hautement qualifié, nous assurons le déplacement sécurisé de vos marchandises, aussi bien au niveau national qu&apos;international. Faites confiance à notre expertise pour répondre à vos besoins logistiques avec la plus grande efficacité.
    </p>
  </div>
</div>

      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
        )}
      />
    </div>
  );
}
