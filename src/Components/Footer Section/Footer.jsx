import React from "react";
import { MdOutlineSubdirectoryArrowLeft } from "react-icons/md";

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#291f3a]">
        <div className="grid lg:grid-cols-2 gap-5 place-content-center place-items-center m-auto max-w-7xl w-full py-[50px] lg:py-[110px]">
          <div id="div-content">
            <h2 className="font-Manrope text-2xl lg:text-6xl text-center lg:leading-[78px] font-extrabold text-[#ffffff]">
              You too join my communities.
            </h2>
          </div>
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
      <div className="bg-[#251a38]">
        <div className="m-auto max-w-7xl w-full"></div>
      </div>
    </footer>
  );
};

export default Footer;