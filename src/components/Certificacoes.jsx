import c1 from "../img/certificacoes/c-1.png";
import c2 from "../img/certificacoes/c-2.png";
import c3 from "../img/certificacoes/c-3.png";
import c4 from "../img/certificacoes/c-4.png";
import c5 from "../img/certificacoes/c-5.png";

export function Certificacoes() {
  return (
    <div className="relative w-[100vw] h-[80vh] ">
      <h1 className="absolute z-10 w-[60%] h-[7%] top-[35%] left-[50%] translate-x-[-50%] text-[#696969] text-[30px] text-center font-bold --responsive--> md:text-[20px] sm:text-[17px]">
        Em constante conformidade com as certificações atuais
      </h1>
      <li className="absolute overflow-hidden w-[90%] h-[70%] bg-white left-[50%] top-[50%] translate-x-[-50%] translate-y-[-35%] border border-l-0 border-r-0 list-none --responsive--> ">
        <div className="absolute w-[1000px] flex justify-around items-center left-[50%] top-[50%] translate-x-[-50%] translate-y-[-5%] --responsive--> md:w-[650px] md:overflow-scroll sm:h-[170px]">
          <i className="">
            <img
              src={c1}
              alt=""
              className="w-[90px] h-[100px] md:mr-[150px] md:ml-[160px]"
            />
          </i>
          <i className="">
            <img
              src={c2}
              alt=""
              className="w-[160px] h-[100px] md:mr-[200px]"
            />
          </i>
          <i className="">
            <img src={c3} alt="" className="w-[180px] h-[90px] md:mr-[250px]" />
          </i>
          <i className="">
            <img src={c4} alt="" className="w-[110px] h-[70px] md:mr-[180px]" />
          </i>
          <i className="">
            <img src={c5} alt="" className="w-[180px] h-[80px] md:mr-[390px]" />
          </i>
        </div>
      </li>
    </div>
  );
}
