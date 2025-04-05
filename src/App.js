import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Ecommerce from "./app/home/Ecommerce";
import RegistroPrincipal from "./app/home/Registro_Principal";
import Gracias from "./app/home/Gracias";
import RegistroEcommerce from "./app/home/Registro_Ecommerce";
import RegistroTerminal from "./app/home/Registro_Terminal";
import Error404 from "./app/home/Error404";
import Index from "./app/home/Index2";
import Terminal from "./app/home/Terminal";
// eslint-disable-next-line
import vocabularies from "../src/vocabularies";
import { I18n } from "aws-amplify/utils";
import PageWrapper from "./components/PageWrapper/PageWrapper";
import Tarjetas from "./app/home/Tarjetas";
import Qr from "./app/qr/Qr";
import GaleriaImagenesQr from "./components/Qr/GaleriaImagenesQr";
import { HelmetProvider } from "react-helmet-async";
import Transactions from "./app/transactions/Transactions";
import Centro from "./app/centro/Centro";
import Why from "./app/why/Why";
import PageWrapperQr from "./components/PageWrapper/PageWrapperQr";
import Mision from "./app/mision/Mision";
import Metricas from "./app/metricas/Metricas";
import Cobertura from "./app/cobertura/Cobertura";
import Blur from "./app/blur/Blur";
import PageWrapperToIndex from "./components/PageWrapper/PageWrapperToIndex";
import Home from "./app/home/Home";
import backgroundPurple from "./Img/Backkground_Purple.png";

function App() {
  const pageDomain = window.location.host;
  const [selectedOption, setSelectedOption] = useState(
    localStorage.getItem("language") ?? "en"
  );

  I18n.setLanguage(selectedOption);

  const cambiarIdioma = (value) => {
    I18n.setLanguage(value);
  };

  // eslint-disable-next-line
  const handler = (e) => {
    localStorage.setItem("language", e.target.value);
    cambiarIdioma(e.target.value);
    setSelectedOption(e.target.value);
  };

  return (
    <section
      className="flex flex-col items-center w-full text-white"
      style={{
        backgroundImage: `url(${backgroundPurple})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <HelmetProvider>
        <Router>
          <Routes>
            <Route
              path="/terminal"
              element={<Terminal selectedOption={selectedOption} />}
            />
            <Route path="/ecommerce" element={<Ecommerce />} />
            <Route
              path="/registro_principal"
              element={
                <PageWrapper selectedOption={selectedOption} handler={handler}>
                  <RegistroPrincipal />
                </PageWrapper>
              }
            />
            <Route
              path="/registro_terminal"
              element={
                <PageWrapper selectedOption={selectedOption} handler={handler}>
                  <RegistroTerminal />
                </PageWrapper>
              }
            />
            <Route
              path="/registro_ecommerce"
              element={
                <PageWrapper selectedOption={selectedOption} handler={handler}>
                  <RegistroEcommerce />
                </PageWrapper>
              }
            />
            <Route
              path="/gracias"
              element={
                <PageWrapper selectedOption={selectedOption} handler={handler}>
                  <Gracias />
                </PageWrapper>
              }
            />
            <Route path="/tarjetas" element={<Tarjetas />} />
            <Route path="/qr" element={<Qr />} />
            <Route
              path="/qr/Standby/Galeria"
              element={
                <PageWrapper selectedOption={selectedOption} handler={handler}>
                  <GaleriaImagenesQr />
                </PageWrapper>
              }
            />
            <Route
              path="/"
              exact
              element={
                <>
                  {pageDomain === "int.store" && <Home />}

                  {pageDomain === "why.int.store" && (
                    <>
                      <Why />
                    </>
                  )}
                  {pageDomain === "transactions.int.store" && (
                    <>
                      <Transactions />
                    </>
                  )}
                  {pageDomain === "centro.int.store" && <Centro />}
                  {pageDomain === "mision.int.store" && (
                    <PageWrapper
                      selectedOption={selectedOption}
                      handler={handler}
                    >
                      <Mision />
                    </PageWrapper>
                  )}
                  {pageDomain === "metricas.int.store" && (
                    <PageWrapper
                      selectedOption={selectedOption}
                      handler={handler}
                    >
                      <Metricas />
                    </PageWrapper>
                  )}
                  {pageDomain === "cobertura.int.store" && (
                    <PageWrapper
                      selectedOption={selectedOption}
                      handler={handler}
                    >
                      <Cobertura />
                    </PageWrapper>
                  )}
                  {pageDomain === "blurb.int.store" && <Blur />}

                  {(pageDomain === "localhost:3000" ||
                    pageDomain ===
                      "https://ldn3vr0r-3000.usw3.devtunnels.ms/") && (
                    <>
                      <Qr />
                    </>
                  )}
                </>
              }
            />
            <Route
              path="*"
              element={
                <PageWrapper selectedOption={selectedOption} handler={handler}>
                  <Error404 />
                </PageWrapper>
              }
            />
          </Routes>
        </Router>
      </HelmetProvider>
    </section>
  );
}

export default App;
