import { useContext, useState } from "react";
import { MyContext } from "../../App";
import { useTranslation } from "react-i18next";

export function Button(props) {
  const { buttonRef, currentButtonText } = useContext(MyContext);
  const { t } = useTranslation();
  const personalCssTW = `absolute ${props.positionY} ${props.positionX} ${props.translateX} ${props.translateY} ${props.background} ${props.text} ${props.smTranslateY} ${props.smTranslateX} z-10 top-0 w-[150px] h-[60px] rounded-full --responsive--> md:w-[135px] md:h-[47px] sm:w-[90px] sm:h-[25px] sm:text-[10px] sm:font-semibold`;

  return (
    <div ref={buttonRef}>
      <button id="myButton" className={personalCssTW}>
        {currentButtonText}
      </button>
    </div>
  );
}
