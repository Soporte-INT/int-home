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
import terminal from "../../assets/terminal.webp";
import ecomerce from "../../assets/e-commerce.webp";
import tarjetas from "../../assets/tarjetas.webp";
import { I18n } from "aws-amplify/utils";
import { NavLink } from "react-router-dom";
import { scriptGoogle } from "../../lib/utils/scriptGoogle.js";
import { Helmet } from "react-helmet-async";
import Header from "../Header.js";
import Footer from "../Footer.js";

export default function Home() {
  const handleGoToTerminal = () => {
    window.location.href = "https://int-front.vercel.app/TuDominio";
  };
  const data = [
    {
      title: "TERMINAL DIGITAL",
      href: "/terminal",
      image: terminal,
    },
    {
      title: "E-COMMERCE",
      href: "/ecommerce",
      image: ecomerce,
    },
    {
      title: "TARJETAS",
      href: "/tarjetas",
      image: tarjetas,
    },
  ];
  return (
    <section className="sm:px-[5%] lg:px-[10%] pt-[2%] h-full w-full flex flex-col items-center justify-start relative">
      <Header />
      <div className="flex flex-col items-center justify-start">
        <h3 className="sm:text-[24px] lg:text-[36px] font-bold text-center text-white">
          POTENCIALIZA
        </h3>
        <h1 className="lg:text-[72px] sm:text-[40px] font-bold text-center text-white">
          ¡TU NEGOCIO!
        </h1>
        <p className="sm:text-[14px] lg:text-[24px] font-light text-center text-white sm:px-[50px] lg:px-0">
          Habilitalo para la venta en línea y el cobro en ubicaciones físicas
          sin necesidad de una terminal bancaria
        </p>
        <button
          className="sm:w-[380px] lg:h-14 sm:h-10 lg:w-[484px] bg-white h-14 rounded-full text-primary-40 mt-4 hover:bg-gray-30 duration-300"
          onClick={handleGoToTerminal}
        >
          Ver Demo
        </button>
        <section className="flex flex-row items-center justify-center gap-5 mt-6 flex-wrap">
          {data.map((item, index) => (
            <article
              key={index}
              className="flex flex-col items-center justify-center bg-primary-20 rounded-2xl border-white border sm:w-[180px] sm:h-[210px] lg:h-[258px] lg:w-[370px] cursor-pointer hover:scale-105 transition-transform duration-300 lg:p-0 sm:p-2"
            >
              <NavLink
                to={item.href}
                className="flex flex-col items-center justify-center"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="sm:w-[100px] sm:h-[100px] lg:w-[180px] lg:h-[180px] "
                />
                <h3 className="sm:text-[14px] lg:text-[24px] font-bold text-center sm:pt-5 lg:pt-1 text-white">
                  {item.title}
                </h3>
              </NavLink>
            </article>
          ))}
        </section>
      </div>
      <Footer />
    </section>
  );
}
