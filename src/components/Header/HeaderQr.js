import React, { useEffect, useState } from "react";
import "./Header.scss";
import Select from "../../app/home/Select";
// eslint-disable-next-line
import { I18n } from "aws-amplify/utils";
import { NavLink } from "react-router-dom";
import LogoTipo from "../../Img/Logotipo.png";
import LogoEspanol from "../../assets/tagEspanol.png";
// eslint-disable-next-line
const HeaderQr = ({ selectedOption, handler, executeScroll }) => {
  const [isOpen, setIsOpen] = useState(false);
  const language = localStorage.getItem("language") ?? "es";
  const [url, setUrl] = useState("");

  useEffect(() => {
    localStorage.setItem("language", "es");
    const path = window.location.pathname;
    const lastUrl = path.split("/").pop();
    setUrl(lastUrl);
    console.log(lastUrl);
  }, [url]);

  const handleGoToCentro = () => {
    const path = window.location.pathname;
    if (path === "/") {
      window.location.href = "https://int.store";
      return;
    }
    // window.location.href = "https://why.int.store";
    window.location.href = "https://int.store";
  };

  return (
    <div className="Header-container">
      <div className="la-select">
        <NavLink className="Nav-left" onClick={handleGoToCentro}>
          {language === "es" ? (
            <img className="logo" alt="Logotipo Español" src={LogoEspanol} />
          ) : (
            <img className="logo" alt="Logotipo Int.Store" src={LogoTipo} />
          )}
        </NavLink>
        <div className="Select-item-2">
          <Select
            className="Select-item"
            selectedOption={selectedOption}
            handler={handler}
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderQr;
