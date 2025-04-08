import background_Purple from "../../Img/Backkground_Purple.png";
import "../../components/Style/Registro.scss";
import { Helmet } from "react-helmet-async";
import logo_white from "../../Img/logoWhite.svg";
import { I18n } from "aws-amplify/utils";
import { NavLink } from "react-router-dom";
import Footer from "../Footer";
const Blur = () => {
  const data = [
    {
      text: "Why",
      link: "https://why.int.store",
    },
    {
      text: "Home",
      link: "https://inicio.int.store",
    },
    {
      text: "App",
      link: "https://inicio.int.store",
    },
    {
      text: "QR",
      link: "https://inicio.int.store/qr",
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
      text: "Centro",
      link: "https://centro.int.store",
    },
    {
      text: "Blog",
      link: "https://blog.int.store/",
    },
  ];
  return (
    <>
      <Helmet>
        <title>INT Blurb</title>
        <meta name="INT Centro" content="Centro de la plataforma INT." />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
      </Helmet>
      <section className="relative flex w-full flex-col items-center sm:h-screen sm:pt-[30%] lg:h-screen lg:pt-[8%] ">
        <div className="flex flex-col items-center gap-5 lg:w-[920px] px-4">
          <img
            src={logo_white}
            alt="Logotipo Español"
            className="sm:w-[400px] lg:w-[698px] mb-2"
          ></img>
          {/* <div className="h-3 w-1/2 bg-white sm:hidden lg:block"></div> */}
          <p className="w-full text-center text-[16px] text-white lg:text-[20px]">
            {I18n.get("BText1")}
          </p>
          <p className="w-full text-center text-[16px] text-white lg:text-[20px]">
            {I18n.get("BText2")}
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
};
export default Blur;
