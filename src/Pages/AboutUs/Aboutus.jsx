import React from "react";
import { Link } from "react-router-dom";
import "../AboutUs/aboutus.css";

const Aboutus = () => {
  return (
    <section className="w-full  aboutus-bg bg-[url('/aboutus/aboutus.jpg')] bg-no-repeat bg-cover ">
      <div
        id="aboutus-wrapper"
        className="gap-3 flex flex-wrap justify-start md:justify-between md:h-[80vh] items-center m-auto w-full max-w-7xl p-5"
      >
        <div>
          <span className="font-Jost text-[#ffffff] uppercase text-lg leading-[30px] tracking-[5px] font-normal">
            We are dedicated
          </span>
          <h2 className="font-Manrope text-5xl md:text-[80px] md:leading-[88px] font-extrabold text-[#ffffff]">
            About Us
          </h2>
        </div>
        <div>
          <div className="bg-[#ef7f1a] p-6 md:py-[25px] md:px-[60px] rounded-full">
            <ul className="flex items-center gap-5">
              <li className="text-[#fff] text-base hover:text-[#454647] leading-[20px] font-Jost font-medium relative after:content-['\2192'] after:absolute  after:ml-1 after:text-white cursor-pointer">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="font-Jost text-base leading-5 font-medium text-[#ffffff] cursor-pointer">
                About Us
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="aboutus-content-bottom">
        <h1 className="font-Poppins text-4xl md:text-6xl  lg:text-8xl uppercase   lg:leading-[128px] font-bold opacity-20">
          it solution
        </h1>
      </div>
    </section>
  );
};

export default Aboutus;
