"use client";

import React, { useState, useEffect } from "react";

function Product() {
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
    <div className="bg-black text-white flex items-center justify-center py-16 px-8">
      <div className="max-w-7xl mx-auto bg-black p-6 rounded-lg shadow-lg">
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
                src="product.svg"
                alt="Wooden bowl and utensils"
                className={`rounded-full object-cover w-full h-full ${
                  isLargeScreen ? "" : "hidden"
                }`}
              />
            </div>
          </div>
          <div className={`${isLargeScreen ? "text-left" : "text-center"}`}>
            <h2
              className={`text-[#909298] ${
                isLargeScreen ? "text-lg" : "text-md"
              } font-bold mb-3`}
            >
              Produk
            </h2>
            <h1
              className={`font-bold ${
                isLargeScreen ? "mb-5 text-2xl" : "mb-7 mt-5 text-xl"
              }`}
            >
              Harga Jasa Pembuatan Lukisan dan Batik (Lukis Bakar)
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
              Harga layanan seni lukis bakar yang kami tawarkan sangat bersaing.
              Biaya tergantung pada, tingkat detail, dimensi desain, serta
              tingkat kesulitan. Pigura jati dan alas kayu sengon. Harga mulai
              dari 169 rb. Pemesanan dalam jumlah besar berhak mendapatkan
              diskon khusus.
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
                  src="product.svg"
                  alt="Wooden bowl and utensils"
                  className={`rounded-full object-cover w-full h-full ${
                    isLargeScreen ? "hidden" : ""
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
