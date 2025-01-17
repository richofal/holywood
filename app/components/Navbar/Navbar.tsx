"use client";

import "./Navbar.css";
import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const navbarLinks = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Menyimpan status menu

  const handleNavbarButton = () => {
    setIsMenuOpen(!isMenuOpen); // Mengubah status toggle menu
  };

  const handleMenuItemClick = () => {
    if (navbarLinks.current) {
      navbarLinks.current.classList.add("menu-collapse"); // Menyembunyikan menu
    }
    setIsMenuOpen(false); // Menonaktifkan toggle setelah menu item diklik
  };

  return (
    <nav className="bg-[#ffffff] fixed-navbar mx-auto">
      <div className="navbar-container">
        <a href="/">
          <Image
            src="/logo-holywood.png"
            alt="logo"
            width={70}
            height={70}
            className="object-contain"
          />
        </a>
        <button onClick={handleNavbarButton} className="navbar-toggler">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          ref={navbarLinks}
          className={`navbar-links ${isMenuOpen ? "" : "menu-collapse"}`} // Menggunakan state untuk toggle kelas
        >
          <ul className="links-list">
            <li className="nav-item">
              <Link href="/" className="nav-link" onClick={handleMenuItemClick}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#about" className="nav-link" onClick={handleMenuItemClick}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#services" className="nav-link" onClick={handleMenuItemClick}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#product" className="nav-link" onClick={handleMenuItemClick}>
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#steps" className="nav-link" onClick={handleMenuItemClick}>
                Steps
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#testimonial" className="nav-link" onClick={handleMenuItemClick}>
                Testimonial
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#catalog" className="nav-link" onClick={handleMenuItemClick}>
                Catalog
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#faq" className="nav-link" onClick={handleMenuItemClick}>
                FAQ
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#contact" className="nav-link" onClick={handleMenuItemClick}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
