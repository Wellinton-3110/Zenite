import { useState, useContext } from "react";
import { IoMenu } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import zeniteImgMenu from "../img/zeniteLogo.png";
import { MyContext } from "../App";
import { IoMdClose } from "react-icons/io";

import "../css/animation/menuAnimation.css";

export function HeaderMenu(props) {
  const [showMenu, setShowMenu] = useState("oi");

  const { responsiveChangeLanguageToPT, responsiveChangeLanguageToEN } =
    useContext(MyContext);

  const closeMenu = () => {
    const closeMenu = document.getElementById("closeMenu");
    closeMenu.classList.add("menuSlideAnimation");
  };

  function activateSideMenu() {
    const showMenu = document.getElementById("closeMenu");
    setTimeout(() => {
      showMenu.classList.remove("hidden");
      showMenu.classList.remove("menuSlideAnimation");
    }, 200);
  }

  function hideLogo() {
    const item2 = document.getElementById("item2");
    const item3 = document.getElementById("item3");
    item2.classList.toggle("hidden");
    item3.classList.toggle("hidden");
  }
  return (
    <div
      ref={props.headerMenuLeft}
      className="relative w-[100vw] h-[15vh] flex --responsive-->"
    >
      <div className="flex">
        <i
          id="item1"
          className="absolute left-[8%] top-[30%] flex items-center justify-center w-[40px] h-[50px]"
        >
          <IoMenu
            onClick={activateSideMenu}
            className="w-[35px] h-[50px] text-black/90 cursor-pointer"
          />
        </i>
        <i id="item2" className="">
          <img
            src={zeniteImgMenu}
            alt="zenite logomarca"
            className="absolute w-[300px] h-[160px] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] --responsive--> sm:w-[200px] sm:h-[140px]"
          />
        </i>
        <i className="absolute w-[40px] h-[40px] right-[10%] top-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center">
          <IoSearchOutline onClick={hideLogo} className="w-[30px] h-[30px]" />
          <input
            id="item3"
            placeholder=" Pesquisar"
            type="text"
            className="absolute hidden w-[200px] h-[35px] left-[-230px] shadow-md rounded-md transition-all --responsive--> sm:w-[140px] sm:left-[-150px]"
          />
        </i>
      </div>

      <div className="relative">
        <li
          id="closeMenu"
          className="hidden list-none fixed z-20 w-[85vw] h-[98vh] flex flex-col p-[20px] bg-white"
        >
          <i className="w-[100%] bg-white ">
            <IoMdClose
              onClick={closeMenu}
              className="absolute top-[25px] w-[30px] h-[30px]"
            />
            <span className="absolute top-0 right-0 flex items-center">
              <h1
                onClick={responsiveChangeLanguageToPT}
                className="w-10 h-7 text-center bg-black/10 hover:bg-black/30 "
              >
                PT
              </h1>

              <h1
                onClick={responsiveChangeLanguageToEN}
                className="w-10 h-7 text-center bg-black/10 hover:bg-black/30 "
              >
                EN
              </h1>
            </span>
          </i>
          <i className="mt-[80px] ml-[40px] text-black/70">SOBRE NÓS</i>
          <i className="mt-[20px] ml-[40px] text-black/70">CONCEITO FUTURE</i>
          <i className="mt-[20px] ml-[40px] text-black/70">
            UNIDADE DE NEGÓCIO
          </i>
          <i className="mt-[20px] ml-[40px] text-black/70">COMPETÊNCIAS</i>
          <i className="mt-[20px] ml-[40px] text-black/70">
            AGÊNCIA DE INVESTIMENTO E DESENVOLVIMENTO
          </i>
          <i className="mt-[20px] ml-[40px] text-black/70">
            INOVAÇÃO E TECNOLOGIA
          </i>
          <i className="relative mt-[20px] ml-[40px] text-black/70 after:w-[80px] after:h-[2px] after:bg-gradient-to-r from-[#286993] to-[#41BDBA] hover:text-black after:block after:relative after:left-[0%] after:top-[200%]">
            MEDIA E INSIGHTS
          </i>
          <i className="mt-[100px] ml-[40px] text-black/70">
            FUTURE MOTION BRASIL
          </i>
          <i className="mt-[20px] ml-[40px] text-black/70">FUTURE PROMAN</i>
          <i className="mt-[20px] ml-[40px] text-black/70">FUTURE ASIA</i>
        </li>
      </div>
    </div>
  );
}
