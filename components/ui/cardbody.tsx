import {Card, CardHeader, CardFooter, Image, Button, Link} from "@nextui-org/react";

export default function CardBody() {
  return (
    <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
    {/* Card 1 */}
    <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">JESUS AKA</p>
        <h4 className="text-white font-medium text-large">
          Président
        </h4>
      </CardHeader>
      <Image
        isZoomed
        removeWrapper
        alt="Jesus Aka"
        className="z-0 w-full h-full object-cover"
        src="https://bluemakers.net/wp-content/uploads/2023/03/My-project-1-1.png"
      />
    </Card>
  
    {/* Card 2 */}
    <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">N&apos;DRI</p>
        <h4 className="text-white font-medium text-large">
          Vice-Président
        </h4>
      </CardHeader>
      <Image
        isZoomed
        removeWrapper
        alt="N'DRI"
        className="z-0 w-full h-full object-cover"
        src="https://bluemakers.net/wp-content/uploads/2023/03/My-project-1.png"
      />
    </Card>
  
    {/* Card 3 */}
    <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">JEAN M YEBOUE</p>
        <h4 className="text-white font-medium text-large">
          Secrétaire Général
        </h4>
      </CardHeader>
      <Image
        isZoomed
        removeWrapper
        alt="Jean M Yeboue"
        className="z-0 w-full h-full object-cover"
        src="https://bluemakers.net/wp-content/uploads/2023/03/My-project-1-2.png"
      />
    </Card>
  
    {/* Card 4 */}
    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">ANAH TOURE</p>
        <h4 className="text-black font-medium text-2xl">
          Trésorier
        </h4>
      </CardHeader>
      <Image
        isZoomed
        removeWrapper
        alt="Anah Toure"
        className="z-0 w-full h-full object-cover"
        src="https://bluemakers.net/wp-content/uploads/2023/03/My-project-1-3.png"
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
        <p className="text-tiny text-white/60 uppercase font-bold">Miss Aurélia</p>
        <h4 className="text-black font-medium text-xl">
          Direction des Ressources Humaines
        </h4>
      </CardHeader>
      <Image
        isZoomed
        removeWrapper
        alt="Miss Aurélia"
        className="z-0 w-full h-full object-cover"
        src="/assets/images/1733734560326.jpeg"
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <Image
            alt="Logo BLUE"
            className="rounded-full w-10 h-11 bg-black"
            src="/assets/images/blue.png"
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
