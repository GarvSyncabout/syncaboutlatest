import React from "react";

const Service = () => {
  const cards = [
    {
      title: "Web Development",
      description:
        "Your website has to impress your visitors within just a few seconds at Syncabout.",
      imageUrl: "./OurService/webdevelopment.svg",
    },

    {
      title: "Software Development",
      description:
        "We help our partners accelerate disruption both within their organization and industries.",
      imageUrl: "./OurService/softwaredevelopment.svg",
    },
    {
      title: "Mobile App Development",
      description:
        "We develop ideas into mobile applications that make someone's business easier.",
      imageUrl: "./OurService/mobileappdevelopment.svg",
    },
    {
      title: "Custom ERP Development",
      description:
        "Syncabout excels in end-to-end ERP development and dedicated support.",
      imageUrl: "./OurService/erp.svg",
    },
    {
      title: "SEO Services",
      description:
        " Unlock increased website traffic, attract more customers, and elevate online visibility with our powerful SEO services.",
      imageUrl: "./OurService/seo.svg",
    },
    {
      title: "Social Media Marketing",
      description:
        "Social marketing is useful when it used with the right method and algorithm.",
      imageUrl: "./OurService/socialmedia.svg",
    },
    {
      title: "AWS",
      description:
        "In addition to offering a robust set of AWS services, our IT company specializes in guiding clients through every phase of their cloud journey.",
      imageUrl: "./OurService/aws.svg",
    },
  ];
  return (
    <div className="flex justify-center items-center flex-col text-center gap-5 p-5">
      <div>
        <span className="font-Jost text-sm  leading-[26px] font-normal text-[#ef7f1a]">
          Our Services
        </span>
        <h2 className="font-Manrope text-[32px] leading-[41px] font-extrabold">
          Custom Solutions to Meet Your Unique Requirements to enhance your
          business. Explore Our Customized Services for a Seamless Experience.
        </h2>
      </div>
      <div className="grid place-items-center place-content-center self-center md:grid-cols-2  lg:grid-cols-3 gap-4">
        {cards.map((card) => {
          return (
            <div className="flex  justify-evenly bg-gray-400 items-center gap-4 p-2  flex-col">
              <div>
                <img
                  className="w-24 h-24 object-cover rounded-full"
                  src={card.imageUrl}
                  alt={card.title}
                />
              </div>
              <div>
                <h3 className="font-Manrope text-[20px] leading-[24px] font-semibold text-[#333333]">
                  {card.title}
                </h3>
                <p className="text-[#666666] text-sm leading-[18px]">
                  {card.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;
