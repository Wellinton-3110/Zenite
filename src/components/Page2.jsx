import zenitePage2 from "../img/zenitePage2.png";
import zenitePage2BG from "../img/zenitePage2BG.jpg";
import { Button } from "../components/button/Button";
import { useTranslation } from "react-i18next";

export function Page2(props) {
  const { t } = useTranslation();
  return (
    <div ref={props.page2Ref} className="flex flex-col relative">
      <div className="Page2 w-[100vw] h-[90vh] bg-slate-100 relative ----> md:h-[110vh]">
        <img
          src={zenitePage2}
          alt="Imagem Página 2"
          className="absolute top-[10%] left-[67%] w-[320px] h-[230px] ---responsive--> md:w-[300px] md:h-[190px] md:left-[65%] md:top-[7%] sm:left-[10%] sm:mt-[-2%] sm:h-[110px] sm:w-[170px]"
        />

        <div className="absolute left-[53%] top-[54%] translate-x-[-70%] translate-y-[-50%] z-10 w-[65%] h-[65%] p-5 flex flex-col text-left bg-white ---responsive--> md:h-[60%] md:overflow-auto sm:ml-[14%] sm:h-[71%]">
          <h1
            id="page2H1"
            className="mt-[10px] text-[45px] text-[#41BDBA] font-serif ml-[30px] mb-[30px] after:w-[100px] after:h-[2px] after:block after:mt-5 after:bg-gradient-to-r from-[#286993] to-[#41BDBA] ---responsive--> md:text-[35px] sm:text-[17px] sm:font-light after:md:h-[1px] after:md:w-[70px]"
          >
            {t("PAGE2H1_PT")}
          </h1>

          <p
            id="page2P"
            className="font-light ml-[30px] text-[17px] text-black/70 ---responsive--> md:text-[14px] sm:text-[12px] "
          >
            {t("PAGE2P_PT")}
          </p>
          <Button
            link="https://www.future-motion.eu/pt/conceito-future"
            text="text-[white]"
            background="bg-[#00AEAD]"
            positionX="left-[87%]"
            positionY="top-[79%]"
            translateX="translate-x-[-50%]"
            translateY="translate-y-[-20%]"
            smTranslateY="sm:top-[88%]"
            smTranslateX="sm:left-[75%]"
          />
        </div>
      </div>
      <div className="w-[100vw] h-[100vh] --responsive--> sm:h-[75vh]">
        <img src={zenitePage2BG} alt="" className="w-[100%] h-[100%]" />
      </div>
    </div>
  );
}
