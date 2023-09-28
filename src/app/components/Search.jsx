"use client";

//search context
import { useSeachContext } from "../context/search";

//components
import LocationSelection from "./LocationSelection";
import DateSelection from "./DateSelection";
import HoursSelection from "./HoursSelection";

export default function Search() {
  const { searchActive } = useSeachContext();

  return (
    <div
      className={`${
        searchActive
          ? "rounded-none xl:h-[80px]"
          : "rounded-[20px] py-6 xl:pr-4 xl:h-[98px]"
      } bg-white hidden xl:block w-full relative shadow-lg`}
    >
      <div className={`flex h-full ${searchActive && "container mx-auto"}`}>
        <LocationSelection />
        <DateSelection />
        <HoursSelection />
        <div className="xl:h-full flex items-center px-6 xl:px-0">
          <button className={`${searchActive ? "xl:w-[164px] btn-sm" : "xl:w-[184px] btn-lg"} btn btn-accent cursor-not-allowed`} disabled>
            Pesquisar
          </button>
        </div>
      </div>
    </div>
  );
}
