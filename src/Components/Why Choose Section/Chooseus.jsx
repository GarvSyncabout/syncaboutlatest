import React, { useEffect, useRef } from "react";
import { IoIosPlay } from "react-icons/io";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Why Choose Section/chooseus.css";

const Chooseus = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const videoRef = useRef(null);
  const video =
    "https://syncaboutsolutions.com/wp-content/uploads/2024/04/Sync_Video.mp4";

  const cards = [
    {
      id: "1",
      title: "Innovation",
      description:
        "Constantly seek and implement new ideas and technologies to stay at the forefront of the industry.",
      imgUrl: "./WhyChooseUsSection/innovation.svg",
    },
    {
      id: "2",
      title: "Customer-Centricity",
      description:
        "Prioritize understanding and meeting the needs of our clients to ensure their success and satisfaction.",
      imgUrl: "./WhyChooseUsSection/customercentricity.svg",
    },
    {
      id: "3",
      title: "Integrity",
      description:
        "Uphold honesty and transparency in all our dealings, fostering trust with clients, partners, and team members.",
      imgUrl: "./WhyChooseUsSection/integrity.svg",
    },
    {
      id: "4",
      title: "Collaboration",
      description:
        "Embrace teamwork and open communication, recognizing that collaboration enhances creativity and problem-solving.",
      imgUrl: "./WhyChooseUsSection/collaboration.svg",
    },
    {
      id: "5",
      title: "Quality Excellence",
      description:
        "Strive for excellence in every aspect of our work, delivering high-quality products and services.",
      imgUrl: "./WhyChooseUsSection/qualityexcellence.svg",
    },
    {
      id: "6",
      title: "Adaptability",
      description:
        "Be flexible and adaptive to change, recognizing it as an opportunity for growth and improvement.",
      imgUrl: "./WhyChooseUsSection/adaptability.svg",
    },
  ];

  const contentData = [
    {
      id: "1",
      heading: "Why Choose Us",
      subHeading: "We give our best to make you happy!",
    },
  ];

  const videoContentData = [
    {
      id: "1",
      heading: "A Pioneering SAP & Web Development Service Provider Company",
    },
  ];
  return (
    <>
      <section className="bg-[url('/WhyChooseUsSection/whychooseus.jpg')] bg-no-repeat bg-cover ">
        <div className="flex m-auto w-full max-w-7xl justify-center items-center flex-col text-center gap-5 p-5 pt-[110px] pb-[80px] ">
          {contentData.map((data) => {
            return (
              <div
                key={data.id}
                className="flex justify-center items-center gap-3 flex-col mb-[60px] text-wrap max-w-[750px] "
              >
                <span className="font-Jost text-sm uppercase tracking-normal leading-[26px]  pb-[10px] font-normal  text-[#ef7f1a]">
                  {data.heading}
                </span>
                <h2 className="font-Manrope mb-[50px] text-[#000000] text-[32px] leading-[41.6px] text-center font-extrabold">
                  {data.subHeading}
                </h2>
              </div>
            );
          })}
          <div
              data-aos="fade-down"
              data-aos-offset="200"
              data-aos-delay="50"
                        data-aos-duration="500"
              data-aos-once="false"
              data-aos-anchor-placement="top-center"
            className="grid place-items-center place-content-center self-center md:grid-cols-2  lg:grid-cols-3 gap-8"
          >
            {cards.map((card) => {
              return (
                <div key={card.id} className="bg-[#ffffff] shadow-md">
                  <div className="card-content-wrapper flex justify-center items-start text-start bg-[#ffffff]  flex-col p-[50px]">
                    <div className="mb-[30px]">
                      <img
                        src={card.imgUrl}
                        alt="card-image"
                        className="card-image h-[64px] w-[64px]"
                      />
                    </div>
                    <div>
                      <h4 className="mb-[14px] font-Manrope text-[#000000]  text-2xl font-bold">
                        {card.title}
                      </h4>
                      <p className="font-Jost text-[#666666]  text-sm leading-[26px] font-normal">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="video-section py-[190px] bg-[url('/WhyChooseUsSection/chooseusvideosection.jpg')]  bg-no-repeat bg-cover  ">
        <div className="wrapper"></div>
        <div
          id="video-wrapper"
          className="relative z-50 flex justify-center gap-14 items-center text-center flex-col m-auto w-full  max-w-7xl"
        >
          {videoContentData.map((videoData) => {
            return (
              <div key={videoData.id}>
                <h2 className="font-Manrope text-[25px] md:text-[40px] md:leading-[52px] lg:text-[80px] lg:leading-[104px] font-extrabold text-[#ffffff]">
                  {videoData.heading}
                </h2>
              </div>
            );
          })}
          <Popup
            trigger={
              <div className="play-button-three cursor-pointer p-[50px] rounded-full">
                <IoIosPlay cursor={"pointer"} color="#ef7f1a" size={"2rem"} />
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
      </section>
    </>
  );
};

export default Chooseus;
