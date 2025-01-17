"use client";

import React, { useState, useEffect } from "react";
import testimonialsData from "./Testimonial.json";

function Testimonial() {
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

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? testimonialsData.length - (isLargeScreen ? 3 : 1)
        : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialsData.length - (isLargeScreen ? 3 : 1)
        ? 0
        : prevIndex + 1
    );
  };

  const getVisibleTestimonials = () => {
    if (isLargeScreen) {
      return testimonialsData.slice(currentIndex, currentIndex + 3);
    }
    return [testimonialsData[currentIndex]];
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <div className="bg-white py-10 pb-16 px-8">
      <div className="flex flex-col items-center">
        <h1
          className={`${
            isLargeScreen ? "" : ""
          } font-bold mb-2 mt-5 text-center text-2xl`}
        >
          Lebih Dari 30+ Project Terselesaikan
        </h1>
        <hr
          className={`border-t-2 border-[#A6795B] w-16 my-8 ${
            isLargeScreen ? "" : "mx-auto"
          }`}
        />
        <div className="flex items-center space-x-4">
          <button className="text-2xl" onClick={handlePrev}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <div className="flex space-x-4">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-gray-200 p-6 rounded-lg text-center ${
                  isLargeScreen ? "w-96" : "w-72"
                }`}
              >
                <p className="font-bold mb-3">{testimonial.quote}</p>
                <p className="">{testimonial.message}</p>
                <img
                  src={testimonial.image}
                  alt={`Profile of ${testimonial.name}`}
                  className="w-16 h-16 rounded-full mx-auto mt-8 mb-4"
                />
                <p className="font-bold mt-2">{testimonial.name}</p>
                <p>{testimonial.role}</p>
              </div>
            ))}
          </div>
          <button className="text-2xl" onClick={handleNext}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
