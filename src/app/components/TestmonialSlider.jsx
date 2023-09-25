"use client";

//swiper components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

//icons
import { FaQuoteLeft } from "react-icons/fa";

//motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../../../variants";

//next iumage
import Image from "next/image";

//data
const testimonialData = [
  {
    message: "They truly exceed my expectations and made my car rental experience a delight.",
    avatar: "/images/testimonial/avatar.png",
    name: "Jane Doe",
    job: "Photographer & Videographer"
  },
  {
    message: "The cars were modern and incredibly comfortable, making our journey a smooth and enjoyable one",
    avatar: "/images/testimonial/avatar.png",
    name: "Ana Doe",
    job: "Software Engineer"
  },
]

export default function TestimonialSlider() {
  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: false, amount: 0.6}}
      className="container mx-auto"
    >
      <Swiper 
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="h-[450px] xl:h-[400px]"
      >
        {testimonialData.map((testimonial)=>{
          const { message, avatar, name, job } = testimonial;

          return <SwiperSlide key={testimonial.name}>
            <div className="flex flex-col justify-center items-center text-center">
              <FaQuoteLeft className="text-7xl text-accent mb-6"/>
              <p className="text-2xl xl:text-4xl max-w-[874px] mb-12 font-medium text-black">{message}</p>
              <Image src={avatar} width={64} height={64} alt={`${name}'s pic`} className="mb4"/>
              <p className="text-lg font-medium text-black">{name}</p>
              <p className="text-secondary">{job}</p>
            </div>
          </SwiperSlide>
        })}
      </Swiper>
    </motion.div>
  )
}
