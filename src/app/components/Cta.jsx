"use client";

//next Image
import Image from "next/image";

//motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../../../variants";

export default function Cta() {
  return (
    <section
      className="pt-24 xl:pt-48 flex items-center pb-0 bg-[#b2b7c2]/10"
      id="contact"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row xl:items-center">
          <div className="flex-1 xl:ml-24 text-center md:text-left mb-12 md:mb-0">
            <div className="max-w-[520px] mx-auto order-2 xl:order-none">
              <motion.h2 
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.6}}
                className="h2"
              >
                Baixe nosso aplicativo agora e pegue a estrada com facilidade
              </motion.h2>
              <motion.p
                variants={fadeIn("right", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.2}}
                className="mb-10"
              >
                Esteja você planejando uma viagem longa ou precisando de uma viagem rápida, 
                nosso aplicativo conecta você a uma frota de veículos de qualidade ao seu alcance. 
                Pegue o volante hoje e comece sua jornada!
              </motion.p>
              <motion.div 
                variants={fadeIn("right", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.6}}
                className="flex gap-x-3 justify-center md:justify-start"
              >
                <button className="btn-cta cursor-not-allowed" disabled>
                  <Image src={"icons/buttons/google-play.svg"} width={132} height={36} alt="google play"/>
                </button>
                <button className="btn-cta cursor-not-allowed" disabled>
                  <Image src={"icons/buttons/app-store.svg"} width={132} height={36} alt="apple store"/>
                </button>
              </motion.div>
            </div>
          </div>
          <motion.div 
            variants={fadeIn("left", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.2}}
            className="flex1 flex justify-center order-1 md:order-none"
          >
            <Image src={"/images/cta/phone.svg"} width={320} height={640} alt="phone"/>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
