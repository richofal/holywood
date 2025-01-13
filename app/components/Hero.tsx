import React from "react";

function Hero() {
  return (
    <>
      <div className="text-center">
        <div className="grid grid-cols-[auto,1fr]">
          <div className="row-span-2">
            <img
              alt="Holywood logo"
              className="mx-auto mr-2"
              style={{ width: "100px" }}
              src="./logo-holywood.png"
            />
          </div>
          <h1 className="text-xl lg:text-3xl font-bold text-start self-end uppercase">
            Holywood
          </h1>
          <p className="text-sm lg:text-lg text-gray-600 text-start items-end uppercase">
            Indonesian Custom Woodcraft
          </p>
        </div>
        <h2 className="mt-6 text-3xl font-bold text-start ml-4 lg:text-4xl leading-relaxed">
          Pengrajin Lukis Bakar
        </h2>
        <h2 className="mt-3 text-3xl font-bold text-start ml-4 lg:text-4xl leading-relaxed">
          <span className="italic">(Woodcraft)</span> &amp; Batik.
        </h2>
        <p className="mt-5 text-gray-600">
          Palu Gaza (Apa yang Lo Mau Gua Usahain Bisa)
        </p>
        <div className="flex justify-start">
          <button className="mt-10 ml-4 px-6 py-2 bg-red-600 text-white font-bold rounded">
            Pesan Custom
          </button>
        </div>
      </div>
    </>
  );
}

export default Hero;
