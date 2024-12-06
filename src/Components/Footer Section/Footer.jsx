import React from "react";
import { MdOutlineSubdirectoryArrowLeft } from "react-icons/md";
import { IoCallSharp, IoMail, IoLocation } from "react-icons/io5";
import { Link } from "react-router-dom";
import "../Footer Section/footer.css";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const imageData = [
    {
      id: "1",
      imageUrl: "/Footer Section/footercompanylogo.png",
      alt: "Footer Section Logo",
      href: "/",
      slogan: "Elevate Your Vision with Syncabout",
    },
  ];

  const serviceData = [
    {
      id: "1",
      title: "Web Development",
      href: "/",
    },
    {
      id: "2",
      title: "Software Development",
      href: "/",
    },
    {
      id: "3",
      title: "Mobile App Development",
      href: "/",
    },
    {
      id: "4",
      title: "Custom ERP Development",
      href: "/",
    },
    {
      id: "5",
      title: "SEO Service",
      href: "/",
    },
    {
      id: "6",
      title: "Social Media Marketing",
      href: "/",
    },
  ];

  const usefullData = [
    {
      id: "1",
      title: "Home",
      href: "/",
    },
    {
      id: "2",
      title: "About Us",
      href: "/",
    },
    {
      id: "3",
      title: "Why Choose Us",
      href: "/",
    },
    {
      id: "4",
      title: "How We Work",
      href: "/",
    },
    {
      id: "5",
      title: "Life At Syncabout",
      href: "/",
    },
    {
      id: "6",
      title: "Contact Us",
      href: "/",
    },
  ];

  const footerContent = [
    {
      id: "1",
      heading: "You too join my communities.",
    },
  ];
  return (
    <footer>
      <div className="bg-[#291f3a]">
        <div className="grid lg:grid-cols-2 gap-5 place-content-center  place-items-center m-auto max-w-7xl w-full py-[50px] lg:py-[110px]">
          {footerContent.map((footerContentData) => {
            return (
              <div key={footerContentData.id} id="div-content">
                <h2 className="font-Manrope text-2xl lg:text-6xl text-center lg:leading-[78px] font-extrabold text-[#ffffff]">
                  {footerContentData.heading}
                </h2>
              </div>
            );
          })}
          <div id="div-input">
            <form className="relative">
              <input
                size={30}
                type="text"
                placeholder="infolia.itodo@gmail.com"
                className=" font-Jost text-[#ffffff] text-lg lg:text-[32px] leading-[46px] font-normal bg-transparent focus:outline-none border-b border-[#ffffff]"
              />
              <button className="absolute top-[12px] right-0 " type="submit">
                <MdOutlineSubdirectoryArrowLeft
                  size={"1.5em"}
                  color="#ffffff"
                />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-[#251A38]" id="container">
        <div
          id="wrapper"
          className="m-auto w-full max-w-7xl py-10  md:pt-[75px] md:pb-[75px]"
        >
          <div
            id="footer-wrapper"
            className=" gap-5 md:gap-0 grid md:grid-cols-2 place-content-center px-2 place-items-center"
          >
            {/* First Div */}
            <div
              id="grid-first-div"
              className="flex justify-center items-center md:items-start gap-5 md:gap-3 flex-col py-2"
            >
              {imageData.map((imageItem) => {
                return (
                  <div id="logo-div" key={imageItem.id}>
                    <Link to={imageItem.href}>
                      <img
                        src={imageItem.imageUrl}
                        alt={imageItem.alt}
                        className="h-16"
                      />
                    </Link>
                    <h4 className="text-[#ffffff] text-sm mt-3  text-center leading-[26px] font-Jost font-normal">
                      {imageItem.slogan}
                    </h4>
                  </div>
                );
              })}

              <div
                id="content-div"
                className="flex justify-center items-start flex-col gap-2"
              >
                <div className="flex justify-center items-center gap-2">
                  <IoCallSharp color="#ef7f07" />
                  <Link
                    className="text-[#FFFFFF80] hover:text-[#ef7f07] font-Jost text-sm font-normal"
                    to={"tel:+919316016153"}
                  >
                    +919316016153
                  </Link>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <IoMail color="#ef7f07" />
                  <Link
                    className="text-[#FFFFFF80] font-Jost hover:text-[#ef7f07] text-sm font-normal"
                    to={"mailto:connect@syncaboutconsultancy.com"}
                  >
                    connect@syncaboutconsultancy.com
                  </Link>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <IoLocation color="#ef7f07" />
                  <Link
                    target="_blank"
                    className="text-[#FFFFFF80] font-Jost hover:text-[#ef7f07] text-sm font-normal"
                    to={
                      "https://www.google.com/maps/place/Sun+Gravitas/@23.0108181,72.528337,17z/data=!4m6!3m5!1s0x395e85e9f2477ef1:0xd22e247bd25f9357!8m2!3d23.0108181!4d72.5309173!16s%2Fg%2F11kjpcrqsw?entry=ttu&g_ep=EgoyMDI0MTIwMi4wIKXMDSoASAFQAw%3D%3D"
                    }
                  >
                    1020 Sun Gravitas, Near Shyamal Cross Road,
                    <br />
                    Radio Mirchi Road, Ahmedabad -380015 Gujarat, IN.
                  </Link>
                </div>
              </div>
            </div>

            {/* Second Div */}

            <div
              id="second div"
              className="flex justify-evenly gap-3 w-full items-center  py-2"
            >
              {/* Our Service */}

              <div className="flex justify-center  items-start flex-col gap-2">
                <h4 className="font-Jost text-[#ffffff] text-lg leading-[23.4px] font-normal">
                  Our Service
                </h4>
                <div>
                  {serviceData.map((service) => {
                    return (
                      <ul className="service-ul" key={service.id}>
                        <li className="mb-1">
                          <Link
                            to={service.href}
                            className="text-[#ffffff80] font-Jost text-sm font-normal hover:text-[#ef7f1a]"
                          >
                            {service.title}
                          </Link>
                        </li>
                      </ul>
                    );
                  })}
                </div>
              </div>

              {/* Usefull Links */}

              <div className="flex justify-center  items-start flex-col gap-2">
                <h4 className="font-Jost text-[#ffffff] text-lg leading-[23.4px] font-normal">
                  Usefull Links
                </h4>
                <div>
                  {usefullData.map((usefulllink) => {
                    return (
                      <ul className="service-ul" key={usefulllink.id}>
                        <li className="mb-1">
                          <Link
                            to={usefulllink.href}
                            className="text-[#ffffff80] font-Jost text-sm font-normal hover:text-[#ef7f1a]"
                          >
                            {usefulllink.title}
                          </Link>
                        </li>
                      </ul>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="m-auto w-full max-w-[1200px] bg-[#1d152c] rounded-md  p-10">
          <div className="flex justify-center items-center flex-col gap-5">
            <Link
              to={
                "https://in.linkedin.com/company/syncabout-business-solutions"
              }
              target="_blank"
              className="text-lg"
            >
              <FaLinkedin
                size={30}
                className="text-[#ffffff80] hover:text-[#ef7f1a]"
              />
            </Link>
            <p className="text-center text-[#ffffff80] text-sm font-Manrope leading-7 font-semibold">
              &copy; 2025 Syncabout Business Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
