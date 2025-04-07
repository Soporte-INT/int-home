import LogoEspanol from "../assets/tagEspanol.png";

export default function Header() {
  // const protocol = process.env.REACT_APP_API_PROTOCOL;
  // const domain = process.env.REACT_APP_API_DOMAIN;

  const handleGoToCentro = () => {
    window.location.href = "https://centro.int.store";
  };
  return (
    <div className="w-full flex flex-row justify-between items-center ">
      <img
        className="sm:w-[170px]  lg:w-[225px] cursor-pointer"
        alt="Logotipo Español"
        src={LogoEspanol}
        onClick={handleGoToCentro}
      />
      <div></div>
    </div>
  );
}
