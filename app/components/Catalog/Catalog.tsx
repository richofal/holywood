"use client";

import React, { useState, useEffect } from "react";

function Catalog() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

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
    <>
      <div className="bg-black text-white flex items-center justify-center py-10 px-8">
        <div className="max-w-7xl mx-auto bg-black p-6 rounded-lg">
          <div
            className={`${
              isLargeScreen
                ? "grid grid-cols-[1fr,1.5fr] gap-8"
                : "flex flex-col items-center"
            }`}
          >
            <div
              className={`${
                isLargeScreen ? "flex justify-center items-center" : ""
              }`}
            >
              <div className="w-64">
                <img
                  src="katalog.svg"
                  alt="Wooden bowl and utensils"
                  className={`object-cover w-full h-full ${
                    isLargeScreen ? "" : "hidden"
                  }`}
                />
              </div>
            </div>
            <div
              className={`${
                isLargeScreen ? "text-left self-center" : "text-center"
              }`}
            >
              <h1
                className={`font-bold text-2xl ${
                  isLargeScreen ? "mb-5" : "mb-7 mt-5"
                }`}
              >
                Katalog Produk Ready
              </h1>
              <hr
                className={`border-t border-[#A6795B] mb-4 ${
                  isLargeScreen ? "w-[20%]" : "w-[50%] mx-auto"
                }`}
              />
              <p
                className={`text-white mb-6 ${
                  isLargeScreen
                    ? "text-left w-full"
                    : "text-center w-full mx-auto py-5 text-md"
                }`}
                style={{ lineHeight: "25px" }}
              >
                Selain produk custom, kami juga ada produkr ready. Mau lihat
                katalog untuk produk ready?{" "}
                <br className={`${isLargeScreen ? "" : "hidden"}`} /> Klik
                tombol di bawah ini.
              </p>
              <button
                className={`bg-white text-black font-medium ${
                  isLargeScreen ? "w-full" : ""
                } py-2 px-4 rounded-sm`}
              >
                Pesan Sekarang
              </button>
              <div
                className={`${
                  isLargeScreen
                    ? ""
                    : "mt-14 mx-auto flex justify-center items-center"
                }`}
              >
                <div className="w-64">
                  <img
                    src="katalog.svg"
                    alt="Wooden bowl and utensils"
                    className={`object-cover w-full h-full ${
                      isLargeScreen ? "hidden" : ""
                    }`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Catalog;
