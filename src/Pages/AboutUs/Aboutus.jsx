import React from "react";
import { Link } from "react-router-dom";
import "../AboutUs/aboutus.css";

const Aboutus = () => {
  return (
    <>
      <section className="w-full  aboutus-bg bg-[url('/aboutus/aboutus.jpg')] bg-no-repeat bg-cover ">
        <div className="m-auto w-full max-w-7xl">
          {/* About section hero page */}

          <div
            id="aboutus-wrapper"
            className="gap-3 flex flex-wrap justify-start md:justify-between md:h-[80vh] items-center p-5"
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
              <div className="bg-[#ef7f1a] p-4 md:py-[25px] md:px-[60px] rounded-full">
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
        </div>
        <div className="aboutus-content-bottom">
          <h1 className="font-Poppins text-4xl md:text-6xl  lg:text-8xl uppercase   lg:leading-[128px] font-bold opacity-20">
            it solution
          </h1>
        </div>
      </section>

      <section>
        <div className="m-auto w-full max-w-7xl p-3">
          {/* main content */}

          <div className="grid md:grid-cols-2 gap-1 place-content-between place-items-center">
            <div id="content-div">
              <span className="text-[#ef7f1a] font-Jost text-lg leading-[21px] font-bold">
                Who We Are
              </span>
              <h4 className="text-[#202122] font-Jost text-[50px] leading-[66px] font-bold">
                A Full Service Business Development Company
              </h4>
              <p className="font-Manrope text-sm text-start leading-[26px] mb-2 font-normal text-[#666666]">
                We are a business development company that believes in teamwork
                to give effective results with such content and strategies for
                our clients who always keep themselves one step ahead of us.
              </p>
              <p className="font-Manrope text-sm text-start leading-[26px] font-normal text-[#666666]">
                We have experts who are result-oriented in building online brand
                presence not only by being ranked in SERP but also by showing a
                dominant presence on social media.
              </p>
              <div>
                <Link className="bg-indigo-950" to={"/mission"}>
                  Explore Now
                </Link>
              </div>
            </div>
            <div id="image-div">
              <img
                src="/aboutus/whoweare.jpg"
                alt="who we are image"
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutus;
