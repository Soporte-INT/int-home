import React, { useEffect } from "react";
import "../../components/Style/Home.scss";
import { scriptGoogle } from "../../lib/utils/scriptGoogle.js";
import Header from "../Header.js";
import Footer from "../Footer.js";
import terminal from "../../assets/terminal.webp";

const Terminal = ({ selectedOption }) => {
  const data = [
    {
      title: "Registrate",
      text: "1",
      border: "border-[3px] border-white",
    },
    {
      title: "Cartera",
      text: "2",
      border: "border-[3px] border-primary-10",
    },
    {
      title: "Muestrala",
      text: "3",
      border: "border-[3px] border-primary-40",
    },
    {
      title: "Gana dinero",
      text: "4",
      border: "border-[3px] border-primary-60",
    },
  ];

  const handleGoToTerminal = () => {
    window.location.href = "https://int-front.vercel.app/TuDominio";
  };

  useEffect(() => {
    scriptGoogle();
  }, []);
  return (
    <section className="sm:px-[5%] lg:px-[10%] pt-[2%] min-h-screen w-full flex flex-col items-center justify-start relative sm:overflow-auto lg:overflow-hidden">
      <Header />
      <section className="flex sm:flex-col lg:flex-row lg:items-center justify-start w-full">
        <div className="sm:w-[100%] lg:w-[50%] flex flex-col justify-start h-full">
          <div className="flex flex-row gap-2 font-light lg:text-[14px] sm:text-[12px]">
            <p>• Sin mensualidad</p>
            <p>• Sin baterías</p>
            <p>• Sin papel</p>
          </div>
          <h1 className="lg:text-[45px] sm:text-[30px] font-bold text-left text-white">
            LA TERMINAL DIGITAL MÁS EFICIENTE DEL MUNDO{" "}
          </h1>
          <p className="sm:text-[14px] lg:text-[24px] font-light text-left text-white px-0">
            Simplifica recibir dinero
          </p>
          <button
            className="w-full lg:h-12 sm:h-10  bg-white h-14 rounded-full text-primary-40 mt-4 hover:bg-gray-30 duration-300"
            onClick={handleGoToTerminal}
          >
            Ver Demo
          </button>
        </div>
        <div className="sm:w-[100%] lg:w-[50%] flex flex-col items-center sm:justify-center lg:justify-start h-full lg:mt-0 sm:mt-5">
          <img
            className="sm:w-[50%] lg:w-[65%] h-auto"
            src={terminal}
            alt="Terminal digital"
          />
        </div>
      </section>
      <section className="border-2 p-4 mt-5 items-center w-full lg:h-[180px] bg-primary-20 opacity-85 gap-4 rounded-[60px] flex flex-col">
        <h1 className="font-bold text-[26px]">¿COMO FUNCIONA?</h1>
        <section className="w-full flex flex-row items-center justify-between sm:px-[50px] lg:px-[200px] flex-wrap">
          {data.map((item, index) => (
            <div
              className="flex flex-col items-center gap-1 justify-center text-[20px]"
              key={index}
            >
              <div
                className={`sm:h-10 sm:w-10 lg:h-12 lg:w-12 rounded-full bg-primary-60 border-[3px] ${item.border} items-center justify-center flex`}
              >
                {item.text}
              </div>
              <p className="text-center lg:w-[120px] sm:w-[100px]">
                {item.title}
              </p>{" "}
              {/* Agregado text-center */}
            </div>
          ))}
        </section>
      </section>

      <Footer />
    </section>
  );
};

export default Terminal;
