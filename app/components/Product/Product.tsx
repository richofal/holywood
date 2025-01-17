"use client";

import React, { useState, useEffect } from "react";

function Product() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const whatsAppNumber = "881027707533";
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
                className={`text-[#909298] text-md ${
                  isLargeScreen ? "" : ""
                } font-medium mb-3`}
              >
                Produk
              </h2>
              <h1
                className={`font-bold text-2xl ${
                  isLargeScreen ? "mb-5" : "mb-7 mt-5"
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
                className={`text-white mb-6 py-5 ${
                  isLargeScreen
                    ? "text-left w-full"
                    : "text-center w-full mx-auto text-md"
                }`}
                style={{ lineHeight: "25px" }}
              >
                Harga layanan seni lukis bakar yang kami tawarkan sangat
                bersaing. Biaya tergantung pada, tingkat detail, dimensi desain,
                serta tingkat kesulitan. Pigura jati dan alas kayu sengon. Harga
                mulai dari 169 rb. Pemesanan dalam jumlah besar berhak
                mendapatkan diskon khusus.
              </p>
              <button
                className={`bg-white text-black font-medium ${
                  isLargeScreen ? "w-full" : ""
                } py-2 px-4 rounded-sm`}
                onClick={() => {
                  window.open(urlWithMessage, "_blank");
                }}
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

      <div className="bg-white text-black flex items-center justify-center py-16 pb-6 px-8">
        <div className="max-w-7xl mx-auto bg-white p-2 rounded-lg">
          <div
            className={`${
              isLargeScreen
                ? "grid grid-cols-[1.5fr,1fr] gap-8"
                : "flex flex-col items-center"
            }`}
          >
            <div
              className={`${
                isLargeScreen ? "text-left my-auto" : "text-center"
              }`}
            >
              <div
                className={`${
                  isLargeScreen
                    ? ""
                    : "mb-16 mx-auto flex justify-center items-center"
                }`}
              >
                <div className="w-64">
                  <img
                    src="pengiriman.svg"
                    alt="Wooden bowl and utensils"
                    className={`rounded-full object-cover w-full h-full ${
                      isLargeScreen ? "hidden" : ""
                    }`}
                  />
                </div>
              </div>
              <h1
                className={`font-bold ${
                  isLargeScreen ? "mb-5 text-2xl" : "mb-7 mt-5 text-xl"
                }`}
              >
                Pengiriman Domestik
              </h1>
              <hr
                className={`border-t border-[#A6795B] mb-4 ${
                  isLargeScreen ? "w-[20%]" : "w-[50%] mx-auto"
                }`}
              />
              <p
                className={`text-black ${
                  isLargeScreen
                    ? "text-left w-full"
                    : "text-center w-full mx-auto py-5 text-md"
                }`}
                style={{ lineHeight: "25px" }}
              >
                Untuk memastikan karya seni lukis bakar Anda sampai dengan aman,
                kami mengemasnya dengan rapi dan hati-hati. Produk dilapisi
                dengan bahan pelindung seperti kertas atau foam, lalu dimasukkan
                ke dalam dus yang kokoh. Berbagai layanan pengiriman terpercaya,
                seperti J&T, JNE, Grab. Anda dapat memilih opsi pengiriman
                sesuai kebutuhan, memastikan produk tiba tepat waktu dengan
                kondisi yang sempurna. Semua proses pengiriman dirancang untuk
                menjaga keamanan dan kualitas karya seni Anda.
              </p>
            </div>
            <div
              className={`${
                isLargeScreen ? "flex justify-center items-center" : ""
              }`}
            >
              <div className="w-64">
                <img
                  src="pengiriman.svg"
                  alt="Wooden bowl and utensils"
                  className={`rounded-full object-cover w-full h-full ${
                    isLargeScreen ? "" : "hidden"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white text-black flex items-center justify-center pb-14 px-8">
        <div className="max-w-7xl mx-auto bg-white p-2 rounded-lg">
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
                  src="garansi.svg"
                  alt="Wooden bowl and utensils"
                  className={`rounded-full object-cover w-full h-full ${
                    isLargeScreen ? "" : "hidden"
                  }`}
                />
              </div>
            </div>
            <div
              className={`${
                isLargeScreen ? "text-left my-auto" : "text-center"
              }`}
            >
              <div
                className={`${
                  isLargeScreen
                    ? ""
                    : "mb-16 mx-auto flex justify-center items-center"
                }`}
              >
                <div className="w-64">
                  <img
                    src="garansi.svg"
                    alt="Wooden bowl and utensils"
                    className={`rounded-full object-cover w-full h-full ${
                      isLargeScreen ? "hidden" : ""
                    }`}
                  />
                </div>
              </div>
              <h1
                className={`font-bold ${
                  isLargeScreen ? "mb-5 text-2xl" : "mb-7 mt-5 text-xl"
                }`}
              >
                Garansi
              </h1>
              <hr
                className={`border-t border-[#A6795B] mb-4 ${
                  isLargeScreen ? "w-[20%]" : "w-[50%] mx-auto"
                }`}
              />
              <p
                className={`text-black ${
                  isLargeScreen
                    ? "text-left w-full mb-6"
                    : "text-center w-full mx-auto py-5 text-md"
                }`}
                style={{ lineHeight: "25px" }}
              >
                Garansi kami memberikan jaminan  untuk setiap produk yang kami
                hasilkan. Kami berdedikasi untuk memberikan kualitas terbaik,
                dan jika ada kerusakan atau ketidaksesuaian dengan standar yang
                dijanjikan, kami akan memperbaiki atau mengganti produk tanpa
                biaya tambahan.
              </p>
              <p className="opacity-80 italic">
                NB : Garansi ini berlaku dengan kebijakan pelayanan
              </p>
              <div id="steps"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
