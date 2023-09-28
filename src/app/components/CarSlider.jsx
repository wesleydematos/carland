"use client"

//swiper
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

//next image
import Image from "next/image";

//icons
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"

//framer motion
import { motion } from "framer-motion"

//variants
import { fadeIn } from "../../../variants";

//car data
const cars = [
  {
    type: "Hatchback",
    name: "Ford Focus",
    price: 60,
    stars: 3.5,
    image: "images/carSlider/car01.svg",
    info: [
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Manual"
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "5 Lugares"
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Gas"
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "45L"
      },
    ]
  },
  {
    type: "Sedan",
    name: "Toyota Corolla",
    price: 100,
    stars: 5,
    image: "images/carSlider/car02.svg",
    info: [
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Manual"
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "5 Lugares"
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Álcool"
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "45L"
      },
    ]
  },
  {
    type: "SUV",
    name: "Honda CR-V",
    price: 75,
    stars: 4.7,
    image: "images/carSlider/car03.svg",
    info: [
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Automático"
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "5 Lugares"
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Gas"
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "45L"
      },
    ]
  },
  {
    type: "Convertible",
    name: "Hazda MX-5",
    price: 95,
    stars: 4.9,
    image: "images/carSlider/car02.svg",
    info: [
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Automático"
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "5 Lugares"
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Gas"
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "45L"
      },
    ]
  },
]


export default function CarSlider() {
    return (
      <motion.div 
        variants={fadeIn("up", 0.4)} 
        initial="hidden"  
        whileInView={"show"}
        viewport={{once: false, amount: 0.2}}
        className="container mx-auto"
      >
        <Swiper 
          breakpoints={{
            320: {slidesPerView: 1, spaceBetween: 15}, 
            640: {slidesPerView: 2, spaceBetween: 32},
            1260: {slidesPerView: 3, spaceBetween: 32},
          }}
        >
          {cars.map((car)=>{
            return <SwiperSlide key={car.name}>
              <div className="max-w-[385px] mx-auto sm:mx-0">
                <Image src={car.image} width={380} height={284} alt={car.name}/>
                <div className="flex justify-between">
                  <div>
                    <p className="text-[13px] uppercase">{car.type}</p>
                    <h3 className="text-[1rem] leading-6 uppercase font-bold">{car.name}</h3>
                    <p className="mb-6 text-accent uppercase font-semibold">R${car.price}/day</p>
                  </div>
                  <div className="flex gap-x-2 text-accent h-max">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                  </div>
                </div>
                <div className="flex gap-x-3 xl:gap-x-4 w-full mb-6 justify-between">
                  {car.info.map((item)=>{
                    return <div key={car.type} className="flex flex-col items-center">
                      <div className="bg-primary w-12 h-12 rounded-full flex 
                      justify-center items-center">
                        <Image src={item.icon} width={24} height={24} alt={item.text}/>
                      </div>
                      <p className="text-[12px] uppercase text-black">{item.text}</p>
                    </div>
                  })}
                </div>
                <button className="btn btn-accent btn-lg cursor-not-allowed" disabled>Ver detalhes</button>
              </div>
            </SwiperSlide>
          })}
        </Swiper>
      </motion.div>
    );
  }