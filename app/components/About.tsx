"use client";

import React from "react";
import { useState, useEffect } from "react";

function About() {
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
    <div className="w-full bg-[#D9D9D9] mt-20">
      <div className="p-8 rounded-lg max-w-2xl lg:max-w-4xl text-center mx-auto my-10">
        <h1 className="text-3xl font-semibold mb-6 mt-5">About Us</h1>
        <hr className="border-t-2 border-[#A6795B] mb-9" />
        <div className="w-[90%] text-center items-center mx-auto">
          <p className="text-lg mb-7">
            Holywood adalah pelukis dan pembatik lukis bakar pertama di
            Indonesia, berdiri sejak 2024. Dengan visi menghidupkan seni
            tradisional melalui teknik lukis bakar yang inovatif, Holywood
            menghadirkan karya seni yang unik, autentik, dan bermakna.
          </p>
          <p className="text-lg">
            Sejak berdiri, Holywood telah menangani lebih dari 30 proyek,
            khususnya hadiah personalisasi. Dengan perpaduan kreativitas dan
            penghargaan terhadap tradisi, Holywood terus mengukuhkan posisinya
            sebagai pelopor seni lukis bakar di Indonesia.
          </p>
        </div>
        <a
          href="https://www.youtube.com/watch?v=WrqrVgTaWzc"
          target="_blank"
          className="relative inline-block mt-7 group"
        >
          <img
            src="/thumbnail.png"
            alt="Thumbnail Video YouTube"
            className={`${
              isLargeScreen
                ? "w-[500px] group-hover:scale-110"
                : "w-[400px] group-hover:scale-105"
            } transition-transform duration-300 py-5`}
          />
          <img
            src="/video.png"
            alt="Logo YouTube"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 opacity-90 group-hover:hidden"
          />
        </a>
        <div id="services" className="py-3"></div>
      </div>
    </div>
  );
}

export default About;
