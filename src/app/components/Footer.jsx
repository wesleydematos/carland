"use client";

//next image
import Image from "next/image";

//icons
import { FaPhone, FaEnvelope, FaLinkedin } from "react-icons/fa6";

//components
import Copyright from "./Copyright";

//motion
import { motion } from "framer-motion";

//varianta
import { fadeIn } from "../../../variants";

//react scroll
import { Link } from "react-scroll";

export default function Footer() {
  return <footer className="pt-20 bg-white z-20">
    <div className="container mx-auto mb-24">
      <motion.div 
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.6}}
        className="flex flex-col lg:flex-row lg:justify-between gap-x-5
        gap-y-14"
      >
        <div className="flex flex-col flex-1 gap-y-8">
          <Link to="home" smooth={true} spy={true} className="cursor-pointer">
            <Image src={"icons/logo.svg"} width={200} height={200}/>
          </Link>
          <p>Contatos do desenvolvedor:</p>
          <div className="flex flex-col gap-y-4 font-semibold">
            <div className="flex items-center gap-x-[10px]">
              <FaPhone/>
              <p className="font-medium">+55 (81) 99560-7418</p>
            </div>
            <div className="flex items-center gap-x-[10px]">
              <FaEnvelope/>
              <p className="font-medium">wesleydematos3@gmail.com</p>
            </div>
            <div className="flex items-center gap-x-[10px]">
              <FaLinkedin/>
              <p>
               <a className="font-medium" href="https://www.linkedin.com/in/wesley-matos/" target="_blank">LinkedIn</a>
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col xl:items-center">
          <div>
            <h3 className="h3 font-bold mb-8">Empresa</h3>
            <ul className="flex flex-col gap-y-4 font-semibold">
              <li><a href="">Carreiras</a></li>
              <li><a href="">Mobile</a></li>
              <li><a href="">Blog</a></li>
              <li><a href="">Funcionários</a></li>
              <li><a href="">Como Trabalhamos</a></li>
            </ul>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="h3 font-bold mb-8">Horários de funcionamento</h3>
          <div className="flex flex-col gap-y-4">
            <div className="flex gap-x-2">
              <p>Segunda-Sexta:</p>
              <p className="font-semibold">09h00 - 21h00</p>
            </div>
            <div className="flex gap-x-2">
              <p>Sábados:</p>
              <p className="font-semibold">09h00 - 19h00</p>
            </div>
            <div className="flex gap-x-2">
              <p>Domingos:</p>
              <p className="font-semibold">Fechado</p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="h3 font-bold mb-8">Boletim de notícias</h3>
          <p className="font-semibold mb-9">Inscreva-se:</p>
          <form className="flex gap-x-2 h-14">
            <input type="email" placeholder="Seu email" className="outline-none 
            bg-white h-full border rounded-lg pl-4 focus:border-accent"/>
            <button type="submit" className="btn btn-sm btn-accent w-24 cursor-not-allowed" disabled>Enviar</button>
          </form>
        </div>
      </motion.div>
    </div>
    <Copyright/>
  </footer>;
}
