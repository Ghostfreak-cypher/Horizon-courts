import React, { useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";
import { navLinks } from "../constants";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="Navbar flex h-20 w-full items-center pt-2 justify-between px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="heading text-2xl sm:text-3xl">Horizon Courts</div>

      {/* Desktop Navigation */}
      <div className="links capitalize hidden lg:flex gap-8 xl:gap-20 pt-3 text-lg font-medium justify-center items-center">
        {navLinks.map((link) => (
          <a
            key={link.id}
            className={
              link.highlighted
                ? "about-us border-2 rounded-4xl pl-2 pr-2 p-1 border-zinc-400 hover:bg-zinc-100 hover:border-zinc-600 transition-all duration-300"
                : "hover:text-zinc-600 hover:scale-105 transition-all duration-300"
            }
            href={link.href}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Desktop Book Button */}
      <button className="hidden lg:flex justify-center items-center border-2 pl-4 p-2 rounded-4xl bg-black text-white hover:bg-zinc-800 hover:scale-105 hover:shadow-lg transition-all duration-300 group">
        Book now <MdOutlineArrowOutward className="text-2xl group-hover:rotate-45 transition-transform duration-300" />
      </button>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="lg:hidden text-3xl focus:outline-none hover:text-zinc-600 hover:scale-110 transition-all duration-300"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg lg:hidden z-50">
          <div className="flex flex-col items-center gap-6 py-8 px-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                className={`capitalize text-lg transition-all duration-300 ${
                  link.highlighted
                    ? "border-2 rounded-4xl px-4 py-2 border-zinc-400 hover:bg-zinc-100 hover:border-zinc-600"
                    : "hover:text-zinc-600 hover:scale-105"
                }`}
                href={link.href}
                onClick={toggleMenu}
              >
                {link.label}
              </a>
            ))}
            <button className="flex justify-center items-center border-2 pl-4 p-2 rounded-4xl bg-black text-white w-full max-w-xs hover:bg-zinc-800 hover:scale-105 hover:shadow-lg transition-all duration-300 group">
              Book now <MdOutlineArrowOutward className="text-2xl group-hover:rotate-45 transition-transform duration-300" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
