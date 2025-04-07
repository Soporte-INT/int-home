import QrGenerate from "../../components/Qr/QrGenerate";
import QrPrevGenerate from "../../components/Qr/QrPrevGenerate";
import { useEffect, useState, useRef } from "react";
import { I18n } from "aws-amplify/utils";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory
import ModalModifyQr from "../../components/Qr/ModalModifyQr";
import ModalMui from "../../components/Modal/ModalMui";
import { scriptGoogle } from "../../lib/utils/scriptGoogle";
import { Helmet } from "react-helmet-async";
import { Alert } from "@mui/material";
import LogoEspanol from "../../assets/tagEspanol.png";

const Qr = () => {
  const [openModal, setOpenModal] = useState(false);
  const [show, setShow] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [url, setUrl] = useState("");
  const [language, setLanguage] = useState("");
  const [timeLeft, setTimeLeft] = useState(5); // Time left in seconds
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const timer = useRef(null); // Ref to store the timer ID
  const interval = useRef(null); // Ref to store the interval ID
  const [showAlertURL, setShowAlertURl] = useState(false);
  const [showAlertDownload, setShowAlertDownload] = useState(false);

  useEffect(() => {
    scriptGoogle();
  }, []);

  useEffect(() => {
    const lg = localStorage.getItem("language") || "es";
    setLanguage(lg);

    // Function to reset the inactivity timer
    const resetTimer = () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      if (interval.current) {
        clearInterval(interval.current);
      }
      setTimeLeft(5); // Reset the time left
      timer.current = setTimeout(() => {
        navigate("/QR/Standby/Galeria"); // Change to your desired route
      }, 300000); // 300000 ms = 5 minutos

      interval.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1;
          } else {
            clearInterval(interval.current);
            return 0;
          }
        });
      }, 1000);
    };

    // Add event listeners to detect user activity
    const events = [
      "mousemove",
      "mousedown",
      "keypress",
      "scroll",
      "touchstart",
    ];
    events.forEach((event) => window.addEventListener(event, resetTimer));

    // Set the initial timer
    resetTimer();

    // Cleanup event listeners on component unmount
    return () => {
      events.forEach((event) => window.removeEventListener(event, resetTimer));
      if (timer.current) {
        clearTimeout(timer.current);
      }
      if (interval.current) {
        clearInterval(interval.current);
      }
    };
  }, [navigate]);

  return (
    <>
      <Helmet>
        <title>Generador de QR</title>
        <meta
          name="Generador INT de QR GRATIS"
          content="Genera tantos QR como quieras completamente gratis, con QR de alta calidad."
        />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
      </Helmet>{" "}
      <div className="relative flex w-full sm:flex-col items-center sm:h-[1300px] sm:pt-[1%] lg:h-screen lg:pt-[8%] overflow-auto">
        <img
          className="lg:absolute lg:block top-10 left-10 z-10 w-[100px] sm:hidden lg:w-[280px] cursor-pointer"
          alt="Logotipo Español"
          src={LogoEspanol}
          onClick={() => (window.location.href = "https://centro.int.store")}
        />
        <h1
          className="font-bold text-white sm:mb-2 sm:text-[30px] md:flex md:text-[40px] lg:mb-10 lg:text-[50px]"
          style={{ fontFamily: "Red Hat Display" }}
        >
          Crea tu código QR gratis
        </h1>
        {/* <h2 className="font-bold text-white sm:hidden md:flex md:text-[40px] lg:text-[50px]">
          {I18n.get("QrTitle1")}
        </h2>
        <h2 className="font-bold text-white sm:hidden md:flex md:text-[40px] lg:text-[50px]">
          {I18n.get("QrTitle3")}
        </h2>
        <h2 className="font-bold text-white sm:hidden md:flex md:text-[40px] lg:text-[50px]">
          {I18n.get("QrTitle4")}
        </h2>
        <h2 className="font-bold text-white sm:hidden md:flex md:text-[40px] lg:text-[50px]">
          {I18n.get("QrTitle5")}
        </h2> */}

        <section className="flex lg:flex-row sm:flex-col lg:gap-[250px] sm:gap-5">
          {/**Left */}
          <QrGenerate
            url={url}
            setUrl={setUrl}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
            openModal={() => setOpenModal(true)}
            setOpenModal={setOpenModal}
          />
          {/**Right */}
          <QrPrevGenerate
            url={url}
            selectedImage={selectedImage}
            setShowAlertURL={setShowAlertURl}
            setShowAlertDownload={setShowAlertDownload}
          />
        </section>
        {showAlertURL && (
          <Alert
            sx={{
              position: "absolute",
              bottom: 20,
              right: 20,
              // Para pantallas pequeñas (mobile)
              "@media (max-width: 600px)": {
                position: "fixed",
                bottom: 10, // Ajusta la distancia desde el fondo
                right: 10, // Ajusta la distancia desde la derecha
              },
            }}
            severity="success"
            onClose={() => setShowAlertURl(false)}
            className="mt-2"
          >
            {I18n.get("UrlCopied")}
          </Alert>
        )}
        {showAlertDownload && (
          <Alert
            sx={{
              position: "absolute",
              bottom: 20,
              right: 20,
              // Para pantallas pequeñas (mobile)
              "@media (max-width: 600px)": {
                position: "fixed",
                bottom: 10, // Ajusta la distancia desde el fondo
                right: 10, // Ajusta la distancia desde la derecha
              },
            }}
            severity="success"
            onClose={() => setShowAlertDownload(false)}
            className="mt-2"
          >
            {I18n.get("QRDowload")}
          </Alert>
        )}
        {/* <button
          onClick={() => navigate("/QR/Standby/Galeria")} // Change to your desired route
          className="absolute bottom-32 h-[48px] w-[250px] rounded-[32px] bg-white text-primary-50 hover:bg-gray-30 lg:mt-[20px]"
        >
          Casos de uso
        </button> */}
        <footer className="lg:absolute lg:bottom-0 sm:relative cursor-pointer text-center text-[16px] font-light text-white sm:mt-10 lg:mt-[200px]">
          <p onClick={() => (window.location.href = "https://int.store")}>
            {I18n.get("IBrand")}
          </p>
          <p
            className="fontRedHat cursor-pointer text-[16px] pb-1 text-white"
            onClick={() =>
              (window.location.href = "https://transactions.int.store")
            }
          >
            {I18n.get("ILastTransactions")}
          </p>
        </footer>

        {openModal && (
          <ModalMui
            view={
              <ModalModifyQr
                url={url}
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
                onClose={() => setOpenModal(false)}
              />
            }
            openModal={openModal}
            setOpenModal={setOpenModal}
            closeButton={false}
            WidthMax="400px"
            HeightMax="540px"
            WidthMin="90%"
            HeightMin="550px"
          />
        )}
      </div>
    </>
  );
};

export default Qr;
