import { FaArrowDown } from "react-icons/fa6";

export function ArrowDown() {
  return (
    <div className="fixed z-50 top-[90%] left-[11%] w-[55px] h-[55px] flex items-center justify-center border-[1px] animate-bounce border-black/50 --responsive--> sm:w-[40px] sm:h-[40px]">
      <FaArrowDown className="w-[30px] h-[30px] " />
    </div>
  );
}
