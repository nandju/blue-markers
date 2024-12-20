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
      src="https://images.unsplash.com/photo-1721054939479-197fe1001ce4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
      alt="Camions" 
      className="w-full h-full object-cover [clip-path:ellipse(43%_50%_at_50%_50%)] shadow-lg"
    />
  </div>

  {/* Text Section */}
  <div className="max-w-2xl text-center lg:text-left">
    <h2 className="text-3xl font-extrabold text-primary mb-4">
      Camions : Une Solution Adaptée à Vos Besoins
    </h2>
    <p className="text-lg text-foreground leading-relaxed">
      Chez <span className="font-semibold text-primary">ETS Global Transport</span>, nos camions répondent aux exigences les plus diverses. Que ce soit pour le transport de matériaux lourds, de marchandises ou pour des projets de travaux publics, nous mettons à votre disposition une flotte moderne et bien entretenue. Avec nos solutions sur mesure, bénéficiez de la fiabilité, de la sécurité et de l&apos;efficacité pour vos opérations de transport, que ce soit en Côte d&apos;Ivoire ou à l&apos;international.
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
