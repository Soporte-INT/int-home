import React from "react";

export default function Footer() {
  const handleGoToLastTransactions = () => {
    // Usamos window.location.replace para reemplazar la URL actual
    window.location.replace("https://transactions.int.store");
  };

  const handleGoToBrand = () => {
    // Usamos window.location.replace para reemplazar la URL actual
    window.location.replace("https://int.store");
  };

  return (
    // <div className="sm:relative sm:mt-4 lg:absolute lg:bottom-0 lg:left-0 lg:w-full lg:h-[100px] flex flex-col items-center justify-center gap-2 p-4">
    <div className="lg:absolute lg:bottom-0 sm:relative lg:left-0 w-full h-[100px] flex flex-col items-center justify-center gap-2 p-4">
      <h3
        className="text-[16px] text-center text-white cursor-pointer"
        onClick={handleGoToBrand}
      >
        © Intelligent Networked Transactions LLC
      </h3>
      <h4
        className="text-[14px] text-center text-white cursor-pointer"
        onClick={handleGoToLastTransactions}
      >
        Últimas transacciones
      </h4>
    </div>
  );
}
