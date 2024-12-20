import {Card, CardFooter, Image, Button, Link} from "@nextui-org/react";

type CardService = {
    picture: string;
    title: string;
    link: string;
}

const card: CardService[] = [
    {
        picture: "https://i.pinimg.com/736x/a0/ca/b1/a0cab1f8c9d407085e7b0131e6479ee4.jpg",
        title: "Education",
        link: "/location-camions",
  },
  {
    picture:"https://i.pinimg.com/736x/c0/21/e5/c021e5adbc49f3cf503c612afafa11ce.jpg",
    title:"Environnement",
    link: "/transport-marchandises",
  },
  {
    picture:"https://i.pinimg.com/736x/9f/6a/84/9f6a84e75126cbf1a08c4ede3b17574c.jpg",
    title:"Santé Publique",
    link: "/travaux-publics",
  }
];

export default function CardUI() {
    return (
      <>
        {card.map((cards) => {
          return (
            <Card isFooterBlurred className="border-none" radius="lg" key={cards.title}>
              <Image
                isZoomed
                isBlurred
                alt={cards.title}
                className="object-cover"
                height={300}
                src={cards.picture}
                width={400}
              />
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny text-white/80">{cards.title}</p>
                <Link href={cards.link}>
                <Button
                  className="text-tiny text-white bg-black/20"
                  color="default"
                  radius="lg"
                  size="sm"
                  variant="flat"
                >
                  En savoir plus
                </Button></Link>
              </CardFooter>
            </Card>
          );
        })}
      </>
    );
  }
  