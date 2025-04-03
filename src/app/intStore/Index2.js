import React, { useEffect } from "react";
import "../../components/Style/Home2.scss";
import "../../components/Style/flexed-columns.scss";
import {
  Boton,
  Divcenter,
  Divcolumns,
  Divcolumn,
  Homecomponent,
  H5Home,
  H1Home,
  Bottomtext,
} from "./StyledComponents.js";
import Terminal from "../../Img/Elipse_1.png";
import Ecomerce from "../../Img/Elipse_2.png";
import { I18n } from "aws-amplify/utils";
import { NavLink } from "react-router-dom";
import { scriptGoogle } from "../../lib/utils/scriptGoogle.js";
import { Helmet } from "react-helmet-async";

const Index = () => {
  useEffect(() => {
    scriptGoogle();
  }, []);
  return (
    <>
      <Helmet>
        <title>INT</title>
        <meta
          name="Generador INT de QR GRATIS"
          content="Genera tantos QR como quieras completamente gratis, con QR de alta calidad."
        />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
      </Helmet>
      <Homecomponent className="home-component home-component-modified homeindex">
        <Divcolumns gap="0%" columns="100%" columnsmobile="repeat(1,1fr)">
          <Divcenter className="flexed-columns">
            {/* <H5Home className="sin-mensualidades">
            {I18n.get("IWithoutpayment")}
          </H5Home> */}
            <H1Home className="potencializa sm:pt-5 lg:pt-0">
              {I18n.get("Ipotential")}
            </H1Home>
            <H1Home
              marginf="1vh auto 3vh"
              fontsize="7.2vh"
              className="tunegocio"
            >
              {I18n.get("IHeadertitle1")}
            </H1Home>
            <H5Home className="text-light">{I18n.get("IHeadertitle2")}</H5Home>
            {/* <NavLink className="enlacebtn2" to="/registro_principal"> */}
            <NavLink className="enlacebtn2" to="/">
              {" "}
              <Boton
                bwidth="40%"
                bmarg="auto"
                peligro
                onClick={() =>
                  (window.location.href =
                    "https://intportal.vercel.app/tuDominio/terminal/MXN_0")
                }
              >
                {I18n.get("IButton1")}
              </Boton>
            </NavLink>
          </Divcenter>
        </Divcolumns>
        <Divcolumns
          className="Botom-container-items"
          columns="48% 48%"
          gap="4%"
        >
          <NavLink to="/ecommerce" className="CONTAINER-CURSOR">
            <div className="Item-Home">
              <Divcolumns
                columnsmobile="100%"
                gapmobile="0%"
                columns="30% 60%"
                gap="10%"
                className="ind-columns"
              >
                <img src={Ecomerce} alt="Terminal digital" />
                <div className="text-cont1">
                  <H5Home className="title-titem">
                    {I18n.get("IEcommercetitle")}
                  </H5Home>
                  <NavLink className="Links-Landings" to="/ecommerce" exact>
                    <Boton bwidth="auto" className="btn-links" colort="#F2F3FF">
                      {I18n.get("ISeemore")}
                    </Boton>
                  </NavLink>
                </div>
              </Divcolumns>
            </div>
          </NavLink>
          <NavLink to="/terminal" className="CONTAINER-CURSOR">
            <div className="Item-Home">
              <Divcolumns
                columnsmobile="100%"
                gapmobile="0%"
                columns="30% 60%"
                gap="10%"
                className="ind-columns"
              >
                <img src={Terminal} alt="Terminal digital" />
                <div className="text-cont1">
                  <H5Home className="title-titem">
                    {I18n.get("ITerminaltitle")}
                  </H5Home>
                  <NavLink className="Links-Landings" to="/terminal" exact>
                    <Boton bwidth="auto" className="btn-links" colort="#F2F3FF">
                      {I18n.get("ISeemore")}
                    </Boton>
                  </NavLink>
                </div>
              </Divcolumns>
            </div>{" "}
          </NavLink>
        </Divcolumns>

        <Divcolumn>
          <Bottomtext
            onClick={() => (window.location.href = "https://int.store")}
          >
            {" "}
            {I18n.get("IBrand")}
          </Bottomtext>
          <p
            className="fontRedHat cursor-pointer text-[14px] text-white"
            onClick={() =>
              (window.location.href = "https://transactions.int.store")
            }
          >
            {I18n.get("ILastTransactions")}
          </p>
        </Divcolumn>
      </Homecomponent>
    </>
  );
};

export default Index;
