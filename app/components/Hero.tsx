"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

function Hero() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const whatsAppNumber = "82338372100";
  const baseUrl = "https://wa.me/62";
  const message =
    "Halo, dengan kami Holywood Indonesia, ada yang bisa dibantu? Hubungi sekarang";
  const url = `${baseUrl}${whatsAppNumber}`;
  const encodedMessage = encodeURIComponent(message);
  const urlWithMessage = `${url}?text=${encodedMessage}`;

  const checkScreenSize = () => {
    if (window.innerWidth > 1240) {
      setIsLargeScreen(true);
    } else {
      setIsLargeScreen(false);
    }
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <div
      className={`${isLargeScreen ? "flex flex-col justify-center mt-5" : ""}`}
    >
      <div
        className={`grid ${
          isLargeScreen ? "grid-cols-[auto,1fr]" : "grid-cols-1"
        } text-center`}
      >
        <div
          className={`${
            isLargeScreen
              ? "mb-4 mr-2 row-span-2 flex justify-center items-center h-full"
              : "mb-4"
          }`}
        >
          <Image
            alt="Holywood logo"
            className={`${isLargeScreen ? "mx-0 block" : "mx-auto"} ${
              isLargeScreen ? "" : "hidden"
            }`}
            style={{ width: "100px" }}
            src="/logo-holywood.png"
            width={100}
            height={100}
          />
        </div>
        <h1
          className={`text-2xl font-bold uppercase ${
            isLargeScreen ? "text-left self-end mb-2" : "text-center"
          }`}
        >
          Holywood
        </h1>
        <p
          className={`text-md text-[#000000] uppercase ${
            isLargeScreen ? "text-left self-start" : "text-center"
          }`}
        >
          Indonesian Custom Woodcraft
        </p>
      </div>
      <h2
        className={`mt-6 text-3xl font-bold leading-relaxed ${
          isLargeScreen ? "text-left ml-4" : "text-center"
        }`}
      >
        Pengrajin Lukis Bakar <i>(Woodcraft)</i> &amp; Batik.
      </h2>
      <p
        className={`mt-6 text-[#000000] ${
          isLargeScreen ? "text-left ml-4 text-lg" : "text-center"
        }`}
      >
        Palu Gaza <br /> (Apa yang Lu Mau Gua Usahain Bisa)
      </p>
      <div
        className={`flex ${isLargeScreen ? "justify-start" : "justify-center"}`}
      >
        <button
          className="mt-10 ml-4 px-6 py-2 bg-[#C02020] text-white font-medium rounded"
          onClick={() => {
            window.open(urlWithMessage, "_blank");
          }}
        >
          Pesan Custom
        </button>
      </div>
    </div>
  );
}

export default Hero;
