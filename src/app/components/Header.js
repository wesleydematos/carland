"use client";
import { useContext, useEffect, useState } from "react";

//next image
import Image from "next/image";

//react scroll
import { Link } from "react-scroll";

//components
import SearchMobile from "./SearchMobile";

//media query hook
import { useMediaQuery } from "react-responsive";

//icons
import { BiMenuAltRight, BiX } from "react-icons/bi";

//search context
import { useSeachContext } from "../context/search";

export default function Header() {
  const { setSearchActive } = useSeachContext();

  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);

  const desktopMode = useMediaQuery({
    query: "(min-width: 1300px)",
  });

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 40 ? setHeader(true) : setHeader(false);
      window.scrollY > 800 ? setSearchActive(true) : setSearchActive(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header
      className={`${
        header ? "bg-white shadow-md py-2 " : "bg-transparent shadow-none py-4"
      } fixed w-full max-w-[1920px] mx-auto z-20 transition-all duration-300`}
    >
      <div className="xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between">
        <div className="flex justify-between items-center px-4">
          <Link
            to="home"
            smooth={desktopMode}
            spy={true}
            className="cursor-pointer"
          >
            <Image
              src={"./icons/logo.svg"}
              width={194}
              height={64}
              alt={"logo"}
            />
          </Link>
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer xl:hidden"
          >
            {nav ? (
              <BiX className="text-4xl" />
            ) : (
              <BiMenuAltRight className="text-4xl" />
            )}
          </div>
        </div>
        <nav
          className={`${
            nav ? "max-h-max py-8 px-4 xl:px-0 xl:py-0" : "max-h-0 xl:max-h-max"
          } flex flex-col w-full bg-white gap-y-6 overflow-hidden font-bold xl:font-medium 
          xl:flex-row xl:w-max xl:gap-x-8 xl:h-max bg-transparent xl:pb-0 transition-all 
          duration-150 text-center xl:text-left uppercase text-sm xl:text-[15px] xl:normal-case`}
        >
          <Link
            to="home"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
            className="cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="cars"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
            className="cursor-pointer"
          >
            Cars
          </Link>
          <Link
            to="about"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
            className="cursor-pointer"
          >
            About
          </Link>
          <Link
            to="why"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
            className="cursor-pointer"
          >
            Why us
          </Link>
          <Link
            to="testimonials"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
            className="cursor-pointer"
          >
            Testimonials
          </Link>
          <Link
            to="contact"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
            className="cursor-pointer"
          >
            Contact
          </Link>
          <Link
            to="/"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
            className="xl:hidden btn btn-primary btn-sm max-w-[164px] mx-auto"
          >
            See all cars
          </Link>
          <SearchMobile />
        </nav>
      </div>
    </header>
  );
}
