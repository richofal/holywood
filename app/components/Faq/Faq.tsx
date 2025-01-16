"use client";

import React, { useState, useEffect } from "react";
import faqData from "./Faq.json";

function Faq() {
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

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [faqs, setFaqs] = useState<
    { number: string; question: string; answer: string; isOpen: boolean }[]
  >([]);

  useEffect(() => {
    setFaqs(faqData);
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className={`${isLargeScreen ? "flex md:flex-row" : "flex flex-col"} p-16`}
    >
      <div
        className={`${
          isLargeScreen ? "md:w-[40%]" : "w-full"
        } items-center flex flex-col justify-center m-3`}
      >
        <h2 className="text-gray-400 font-bold text-lg">FAQ</h2>
        <h1
          className={`${
            isLargeScreen ? "text-2xl" : "text-xl text-center"
          } font-bold text-gray-800 mt-2`}
        >
          Pertanyaan Yang Sering Ditanyakan
        </h1>
        <hr
          className={`border-t-2 border-[#A6795B] w-16 h-5 mt-5 ${
            isLargeScreen ? "w-[20%]" : "w-[50%] mx-auto"
          }`}
        />
      </div>
      <div
        className={`${
          isLargeScreen ? "md:w-[60%]" : "w-full"
        } bg-gray-200 p-5 m-2 pb-10`}
      >
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-white py-4 cursor-pointer"
            onMouseDown={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <span className="text-[#A6795B] mr-4 self-start">
                  {faq.number}
                </span>
                <span
                  className={`text-black font-medium px-2${
                    isLargeScreen ? "" : ""
                  }`}
                >
                  {faq.question}
                </span>
              </div>
              <i
                className={`fas ${
                  openIndex === index ? "fa-minus" : "fa-plus"
                } text-gray-400 cursor-pointer self-start`}
              ></i>
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
