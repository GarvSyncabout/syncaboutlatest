import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../Navigation Menu/navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    company: false,
    services: false,
    cloudServices: false,
    portfolio: false,
  });

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  // For Desktop hover
  const handleMouseEnter = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  // For Mobile click
  const toggleDropdown = (dropdown) => {
    setIsDropdownOpen((prevState) => ({
      ...prevState,
      [dropdown]: !prevState[dropdown],
    }));
  };

  return (
    <header>
      <div
        id="top-bar"
        className="flex bg-[#fafafa] justify-between gap-2  items-center px-5 py-3   flex-col md:flex-row"
      >
        <div className="flex justify-center items-center flex-col gap-3 md:flex-row">
          <Link
            to={"mailto:connect@Syncaboutconsultancy.com"}
            className="mailid font-Jost text-base font-normal leading-[20px] text-[#787878] hover:text-[#ef7f1a]"
          >
            connect@Syncaboutconsultancy.com
          </Link>
          <Link
            to={"tel:9316016153"}
            className="font-Jost text-base font-normal leading-[20px] text-[#ef7f1a]"
          >
            +91 9316016153
          </Link>
        </div>
        <div className="flex justify-center items-center gap-3">
          <span className="terms font-Jost text-sm font-normal  text-[#787878] hover:text-[#ef7f1a]">
            Terms & Condition
          </span>
          <span className="privacy font-Jost text-sm font-normal  text-[#787878] hover:text-[#ef7f1a]">
            Privacy Policy
          </span>
          <span className="font-Jost text-sm font-normal  text-[#787878] hover:text-[#ef7f1a]">
            Contact Us
          </span>
        </div>
      </div>
      <nav className="white p-4 shadow-sm">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <Link to={"/"}>
              <img
                src="./Company Logo/syncaboutlogo.png"
                alt="Company Logo"
                className="h-12"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            <a
              href="#"
              className="font-Manrope text-lg leading-10 font-semibold text-black hover:text-[#ef7f1a]"
            >
              Home
            </a>

            {/* Company Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("company")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="dropdown-menu font-Manrope text-lg leading-10 font-semibold text-black hover:text-[#ef7f1a]">
                Company
              </button>
              {activeDropdown === "company" && (
                <div className="w-48 absolute left-0 mt-0 space-y-2 bg-white text-black p-4 rounded shadow-lg">
                  <a
                    href="#"
                    className="block px-4 py-2 font-Manrope text-sm font-semibold text-black hover:text-[#ef7f1a]"
                  >
                    About Us
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 font-Manrope text-sm font-semibold text-black hover:text-[#ef7f1a]"
                  >
                    Why Choose Us
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 font-Manrope text-sm font-semibold text-black hover:text-[#ef7f1a]"
                  >
                    How We Work
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 font-Manrope text-sm font-semibold text-black hover:text-[#ef7f1a]"
                  >
                    Life At Syncabout
                  </a>
                </div>
              )}
            </div>

            {/* SAP Services Link */}
            <a
              href="#"
              className="font-Manrope text-lg leading-10 font-semibold text-black hover:text-[#ef7f1a]"
            >
              SAP Services
            </a>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="dropdown-menu font-Manrope text-lg leading-10 font-semibold text-black hover:text-[#ef7f1a]">
                Services
              </button>
              {activeDropdown === "services" && (
                <div className="w-60 absolute left-0 mt-0 space-y-2 bg-white text-black p-4 rounded shadow-lg">
                  <a
                    href="#"
                    className="block px-4 py-2 font-Manrope text-sm font-semibold text-black hover:text-[#ef7f1a]"
                  >
                    Web Development
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 font-Manrope text-sm font-semibold text-black hover:text-[#ef7f1a]"
                  >
                    Software Development
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 font-Manrope text-sm font-semibold text-black hover:text-[#ef7f1a]"
                  >
                    Mobile App Development
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 font-Manrope text-sm font-semibold text-black hover:text-[#ef7f1a]"
                  >
                    Custom ERP Development
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 font-Manrope text-sm font-semibold text-black hover:text-[#ef7f1a]"
                  >
                    SEO Services
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 font-Manrope text-sm font-semibold text-black hover:text-[#ef7f1a]"
                  >
                    Social Media Marketing
                  </a>
                </div>
              )}
            </div>

            {/* Cloud Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("cloudServices")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="dropdown-menu font-Manrope text-lg leading-10 font-semibold text-black hover:text-[#ef7f1a]">
                Cloud Services
              </button>
              {activeDropdown === "cloudServices" && (
                <div className="w-40 absolute left-0 mt-0 space-y-2 bg-white text-black p-4 rounded shadow-lg">
                  <a
                    href="#"
                    className="block px-4 py-2 font-Manrope text-sm font-semibold text-black hover:text-[#ef7f1a]"
                  >
                    AWS
                  </a>
                </div>
              )}
            </div>

            {/* Portfolio Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("portfolio")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="dropdown-menu font-Manrope text-lg leading-10 font-semibold text-black hover:text-[#ef7f1a]">
                Portfolio
              </button>
              {activeDropdown === "portfolio" && (
                <div className="w-52 absolute left-0 mt-0 space-y-2 bg-white text-black p-4 rounded shadow-lg">
                  <a
                    href="#"
                    className="block px-4 py-2 font-Manrope text-sm font-semibold text-black hover:text-[#ef7f1a]"
                  >
                    Graphics Portfolios
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 font-Manrope text-sm font-semibold text-black hover:text-[#ef7f1a]"
                  >
                    UI/UX Portfolios
                  </a>
                </div>
              )}
            </div>

            {/* Blogs Link */}
            <a
              href="#"
              className="font-Manrope text-lg leading-10 font-semibold text-black hover:text-[#ef7f1a]"
            >
              Blogs
            </a>
          </div>
          <div className="hidden lg:flex space-x-4 ">
            <Link
              to={
                "https://in.linkedin.com/company/syncabout-business-solutions"
              }
              target="_blank"
            >
              <FaLinkedin size={30} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-black focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-white  z-50 w-full md:max-w-80 transform transition-all duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full "
          }`}
        >
          <div className="flex justify-end p-4">
            <button onClick={toggleMobileMenu} className="text-black text-3xl">
              ×
            </button>
          </div>
          <div className="flex flex-col items-start px-3 text-black space-y-6 overflow-y-auto max-h-[calc(100vh-4rem)]">
            {/* Mobile Dropdowns */}
            <div className="relative w-full">
              <a className="text-lg hover:text-[#ef7f1a] w-full text-start">
                Home
              </a>
            </div>
            <div className="relative w-full">
              <button
                onClick={() => toggleDropdown("company")}
                className="dropdown-menu text-lg hover:text-[#ef7f1a] w-full text-start"
              >
                Company
              </button>
              {isDropdownOpen.company && (
                <div className="bg-white text-black p-4 rounded shadow-sm w-full">
                  <a href="#" className="block px-4 py-2 hover:text-[#ef7f1a] ">
                    About Us
                  </a>
                  <a href="#" className="block px-4 py-2 hover:text-[#ef7f1a]">
                    Why Choose Us
                  </a>
                  <a href="#" className="block px-4 py-2 hover:text-[#ef7f1a]">
                    How We Work
                  </a>
                  <a href="#" className="block px-4 py-2 hover:text-[#ef7f1a]">
                    Life At Syncabout
                  </a>
                </div>
              )}
            </div>
            <div className="relative w-full">
              <a className="text-lg hover:text-[#ef7f1a] w-full text-start">
                SAP Services
              </a>
            </div>
            <div className="relative w-full">
              <button
                onClick={() => toggleDropdown("services")}
                className="dropdown-menu text-lg hover:text-[#ef7f1a] w-full text-start"
              >
                Services
              </button>
              {isDropdownOpen.services && (
                <div className="bg-white text-black p-4 rounded shadow-sm w-full">
                  <a href="#" className="block px-4 py-2 hover:text-[#ef7f1a]">
                    Web Development
                  </a>
                  <a href="#" className="block px-4 py-2 hover:text-[#ef7f1a]">
                    Software Development
                  </a>
                  <a href="#" className="block px-4 py-2 hover:text-[#ef7f1a]">
                    Mobile App Development
                  </a>
                  <a href="#" className="block px-4 py-2 hover:text-[#ef7f1a]">
                    Custom ERP Development
                  </a>
                  <a href="#" className="block px-4 py-2 hover:text-[#ef7f1a]">
                    SEO Services
                  </a>
                  <a href="#" className="block px-4 py-2 hover:text-[#ef7f1a]">
                    Social Media Marketing
                  </a>
                </div>
              )}
            </div>

            <div className="relative w-full">
              <button
                onClick={() => toggleDropdown("cloudServices")}
                className="dropdown-menu text-lg hover:text-[#ef7f1a] w-full text-start"
              >
                Cloud Services
              </button>
              {isDropdownOpen.cloudServices && (
                <div className="bg-white text-black p-4 rounded shadow-sm w-full">
                  <a href="#" className="block px-4 py-2 hover:text-[#ef7f1a]">
                    AWS
                  </a>
                </div>
              )}
            </div>

            <div className="relative w-full">
              <button
                onClick={() => toggleDropdown("portfolio")}
                className="dropdown-menu text-lg hover:text-[#ef7f1a] w-full text-start"
              >
                Portfolio
              </button>
              {isDropdownOpen.portfolio && (
                <div className="bg-white text-black p-4 rounded shadow-sm w-full">
                  <a href="#" className="block px-4 py-2 hover:text-[#ef7f1a]">
                    Graphics Portfolios
                  </a>
                  <a href="#" className="block px-4 py-2 hover:text-[#ef7f1a]">
                    UI/UX Portfolios
                  </a>
                </div>
              )}
            </div>
            <div className="relative w-full">
              <a className="text-lg hover:text-[#ef7f1a] w-full text-start">
                Blogs
              </a>
            </div>

            {/* Social Links */}
            <Link
              to={
                "https://in.linkedin.com/company/syncabout-business-solutions"
              }
              target="_blank"
              className="text-lg"
            >
              <FaLinkedin size={30} />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
