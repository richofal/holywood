"use client";

import React from "react";
import { useState, useEffect } from "react";

function Services() {
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
    <div className="max-w-7xl mx-auto px-8 py-2">
      <h2 className={`text-center text-[#909298] text-md font-medium mb-5`}>
        Keunggulan Layanan dan Kepercayaan
      </h2>
      <h1 className={`text-center text-3xl font-bold mb-14`}>
        Mengapa Harus Dengan Kami?
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <div className="bg-gray-100 p-6 text-center rounded-lg">
          <i className="fas fa-lightbulb text-4xl text-[#A3826C] mb-4 py-2"></i>
          <h3 className="text-xl font-semibold mb-4">100% Custom</h3>
          <p>
            Berikan kami detail gambar atau spesifikasi karya seni lukis bakar
            yang Anda inginkan. Kami siap menciptakan desain sesuai keinginan
            Anda dengan hasil terbaik.
          </p>
        </div>
        <div className="bg-gray-100 p-6 text-center rounded-lg">
          <i className="fas fa-shopping-cart text-4xl text-[#A3826C] mb-4 py-2"></i>
          <h3 className="text-xl font-semibold mb-4">Order Full Online</h3>
          <p>
            Proses pemesanan kini lebih mudah! Semua langkah, mulai dari
            konsultasi hingga transaksi, bisa dilakukan secara online dengan
            cepat dan nyaman.
          </p>
        </div>
        <div className="bg-gray-100 p-6 text-center rounded-lg">
          <i className="fas fa-check-circle text-4xl text-[#A3826C] mb-4 py-2"></i>
          <h3 className="text-xl font-semibold mb-4">
            Garansi Kualitas Produk
          </h3>
          <p>
            Setiap karya seni kami dilengkapi dengan garansi. Jika terjadi cacat
            produksi, kami akan memperbaiki atau menggantinya.
          </p>
        </div>
        <div className="bg-gray-100 p-6 text-center rounded-lg">
          <i className="fas fa-box text-4xl text-[#A3826C] mb-4 py-2"></i>
          <h3 className="text-xl font-semibold mb-4">
            Prototipe Dikirim ke Anda
          </h3>
          <p>
            Kami menyediakan sampel karya seni sebelum produksi untuk memastikan
            kualitas dan kesesuaian dengan permintaan Anda.
          </p>
        </div>
        <div className="bg-gray-100 p-6 text-center rounded-lg">
          <i className="fas fa-tree text-4xl text-[#A3826C] mb-4 py-2"></i>
          <h3 className="text-xl font-semibold mb-4">Produk Kayu</h3>
          <p>
            Kami menjual berbagai macam kerajinan kayu seperti, gelas, piring,
            dan mangkok.
          </p>
        </div>
        <div className="bg-gray-100 p-6 text-center rounded-lg justify-center items-center flex flex-col">
          <h3 className="text-xl font-semibold mb-6 mt-2">Pesan Sekarang</h3>
          <p>
            Klik tombol di bawah ini untuk memulai proyek seni lukis bakar Anda
            bersama kami. Kami siap membantu mewujudkan karya impian Anda!
          </p>
          <button
            className="mt-6 mb-2 px-4 py-2 bg-[#C02020] text-white rounded font-medium"
            onClick={() => {
              window.open(urlWithMessage, "_blank");
            }}
          >
            Pesan Sekarang
          </button>
          <div id="product"></div>
        </div>
      </div>
    </div>
  );
}

export default Services;
