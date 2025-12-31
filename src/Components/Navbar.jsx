import React, { useEffect, useState } from "react";
import logo from "../assets/logo.jpeg";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 flex justify-between items-center ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className=" w-full px-4 flex justify-between items-center">
        {/* Clickable Logo Section */}
        <div
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <img
            src={logo}
            className="text-white w-14 h-14 bg-white rounded-full"
            alt=""
          />
          <span
            className={`text-2xl font-bold ${
              scrolled ? "text-gray-900" : "text-white"
            } transition-colors duration-300 group-hover:opacity-90`}
          >
            A Z COATING SOLUTIONS
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {["Home", "Services", "Gallery", "About", "Contact"].map((item) => (
            <div
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`font-medium hover:text-orange-500 transition-colors cursor-pointer ${
                scrolled ? "text-gray-700" : "text-white"
              }`}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-orange-500">
          {isMenuOpen ? (
            <X size={28} />
          ) : (
            <Menu
              size={28}
              className={scrolled ? "text-gray-800" : "text-white"}
            />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-xl py-4 px-6 flex flex-col space-y-4">
          {["Home", "Services", "Gallery", "About", "Contact"].map((item) => (
            <div
              key={item}
              onClick={() => {
                setIsMenuOpen(false);
                scrollToSection(item.toLowerCase());
              }}
              className="text-gray-800 font-medium py-2 border-b border-gray-100"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
