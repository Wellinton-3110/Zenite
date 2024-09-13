import zenitePage03 from "../../img/zenitePage03.png";
import { Button } from "../button/Button";
import { useTranslation } from "react-i18next";

export function Page3(props) {
  const { t } = useTranslation();
  return (
    <div ref={props.page3Ref} className="relative h-[80vh] w-full">
      <img
        src={zenitePage03}
        alt="Zenite pagina 3 imagem"
        className="absolute top-[43%] left-[20.5%] --responsive--> md:left-[23%] md:top-[65%] md:w-[300px] sm:w-[150px] sm:top-[63%] sm:left-[45%]"
      />
      <p className="absolute top-[-11%] left-[36.5%] w-[670px] h-[480px] p-[40px] bg-gradient-to-b from-[#00AEAD] to-[#19A9DB] --responsive--> md:w-[390px] md:h-[600px] md:left-[45%] sm:w-[250px] sm:h-[430px] sm:top-0 sm:left-0 sm:p-[15px] sm:text-left ">
        <h1
          id="page3H1"
          className="text-[42px] text-white after:w-[90px] after:h-[0.5px] after:bg-white after:block after:mt-[20px] font-serif --responsive--> md:text-[35px] sm:text-[15px] sm:after:w-[50px]"
        >
          {t("PAGE3H1_PT")}
        </h1>
        <h3
          id="page3H3"
          className="font-light mt-[20px] text-white --responsive--> md:text-[15px] sm:text-[14px] "
        >
          {t("PAGE3H3_PT")}
        </h3>
        <Button
          link="https://www.future-motion.eu/pt/unidades-de-negocio"
          text="text-[#13ABCF]"
          background="bg-[white]"
          positionX="left-[75%]"
          positionY="top-[79%]"
          translateX="translate-x-[-50%]"
          translateY="translate-y-[-20%]"
        />
      </p>
    </div>
  );
}
