import React from "react";
import "../Service Section/service.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Service = () => {
  const cards = [
    {
      id: "1",
      title: "Web Development",
      description:
        "Your website has to impress your visitors within just a few seconds at Syncabout.",
      imageUrl: "./OurService/webdevelopment.svg",
    },

    {
      id: "2",
      title: "Software Development",
      description:
        "We help our partners accelerate disruption both within their organization and industries.",
      imageUrl: "./OurService/softwaredevelopment.svg",
    },
    {
      id: "3",
      title: "Mobile App Development",
      description:
        "We develop ideas into mobile applications that make someone's business easier.",
      imageUrl: "./OurService/mobileappdevelopment.svg",
    },
    {
      id: "4",
      title: "Custom ERP Development",
      description:
        "Syncabout excels in end-to-end ERP development and dedicated support.",
      imageUrl: "./OurService/erp.svg",
    },
    {
      id: "5",
      title: "SEO Services",
      description:
        " Unlock increased website traffic, attract more customers, and elevate online visibility with our powerful SEO services.",
      imageUrl: "./OurService/seo.svg",
    },
    {
      id: "6",
      title: "Social Media Marketing",
      description:
        "Social marketing is useful when it used with the right method and algorithm.",
      imageUrl: "./OurService/socialmedia.svg",
    },
  ];
  return (
    <section className="m-auto w-full max-w-7xl bg-[#fafafa]">
      <div className="flex justify-center items-center flex-col text-center gap-5 p-5 pt-[110px] pb-[80px] ">
        <div className="flex justify-center items-center gap-3 flex-col mb-[60px] text-wrap max-w-[750px] ">
          <span className="font-Jost text-sm uppercase tracking-normal leading-[26px]  pb-[10px] font-normal  text-[#ef7f1a]">
            Our Services
          </span>
          <h2 className="font-Manrope text-[#000000] text-[32px] leading-[41.6px] text-center font-extrabold">
            Custom Solutions to Meet Your Unique Requirements to enhance your
            business. Explore Our Customized Services for a Seamless Experience.
          </h2>
        </div>
        <div className="grid place-items-center place-content-center self-center md:grid-cols-2  lg:grid-cols-3 gap-8">
          {cards.map((card) => {
            return (
              <div
                id="card-wrapper"
                className="flex justify-center items-center hover:bg-[#F1F1F1] flex-col gap-2 p-3 min-h-[500px]"
                key={card.id}
              >
                <div id="img-div" className="mb-[30px]">
                  <div className="card-image bg-white w-[170px] h-[170px] rounded-[50%] flex justify-center items-center">
                    <img src={card.imageUrl} width={64} height={64} />
                  </div>
                </div>
                <div id="content-div">
                  <h4 className="font-Manrope text-base leading-[23px] text-[#202122] text-wrap font-bold mb-[14px]">
                    {card.title}
                  </h4>
                  <p className="font-Jost text-sm leading-[26px] font-normal text-[#666666] mb-[45px]">
                    {card.description}
                  </p>
                </div>
                <div id="button-div">
                  <Link to={"/"}>
                    <FaLongArrowAltRight
                      size={"2.5em"}
                      style={{}}
                      className="bg-[#ffffff] rounded-[50%] p-3 hover:!bg-[#ef7f1a] hover:text-white"
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Service;