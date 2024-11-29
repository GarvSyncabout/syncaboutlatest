import React, { useRef } from "react";
import Popup from "reactjs-popup";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowBack, IoIosArrowForward, IoIosPlay } from "react-icons/io";
import "reactjs-popup/dist/index.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "../Hero Section/home.css";

import { Autoplay, Navigation, EffectFade, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import Service from "../Service Section/Service";

const Home = () => {
  const videoRef = useRef(null);
  const video =
    "https://syncaboutsolutions.com/wp-content/uploads/2024/04/Sync_Video.mp4";
  const popupHandler = () => {};

  const swiperData = [
    {
      id: 1,
      imgUrl: "./Hero Section/herosectionimageone.jpg",
      title: "Syncabout",
      heading: "Your Trusted Partner for Web design & Development Services.",
      description:
        "Grow Your Brand Online Through Expert Web Design and Development Services. Your Success, Our Priority.",
      buttonTitle: "Our Service",
      subHeading: "IT SOLUTION",
    },
    {
      id: 2,
      imgUrl: "./Hero Section/herosectionimagetwo.jpg",
      title: "Syncabout",
      heading: "Your Trusted Partner for Web design & Development Services.",
      description:
        "Grow Your Brand Online Through Expert Web Design and Development Services. Your Success, Our Priority.",
      buttonTitle: "Our Service",
      subHeading: "ANALYTICS",
    },
  ];

  return (
    <>
      <section className="w-full">
        <Swiper
          autoHeight={true}
          effect={"fade"}
          slidesPerView={1}
          spaceBetween={50}
          loop={true}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
          navigation={
            (true,
            {
              nextEl: ".image-swiper-button-next",
              prevEl: ".image-swiper-button-prev",
              disabledClass: "swiper-button-disabled",
            })
          }
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
          <div className="swiper-button image-swiper-button-next">
            <IoIosArrowForward />
          </div>
          <div className="swiper-button image-swiper-button-prev">
            <IoIosArrowBack />
          </div>
          {swiperData.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <div className="image-container">
                  <img src={item.imgUrl} alt="Carousel Image" />
                  <div className="image-one-content flex justify-center items-center  lg:items-start w-full  max-w-7xl  gap-4 lg:gap-10 flex-col">
                    <div className="flex gap-2 justify-center items-center lg:items-start flex-col">
                      <span className="font-Jost text-sm text-center  lg:text-lg lg:leading-7 font-normal tracking-[5px] ">
                        {item.title}
                      </span>
                      <h2 className="font-Manrope text-xl text-wrap md:text-4xl   lg:text-[64px] mb-5 text-center lg:text-start lg:text-balance lg:leading-[83px] font-extrabold">
                        {item.heading}
                      </h2>
                      <p className="font-Jost text-base lg:text-lg lg:leading-7 text-center lg:text-start font-normal text-wrap">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex justify-center items-center gap-7">
                      <div className="bg-[#ef7f1a] rounded-full hover:bg-white hover:text-black  py-1 px-2 lg:py-4 lg:px-8 ">
                        <Link className="hover:bg-white hover:text-black font-Jost text-xs  md:text-sx lg:text-sm leading-[26px] font-normal">
                          <span className=" text-xs md:text-xs lg:text-lg">
                            &#8594;
                          </span>
                          &nbsp;
                          {item.buttonTitle}
                        </Link>
                      </div>
                      <Popup
                        trigger={
                          <div className="play-button p-[22px] rounded-full">
                            <IoIosPlay
                              cursor={"pointer"}
                              onClick={popupHandler}
                              color="white"
                            />
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
                    </div>
                  </div>
                  <div className="imageone-bottom-content">
                    <h1 className="font-Poppins text-4xl md:text-6xl  lg:text-8xl   lg:leading-[128px] font-bold opacity-20">
                      {item.subHeading}
                    </h1>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>

      {/* Our Service Section  */}

      <section>
        <Service />
      </section>
    </>
  );
};

export default Home;
