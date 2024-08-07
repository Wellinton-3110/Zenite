import zenitePage2 from "../img/zenitePage2.png";
import zenitePage2BG from "../img/zenitePage2BG.jpg";

export function Page2() {
  return (
    <div className="flex flex-col relative">
      <div className="Page2 w-[100vw] h-[90vh] bg-slate-100 relative ">
        <img
          src={zenitePage2}
          alt="Imagem Página 2"
          className="absolute top-[10%] left-[67%] w-[320px] h-[230px] ---responsive--> md:w-[200px] md:h-[130px] md:left-[57%] md:top-[5%]"
        />

        <div className="absolute left-[53%] top-[54%] translate-x-[-70%] translate-y-[-50%] z-10 w-[65%] h-[65%] p-5 flex flex-col text-left bg-white ---responsive--> md:overflow-auto">
          <h1 className="mt-[10px] text-[45px] text-[#41BDBA] font-serif ml-[30px] mb-[30px] after:w-[100px] after:h-[2px] after:block after:mt-5 after:bg-gradient-to-r from-[#286993] to-[#41BDBA] ---responsive--> md:text-[35px] sm:text-[15px] sm:font-light after:md:h-[1px] after:md:w-[70px]">
            CONCEITO FUTURE
          </h1>

          <p className="ml-[30px] text-[18px] text-[#696969] ---responsive--> md:text-[14px] sm:text-[10px] ">
            O conceito FUTURE surge para reinventar a forma de gerir e praticar
            o negócio Engenharia e para a posicionar no nível mais elevado da
            cadeia de valor. Olhar e gerir a engenharia como um negócio, mas com
            a responsabilidade de contribuir para um mundo melhor. A ENGENHARIA
            PARA ALÉM DA TÉCNICA, que traduz a visão do Grupo FUTURE sobre o
            papel da Engenharia como motor de desenvolvimento dos investimentos
            dos clientes, da origem à sua estruturação, dominando todo o
            processo e contribuindo para o sucesso do negócio em todas as suas
            fases de implementação.
          </p>
        </div>
      </div>
      <div className="w-[100vw] h-[100vh]">
        <img src={zenitePage2BG} alt="" className="w-[100%] h-[100%]" />
      </div>
    </div>
  );
}
