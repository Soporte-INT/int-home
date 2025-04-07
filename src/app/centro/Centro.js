import React from "react";
import background_Purple from "../../Img/Backkground_Purple.png";
import logo_white from "../../Img/logoWhite.svg";
import { Helmet } from "react-helmet-async";
import { I18n } from "aws-amplify/utils";
import { NavLink } from "react-router-dom";
import Footer from "../Footer";

export default function Centro() {
  const data = [
    {
      text: "Why",
      link: "https://why.int.store",
    },
    {
      text: "Home",
      link: "https://int.store",
    },
    {
      text: "App",
      link: "https://app.int.store",
    },
    {
      text: "QR",
      link: "https://int.store/qr",
    },
    {
      text: "Misión",
      link: "https://mision.int.store",
    },
    // {
    //   text: "Metricas",
    //   link: "https://metricas.int.store",
    // },
    {
      text: "Cobertura",
      link: "https://cobertura.int.store",
    },
    {
      text: "Blurb",
      link: "https://blurb.int.store",
    },
  ];

  return (
    <>
      <Helmet>
        <title>INT Centro</title>
        <meta name="INT Centro" content="Centro de la plataforma INT." />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
      </Helmet>
      <section className="relative flex w-full flex-col items-center sm:h-screen sm:pt-[30%] lg:h-screen lg:pt-[8%] ">
        <div className="flex flex-col items-center gap-5 sm:w-full px-5 lg:w-[920px] ">
          <img
            src={logo_white}
            alt="Logotipo Español"
            className="sm:w-[400px] lg:w-[698px]"
          ></img>
          <div className="h-3 w-1/2 bg-white sm:hidden lg:block"></div>
          <p className="w-full sm:text-[20px] text-justify text-white lg:text-[31px]">
            {I18n.get("CText1")}
          </p>
          <section className="flex w-full flex-row flex-wrap items-center gap-5 justify-center">
            {data.map((item, index) => (
              <NavLink
                key={index}
                to={item.link}
                className="w-[90px] rounded-full bg-white p-3 text-[12px] text-primary-40 lg:text-[16px] text-center mb-5"
              >
                <p>{item.text}</p>
              </NavLink>
            ))}
          </section>
          <Footer />
        </div>
      </section>
    </>
  );
}
