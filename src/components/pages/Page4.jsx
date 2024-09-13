import zenitePage4 from "../../img/zenitePage4.png";
import { Button } from "../button/Button";
import { useTranslation } from "react-i18next";

export function Page4(props) {
  const { t } = useTranslation();
  return (
    <div ref={props.page4Ref} className="relative h-[90vh] w-[100vw]">
      <img
        src={zenitePage4}
        alt="Zenite pagina 3 imagem"
        className="absolute top-[53%] left-[65%] --responsive--> md:left-[63%] md:top-[91%] md:w-[300px] sm:w-[150px] sm:top-[73%] sm:left-[0%]"
      />
      <p className="absolute top-[20%] right-[30%] w-[950px] h-[500px] p-[40px] bg-[whitesmoke] --responsive--> md:w-[670px] md:h-[600px] md:left-[15%] sm:w-[230px] sm:h-[570px] sm:top-0 sm:p-[15px] sm:text-left sm:left-[34%]">
        <h1
          id="page4H1"
          className="text-[42px] text-[#00AEAD]/90 after:w-[90px] after:h-[0.5px] after:bg-[#00AEAD] after:block after:mt-[20px] font-serif --responsive--> sm:text-[15px] sm:after:w-[50px]"
        >
          {t("PAGE4H1_PT")}
        </h1>
        <h3
          id="page4H3"
          className="font-light mt-[20px] text-black/70 --responsive--> sm:text-[14px] "
        >
          {t("PAGE4H3_PT")}
        </h3>
        <Button
          link="https://www.future-motion.eu/pt/agencia-de-investimento-e-desenvolvimento"
          text="text-[white]"
          background="bg-[#00AEAD]"
          positionX="left-[85%]"
          positionY="top-[79%]"
          translateX="translate-x-[-50%]"
          translateY="translate-y-[-20%]"
          smTranslateY="sm:top-[88%]"
          smTranslateX="sm:left-[70%]"
        />
      </p>
    </div>
  );
}
