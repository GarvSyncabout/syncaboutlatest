import React, { useRef, useEffect } from "react";
import "../Work Success Section/work.css";
import { IoIosPlay } from "react-icons/io";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import AOS from "aos";
import CountUp from "react-countup";
import "aos/dist/aos.css";

const Work = () => {
  const counterData = [
    { id: "1", title: "Active Clients", total: 18 },
    { id: "2", title: "Years Experience", total: 5 },
    { id: "3", title: "Projects Completed", total: 150 },
    { id: "4", title: "Team Advisors", total: 20 },
  ];

  const contentData = [
    {
      id: "1",
      heading: "Let’s Design, Develop & Launch Your brand Online Together",
      descriptionOne:
        "At Syncabout Solutions, we specialize in comprehensive web design and development services. Join us as we design, develop, and launch your brand online, creating a digital footprint that stands out. Let’s embark on this exciting journey together.",
      descriptionTwo:
        "With a dedicated team of professionals, We bring your vision to life, ensuring not just a website but digital But a digital experience that engages and converts. Enhance Your Online Presence with Syncabout – Where innovation meets design.",
      buttonTitle: "Let's Discuss Your Idea",
    },
  ];

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const videoRef = useRef(null);
  const video =
    "https://syncaboutsolutions.com/wp-content/uploads/2024/04/Sync_Video.mp4";

  return (
    <section className="bg-[#ffffff]">
      <div
        className="w-full m-auto max-w-7xl"
        data-aos="fade-down"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        <div
          id="main wrapper"
          className="gap-8 md:gap-8 lg:gap-0 grid lg:grid-cols-2 pt-5 pb-5 md:pt-[110px] md:pb-20 "
        >
          <div
            id="img-div"
            className="flex-col-reverse gap-5 md:flex-row work-container flex justify-center items-center  md:items-end "
          >
            {/* style shape img */}

            <div className="hidden  lg:block  img-png">
              <img src="./Work Success Section/worksuccess.png" />
            </div>

            {/* image 2 */}
            <div className="p-2 flex justify-between items-center flex-col  md:gap-6">
              <Popup
                trigger={
                  <div className="play-button-two cursor-pointer p-[15px] md:p-[22px] rounded-full">
                    <IoIosPlay cursor={"pointer"} color="white" />
                  </div>
                }
                modal
                lockScroll
                position="right center"
              >
                {(close) => (
                  <div className="modal">
                    <button className="close" onClick={() => close()}>
                      &times;
                    </button>

                    <div className="content">
                      <video
                        src={video}
                        onClick={() => {
                          videoRef.current.play();
                        }}
                        ref={videoRef}
                        controls="controls"
                        autoplay="true"
                        loop="true"
                        style={{
                          width: "100%",
                        }}
                      />
                    </div>
                  </div>
                )}
              </Popup>

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
            {contentData.map((content) => {
              return (
                <div
                  key={content.id}
                  id="content-wrapper"
                  className="flex justify-center text-center items-center lg:items-start  lg:text-start flex-col"
                >
                  <h2 className="text-[#000000] font-Manrope text-2xl md:text-4xl lg:text-6xl lg:leading-[78px] mb-[15px] font-extrabold">
                    {content.heading}
                  </h2>
                  <p className="text-[#666666] font-Jost text-sm leading-[26px] mb-[1rem] font-normal ">
                    {content.descriptionOne}
                  </p>
                  <p className="text-[#666666] font-Jost text-sm leading-[26px] mb-[1rem] font-normal ">
                    {content.descriptionTwo}
                  </p>
                  <div>
                    <button
                      className="bg-[#ef7f1a] rounded-md p-3 text-white text-sm font-Jost hover:!bg-[#000000]  hover:text-[#white]"
                      href="#"
                    >
                      {content.buttonTitle}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div
          id="counter-wraper"
          className="gap-4 grid md:grid-cols-2 lg:grid-cols-4 py-[60px] border-t-[1px] place-content-center place-items-center border-[rgba(37, 26, 55, 0.1)]"
        >
          {counterData.map((data) => {
            return (
              <div
                key={data.id}
                className=" flex justify-center gap-2 items-center py-2 flex-col"
              >
                <div>
                  <span className="font-Manrope text-center text-5xl leading-[30px] lg:text-7xl lg:leading-[50px] font-bold text-[#202122]">
                    +
                  </span>
                  <CountUp
                    end={data.total}
                    className="font-Manrope  text-5xl text-center leading-[30px] lg:text-7xl lg:leading-[50px] font-bold text-[#202122]"
                  />
                </div>
                <div>
                  <span className="text-[#666666] text-center font-Jost text-2xl leading-[50px] mt-4 font-normal">
                    {data.title}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Work;
