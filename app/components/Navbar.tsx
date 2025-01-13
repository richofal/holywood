"use client";

import React, { useRef } from "react";
import Link from "next/link";
import "../App.css";
import Image from "next/image";

const Navbar = () => {
  const navbarLinks = useRef<HTMLDivElement>(null);

  const handleNavbarButton = () => {
    if (navbarLinks.current) {
      navbarLinks.current.classList.toggle("menu-collapse");
    }
  };

  return (
    <nav className="navbar fixed-navbar">
      <div className="navbar-container">
        <a href="#" className="brand-title">
          <Image
            src="/logo-holywood.png"
            alt=""
            width={70}
            height={70}
            className="object-contain"
          />
        </a>
        <button onClick={handleNavbarButton} className="navbar-toggler">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div ref={navbarLinks} className="navbar-links menu-collapse">
          <ul className="links-list">
            <li className="nav-item">
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/" className="nav-link">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/" className="nav-link">
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/" className="nav-link">
                Steps
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/" className="nav-link">
                Testimonial
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/" className="nav-link">
                Catalog
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/" className="nav-link">
                FAQ
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/" className="nav-link">
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
