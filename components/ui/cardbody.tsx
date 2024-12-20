import {Card, CardHeader, CardFooter, Image, Button, Link} from "@nextui-org/react";

export default function CardBody() {
  return (
    <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
    {/* Card 1 */}
    <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Transport Logistique</p>
        <h4 className="text-white font-medium text-large">
          Optimisez vos livraisons locales et internationales
        </h4>
      </CardHeader>
      <Image
        isZoomed
        removeWrapper
        alt="Transport Logistique"
        className="z-0 w-full h-full object-cover"
        src="https://i.pinimg.com/736x/60/22/b8/6022b875afd5bef3a825dd74e42877fd.jpg"
      />
    </Card>
  
    {/* Card 2 */}
    <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Bitume</p>
        <h4 className="text-white font-medium text-large">
          Matériaux de qualité pour vos projets routiers
        </h4>
      </CardHeader>
      <Image
        isZoomed
        removeWrapper
        alt="Bitume"
        className="z-0 w-full h-full object-cover"
        src="https://i.pinimg.com/736x/56/ee/f4/56eef49a1f2d2ced87a4282a03e64da6.jpg"
      />
    </Card>
  
    {/* Card 3 */}
    <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Sable & Ciment</p>
        <h4 className="text-white font-medium text-large">
          Fourniture pour une construction solide et durable
        </h4>
      </CardHeader>
      <Image
        isZoomed
        removeWrapper
        alt="Sable et Ciment"
        className="z-0 w-full h-full object-cover"
        src="https://i.pinimg.com/736x/3a/58/f3/3a58f3aa0bdd76271b2015132a2d2881.jpg"
      />
    </Card>
  
    {/* Card 4 */}
    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Fer à Béton</p>
        <h4 className="text-black font-medium text-2xl">
          Résistance maximale pour vos structures
        </h4>
      </CardHeader>
      <Image
        isZoomed
        removeWrapper
        alt="Fer à Béton"
        className="z-0 w-full h-full object-cover"
        src="https://i.pinimg.com/736x/33/f4/e4/33f4e4181779a28881b45b2a534c750a.jpg"
      />
      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div>
          <p className="text-black text-tiny">Disponible dès maintenant.</p>
          <p className="text-black text-tiny">Contactez-nous pour en savoir plus.</p>
        </div>
        <Link href="/contact-us">
        <Button className="text-tiny" color="primary" radius="full" size="sm">
            Contact
        </Button>
        </Link>
      </CardFooter>
    </Card>
  
    {/* Card 5 */}
    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Caniveau Dallot</p>
        <h4 className="text-black font-medium text-xl">
          Solutions durables pour la gestion des eaux pluviales
        </h4>
      </CardHeader>
      <Image
        isZoomed
        removeWrapper
        alt="Caniveau Dallot"
        className="z-0 w-full h-full object-cover"
        src="https://i.pinimg.com/736x/c4/35/11/c43511867a57c56f005c70b936bdfd3d.jpg"
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <Image
            alt="Caniveau Dallot"
            className="rounded-full w-10 h-11 bg-black"
            src="https://i.pinimg.com/736x/f4/76/03/f47603224be9ff55f87653fa64a013b9.jpg"
          />
          <div className="flex flex-col">
            <p className="text-tiny text-white/60">Fourniture de caniveaux robustes</p>
            <p className="text-tiny text-white/60">Conception adaptée à vos besoins.</p>
          </div>
        </div>
        <Button radius="full" size="sm">
          <Link href="/travaux-publics">
            En savoir plus
          </Link>
        </Button>
      </CardFooter>
    </Card>
  </div>
  
  );
}
