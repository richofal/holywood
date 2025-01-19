"use client";

import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState, useEffect } from "react";
import Card from "./Card/Card";
import Hero from "./Hero";

const Homepage = () => {
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
      <div className="w-full">
        <div className={`mx-10 ${isLargeScreen ? "mt-16" : "mt-3"}`}>
          <div
            className={`flex ${isLargeScreen ? "flex-row" : "flex-col"} ${
              isLargeScreen ? "gap-20" : "gap-10"
            } ${isLargeScreen ? "justify-center" : ""}`}
          >
            <div
              className={`${isLargeScreen ? "" : "order-2"} animate-slide-up`}
            >
              <Card />
            </div>
            <div
              className={`${isLargeScreen ? "" : "order-1"} animate-slide-up`}
            >
              <Hero />
            </div>
          </div>
        </div>
        <div id="about"></div>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slide-up 0.5s ease-out;
        }
      `}</style>
    </>
  );
};

export default Homepage;
