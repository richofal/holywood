"use client";

import { useEffect } from "react";
import "./WhatsApp.css";
import React from "react";
import Image from "next/image";

const WhatsApp = () => {
  const whatsAppNumber = "881027707533";
  const baseUrl = "https://wa.me/62";
  const message =
    "Halo, dengan kami Holywood Indonesia, ada yang bisa dibantu? Hubungi sekarang";
  const url = `${baseUrl}${whatsAppNumber}`;
  const encodedMessage = encodeURIComponent(message);
  const urlWithMessage = `${url}?text=${encodedMessage}`;

  useEffect(() => {
    const handleScroll = () => {
      const whatsappLinkElement = document.querySelector(".whatsapp-link");
      if (window.scrollY > 100) {
        whatsappLinkElement?.classList.add("visible");
      } else {
        whatsappLinkElement?.classList.remove("visible");
      }
    };

    const checkScrollVisibility = () => {
      const whatsappLinkElement = document.querySelector(".whatsapp-link");
      const scrollHight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollHight > clientHeight) {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
      } else {
        whatsappLinkElement?.classList.add("visible");
      }
    };

    checkScrollVisibility();

    // window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <a
        href={urlWithMessage}
        className="whatsapp-link relative"
        target="_blank"
        rel="noreferrer noopener"
      >
        <span className="absolute left-[7px] top-[7px] -z-50 size-10">
          <span className="flex size-full items-center justify-center animate-ping rounded-full bg-green-500 opacity-75"></span>
        </span>
        <Image
          src="/whatsapp.png"
          alt="WhatsApp"
          width={40}
          height={40}
          className="whatsapp-icon z-50"
        />
      </a>
    </div>
  );
};

export default WhatsApp;
