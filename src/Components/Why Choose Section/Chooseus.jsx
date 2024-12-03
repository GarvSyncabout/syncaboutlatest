import React, { useEffect } from "react";
import "../Service Section/service.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Why Choose Section/Chooseus.css";

const Chooseus = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

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
  return (
    <section className="bg-[url('./WhyChooseUsSection/whychooseus.jpg')] bg-no-repeat bg-cover">
      <div className="flex m-auto w-full max-w-7xl justify-center items-center flex-col text-center gap-5 p-5 pt-[110px] pb-[80px] ">
        <div className="flex justify-center items-center gap-3 flex-col mb-[60px] text-wrap max-w-[750px] ">
          <span className="font-Jost text-sm uppercase tracking-normal leading-[26px]  pb-[10px] font-normal  text-[#ef7f1a]">
            Why Choose Us
          </span>
          <h2 className="font-Manrope text-[#000000] text-[32px] leading-[41.6px] text-center font-extrabold">
            We give our best to make you happy!
          </h2>
        </div>
        <div
          data-aos="fade-down"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="grid place-items-center place-content-center self-center md:grid-cols-2  lg:grid-cols-3 gap-8"
        >
          {cards.map((card) => {
            return (
              <div key={card.id} className="bg-[#ffffff]">
                <div className="card-content-wrapper flex justify-center items-start text-start bg-[#ffffff]  flex-col p-10">
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
  );
};

export default Chooseus;
