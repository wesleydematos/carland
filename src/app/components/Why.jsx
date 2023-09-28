"use client";

//next image
import Image from "next/image";

//motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../../../variants";

//icons
import { MdHandshake, MdKey, MdTrendingUp } from "react-icons/md"

export default function Why() {
  return (
    <section className="section flex items-center" id="why">
      <div className="container mx-auto">
        <motion.h2 
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.6}}
          className="h2 text-center"
        >
          Excelência incomparável e satisfação do cliente
        </motion.h2>
        <motion.p 
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.6}}
          className="max-w-[680px] text-center mx-auto mb-2"
        >
          Nossa dedicação em fornecer serviços excepcionais se diferencia da concorrência. 
          A partir do momento em que você interage conosco, nos esforçamos para superar 
          suas expectativas em cada interação.
        </motion.p>
        <motion.div 
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.6}}
          className="hidden md:flex justify-center mb-6 xl:mb-2"
        >
          <Image src={"images/why/car.svg"} width={1060} height={420} alt="car"/>
        </motion.div>
        <motion.div 
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.4}}
          className="flex flex-wrap justify-center xl:grid xl:grid-cols-3 gap-4
          xl:gap-y-0 xl:gap-x-[30px]"
        >
          <div className="flex flex-col items-center text-center max-w-[160px]
          xl:max-w-none p-2 xl:p-0">
            <MdKey className="text-[30px] text-accent mb-4"/>
            <h3 className="h3">Alugue de forma simples e rápida</h3>
            <p className="hidden xl:flex">
              Priorizamos sua necessidade e vamos além para garantir que sua experiência conosco 
              seja excelente.
            </p>
          </div>
          <div className="flex flex-col items-center text-center max-w-[160px]
          xl:max-w-none p-2 xl:p-0">
            <MdTrendingUp className="text-[30px] text-accent mb-4"/>
            <h3 className="h3">Veículos modernos e bem conservados</h3>
            <p className="hidden xl:flex">
              Dispomos de veículos modernos de última geração, meticulosamente mantidos para garantir 
              sua segurança e conforto durante toda a sua viagem.
            </p>
          </div>
          <div className="flex flex-col items-center text-center max-w-[160px]
          xl:max-w-none p-2 xl:p-0">
            <MdHandshake className="text-[30px] text-accent mb-4"/>
            <h3 className="h3">Serviços rápidos e flexíveis</h3>
            <p className="hidden xl:flex">
              Temos orgulho de nossos serviços rápidos e flexíveis, projetados para atender às suas 
              necessidades quando e onde você precisar de assistência.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
