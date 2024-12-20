
import { Calendar } from "@nextui-org/react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

export default function TestPage(){
    return(
        <>
        <div>
            <h1>Test</h1>
        </div>
         <div className="flex gap-x-4">
         <Calendar key={"first"}  />
         <Calendar key={"second"}  />
       </div>



       <Card className="py-4 w-fit mt-10 mx-auto">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://nextui.org/images/hero-card-complete.jpeg"
          width={270}
        />
      </CardBody>
    </Card>

       </>
    )
}