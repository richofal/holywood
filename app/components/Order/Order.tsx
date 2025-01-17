"use client";

import React, { useState, useEffect } from "react";

function Order() {
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
    <div className="bg-[#D9D9D9]  justify-center items-center p-16">
      <div className="flex flex-col md:flex-row items-center md:items-start rounded-lg">
        <div className={`md:w-1/2 ${isLargeScreen ? "ml-52" : "mb-14"}`}>
          <h2
            className={`text-[#909298] font-medium mb-5 text-md ${
              isLargeScreen ? "" : "flex justify-center"
            }`}
          >
            Cara Pemesanan
          </h2>
          <h1
            className={`font-bold mb-5 ${
              isLargeScreen ? "text-3xl" : "text-2xl flex justify-center"
            }`}
          >
            Ikuti Langkah Order Ini
          </h1>
          <hr
            className={`border-t-2 border-[#A6795B] w-16 my-6 ${
              isLargeScreen ? "" : "mx-auto"
            }`}
          />
          <div className="space-y-6">
            {[
              "Hubungi Melalui WhatsApp",
              "Cerita dan Sampaikan Keinginan Anda",
              "Pembayaran, Bisa DP Minimal 60%",
              "Pengerjaan Project",
              "Kirim Hasil",
              "Pelunasan dan Pengiriman",
            ].map((text, index) => (
              <div key={index} className="flex items-center">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-[#A6795B] rounded-full text-brown-500 text-lg font-bold mr-4">
                  <span className={`text-[#A6795B] ${isLargeScreen ? "" : ""}`}>
                    {index + 1}
                  </span>
                </div>
                <span className={`text-black ${isLargeScreen ? "" : ""}`}>
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div
          className={`md:w-1/2 md:mt-0 md:ml-6 ${
            isLargeScreen ? "self-end mt-4" : ""
          }`}
        >
          <img
            src="/order.svg"
            alt="Wooden tray with two compartments"
            className="w-[200px] h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Order;
