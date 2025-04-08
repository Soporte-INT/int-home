import React, { useEffect, useState } from "react";
import "../../components/Style/Error404.scss";
import Imagentelefono from "../../Img/PhoneWithTerminal.png";
import Circleint from "../../Img/Circle_Int.png";
import PhoneTerminal from "../../Img/PhoneTerminal.png";
import { I18n } from "aws-amplify/utils";
import { NavLink } from "react-router-dom";
import Carrusel from "../../components/Error404/Carrusel";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import Footer from "../Footer";
const Error404 = () => {
  // useEffect(() => {
  //   window.location.href = "https://int.store/tuDominio/terminal/MXN_0";
  // }, []);
  const images = [Circleint, Imagentelefono, PhoneTerminal];
  const [positionCarousel, setPositionCarousel] = useState(0);
  const moveToRight = () => {
    setPositionCarousel((current) => (current === 2 ? 0 : current + 1));
  };
  const moveToLeft = () => {
    setPositionCarousel((current) => (current === 0 ? 2 : current - 1));
  };

  return (
    <>
      <div
        style={{
          fontFamily: "Red Hat Display",
          height: "100%",
        }}
        className="justify-betweens carrusel-component relative flex h-full w-full  flex-col sm:px-[16px] sm:py-[70px] md:px-[80px] lg:px-[100px] lg:pt-[100px]"
      >
        <section className="flex sm:flex-col lg:h-[633px] lg:w-[1236px] lg:flex-row">
          <div className="lg:w-[50%] lg:pt-[115px]">
            <section className={`text-white`}>
              <h4 className="sm:text-[16px] md:text-center md:text-[20px] lg:text-start">
                {I18n.get("Error404Ups")}
              </h4>
              <h1 className="font-bold sm:text-[36px] sm:leading-[34px] md:text-center md:text-[48px] md:leading-[60px] lg:text-start lg:text-[70px] lg:leading-[90px]">
                {I18n.get("ENotFound")}
              </h1>
              <p className="mt-4 font-light sm:text-[14px] sm:leading-[18px] md:text-[20px] md:leading-[30px] lg:text-[24px] lg:leading-[32px]">
                {I18n.get("EText")}
              </p>
              <button
                className="w-full rounded-[32px] bg-white text-[#2A2FAB] sm:mt-[24px] sm:h-[40px] sm:text-[14px] md:h-[44px] md:text-[16px] lg:mt-[32px] lg:h-[60px] lg:text-[18px]"
                onClick={() => {
                  window.location.href = "https://int.store/registro";
                }}
              >
                {I18n.get("Error404Button")}
              </button>
            </section>
          </div>
          <div className="relative sm:h-[375px] md:h-[470px] lg:h-auto lg:w-[50%]">
            <Carrusel
              positionCarousel={positionCarousel}
              moveToRight={moveToRight}
              moveToLeft={moveToLeft}
            />
            {/* <button className="absolute top-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white sm:right-0 md:right-5 lg:right-0">
              <ArrowBackIosNewRoundedIcon
                sx={{
                  color: "#2A2FAB",
                  fontSize: "15px",
                }}
                onClick={moveToRight}
              />
            </button>
            <button className="absolute top-1/2 z-10 flex h-9 w-9 rotate-180 items-center justify-center rounded-full bg-white sm:left-0 md:left-5 lg:left-0">
              <ArrowBackIosNewRoundedIcon
                sx={{
                  color: "#2A2FAB",
                  fontSize: "15px",
                }}
                onClick={moveToLeft}
              />
            </button> */}
            <section className="absolute bottom-0 left-0 right-0 flex justify-center gap-4 pb-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`h-3 w-3 rounded-full bg-white  ${
                    index === positionCarousel ? "opacity-100" : "opacity-50"
                  }`}
                ></div>
              ))}
            </section>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Error404;
