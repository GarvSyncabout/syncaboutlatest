import React, { useEffect } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import "../HowWeWork/howwework.css";

const Howwework = () => {
  const companyValuesCards = [
    {
      id: "1",
      number: "01",
      title: "Understanding Your Goals",
      description:
        "We kickstart the process by delving deep into your objectives, understanding the essence of your project, and aligning our strategies with your goals.",
    },
    {
      id: "2",
      number: "02",
      title: "Strategic Planning",
      description:
        "With a comprehensive understanding, we craft a tailored roadmap, outlining the steps needed to bring your project to fruition, ensuring precision and efficiency",
    },
    {
      id: "3",
      number: "03",
      title: "Transparent Communication",
      description:
        "Throughout the process, we maintain transparent and regular communication, keeping you informed and involved at every crucial juncture",
    },
    {
      id: "4",
      number: "04",
      title: "Streamlined Development",
      description:
        "We navigate challenges seamlessly, making adjustments in real-time to deliver a product that exceeds expectations.",
    },
    {
      id: "5",
      number: "05",
      title: "Thorough Testing",
      description:
        "Quality is paramount. Our rigorous testing process guarantees that every aspect of your project is thoroughly examined, ensuring a flawless end product.",
    },
    {
      id: "6",
      number: "06",
      title: "On-Time Delivery",
      description:
        "With meticulous planning and execution, we commit to delivering your project within the agreed-upon timeframe, without compromising on quality.",
    },
    {
      id: "7",
      number: "07",
      title: "Post-Launch Support",
      description:
        "Our commitment extends beyond the launch. We provide comprehensive post-launch support, ensuring your project continues to thrive and evolve.",
    },
  ];

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <section className="w-full whychooseus-bg bg-[url('/whywework/whywework.jpg')] bg-no-repeat bg-cover ">
        <div className="m-auto w-full max-w-7xl">
          {/* About section hero page */}

          <div
            id="whychooseus-wrapper"
            className="gap-3 flex flex-wrap justify-start md:justify-between md:h-[57vh] items-center p-5"
          >
            <div>
              <span className="font-Jost text-[#ffffff] uppercase text-lg leading-[30px] tracking-[5px] font-normal">
                THIS IS A PLACE WHERE IDEAS GROW
              </span>
              <h2 className="font-Manrope text-5xl md:text-[80px] md:leading-[88px] font-extrabold text-[#ffffff]">
                How WE Work
              </h2>
            </div>
            <div>
              <div className="bg-[#ef7f1a] p-4 md:py-[25px] md:px-[60px] rounded-full">
                <ul className="flex items-center gap-5">
                  <li className="text-[#fff] text-base hover:text-[#454647] leading-[20px] font-Jost font-medium relative after:content-['\2192'] after:absolute  after:ml-1 after:text-white cursor-pointer">
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li className="font-Jost text-base leading-5 font-medium text-[#ffffff] cursor-pointer">
                    How We Work
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="whychooseus-content-bottom">
          <h1 className="font-Poppins text-2xl md:text-6xl  lg:text-8xl uppercase   lg:leading-[128px] font-bold opacity-20">
            it solution
          </h1>
        </div>
      </section>

      <section className="  bg-[#fafafa] pb-10">
        <div
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-once="false"
          id="wrapper"
          className="flex justify-center gap-16 flex-col items-center pt-9 "
        >
          <div className="inherent-content flex justify-center gap-2 items-center flex-col">
            <span className="font-Jost text-sm uppercase tracking-normal leading-[26px] pb-[10px] font-normal  text-[#ef7f1a]">
              Approach
            </span>
            <h3 className="font-Manrope mb-[50px] text-[#000000] text-[32px] leading-[41.6px] text-center font-extrabold">
              How We Work
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 place-content-center place-items-center gap-16 p-5">
            {companyValuesCards.map((cards) => {
              return (
                <div
                  key={cards.id}
                  className="relative flex rounded justify-center items-start gap-2 flex-col border-dashed border-[#dbdbdb] max-w-80 min-h-72 p-4 border-[2px] hover:border-[#ef7f1a] hover:border-solid "
                >
                  <div className="absolute -top-11 left-4  md:-left-7 px-3 z-50 bg-[#fbf2e0]  rounded-full">
                    <span
                      style={{ WebkitTextStroke: "1px #ef7f1a" }}
                      className="font-Rajdhani text-[54.93px] text-transparent font-bold"
                    >
                      {cards.number}
                    </span>
                  </div>
                  <div className="flex justify-center items-start flex-col gap-4">
                    <span className="text-[#000000] font-Manrope font-bold text-[22px] leading-[27px] ">
                      {cards.title}
                    </span>
                    <p className="font-Jost text-base leading-[26px] font-normal text-[#666666]">
                      {cards.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="trust-blindly">
        <div
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-once="false"
          className="w-full max-w-7xl m-auto p-20"
        >
          <div className="flex justify-center md:justify-between items-center gap-4 md:gap-0 flex-wrap">
            <div className="flex flex-col max-w-[500px] md:flex-row justify-center items-center gap-2 text-start">
              <div className="bg-[#FFCF5C] hover:bg-[#ef7f1a] p-4 rounded-full">
                <img
                  src={"/whychooseus/robot.svg"}
                  alt="image"
                  className="h-10 w-10"
                />
              </div>
              <span className=" text-[#000000] font-Manrope text-center md:text-start text-[22px] leading-[33px] font-bold">
                Work with a Dedicated Business Development Company
              </span>
            </div>
            <div className="text-center max-w-[500px] md:text-start">
              <h4 className="text-balance text-[#666666] text-[20px] leading-[36px] font-Jost font-normal">
                We help you stay on top of the current trends in a rapidly
                changing business world.
              </h4>
            </div>
            <div className="text-end">
              <div className="hover:bg-[#fafafa] hover:text-[#000000] hover:shadow-inner bg-[#ef7f1a] p-3 rounded-md text-jost text-base leading-4 font-medium text-[#ffffff]">
                <Link to={"/contactus"}>Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Howwework;
