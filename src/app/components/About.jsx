"use client"

//next image
import Image from "next/image";

//icons
import { MdOutlineBuildCircle, MdOutlineDirectionsCar, MdOutlineMapsHomeWork } from "react-icons/md";

//react count up
import CountUp from "react-countup";

//intecsection observer
import { useInView } from "react-intersection-observer";

//motion
import { motion } from "framer-motion"; 

//variants
import { fadeIn } from "../../../variants";

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.5
  })

  return (
    <section 
      className="section flex items-center" 
      id="about"
      ref={ref}
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:justify-between">
          <motion.div 
            className="flex-1 mb-8 xl:mb-0"
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.6}}
            variants={fadeIn("up", 0.2)}
          >
            <Image className="rounded-[20px]" src={"/images/about/car01.png"} width={600} height={448} alt="car"/>
          </motion.div>
          <div className="flex-1 flex items-center xl:justify-center">
            <div className="xl:max-w-[517px]">
              <motion.h2 
                className="h2"
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.6}}
                variants={fadeIn("up", 0.4)}
              >
                Serviços de automóveis simplificados.
              </motion.h2>
              <motion.p 
                className="mb-[42px] max-w-md"
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.6}}
                variants={fadeIn("up", 0.6)}
              >
                Alugue, escolha e repare com facilidade. Nossas localizações convenientes, 
                diversos tipos de carros e pontos de reparo confiáveis ​
                ​garantem uma experiência perfeita.
              </motion.p>
              <motion.div 
                className="flex items-start gap-x-8 mb-12"
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.2}}
                variants={fadeIn("up", 0.8)}
              >
                <div className="flex flex-col w-[100px]">
                  <MdOutlineDirectionsCar className="text-5xl text-accent mb-2"/>
                  <div className="text-3xl font-black mb-2">
                    {inView ? <><CountUp start={0} end={50} duration={3} delay={1}/>+</> : null}
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-secondary">
                    tipos de <br /> carros
                  </div>
                </div>
                <div className="flex flex-col w-[100px]">
                  <MdOutlineMapsHomeWork className="text-5xl text-accent mb-2"/>
                  <div className="text-3xl font-black mb-2">
                    {inView ? <><CountUp start={0} end={135} duration={3} delay={1}/>+</> : null}
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-secondary">
                    locadoras 
                  </div>
                </div>
                <div className="flex flex-col w-[100px]">
                  <MdOutlineBuildCircle className="text-5xl text-accent mb-2"/>
                  <div className="text-3xl font-black mb-2">
                    {inView ? <><CountUp start={0} end={35} duration={3} delay={1}/>+</> : null}
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-secondary">
                    pontos de <br /> reparo
                  </div>
                </div>
              </motion.div>
              <motion.button 
                className="hidden xl:block bg-accent hover:bg-accent-hover
                rounded-[10px] w-full h-16 uppercase font-medium text-white
                tracking-[2px] text-[13px] max-w-[184px] cursor-not-allowed"
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.6}}
                variants={fadeIn("up", 1)}
                disabled
              >
                Ver todos os carros
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
