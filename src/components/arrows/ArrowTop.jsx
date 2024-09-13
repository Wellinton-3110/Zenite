import { FaArrowUp } from "react-icons/fa6";
import { useContext, useRef } from "react";
import { MyContext } from "../../App";

export function ArrowTop() {
  const { scrollToNav, scrollToNavMenu } = useContext(MyContext);
  return (
    <div
      onClick={() => {
        scrollToNav();
        scrollToNavMenu();
      }}
      className="fixed z-50 top-[90%] right-[10%] w-[55px] h-[55px] flex items-center justify-center border-[1px] cursor-pointer animate-bounce border-black/50 --responsive--> sm:w-[40px] sm:h-[40px]"
    >
      <FaArrowUp className="w-[30px] h-[30px] " />
    </div>
  );
}
