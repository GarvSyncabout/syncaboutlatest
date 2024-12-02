import React from "react";
import "../Work Success Section/work.css";
import { IoIosPlay } from "react-icons/io";

const Work = () => {
  return (
    <section className="bg-[#ffffff]">
      <div
        id="main wrapper"
        className="gap-8 md:gap-8 lg:gap-0 m-auto w-full max-w-7xl grid lg:grid-cols-2 pt-5 pb-5 md:pt-[110px] md:pb-20"
      >
        <div
          id="img-div"
          className="flex-col-reverse gap-5   md:flex-row work-container flex justify-center items-center  md:items-end "
        >
          {/* style shape img */}

          <div className="hidden  lg:block  img-png">
            <img src="./Work Success Section/worksuccess.png" />
          </div>

          {/* image 2 */}
          <div className="p-2 flex justify-between items-center flex-col  md:gap-6">
            <div className=" play-button-two p-[15px] md:p-[22px] rounded-full">
              <IoIosPlay cursor={"pointer"} color="white" />
            </div>

            <div className="hidden md:block md:h-[360px] md:w-[70px] rounded-xl">
              <img
                src="./Work Success Section/digitalsolutions.jpg"
                className="object-cover h-full rounded-xl "
              />
            </div>
          </div>

          {/* imag 2 */}

          <div className=" p-2 md:h-[500px] md:w-[391px] rounded-xl ">
            <img
              src="./Work Success Section/digitalsolutions.jpg"
              className="object-cover h-full  rounded-xl "
            />
          </div>
        </div>
        <div
          id="content-div"
          className="p-2 md:p-0 flex justify-center items-center"
        >
          <div
            id="content-wrapper"
            className="flex justify-center text-center items-center lg:items-start  lg:text-start flex-col"
          >
            <h2 className="text-[#000000] font-Manrope text-2xl md:text-4xl lg:text-6xl lg:leading-[78px] mb-[15px] font-extrabold">
              Let’s Design, Develop & Launch Your brand Online Together
            </h2>
            <p className="text-[#666666] font-Jost text-sm leading-[26px] mb-[1rem] font-normal ">
              At Syncabout Solutions, we specialize in comprehensive web design
              and development services. Join us as we design, develop, and
              launch your brand online, creating a digital footprint that stands
              out. Let’s embark on this exciting journey together.
            </p>
            <p className="text-[#666666] font-Jost text-sm leading-[26px] mb-[1rem] font-normal ">
              With a dedicated team of professionals, We bring your vision to
              life, ensuring not just a website but digital But a digital
              experience that engages and converts. Enhance Your Online Presence
              with Syncabout – Where innovation meets design.
            </p>
            <div>
              <button
                className="bg-[#ef7f1a] rounded-md p-3 text-white text-sm font-Jost hover:!bg-[#000000]  hover:text-[#white]"
                href="#"
              >
                Let's Discuss Your Idea
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
