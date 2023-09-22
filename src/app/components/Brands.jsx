"use client"

//next image
import Image from "next/image";

//framer motion
import {motion} from "framer-motion"

//variants
import { fadeIn } from "../../../variants";

export default function Brands() {
  return <div className="xl:pt-16 xl:h-[200px] bg-white flex flex-col justify-center">
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-6 place-items-center xl:flex xl:flex-wrap xl:gap-x-6 xl:justify-between">
        <div>
          <Image src={"icons/brands/ford.svg"} width={85} height={32} alt="Ford"/>
        </div>
        <div>
          <Image src={"icons/brands/mercedes.svg"} width={60} height={60} alt="Mercedes"/>
        </div>
        <div>
          <Image src={"icons/brands/audi.svg"} width={85} height={50} alt="Audi"/>
        </div>
        <div>
          <Image src={"icons/brands/BMW.svg"} width={60} height={60} alt="BMW"/>
        </div>
        <div>
          <Image src={"icons/brands/vw.svg"} width={60} height={60} alt="VolksWagen"/>
        </div>
        <div>
          <Image src={"icons/brands/skoda.svg"} width={60} height={60} alt="Skoda"/>
        </div>
        <div>
          <Image src={"icons/brands/mazda.svg"} width={62} height={50} alt="Mazda"/>
        </div>
      </div>
    </div>
  </div>;
}
