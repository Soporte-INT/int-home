import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Ecommerce from "./app/home/Ecommerce";
import RegistroPrincipal from "./app/home/Registro_Principal";
import Gracias from "./app/home/Gracias";
import RegistroEcommerce from "./app/home/Registro_Ecommerce";
import RegistroTerminal from "./app/home/Registro_Terminal";
import Error404 from "./app/home/Error404";
import Terminal from "./app/home/Terminal";
import vocabularies from "../src/vocabularies";
// eslint-disable-next-line
import { I18n } from "aws-amplify/utils";
import PageWrapper from "./components/PageWrapper/PageWrapper";
import Tarjetas from "./app/home/Tarjetas";
import Qr from "./app/qr/Qr";
import GaleriaImagenesQr from "./components/Qr/GaleriaImagenesQr";
import { HelmetProvider } from "react-helmet-async";
import Transactions from "./app/transactions/Transactions";
import Centro from "./app/centro/Centro";
import Why from "./app/why/Why";
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
    localStorage.getItem("language") ?? "es"
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
            <Route path="/registro_principal" element={<RegistroPrincipal />} />
            <Route path="/registro_terminal" element={<RegistroTerminal />} />
            <Route path="/registro_ecommerce" element={<RegistroEcommerce />} />
            <Route path="/gracias" element={<Gracias />} />
            <Route path="/tarjetas" element={<Tarjetas />} />
            <Route path="/qr" element={<Qr />} />
            <Route path="/qr/Standby/Galeria" element={<GaleriaImagenesQr />} />
            <Route
              path="/"
              exact
              element={
                <>
                  {/* {pageDomain === "int.store" && <Home />} */}
                  {pageDomain === "inicio.int.store" && <Home />}
                  {pageDomain === "why.int.store" && <Why />}
                  {pageDomain === "transactions.int.store" && <Transactions />}
                  {pageDomain === "centro.int.store" && <Centro />}
                  {pageDomain === "mision.int.store" && <Mision />}
                  {pageDomain === "metricas.int.store" && <Metricas />}
                  {pageDomain === "cobertura.int.store" && <Cobertura />}
                  {pageDomain === "blurb.int.store" && <Blur />}
                  {(pageDomain === "localhost:3000" ||
                    pageDomain ===
                      "https://ldn3vr0r-3000.usw3.devtunnels.ms/") && (
                    <>
                      <Home />
                    </>
                  )}
                </>
              }
            />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Router>
      </HelmetProvider>
    </section>
  );
}

export default App;
