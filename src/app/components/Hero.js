"use client";

import { useSeachContext } from "../context/search";
//components
import Search from "./Search";

export default function Hero() {
  const { searchActive } = useSeachContext();

  return (
    <section className="h-screen xl:h-[90vh] bg-[#b2b7c2]/10" id="home">
      <div className="container mx-auto h-full xl:pt-10 ">hero container</div>
      {/* {searchActive ? (
        <div className="fixed top-[80px] z-10 w-full max-w-[1920px]">
          <Search />
        </div>
      ) : (
        <div className="-mt-12 max-w[1300px] mx-auto">
          <Search />
        </div>
      )} */}

      <div
        className={`${
          searchActive
            ? "fixed top-[80px] z-10 w-full max-w-[1920px]"
            : "-mt-12 max-w[1300px] mx-auto"
        }`}
      >
        <Search />
      </div>
    </section>
  );
}
