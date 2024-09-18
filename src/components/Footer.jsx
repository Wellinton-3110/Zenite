import "../css/footer.css";
import zeniteLogoFooter from "../img/zeniteLogoFooter.png";
import { useState, useEffect, useContext, useRef } from "react";
import { MyContext } from "../App.jsx";
import { Map } from "../components/Map";
import MapModal from "./MapModal";
import { CgCloseR } from "react-icons/cg";
import { FaLinkedinIn } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";

export function Footer(props) {
  const [largura, setLargura] = useState(window.innerWidth);
  const [open, setOpen] = useState(false);

  const mapRef = useRef();

  useEffect(() => {
    const largura = () => {
      const largura = window.innerWidth;
      console.log("largura", largura);
      return setLargura(largura);
    };
    window.addEventListener("resize", largura);
    return () => window.removeEventListener("resize", largura);
  }, []);

  function openModal() {
    const modal = document.getElementById("Modal");
    modal.classList.remove("hidden");
    setTimeout(() => {
      if (mapRef.current) {
        mapRef.current.invalidateSize(); // Ajusta o tamanho do mapa ao abrir o modal
      }
    }, 0);
  }

  function closeModal() {
    const modal = document.getElementById("Modal");
    modal.classList.add("hidden");
  }

  return (
    <div
      ref={props.footerRef}
      className="Footer w-[100vw] h-[110vh] flex flex-col items-center relative --responsive--> md:h-[140vh]"
    >
      {/* --------------------Modal-------------------- */}
      <div
        id="Modal"
        className="hidden h-[100vh] w-[100vw] fixed top-0 left-0 z-20 bg-black/80 --responsive-->"
      >
        <MapModal ref={mapRef} className="z-20" />

        <button onClick={closeModal} className="absolute z-20 right-10 top-10">
          <CgCloseR className="w-[30px] h-[30px] text-[white]" />
        </button>
      </div>
      <div className="w-[90vw] h-[85vh] m-auto p-5 relative top-[5%] bg-gradient-to-r from-[#286993] to-[#41BDBA] --responsive--> md:w-[95vw] md:h-[120vh]">
        <section className="footBody flex">
          {/* --------------logo---------------- */}
          <div className="w-[250px] h-[300px] absolute z-10 left-[4vw] --responsive--> sm:left-[20vw]">
            <img
              src={zeniteLogoFooter}
              alt="logomarca rodapé"
              className="absolute h-[70px] w-[210px] ----> md:w-[200px] md:h-[60px] md:left-[50vw] md:translate-x-[-100%]"
            />
          </div>

          {/* ---------------Sede------------- */}
          <div className="Main-Sede flex flex-col w-[390px] h-[355px] text-white text-center font-medium absolute z-10 top-[3vh] left-[22vw] --responsive--> md:flex md:h-[155px] md:w-[90vw] md:left-0 md:top-[15vh]">
            <h1
              id="footerH1Sede"
              className="whiteLine flex items-center mb-[70px] --responsive--> md:mb-[20px]"
            >
              SEDE DO GRUPO ZENITE
            </h1>
            <h2 className="text-left text-[15px] font-light mb-2 md:text-[11px] md:mb-1 ----> tall:mb-0">
              Alameda Fernão Lopes, nº 16 – 11º Piso
            </h2>
            <h2 className="text-left text-[15px] font-light mb-2 md:text-[11px] md:mb-1 ----> tall:mb-0">
              1495-190 Algés,
            </h2>
            <h2 className="text-left text-[15px] font-light mb-5 md:text-[11px] md:mb-1 ----> tall:mb-0">
              Lisboa, Portugal
            </h2>

            <div className="flex absolute left-[15%] top-[60%] w-[210px] h-[30px] --responsive--> sm:left-[33%]">
              <div className="absolute top-[15%] w-[100px] cursor-pointer h-[28px] flex mr-[10px] items-center justify-center bg-white rounded-full text-[14px] text-[#41BDBA] font-mono --responsive--> tall:text-[12px] tall:w-[80px] tall:h-[25px]">
                <h3 id="footerH3Contatos">CONTATOS</h3>
              </div>

              <div
                onClick={openModal}
                className="absolute top-[15%] left-[50%] w-[100px] cursor-pointer h-[28px] flex items-center justify-center bg-white rounded-full text-[14px] text-[#41BDBA] font-mono --responsive--> tall:text-[12px] tall:w-[80px] tall:h-[25px]"
              >
                <h3 id="footerH3Mapa">VER NO MAPA</h3>
              </div>
            </div>

            <div className="w-[280px] h-[170px] absolute z-10 left-[0vw] bottom-[-5%] --responsive--> md:hidden">
              <Map />
            </div>
          </div>
          {/* ---------------Links rapidos-------------- */}
          <div className="Links flex flex-col w-[390px] h-[355px] text-white text-center font-medium absolute z-10 left-[48vw] top-[3vh] md:hidden">
            <h1
              id="footerH1Links"
              className="Sede whiteLine flex items-center mb-[70px]"
            >
              LINKS RÁPIDOS
            </h1>
            <h2
              id="footerH2Contatos"
              className="text-left  text-[13px] cursor-pointer font-light mb-5"
            >
              CONTATOS
            </h2>
            <h2
              id="footerH2SobreNos"
              className="text-left text-[13px] cursor-pointer font-light mb-5"
            >
              SOBRE NÓS
            </h2>
            <h2
              id="footerH2Lideranca"
              className="text-left text-[13px] cursor-pointer font-light mb-5"
            >
              LIDERANÇA
            </h2>
            <h2
              id="footerH2Manifesto"
              className="text-left text-[13px] cursor-pointer font-light mb-5"
            >
              MANIFESTO FUTURE
            </h2>
          </div>

          {/* -------------------Siga-nos------------------- */}
          <div className="Siganos flex flex-col w-[390px] h-[355px] text-white text-center font-medium absolute z-10 left-[67vw] top-[1.5vh] --responsive--> md:p-[20px] md:w-[90vw] md:h-[25vh] md:top-[40vh] md:left-[0]">
            <h1
              id="footerH1Siganos"
              className="whiteLine flex items-center mb-[35px] --responsive--> md:mb-[30px] md:relative md:w-[100%] tall:mt-3"
            >
              SIGA-NOS
            </h1>

            <div className="text-left w-[350px] absolute top-[35%] items-center flex text-[13px] font-light mb-0  --responsive--> md:w-[86.5vw] md:top-[55%]">
              <div className="w-7 h-7 bg-white flex items-center justify-center rounded-[50%] mb-10">
                <FaLinkedinIn className="w-4 h-4 text-[#3EB3B5] " />
              </div>
              <div className="ml-5 text-[15px] mb-10 cursor-pointer">
                <h2>Linkedin</h2>
              </div>
              <h1
                id="footerH1Subscrever"
                className="Newsletter flex items-center justify-left absolute top-[90%] left-0 text-[14px] font-bold --responsive--> md:w-[100%] md:top-[90%]"
              >
                SUBSCREVER NEWSLETTER
              </h1>
            </div>

            <div className="text-left absolute top-[75%] text-[13px] cursor-pointer font-light mb-5 flex --responsive--> md:top-[150%]">
              <input
                type="email"
                placeholder="  email"
                className="Email w-[150px] h-[25px]"
              />
              <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center ml-5 --responsive--> md:hidden">
                <SiMinutemailer className="w-5 h-5 [color:#3EB3B5] cursor-auto" />
              </div>
              <button className="w-[100px] h-[28px] relative left-[1%] top-[-10px] ml-[15px] mb-[20px] items-center justify-center bg-white rounded-full text-[14px] text-[#41BDBA] font-mono hidden --responsive--> md:block tall:text-[12px] tall:w-[80px] tall:h-[20px] tall:mt-[10px]">
                <h3>SUBSCREVER</h3>
              </button>
            </div>
          </div>
          {/* -------------------------------------- */}

          <footer className=" w-[70vw] h-[15vh] absolute top-[100%] left-[8VW] text-[13px] text-white font-light flex items-center justify-between border border-l-0 border-r-0 border-b-0 translate-y-[-100%] m-auto p-1 --responsive--> md:w-[85vw] md:h-[10vh] md:left-[3%] md:text-[10px] md:justify-around">
            <h3 className="cursor-pointer">TERMOS E CONDIÇÕES</h3>
            <h3 className="cursor-pointer">POLÍTICA DE COOKIES</h3>
            <h3 className="cursor-pointer">POLÍTICA DE PRIVACIDADE</h3>
            <h3 className="cursor-pointer">OPORTUNIDADES DE CARREIRA</h3>
          </footer>
        </section>
      </div>
      <h5 className="relative font-light text-[13px] --responsive--> md:text-[9px] md:mt-10 md:font-extralight">
        FUTURE © 2024 - TODOS OS DIREITOS RESERVADOS
      </h5>
    </div>
  );
}
