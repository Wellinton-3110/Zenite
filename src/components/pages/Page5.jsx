import zenitePage5 from "../../img/zenitePage5.png";
import { Button } from "../button/Button";
import { useTranslation } from "react-i18next";

export function Page5(props) {
  const { t } = useTranslation();
  return (
    <div
      ref={props.page5Ref}
      className="relative h-[90vh] w-[100vw] md:h-[120vh] sm:h-[80vh]"
    >
      <img
        src={zenitePage5}
        alt="Zenite pagina 3 imagem"
        className="absolute top-0 left-[20%] --responsive--> md:left-[17%] md:top-[27%] md:w-[300px] sm:w-[150px] sm:top-[90%] sm:left-[48%]"
      />
      <p className="absolute top-[21%] right-[10%] w-[900px] h-[450px] p-[40px] bg-[whitesmoke] --responsive--> md:w-[850px] md:h-[450px] md:left-[50%] md:translate-x-[-50%] md:top-[55%] md:translate-y-[-20%] sm:w-[230px] sm:h-[550px] sm:top-[25%] sm:p-[15px] sm:text-left sm:left-[40%]">
        <h1
          id="page5H1"
          className="text-[42px] text-[#00AEAD]/90 after:w-[90px] after:h-[0.5px] after:bg-[#00AEAD] after:block after:mt-[20px] font-serif --responsive--> sm:text-[15px] sm:after:w-[50px]"
        >
          {t("PAGE5H1_PT")}
        </h1>
        <h3
          id="page5H3"
          className="font-light mt-[20px] text-black/80 --responsive--> sm:text-[14px] "
        >
          {t("PAGE5H3_PT")}
        </h3>
        <Button
          link="https://www.future-motion.eu/pt/inovacao-e-tecnologia"
          text="text-[white]"
          background="bg-[#00AEAD]"
          positionX="left-[85%]"
          positionY="top-[79%]"
          translateX="translate-x-[-50%]"
          translateY="translate-y-[-20%]"
          smTranslateY="sm:top-[85%]"
          smTranslateX="sm:left-[75%]"
        />
      </p>
    </div>
  );
}
