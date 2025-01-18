"use client";

import React, { useState, useEffect } from "react";

function ContactUs() {
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
    <div className="flex flex-col items-center justify-center bg-black text-white px-10 pt-16 gap-3">
      <h1
        className={`${isLargeScreen ? "text-3xl" : "text-2xl"} font-bold mb-4`}
      >
        Hubungi Kami
      </h1>
      <p className="text-center mb-6">
        Pesan kerajinan kayu lukis bakar custom & batik unik Anda bersama
        Holywood Indonesia.
      </p>
      <button
        className="bg-white text-black px-6 py-2 rounded-md mb-8 font-medium"
        onClick={() => {
          window.open(urlWithMessage, "_blank");
        }}
      >
        Pesan Sekarang
      </button>
      <hr className="border-white w-[80%] mb-8" />
      <div className={`mb-8 ${isLargeScreen ? "w-[80%]" : "w-full"} h-[400px]`}>
        <iframe
          src="https://maps.google.com/maps?q=Kampung%20Edukasi%20Sampah,%20Sidoarjo,%2061215,%20Jawa%20Timur,%20Indonesia&z=15&output=embed"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen={true}
          aria-hidden="false"
          tabIndex={0}
        ></iframe>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-5">Lokasi</h2>
        <a href="https://maps.google.com/maps?q=Kampung%20Edukasi%20Sampah,%20Sidoarjo,%2061215,%20Jawa%20Timur,%20Indonesia&z=15&output=embed">
          <p className="underline">
            Kampung Edukasi Sampah, Sidoarjo, 61215, Jawa Timur, Indonesia
          </p>
        </a>
      </div>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-5">E-mail</h2>
        <p>gabyworktime@gmail.com</p>
      </div>
      <div className="flex space-x-4 mb-8">
        <a href="https://www.instagram.com/gabrielsatya" className="text-white">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.tiktok.com/@gabriel_satya" className="text-white">
          <i className="fab fa-tiktok"></i>
        </a>
        <a
          href="https://www.facebook.com/61564865737893"
          className="text-white"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://medium.com/@gabyworktime" className="text-white">
          <i className="fab fa-medium"></i>
        </a>
      </div>
    </div>
  );
}

export default ContactUs;
