import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import "../Navigation Menu/navbar.css";

const Navbar = () => {
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isPortfolioDropdownOpen, setIsPortfolioDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  return (
    <nav
      className={
        isSticky ? "sticky" : "bg-[#ffffff] text-black shadow-md px-4 py-3"
      }
    >
      <div className="container m-auto w-full max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">
            <img src="/Company Logo/syncaboutlogo.png" className="h-12" />
          </Link>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            to={"/"}
            className="font-Manrope text-lg leading-10 font-semibold text-[#000000] hover:text-[#ef7f1a]"
          >
            Home
          </Link>

          {/* Company  Dropdown */}
          <div
            className="relative z-50 group"
            onMouseEnter={() => setIsCompanyDropdownOpen(true)}
            onMouseLeave={() => setIsCompanyDropdownOpen(false)}
          >
            <button className="font-Manrope text-lg leading-10 font-semibold text-[#000000] hover:text-[#ef7f1a]">
              Company
            </button>
            {isCompanyDropdownOpen && (
              <div className="absolute left-0 mt-0 bg-[#ffffff] p-2 rounded shadow-md w-48">
                <Link
                  to={"/"}
                  className="block px-4 py-2 font-Manrope text-sm font-semibold text-black hover:text-[#ef7f1a]"
                >
                  About Us
                </Link>
                <Link
                  to={"/"}
                  className="block px-4 py-2 font-Manrope text-sm font-semibold text-black hover:text-[#ef7f1a]"
                >
                  Why Choose Us
                </Link>
                <Link
                  to={"/"}
                  className="block px-4 py-2 font-Manrope text-sm font-semibold text-black hover:text-[#ef7f1a]"
                >
                  How We Work
                </Link>
                <Link
                  to={"/"}
                  className="block px-4 py-2 font-Manrope text-sm font-semibold text-black hover:text-[#ef7f1a]"
                >
                  Life At Syncabout
                </Link>
              </div>
            )}
          </div>

          <Link
            to={"/"}
            className="font-Manrope text-lg leading-10 font-semibold text-[#000000] hover:text-[#ef7f1a]"
          >
            SAP Services
          </Link>
          {/* Services Dropdown */}
          <div
            className="relative z-50 group"
            onMouseEnter={() => setIsServicesDropdownOpen(true)}
            onMouseLeave={() => setIsServicesDropdownOpen(false)}
          >
            <button className="font-Manrope text-lg leading-10 font-semibold text-[#000000] hover:text-[#ef7f1a]">
              Services
            </button>
            {isServicesDropdownOpen && (
              <div className="absolute left-0 mt-0 bg-[#ffffff] p-2 rounded shadow-md w-56">
                <Link
                  to={"/"}
                  className="block px-4 py-2 font-Manrope text-sm font-semibold text-black hover:text-[#ef7f1a]"
                >
                  Web Development
                </Link>
                <Link
                  to={"/"}
                  className="block px-4 py-2 font-Manrope text-sm font-semibold text-black hover:text-[#ef7f1a]"
                >
                  Software Development
                </Link>
                <Link
                  to={"/"}
                  className="block px-4 py-2 font-Manrope text-sm font-semibold text-black hover:text-[#ef7f1a]"
                >
                  Mobile App Development
                </Link>
                <Link
                  to={"/"}
                  className="block px-4 py-2 font-Manrope text-sm font-semibold text-black hover:text-[#ef7f1a]"
                >
                  Custom ERP Development
                </Link>
                <Link
                  to={"/"}
                  className="block px-4 py-2 font-Manrope text-sm font-semibold text-black hover:text-[#ef7f1a]"
                >
                  SEO Service
                </Link>
                <Link
                  to={"/"}
                  className="block px-4 py-2 font-Manrope text-sm font-semibold text-black hover:text-[#ef7f1a]"
                >
                  Social Media Marketing
                </Link>
              </div>
            )}
          </div>

          {/* Portfolio Dropdown */}
          <div
            className="relative z-50 group"
            onMouseEnter={() => setIsPortfolioDropdownOpen(true)}
            onMouseLeave={() => setIsPortfolioDropdownOpen(false)}
          >
            <button className="font-Manrope text-lg leading-10 font-semibold text-[#000000] hover:text-[#ef7f1a]">
              Portfolio
            </button>
            {isPortfolioDropdownOpen && (
              <div className="absolute left-0 mt-0 bg-[#ffffff] p-2 rounded shadow-md w-48">
                <Link
                  to={"/"}
                  className="block px-4 py-2 font-Manrope text-sm font-semibold text-black hover:text-[#ef7f1a]"
                >
                  Graphics Portfolio
                </Link>
                <Link
                  to={"/"}
                  className="block px-4 py-2 font-Manrope text-sm font-semibold text-black hover:text-[#ef7f1a]"
                >
                  UI/UX Portfolio
                </Link>
              </div>
            )}
          </div>

          <Link
            to={"/"}
            className="font-Manrope text-lg leading-10 font-semibold text-[#000000] hover:text-[#ef7f1a]"
          >
            Blogs
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden ">
          {!isMobileMenuOpen ? (
            <GiHamburgerMenu
              color="black"
              size={"1.5em"}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          ) : (
            <IoCloseSharp
              color="black"
              size={"1.5em"}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className=" md:hidden bg-[#ffffff] text-black px-4 py-3 absolute left-0 w-full z-50 space-y-4">
          <Link
            to={"/"}
            className="block font-Manrope text-lg leading-10 font-semibold text-[#000000] hover:text-[#ef7f1a]"
          >
            Home
          </Link>

          {/* Company Dropdown */}
          <div className=" relative">
            <button
              onClick={() => {
                setIsCompanyDropdownOpen(!isCompanyDropdownOpen);
                setIsServicesDropdownOpen(false);
                setIsPortfolioDropdownOpen(false);
              }}
              className="w-full text-left font-Manrope text-lg leading-10 font-semibold text-[#000000] hover:text-[#ef7f1a]"
            >
              Comapany
            </button>
            {isCompanyDropdownOpen && (
              <div className="bg-[#ffffff] p-2 rounded shadow-md space-y-2">
                <Link
                  to={"/"}
                  className="block px-4 py-2 font-Manrope text-sm font-semibold text-black hover:text-[#ef7f1a]"
                >
                  About Us
                </Link>
                <Link
                  to={"/"}
                  className="block px-4 py-2 font-Manrope text-sm font-semibold text-black hover:text-[#ef7f1a]"
                >
                  Why Choose Us
                </Link>
                <Link
                  to={"/"}
                  className="block px-4 py-2 font-Manrope text-sm font-semibold text-black hover:text-[#ef7f1a]"
                >
                  How We Work
                </Link>
                <Link
                  to={"/"}
                  className="block px-4 py-2 font-Manrope text-sm font-semibold text-black hover:text-[#ef7f1a]"
                >
                  Life At Syncabout
                </Link>
              </div>
            )}
          </div>

          <Link
            to={"/"}
            className="block font-Manrope text-lg leading-10 font-semibold text-[#000000] hover:text-[#ef7f1a]"
          >
            SAP Services
          </Link>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setIsServicesDropdownOpen(!isServicesDropdownOpen);
                setIsCompanyDropdownOpen(false);
                setIsPortfolioDropdownOpen(false);
              }}
              className="w-full text-left font-Manrope text-lg leading-10 font-semibold text-[#000000] hover:text-[#ef7f1a]"
            >
              Services
            </button>
            {isServicesDropdownOpen && (
              <div className="bg-[#ffffff] p-2 rounded shadow-md space-y-2">
                <Link
                  to={"/"}
                  className="block px-4 py-2 font-Manrope text-sm font-semibold text-black hover:text-[#ef7f1a]"
                >
                  Web Development
                </Link>
                <Link
                  to={"/"}
                  className="block px-4 py-2 font-Manrope text-sm font-semibold text-black hover:text-[#ef7f1a]"
                >
                  Software Development
                </Link>
                <Link
                  to={"/"}
                  className="block px-4 py-2 font-Manrope text-sm font-semibold text-black hover:text-[#ef7f1a]"
                >
                  Mobile App Development
                </Link>
                <Link
                  to={"/"}
                  className="block px-4 py-2 font-Manrope text-sm font-semibold text-black hover:text-[#ef7f1a]"
                >
                  Custom ERP Development
                </Link>
                <Link
                  to={"/"}
                  className="block px-4 py-2 font-Manrope text-sm font-semibold text-black hover:text-[#ef7f1a]"
                >
                  SEO Service
                </Link>
                <Link
                  to={"/"}
                  className="block px-4 py-2 font-Manrope text-sm font-semibold text-black hover:text-[#ef7f1a]"
                >
                  Social Media Marketing
                </Link>
              </div>
            )}
          </div>

          {/* Portfolio Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setIsPortfolioDropdownOpen(!isPortfolioDropdownOpen);
                setIsCompanyDropdownOpen(false);
                setIsServicesDropdownOpen(false);
              }}
              className="w-full text-left font-Manrope text-lg leading-10 font-semibold text-[#000000] hover:text-[#ef7f1a]"
            >
              Portfolio
            </button>
            {isPortfolioDropdownOpen && (
              <div className="bg-[#ffffff] p-2 rounded shadow-md space-y-2">
                <Link
                  to={"/"}
                  className="block px-4 py-2 font-Manrope text-sm font-semibold text-black hover:text-[#ef7f1a]"
                >
                  Graphics Portfolio
                </Link>
                <Link
                  to={"/"}
                  className="block px-4 py-2 font-Manrope text-sm font-semibold text-black hover:text-[#ef7f1a]"
                >
                  UI/UX Portfolio
                </Link>
              </div>
            )}
          </div>

          <Link
            to={"/"}
            className="block font-Manrope text-lg leading-10 font-semibold text-[#000000] hover:text-[#ef7f1a]"
          >
            Blogs
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
