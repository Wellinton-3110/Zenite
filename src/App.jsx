import { createContext, useRef, useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Page1 } from "./components/Page1";
import { BodySlider } from "./components/BodySlider";
import { Footer } from "./components/Footer";
import { Certificacoes } from "./components/Certificacoes";
import { Page2 } from "./components/Page2";
import { ArrowDown } from "./components/arrows/ArrowDown";
import { ArrowTop } from "./components/arrows/ArrowTop";
import { HeaderMenu } from "./components/HeaderMenu";
import { Page3 } from "./components/pages/Page3";
import { Page4 } from "./components/pages/Page4";
import { Page5 } from "./components/pages/Page5";
import { useTranslation } from "react-i18next";
import "./index.css";

import "./i18n";

export const MyContext = createContext();

function App() {
  const [currentButtonText, setCurrentButtonText] = useState("VER MAIS");
  const [footerContatos, setFooterContatos] = useState("CONTATOS");
  const [footerVerNoMapa, setFooterVerNoMapa] = useState("VER NO MAPA");
  const [footerSubscrever, setFooterSubscrever] = useState("SUBSCREVER");
  const [scrollY, setScrollY] = useState(0);
  const [resize, setResize] = useState(window.innerWidth);
  const { t } = useTranslation();

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  const resizeInfo = () => {
    setResize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    console.log(scrollY);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("resize", resizeInfo);
    console.log(resize);

    return () => {
      window.removeEventListener("resize", setResize);
    };
  }, []);

  const scrollToNav = () => {
    if (navBarRef.current) {
      navBarRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  const scrollToNavMenu = () => {
    if (headerMenuLeft.current) {
      headerMenuLeft.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  // -----------translate------------
  // refs

  const header2Ref = useRef(null);
  const headerMenuLeft = useRef(null);
  const navBarRef = useRef(null);
  const bodySliderRef = useRef(null);
  const page1Ref = useRef(null);
  const page2Ref = useRef(null);
  const page3Ref = useRef(null);
  const page4Ref = useRef(null);
  const page5Ref = useRef(null);
  const certificacoesRef = useRef(null);
  const footerRef = useRef(null);
  const buttonRef = useRef(null);

  function changeLanguageToPT() {
    const header2SobreNos =
      header2Ref.current.querySelector("#header2SobreNos");

    const header2Conceito =
      header2Ref.current.querySelector("#header2Conceito");

    const header2Unidades =
      header2Ref.current.querySelector("#header2Unidades");

    const header2Competencias = header2Ref.current.querySelector(
      "#header2Competencias"
    );

    const header2Agencia = header2Ref.current.querySelector("#header2Agencia");

    const header2Inovacao =
      header2Ref.current.querySelector("#header2Inovacao");

    const bodySliderH1 = bodySliderRef.current.querySelector("#bodySliderH1");

    const page1H1 = page1Ref.current.querySelector("#page1H1");

    const page1Subsidiarias =
      page1Ref.current.querySelector("#page1Subsidiarias");

    const page1Especialidades = page1Ref.current.querySelector(
      "#page1Especialidades"
    );

    const page1Colaboradores = page1Ref.current.querySelector(
      "#page1Colaboradores"
    );

    const page1Contratos = page1Ref.current.querySelector("#page1Contratos");

    const page1Sedes = page1Ref.current.querySelector("#page1Sedes");

    const page1Paises = page1Ref.current.querySelector("#page1Paises");

    const page2H1 = page2Ref.current.querySelector("#page2H1");
    const page2P = page2Ref.current.querySelector("#page2P");

    const page3H1 = page3Ref.current.querySelector("#page3H1");
    const page3H3 = page3Ref.current.querySelector("#page3H3");

    const page4H1 = page4Ref.current.querySelector("#page4H1");
    const page4H3 = page4Ref.current.querySelector("#page4H3");

    const page5H1 = page5Ref.current.querySelector("#page5H1");
    const page5H3 = page5Ref.current.querySelector("#page5H3");

    const certificacoesH1 =
      certificacoesRef.current.querySelector("#certificacoesH1");

    const footerH1Sede = footerRef.current.querySelector("#footerH1Sede");
    const footerH1Links = footerRef.current.querySelector("#footerH1Links");
    const footerH1Siganos = footerRef.current.querySelector("#footerH1Siganos");
    const footerH2Contatos =
      footerRef.current.querySelector("#footerH2Contatos");
    const footerH2SobreNos =
      footerRef.current.querySelector("#footerH2SobreNos");
    const footerH2Lideranca =
      footerRef.current.querySelector("#footerH2Lideranca");
    const footerH2Manifesto =
      footerRef.current.querySelector("#footerH2Manifesto");
    const footerH1Subscrever = footerRef.current.querySelector(
      "#footerH1Subscrever"
    );
    const footerH3Termos = footerRef.current.querySelector("#footerH3Termos");
    const footerH3Cookies = footerRef.current.querySelector("#footerH3Cookies");
    const footerH3Privacidade = footerRef.current.querySelector(
      "#footerH3Privacidade"
    );
    const footerH3Oportunidades = footerRef.current.querySelector(
      "#footerH3Oportunidades"
    );
    const footerH5Direitos =
      footerRef.current.querySelector("#footerH5Direitos");

    header2SobreNos.textContent = `${t("HEADER2_SOBRENOS_PT")}`;
    header2Conceito.textContent = `${t("HEADER2_CONCEITO_PT")}`;
    header2Unidades.textContent = `${t("HEADER2_UNIDADES_PT")}`;
    header2Competencias.textContent = `${t("HEADER2_COMPETENCIAS_PT")}`;
    header2Agencia.textContent = `${t("HEADER2_AGENCIA_PT")}`;
    header2Inovacao.textContent = `${t("HEADER2_INOVACAO_PT")}`;

    bodySliderH1.textContent = `${t("BODYSLIDER_H1_PT")}`;

    // -----------------------------------------PAGE1---------------------------------------------

    page1H1.textContent = `${t("PAGE1_H1_PT")}`;
    page1Subsidiarias.textContent = `${t("PAGE1_H2_SUBSIDIARIAS_PT")}`;
    page1Especialidades.textContent = `${t("PAGE1_H2_ESPECIALIDADES_PT")}`;
    page1Colaboradores.textContent = `${t("PAGE1_H2_COLABORADORES_PT")}`;
    page1Contratos.textContent = `${t("PAGE1_H2_CONTRATOS_PT")}`;
    page1Sedes.textContent = `${t("PAGE1_H2_SEDES_PT")}`;
    page1Paises.textContent = `${t("PAGE1_H2_PAISES_PT")}`;

    // -----------------------------------------PAGE2---------------------------------------------

    page2H1.textContent = t("PAGE2H1_PT");
    page2P.textContent = t("PAGE2P_PT");

    // -----------------------------------------PAGE3---------------------------------------------

    page3H1.textContent = t("PAGE3H1_PT");
    page3H3.textContent = t("PAGE3H3_PT");

    // -----------------------------------------PAGE4---------------------------------------------

    page4H1.textContent = `${t("PAGE4H1_PT")}`;
    page4H3.textContent = `${t("PAGE4H3_PT")}`;

    page5H1.textContent = `${t("PAGE5H1_PT")}`;
    page5H3.textContent = `${t("PAGE5H3_PT")}`;

    certificacoesH1.textContent = `${t("CERTIFICACOESH1_PT")}`;

    footerH1Sede.textContent = `${t("FOOTERSEDE_PT")}`;
    footerH1Links.textContent = `${t("FOOTERLINKS_PT")}`;
    footerH1Siganos.textContent = `${t("FOOTERSIGANOS_PT")}`;
    footerH2Contatos.textContent = `${t("FOOTERCONTATOS_PT")}`;
    footerH2SobreNos.textContent = `${t("FOOTERSOBRENOS_PT")}`;
    footerH2Lideranca.textContent = `${t("FOOTERLIDERANCA_PT")}`;
    footerH2Manifesto.textContent = `${t("FOOTERMANIFESTO_PT")}`;
    footerH1Subscrever.textContent = `${t("FOOTERNEWSLETTER_PT")}`;
    footerH3Termos.textContent = `${t("FOOTERTERMOS_PT")}`;
    footerH3Cookies.textContent = `${t("FOOTERCOOKIES_PT")}`;
    footerH3Privacidade.textContent = `${t("FOOTERPRIVACIDADE_PT")}`;
    footerH3Oportunidades.textContent = `${t("FOOTEROPORTUNIDADES_PT")}`;
    footerH5Direitos.textContent = `${t("FOOTERDIREITOS_PT")}`;

    setCurrentButtonText("VER MAIS");
    setFooterContatos("CONTATOS");
    setFooterVerNoMapa("VER NO MAPA");
    setFooterSubscrever("SUBSCREVER");
  }

  function responsiveChangeLanguageToPT() {
    const sideMenuSobreNos =
      headerMenuLeft.current.querySelector("#sideMenuSobreNos");

    const sideMenuConceito =
      headerMenuLeft.current.querySelector("#sideMenuConceito");

    const sideUnidades = headerMenuLeft.current.querySelector("#sideUnidades");

    const sideCompetencias =
      headerMenuLeft.current.querySelector("#sideCompetencias");

    const sideAgencia = headerMenuLeft.current.querySelector("#sideAgencia");

    const sideInovacao = headerMenuLeft.current.querySelector("#sideInovacao");

    const bodySliderH1 = bodySliderRef.current.querySelector("#bodySliderH1");

    const page1H1 = page1Ref.current.querySelector("#page1H1");

    const page1Subsidiarias =
      page1Ref.current.querySelector("#page1Subsidiarias");

    const page1Especialidades = page1Ref.current.querySelector(
      "#page1Especialidades"
    );

    const page1Colaboradores = page1Ref.current.querySelector(
      "#page1Colaboradores"
    );

    const page1Contratos = page1Ref.current.querySelector("#page1Contratos");

    const page1Sedes = page1Ref.current.querySelector("#page1Sedes");

    const page1Paises = page1Ref.current.querySelector("#page1Paises");

    const page2H1 = page2Ref.current.querySelector("#page2H1");
    const page2P = page2Ref.current.querySelector("#page2P");

    const page3H1 = page3Ref.current.querySelector("#page3H1");
    const page3H3 = page3Ref.current.querySelector("#page3H3");

    const page4H1 = page4Ref.current.querySelector("#page4H1");
    const page4H3 = page4Ref.current.querySelector("#page4H3");

    const page5H1 = page5Ref.current.querySelector("#page5H1");
    const page5H3 = page5Ref.current.querySelector("#page5H3");

    const certificacoesH1 =
      certificacoesRef.current.querySelector("#certificacoesH1");

    const footerH1Sede = footerRef.current.querySelector("#footerH1Sede");
    const footerH1Links = footerRef.current.querySelector("#footerH1Links");
    const footerH1Siganos = footerRef.current.querySelector("#footerH1Siganos");
    const footerH2Contatos =
      footerRef.current.querySelector("#footerH2Contatos");
    const footerH2SobreNos =
      footerRef.current.querySelector("#footerH2SobreNos");
    const footerH2Lideranca =
      footerRef.current.querySelector("#footerH2Lideranca");
    const footerH2Manifesto =
      footerRef.current.querySelector("#footerH2Manifesto");
    const footerH1Subscrever = footerRef.current.querySelector(
      "#footerH1Subscrever"
    );
    const footerH3Termos = footerRef.current.querySelector("#footerH3Termos");
    const footerH3Cookies = footerRef.current.querySelector("#footerH3Cookies");
    const footerH3Privacidade = footerRef.current.querySelector(
      "#footerH3Privacidade"
    );
    const footerH3Oportunidades = footerRef.current.querySelector(
      "#footerH3Oportunidades"
    );
    const footerH5Direitos =
      footerRef.current.querySelector("#footerH5Direitos");

    sideMenuSobreNos.textContent = `${t("HEADER2_SOBRENOS_PT")}`;
    sideMenuConceito.textContent = `${t("HEADER2_CONCEITO_PT")}`;
    sideUnidades.textContent = `${t("HEADER2_UNIDADES_PT")}`;
    sideCompetencias.textContent = `${t("HEADER2_COMPETENCIAS_PT")}`;
    sideAgencia.textContent = `${t("HEADER2_AGENCIA_PT")}`;
    sideInovacao.textContent = `${t("HEADER2_INOVACAO_PT")}`;

    bodySliderH1.textContent = `${t("BODYSLIDER_H1_PT")}`;

    // -----------------------------------------PAGE1---------------------------------------------

    page1H1.textContent = `${t("PAGE1_H1_PT")}`;
    page1Subsidiarias.textContent = `${t("PAGE1_H2_SUBSIDIARIAS_PT")}`;
    page1Especialidades.textContent = `${t("PAGE1_H2_ESPECIALIDADES_PT")}`;
    page1Colaboradores.textContent = `${t("PAGE1_H2_COLABORADORES_PT")}`;
    page1Contratos.textContent = `${t("PAGE1_H2_CONTRATOS_PT")}`;
    page1Sedes.textContent = `${t("PAGE1_H2_SEDES_PT")}`;
    page1Paises.textContent = `${t("PAGE1_H2_PAISES_PT")}`;

    // -----------------------------------------PAGE2---------------------------------------------

    page2H1.textContent = t("PAGE2H1_PT");
    page2P.textContent = t("PAGE2P_PT");

    // -----------------------------------------PAGE3---------------------------------------------

    page3H1.textContent = t("PAGE3H1_PT");
    page3H3.textContent = t("PAGE3H3_PT");

    // -----------------------------------------PAGE4---------------------------------------------

    page4H1.textContent = `${t("PAGE4H1_PT")}`;
    page4H3.textContent = `${t("PAGE4H3_PT")}`;

    page5H1.textContent = `${t("PAGE5H1_PT")}`;
    page5H3.textContent = `${t("PAGE5H3_PT")}`;

    certificacoesH1.textContent = `${t("CERTIFICACOESH1_PT")}`;

    footerH1Sede.textContent = `${t("FOOTERSEDE_PT")}`;
    footerH1Links.textContent = `${t("FOOTERLINKS_PT")}`;
    footerH1Siganos.textContent = `${t("FOOTERSIGANOS_PT")}`;
    footerH2Contatos.textContent = `${t("FOOTERCONTATOS_PT")}`;
    footerH2SobreNos.textContent = `${t("FOOTERSOBRENOS_PT")}`;
    footerH2Lideranca.textContent = `${t("FOOTERLIDERANCA_PT")}`;
    footerH2Manifesto.textContent = `${t("FOOTERMANIFESTO_PT")}`;
    footerH1Subscrever.textContent = `${t("FOOTERNEWSLETTER_PT")}`;
    footerH3Termos.textContent = `${t("FOOTERTERMOS_PT")}`;
    footerH3Cookies.textContent = `${t("FOOTERCOOKIES_PT")}`;
    footerH3Privacidade.textContent = `${t("FOOTERPRIVACIDADE_PT")}`;
    footerH3Oportunidades.textContent = `${t("FOOTEROPORTUNIDADES_PT")}`;
    footerH5Direitos.textContent = `${t("FOOTERDIREITOS_PT")}`;

    setCurrentButtonText("VER MAIS");
    setFooterContatos("CONTATOS");
    setFooterVerNoMapa("VER NO MAPA");
    setFooterSubscrever("SUBSCREVER");
  }

  function changeLanguageToEN() {
    const header2SobreNos =
      header2Ref.current.querySelector("#header2SobreNos");

    const header2Conceito =
      header2Ref.current.querySelector("#header2Conceito");

    const header2Unidades =
      header2Ref.current.querySelector("#header2Unidades");

    const header2Competencias = header2Ref.current.querySelector(
      "#header2Competencias"
    );

    const header2Agencia = header2Ref.current.querySelector("#header2Agencia");

    const header2Inovacao =
      header2Ref.current.querySelector("#header2Inovacao");

    const bodySliderH1 = bodySliderRef.current.querySelector("#bodySliderH1");

    const page1H1 = page1Ref.current.querySelector("#page1H1");

    const page1Subsidiarias =
      page1Ref.current.querySelector("#page1Subsidiarias");

    const page1Especialidades = page1Ref.current.querySelector(
      "#page1Especialidades"
    );

    const page1Colaboradores = page1Ref.current.querySelector(
      "#page1Colaboradores"
    );

    const page1Contratos = page1Ref.current.querySelector("#page1Contratos");

    const page1Sedes = page1Ref.current.querySelector("#page1Sedes");

    const page1Paises = page1Ref.current.querySelector("#page1Paises");

    const page2H1 = page2Ref.current.querySelector("#page2H1");

    const page2P = page2Ref.current.querySelector("#page2P");

    const page3H1 = page3Ref.current.querySelector("#page3H1");
    const page3H3 = page3Ref.current.querySelector("#page3H3");

    const page4H1 = page4Ref.current.querySelector("#page4H1");
    const page4H3 = page4Ref.current.querySelector("#page4H3");

    const page5H1 = page5Ref.current.querySelector("#page5H1");
    const page5H3 = page5Ref.current.querySelector("#page5H3");

    const certificacoesH1 =
      certificacoesRef.current.querySelector("#certificacoesH1");

    const footerH1Sede = footerRef.current.querySelector("#footerH1Sede");
    const footerH1Links = footerRef.current.querySelector("#footerH1Links");
    const footerH1Siganos = footerRef.current.querySelector("#footerH1Siganos");
    const footerH2Contatos =
      footerRef.current.querySelector("#footerH2Contatos");
    const footerH2SobreNos =
      footerRef.current.querySelector("#footerH2SobreNos");
    const footerH2Lideranca =
      footerRef.current.querySelector("#footerH2Lideranca");
    const footerH2Manifesto =
      footerRef.current.querySelector("#footerH2Manifesto");
    const footerH1Subscrever = footerRef.current.querySelector(
      "#footerH1Subscrever"
    );
    const footerH3Termos = footerRef.current.querySelector("#footerH3Termos");
    const footerH3Cookies = footerRef.current.querySelector("#footerH3Cookies");
    const footerH3Privacidade = footerRef.current.querySelector(
      "#footerH3Privacidade"
    );
    const footerH3Oportunidades = footerRef.current.querySelector(
      "#footerH3Oportunidades"
    );
    const footerH5Direitos =
      footerRef.current.querySelector("#footerH5Direitos");

    const myButton = buttonRef.current.querySelector("#myButton");

    header2SobreNos.textContent = `${t("HEADER2_SOBRENOS_EN")}`;
    header2Conceito.textContent = `${t("HEADER2_CONCEITO_EN")}`;
    header2Unidades.textContent = `${t("HEADER2_UNIDADES_EN")}`;
    header2Competencias.textContent = `${t("HEADER2_COMPETENCIAS_EN")}`;
    header2Agencia.textContent = `${t("HEADER2_AGENCIA_EN")}`;
    header2Inovacao.textContent = `${t("HEADER2_INOVACAO_EN")}`;

    bodySliderH1.textContent = `${t("BODYSLIDER_H1_EN")}`;

    // -----------------------------------------PAGE1---------------------------------------------
    page1H1.textContent = `${t("PAGE1_H1_EN")}`;
    page1Subsidiarias.textContent = `${t("PAGE1_H2_SUBSIDIARIAS_EN")}`;
    page1Especialidades.textContent = `${t("PAGE1_H2_ESPECIALIDADES_EN")}`;
    page1Colaboradores.textContent = `${t("PAGE1_H2_COLABORADORES_EN")}`;
    page1Contratos.textContent = `${t("PAGE1_H2_CONTRATOS_EN")}`;
    page1Sedes.textContent = `${t("PAGE1_H2_SEDES_EN")}`;
    page1Paises.textContent = `${t("PAGE1_H2_PAISES_EN")}`;

    page2H1.textContent = t("PAGE2H1_EN");
    page2P.textContent = t("PAGE2P_EN");

    page3H1.textContent = `${t("PAGE3H1_EN")}`;
    page3H3.textContent = `${t("PAGE3H3_EN")}`;

    page4H1.textContent = `${t("PAGE4H1_EN")}`;
    page4H3.textContent = `${t("PAGE4H3_EN")}`;

    page5H1.textContent = `${t("PAGE5H1_EN")}`;
    page5H3.textContent = `${t("PAGE5H3_EN")}`;

    certificacoesH1.textContent = `${t("CERTIFICACOESH1_EN")}`;

    footerH1Sede.textContent = `${t("FOOTERSEDE_EN")}`;
    footerH1Links.textContent = `${t("FOOTERLINKS_EN")}`;
    footerH1Siganos.textContent = `${t("FOOTERSIGANOS_EN")}`;
    footerH2Contatos.textContent = `${t("FOOTERCONTATOS_EN")}`;
    footerH2SobreNos.textContent = `${t("FOOTERSOBRENOS_EN")}`;
    footerH2Lideranca.textContent = `${t("FOOTERLIDERANCA_EN")}`;
    footerH2Manifesto.textContent = `${t("FOOTERMANIFESTO_EN")}`;
    footerH1Subscrever.textContent = `${t("FOOTERNEWSLETTER_EN")}`;
    footerH3Termos.textContent = `${t("FOOTERTERMOS_EN")}`;
    footerH3Cookies.textContent = `${t("FOOTERCOOKIES_EN")}`;
    footerH3Privacidade.textContent = `${t("FOOTERPRIVACIDADE_EN")}`;
    footerH3Oportunidades.textContent = `${t("FOOTEROPORTUNIDADES_EN")}`;
    footerH5Direitos.textContent = `${t("FOOTERDIREITOS_EN")}`;

    setCurrentButtonText("SEE MORE");
    setFooterContatos("CONTACTS");
    setFooterVerNoMapa("SEE ON MAP");
    setFooterSubscrever("SUBSCRIBE");
  }

  function responsiveChangeLanguageToEN() {
    const sideMenuSobreNos =
      headerMenuLeft.current.querySelector("#sideMenuSobreNos");

    const sideMenuConceito =
      headerMenuLeft.current.querySelector("#sideMenuConceito");

    const sideUnidades = headerMenuLeft.current.querySelector("#sideUnidades");

    const sideCompetencias =
      headerMenuLeft.current.querySelector("#sideCompetencias");

    const sideAgencia = headerMenuLeft.current.querySelector("#sideAgencia");

    const sideInovacao = headerMenuLeft.current.querySelector("#sideInovacao");

    const bodySliderH1 = bodySliderRef.current.querySelector("#bodySliderH1");

    const page1H1 = page1Ref.current.querySelector("#page1H1");

    const page1Subsidiarias =
      page1Ref.current.querySelector("#page1Subsidiarias");

    const page1Especialidades = page1Ref.current.querySelector(
      "#page1Especialidades"
    );

    const page1Colaboradores = page1Ref.current.querySelector(
      "#page1Colaboradores"
    );

    const page1Contratos = page1Ref.current.querySelector("#page1Contratos");

    const page1Sedes = page1Ref.current.querySelector("#page1Sedes");

    const page1Paises = page1Ref.current.querySelector("#page1Paises");

    const page2H1 = page2Ref.current.querySelector("#page2H1");

    const page2P = page2Ref.current.querySelector("#page2P");

    const page3H1 = page3Ref.current.querySelector("#page3H1");
    const page3H3 = page3Ref.current.querySelector("#page3H3");

    const page4H1 = page4Ref.current.querySelector("#page4H1");
    const page4H3 = page4Ref.current.querySelector("#page4H3");

    const page5H1 = page5Ref.current.querySelector("#page5H1");
    const page5H3 = page5Ref.current.querySelector("#page5H3");

    const certificacoesH1 =
      certificacoesRef.current.querySelector("#certificacoesH1");

    const footerH1Sede = footerRef.current.querySelector("#footerH1Sede");
    const footerH1Links = footerRef.current.querySelector("#footerH1Links");
    const footerH1Siganos = footerRef.current.querySelector("#footerH1Siganos");
    const footerH2Contatos =
      footerRef.current.querySelector("#footerH2Contatos");
    const footerH2SobreNos =
      footerRef.current.querySelector("#footerH2SobreNos");
    const footerH2Lideranca =
      footerRef.current.querySelector("#footerH2Lideranca");
    const footerH2Manifesto =
      footerRef.current.querySelector("#footerH2Manifesto");
    const footerH1Subscrever = footerRef.current.querySelector(
      "#footerH1Subscrever"
    );
    const footerH3Termos = footerRef.current.querySelector("#footerH3Termos");
    const footerH3Cookies = footerRef.current.querySelector("#footerH3Cookies");
    const footerH3Privacidade = footerRef.current.querySelector(
      "#footerH3Privacidade"
    );
    const footerH3Oportunidades = footerRef.current.querySelector(
      "#footerH3Oportunidades"
    );
    const footerH5Direitos =
      footerRef.current.querySelector("#footerH5Direitos");

    sideMenuSobreNos.textContent = `${t("HEADER2_SOBRENOS_EN")}`;
    sideMenuConceito.textContent = `${t("HEADER2_CONCEITO_EN")}`;
    sideUnidades.textContent = `${t("HEADER2_UNIDADES_EN")}`;
    sideCompetencias.textContent = `${t("HEADER2_COMPETENCIAS_EN")}`;
    sideAgencia.textContent = `${t("HEADER2_AGENCIA_EN")}`;
    sideInovacao.textContent = `${t("HEADER2_INOVACAO_EN")}`;

    bodySliderH1.textContent = `${t("BODYSLIDER_H1_EN")}`;

    // -----------------------------------------PAGE1---------------------------------------------
    page1H1.textContent = `${t("PAGE1_H1_EN")}`;
    page1Subsidiarias.textContent = `${t("PAGE1_H2_SUBSIDIARIAS_EN")}`;
    page1Especialidades.textContent = `${t("PAGE1_H2_ESPECIALIDADES_EN")}`;
    page1Colaboradores.textContent = `${t("PAGE1_H2_COLABORADORES_EN")}`;
    page1Contratos.textContent = `${t("PAGE1_H2_CONTRATOS_EN")}`;
    page1Sedes.textContent = `${t("PAGE1_H2_SEDES_EN")}`;
    page1Paises.textContent = `${t("PAGE1_H2_PAISES_EN")}`;

    page2H1.textContent = t("PAGE2H1_EN");
    page2P.textContent = t("PAGE2P_EN");

    page3H1.textContent = `${t("PAGE3H1_EN")}`;
    page3H3.textContent = `${t("PAGE3H3_EN")}`;

    page4H1.textContent = `${t("PAGE4H1_EN")}`;
    page4H3.textContent = `${t("PAGE4H3_EN")}`;

    page5H1.textContent = `${t("PAGE5H1_EN")}`;
    page5H3.textContent = `${t("PAGE5H3_EN")}`;

    certificacoesH1.textContent = `${t("CERTIFICACOESH1_EN")}`;

    footerH1Sede.textContent = `${t("FOOTERSEDE_EN")}`;
    footerH1Links.textContent = `${t("FOOTERLINKS_EN")}`;
    footerH1Siganos.textContent = `${t("FOOTERSIGANOS_EN")}`;
    footerH2Contatos.textContent = `${t("FOOTERCONTATOS_EN")}`;
    footerH2SobreNos.textContent = `${t("FOOTERSOBRENOS_EN")}`;
    footerH2Lideranca.textContent = `${t("FOOTERLIDERANCA_EN")}`;
    footerH2Manifesto.textContent = `${t("FOOTERMANIFESTO_EN")}`;
    footerH1Subscrever.textContent = `${t("FOOTERNEWSLETTER_EN")}`;
    footerH3Termos.textContent = `${t("FOOTERTERMOS_EN")}`;
    footerH3Cookies.textContent = `${t("FOOTERCOOKIES_EN")}`;
    footerH3Privacidade.textContent = `${t("FOOTERPRIVACIDADE_EN")}`;
    footerH3Oportunidades.textContent = `${t("FOOTEROPORTUNIDADES_EN")}`;
    footerH5Direitos.textContent = `${t("FOOTERDIREITOS_EN")}`;

    setCurrentButtonText("SEE MORE");
    setFooterContatos("CONTACTS");
    setFooterVerNoMapa("SEE ON MAP");
    setFooterSubscrever("SUBSCRIBE");
  }

  return (
    <div className="Page flex flex-col w-[100vw]">
      <MyContext.Provider
        value={{
          currentButtonText,
          header2Ref,
          buttonRef,
          navBarRef,
          scrollToNav,
          scrollToNavMenu,
          changeLanguageToPT,
          changeLanguageToEN,
          responsiveChangeLanguageToEN,
          responsiveChangeLanguageToPT,
        }}
      >
        <ArrowDown />
        {scrollY > 2000 ? <ArrowTop /> : ""}
        {resize > 1500 ? (
          <Header navBarRef={navBarRef} />
        ) : (
          <HeaderMenu headerMenuLeft={headerMenuLeft} />
        )}
        <BodySlider bodySliderRef={bodySliderRef} />
        <Page1 page1Ref={page1Ref} />
        <Page2 page2Ref={page2Ref} />
        <Page3 page3Ref={page3Ref} />
        <Page4 page4Ref={page4Ref} />
        <Page5 page5Ref={page5Ref} />
        <Certificacoes certificacoesRef={certificacoesRef} />
        <Footer
          footerRef={footerRef}
          footerSubscrever={footerSubscrever}
          footerContatos={footerContatos}
          footerVerNoMapa={footerVerNoMapa}
        />
      </MyContext.Provider>
    </div>
  );
}

export default App;
