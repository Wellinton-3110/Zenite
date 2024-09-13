import "../index.css";
import "../css/page1.css";
import { useState, useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";

import future01 from "../img/future01.png";

export function Page1(props) {
  const [numb1, setNumb1] = useState(1);
  const [especialidade, setEspecialidade] = useState(1);
  const [colaboradores, setColaboradores] = useState(100);
  const [contratos, setContratos] = useState(500);
  const [sedes, setSedes] = useState(0);
  const [paises, setPaises] = useState(5);

  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      setNumb1((prevNumb1) => {
        if (prevNumb1 >= 10) {
          clearInterval(interval);
          return prevNumb1;
        }
        return prevNumb1 + 1;
      });
    }, 300);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setEspecialidade((prevEspecialidade) => {
        if (prevEspecialidade >= 54) {
          clearInterval(interval);
          return prevEspecialidade;
        }
        return prevEspecialidade + 1;
      });
    }, 50);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setColaboradores((prevColaboradores) => {
        if (prevColaboradores >= 1000) {
          clearInterval(interval);
          return prevColaboradores;
        }
        return prevColaboradores + 100;
      });
    }, 300);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setContratos((prevContratos) => {
        if (prevContratos >= 3350) {
          clearInterval(interval);
          return prevContratos;
        }
        return prevContratos + 50;
      });
    }, 50);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSedes((prevSedes) => {
        if (prevSedes >= 4) {
          clearInterval(interval);
          return prevSedes;
        }
        return prevSedes + 1;
      });
    }, 700);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPaises((prevPaises) => {
        if (prevPaises >= 25) {
          clearInterval(interval);
          return prevPaises;
        }
        return prevPaises + 1;
      });
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      ref={props.page1Ref}
      className="Body1 h-[100vh] w-[100vw] relative --Responsive--> sm:h-[80vh]"
    >
      <div className="imgNumb1 absolute w-[300px] h-[300px] top-[-5%] left-[13%] --responsive--> md:w-[300px] md:h-[160px] md:top-[1] md:left-[10%] sm:top-[-2%] sm:left-[1%] sm:w-[120px]">
        <img src={future01} alt="imagem número 1" />
      </div>
      <div className="Number1 w-[75vw] h-[60vh] m-auto relative top-[55%] translate-y-[-50%] border border-white border-l-0 border-r-0 --responsive--> md:w-[85vw] ">
        <div className="TextBody2 relative w-[200px] h-[20px] top-[-10%] left-[100%] translate-x-[-100%] sm:left-[50%] sm:translate-x-[-50%] sm:justify-center flex items-center justify-end ">
          <h1
            id="page1H1"
            className=" text-[white] font-bold text-[15px] --responsive--> lg:text-[15px] md:text-[12px] sm:text-[12px] sm:mt-[35px]"
          >
            {t("PAGE1_H1_PT")}
          </h1>
        </div>
        <div className="Subsidiárias absolute left-[20%] top-[10%] max-w-[150px] max-h-[150px] flex flex-col items-center justify-center text-white text-center --responsive--> sm:left-[1%] sm:top-[2%]">
          <div className="text-[70px] font-bold md:text-[45px] sm:text-[30px]">
            {numb1}
          </div>
          <h2
            id="page1Subsidiarias"
            className="text-[21px] font-normal --responsive--> md:text-[20px] sm:text-[15px]"
          >
            {t("PAGE1_H2_SUBSIDIARIAS_PT")}
          </h2>
        </div>

        <div className="Subsidiárias absolute left-[15%] top-[60%] max-w-[120px] max-h-[150px] flex flex-col items-center justify-center text-white text-center --responsive--> sm:left-[1%]">
          <div className="text-[70px] font-bold md:text-[45px] sm:text-[30px]">
            {especialidade}
          </div>
          <h2
            id="page1Especialidades"
            className="text-[21px] font-normal --responsive--> md:text-[20px] sm:text-[15px]"
          >
            {t("PAGE1_H2_ESPECIALIDADES_PT")}
          </h2>
        </div>

        <div className="Colaboradores absolute left-[35%] top-[55%] max-w-[180px] max-h-[150px] flex flex-col items-center justify-center text-white text-center --responsive--> sm:left-[13%] sm:top-[35%]">
          <div className="text-[70px] font-medium md:text-[45px] sm:text-[30px]">
            +{colaboradores}
          </div>
          <h2
            id="page1Colaboradores"
            className="text-[21px] font-normal --responsive--> md:text-[20px] sm:text-[15px]"
          >
            {t("PAGE1_H2_COLABORADORES_PT")}
          </h2>
        </div>

        <div className="Contratos absolute left-[55%] top-[13%] max-w-[290px] max-h-[150px] flex flex-col items-center justify-center text-white text-center --responsive--> sm:left-[50%] sm:top-[2%]">
          <div className="text-[70px] font-medium md:text-[45px] sm:text-[30px]">
            +{contratos}
          </div>
          <h2
            id="page1Contratos"
            className="text-[21px] font-normal --responsive--> md:text-[20px] sm:text-[15px]"
          >
            {t("PAGE1_H2_CONTRATOS_PT")}
          </h2>
        </div>

        <div className="Sedes absolute left-[65%] top-[60%] max-w-[290px] max-h-[150px] flex flex-col items-center justify-center text-white text-center">
          <div className="text-[70px] font-medium md:text-[45px] sm:text-[30px]">
            +{sedes}
          </div>
          <h2
            id="page1Sedes"
            className="text-[21px] font-normal --responsive--> md:text-[20px] sm:text-[15px]"
          >
            {t("PAGE1_H2_SEDES_PT")}
          </h2>
        </div>

        <div className="Paises absolute left-[88%] top-[30%] max-w-[240px] max-h-[150px] flex flex-col items-center justify-center text-white text-center --responsive--> sm:left-[65%] sm:top-[30%]">
          <div className="text-[70px] font-medium md:text-[45px] sm:text-[30px]">
            +{paises}
          </div>
          <h2
            id="page1Paises"
            className="text-[21px] font-normal --responsive--> md:text-[20px] sm:text-[15px]"
          >
            {t("PAGE1_H2_PAISES_PT")}
          </h2>
        </div>
      </div>
    </div>
  );
}
