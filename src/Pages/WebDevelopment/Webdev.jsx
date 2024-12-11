import React from "react";
import { Link } from "react-router-dom";

const Webdev = () => {
  return (
    <>
      <section className="w-full lifeatsyncabout-bg bg-[url('/lifeatsyncabout/lifeatsyncabout.jpg')] bg-no-repeat bg-cover ">
        <div className="m-auto w-full max-w-7xl">
          {/* About section hero page */}

          <div
            id="lifeatsyncabout-wrapper"
            className="gap-3 flex flex-wrap justify-start md:justify-between md:h-[57vh] items-center py-9 px-2 md:p-5"
          >
            <div>
              <span className="font-Jost text-[#ffffff] uppercase text-base md:text-lg leading-[30px] tracking-[5px] font-normal">
                THIS IS A PLACE WHERE IDEAS GROW
              </span>
              <h2 className="font-Manrope text-4xl md:text-[80px] md:leading-[88px] font-extrabold text-[#ffffff]">
                Web Development
              </h2>
            </div>
            <div>
              <div className="bg-[#ef7f1a] p-3 md:py-[25px] md:px-[60px] rounded-full">
                <ul className="flex items-center gap-5">
                  <li className="text-[#fff] text-base hover:text-[#454647] leading-[20px] font-Jost font-medium relative after:content-['\2192'] after:absolute  after:ml-1 after:text-white cursor-pointer">
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li className="font-Jost text-base leading-5 font-medium text-[#ffffff] cursor-pointer">
                    web development
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="lifeatsyncabout-content-bottom">
          <h1 className="font-Poppins text-2xl md:text-6xl  lg:text-8xl uppercase   lg:leading-[128px] font-bold opacity-20">
            it solution
          </h1>
        </div>
      </section>
    </>
  );
};

export default Webdev;
