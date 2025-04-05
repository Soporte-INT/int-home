import { I18n } from "aws-amplify/utils";
import QRCode from "react-qr-code";
import { useEffect, useState } from "react";
import dowload from "../../Img/download.svg";
import content_copy from "../../Img/content_copy.svg";
import default_logo_QR from "../../Img/logo192.png";
import axios from "axios";
import { IOSSwitch } from "../Switch/SwitchMui";
import QrInt from "../../Img/QrInt.jpeg";
import DownloadIcon from "@mui/icons-material/Download";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Alert } from "@mui/material";

const QrPrevGenerate = (props) => {
  const [buttonDisabled, setButtonDisabled] = useState(true); // [1
  const [dowloadQR, setDowloadQR] = useState(false);
  useEffect(() => {
    if (props.url && props.selectedImage) {
      setButtonDisabled(false);
      return;
    }
    setButtonDisabled(true);
  }, [props.url, props.selectedImage]);
  const handleCopy = () => {
    props.setShowAlertURL(true);
    navigator.clipboard.writeText(props.url);
  };
  /**
   * Funcion para descargar el QR
   * @returns {void}
   */
  const handleDownload = async () => {
    try {
      setDowloadQR(true);
      const textUrl = props.url ? props.url : "https://int.store";
      const formData = new FormData();
      formData.append("text", textUrl);

      // Convert base64 image to Blob
      const response = await fetch(props.selectedImage);
      const blob = await response.blob();
      formData.append("image", blob, "image.png");

      const res = await axios.post(
        "https://int-backend.vercel.app/qr/generate-qr",
        //"http://localhost:3000/qr/generate-qr",
        formData,
        {
          responseType: "arraybuffer",
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const blobResponse = new Blob([res.data], { type: "image/png" });
      const url = window.URL.createObjectURL(blobResponse);

      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "Terminal-int.png");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setDowloadQR(false);
      props.setShowAlertDownload(true);
    } catch (error) {
      const language = localStorage.getItem("language");
      console.error("Error generating QR code:", error);
      if (language === "es") {
        alert("Error generando el código QR, intente con otra imagen");
        return;
      }
      alert("Error generating QR code, try with another image");
      setDowloadQR(false);
    }
  };

  return (
    <>
      <section className="h-[410px] w-[240px] rounded-xl bg-white px-4 py-1">
        <div className="flex flex-col">
          <section className="flex flex-row items-center justify-between px-8 text-primary-60 opacity-100">
            <p>{I18n.get("QrWhite")}</p>
            <IOSSwitch disabled={true} checked={true} />
            <p>{I18n.get("QrBlack")}</p>
          </section>
          <h1 className="h-full text-center text-[18px] font-bold text-primary-50">
            {I18n.get("QrShare")}
          </h1>
        </div>
        <div className="ml-[10px] mt-1 flex items-center justify-normal">
          {props.url ? (
            <>
              <div style={{ position: "relative" }}>
                <QRCode
                  value={props.url ? props.url : "https://int.store"}
                  size={189}
                  bgColor="#ffffff"
                  className="z-0"
                />
                <div className="absolute left-1/2 top-1/2 flex h-[45px] w-[45px] -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-primary-10">
                  <img
                    src={props.selectedImage || default_logo_QR}
                    alt="logo"
                    style={{
                      borderRadius: "50%",
                      width: 40,
                      height: 40,
                      zIndex: 10,
                    }}
                  />
                </div>
              </div>
            </>
          ) : (
            <img src={QrInt} alt="QR" className="h-[189px] w-[189px]"></img>
          )}
        </div>
        <div className="mt-1 flex flex-col  border-b border-[#888888]">
          <h4 className="text-[14px] text-[#888888]">URL</h4>
          <input
            className="border-b border-gray-500 text-gray-70"
            value={props.url}
            onChange={() => {}}
          />
        </div>
        <section className="mt-0 flex flex-row items-center justify-between px-2 opacity-100">
          <div className="flex flex-row">
            <input
              type="checkbox"
              className="mr-2"
              disabled={true}
              checked={true}
            />
            <p className="text-[14px]">PNG</p>
          </div>
          <div className="flex flex-row opacity-30">
            <input type="checkbox" className="mr-2" disabled={true} />
            <p className="text-[14px]">SVG</p>
          </div>
          <div className="flex flex-row opacity-30">
            <input type="checkbox" className="mr-2" disabled={true} />
            <p className="text-[14px]">PDF</p>
          </div>
        </section>
        <div className="mt-1 flex flex-col gap-2">
          <button
            onClick={handleDownload}
            className={`flex h-9 w-full items-center justify-center gap-2 rounded-[32px] bg-primary-40 text-center text-[14px] font-light text-white hover:bg-primary-50`}
            // disabled={buttonDisabled}
          >
            <DownloadIcon fontSize="small" />
            {dowloadQR ? I18n.get("QrWait") : I18n.get("QrDownload")}
          </button>
          <button
            onClick={handleCopy}
            className={`flex h-9 w-full items-center justify-center gap-2 rounded-[32px] bg-white text-center text-[14px] font-light text-primary-40 shadow-md hover:bg-gray-10 ${buttonDisabled ? "opacity-50" : ""}`}
          >
            {I18n.get("QrCopy")}
            <ContentCopyIcon fontSize="small" />
          </button>
        </div>
      </section>
    </>
  );
};
export default QrPrevGenerate;
