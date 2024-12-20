import { Button } from "@nextui-org/react";
import CardUI from "./card";


export default function Services() {
  return (
    <div className="flex flex-col justify-around bg-muted p-6 lg:p-20">
      <div className="flex flex-col justify-center gap-2">
        <div className="text-3xl md:text-5xl lg:text-6xl font-semibold text-center md:text-start mx-3">
          Nos Services
        </div>
        <div className="flex flex-col md:flex-row justify-between my-4 sm:gap-4 gap-0 lg:gap-4">
          <div className="md:text-lg lg:text-xl text-center md:text-start sm:my-2 my-0 lg:my-2">
            Nous œuvrons pour une planète durable
          </div>
          <Button variant="bordered" color="primary" className="mt-4">
            En savoir plus {">"}
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-10">
        <CardUI />
      </div>
    </div>
  );
}
