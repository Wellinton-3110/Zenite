import { useState, useContext } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { MyContext } from "../App";

export function Idiomas() {
  const [languagePT, setLanguagePT] = useState("Português");
  const [languageEN, setLanguageEN] = useState("English");
  const [selectedLanguage, setSelectedLanguage] = useState("Português");

  const { changeLanguageToPT, changeLanguageToEN } = useContext(MyContext);

  function setLanguageToPT() {
    const language = document.getElementById("languageSelected");
    setSelectedLanguage("Português");
  }
  function setLanguageToEN() {
    const language = document.getElementById("languageSelected");
    setSelectedLanguage("English");
  }

  function hiddenMenu() {
    const hiddenMenu = document.getElementById("hiddenMenu");
    hiddenMenu.classList.toggle("hidden");
  }

  return (
    <div>
      <span className="absolute w-[200px] border-l-[1px] h-[100%] ">
        <h1
          onClick={hiddenMenu}
          id="languageSelected"
          className="relative w-[100px] flex h-[50%] absolute ml-5 mt-3 font-light text-[13px] cursor-pointer"
        >
          {selectedLanguage}
          <FaAngleDown className="absolute w-[15px] h-[15px] mt-1 right-[10%]" />
        </h1>
        <li
          id="hiddenMenu"
          className="absolute hidden z-10 top-[80%] left-[0%] w-[130px] h-[70px] font-light text-[12px] flex flex-col justify-around font-semibold text-black/70 border list-none bg-[#F7F7F7]"
        >
          <i
            onClick={() => {
              setLanguageToPT();
              changeLanguageToPT();
            }}
            className="hover:bg-[#00AEAD] h-[35px] pl-5 pt-2"
          >
            {languagePT}
          </i>
          <i
            onClick={() => {
              setLanguageToEN();
              changeLanguageToEN();
            }}
            className="hover:bg-[#00AEAD] h-[35px] pl-5 pt-2"
          >
            {languageEN}
          </i>
        </li>
      </span>
    </div>
  );
}
