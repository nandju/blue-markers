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
      src="https://i.pinimg.com/736x/aa/3e/f3/aa3ef355df4ead9576cf67c8694b4d14.jpg" 
      alt="Camions" 
      className="w-full h-full object-cover [clip-path:ellipse(43%_50%_at_50%_50%)] shadow-lg"
    />
  </div>

  {/* Text Section */}
  <div className="max-w-2xl text-center lg:text-left">
    <h2 className="text-3xl font-extrabold text-primary mb-4">
    Travaux Publics : Des solutions pour des infrastructures durables
    </h2>
    <p className="text-lg text-foreground leading-relaxed">
      Chez <span className="font-semibold text-primary">ETS Global Transport</span>, nous offrons des solutions complètes pour vos travaux publics. Que ce soit pour le terrassement, la construction de routes ou l&apos;approvisionnement en matériaux tels que le sable, le gravier et le bitume, notre expertise et nos équipements modernes garantissent des résultats fiables et durables. Avec des services adaptés à vos besoins, nous assurons la réussite de vos projets en Côte d&apos;Ivoire et à l&apos;international.
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
