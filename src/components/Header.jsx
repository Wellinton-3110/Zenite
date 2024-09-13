import zeniteLogo from "../img/zeniteLogo.png";
import { IoSearchOutline } from "react-icons/io5";
import { Idiomas } from "./Idiomas";
import { Header2 } from "./Header2";
import "../index.css";

export function Header(props) {
  return (
    <>
      <div
        ref={props.navBarRef}
        className="Header h-[20vh] w-[100vw] flex relative"
      >
        <div className="Logo absolute w-[18%] h-[100%] left-[7%] bg-white text-center">
          <img src={zeniteLogo} className="w-[100%] h-[100%] m-1" />
        </div>

        <div className="Search flex absolute right-[7%] w-[68%] h-[35%] border-b-[1px] border-slate-400">
          <IoSearchOutline className="absolute w-[20px] h-[20px] mt-3 text-[#696969]" />
          <li className="w-[40%] h-[100%] ml-[45%] flex justify-around list-none mt-3 ">
            <h1 className="w-[200px] h-[100%] font-bold text-[#696969] text-[13px] cursor-pointer --responsive--> md:text-[8px] md:w-[150px] md:mr-5">
              ZENITE MOTION BRASIL
            </h1>
            <h1 className="w-[200px] h-[100%] font-bold text-[#696969] text-[13px] cursor-pointer --responsive--> md:text-[8px] md:w-[150px] md:mr-5">
              ZENITE PROMAN
            </h1>
            <h1 className="w-[200px] h-[100%] font-bold text-[#696969] text-[13px] cursor-pointer --responsive--> md:text-[8px] md:w-[150px] md:mr-5">
              ZENITE ASIA
            </h1>
          </li>
          <Idiomas />
        </div>
        <Header2 />
      </div>
    </>
  );
}
