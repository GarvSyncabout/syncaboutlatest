import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import "./whychooseus.css";

const Whychooseus = () => {
  const counterData = [
    { id: "1", title: "Project Completed", total: 150 },
    { id: "2", title: "Customer Satisfaction", total: 99 },
  ];

  const companyValuesCards = [
    {
      id: "1",
      number: "01",
      title: "Innovative Solutions",
      description:
        "Elevate your business with Syncabout's avant-garde solutions tailored to meet the unique demands of the digital landscape.",
    },
    {
      id: "2",
      number: "02",
      title: "Expert Guidance",
      description:
        "Our experts guide you through tech complexities, ensuring informed decisions and sustainable growth.",
    },
    {
      id: "3",
      number: "03",
      title: "Collaborative Partnership",
      description:
        "Our dedicated team works alongside you, ensuring a shared journey toward success.",
    },
    {
      id: "4",
      number: "04",
      title: "Cutting-Edge Technology",
      description:
        "Stay ahead in the dynamic digital innovation race with Syncabout's commitment to utilizing the latest technology and tools.",
    },
    {
      id: "5",
      number: "05",
      title: "Proven Track Record",
      description:
        "Choose Syncabout with confidence, backed by proven track record of delivering measurable success to our clients.",
    },
    {
      id: "6",
      number: "06",
      title: "24/7 Service Excellence",
      description:
        "Count on Syncabout's 24/7 commitment for seamless business operations, providing continuous support and peace of mind.",
    },
  ];

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <section className="w-full whychooseus-bg bg-[url('/whychooseus/whychooseus.jpg')] bg-no-repeat bg-cover ">
        <div className="m-auto w-full max-w-7xl">
          {/* About section hero page */}

          <div
            id="whychooseus-wrapper"
            className="gap-3 flex flex-wrap justify-start md:justify-between md:h-[57vh] items-center  py-9 px-2 md:p-5"
          >
            <div>
              <span className="font-Jost text-[#ffffff] uppercase text-base md:text-lg leading-[30px] tracking-[5px] font-normal">
                Your Success Is Our Priority
              </span>
              <h2 className="font-Manrope text-4xl md:text-[80px] md:leading-[88px] font-extrabold text-[#ffffff]">
                Why Choose Us
              </h2>
            </div>
            <div>
              <div className="bg-[#ef7f1a] p-3 md:py-[25px] md:px-[60px] rounded-full">
                <ul className="flex items-center gap-5">
                  <li className="text-[#fff] text-base hover:text-[#454647] leading-[20px] font-Jost font-medium relative after:content-['\2192'] after:absolute  after:ml-1 after:text-white cursor-pointer">
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li className="font-Jost text-base leading-5 font-medium text-[#ffffff] cursor-pointer">
                    Choose Us
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

      <section>
        <div className="m-auto w-full max-w-7xl p-3 py-[80px]">
          {/* main content */}

          <div
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-once="false"
            className="grid lg:grid-cols-2 gap-8 place-content-center lg:place-content-between place-items-center"
          >
            <div id="image-div">
              <img
                src="/whychooseus/whychooseustwo.jpg"
                alt="who we are image"
                className="rounded-md"
              />
            </div>
            <div
              id="content-div"
              className="flex justify-center items-center md:text-start text-center md:items-start gap-3 flex-col"
            >
              <span className="text-[#ef7f1a] font-Manrope text-base md:text-lg leading-[21px] font-bold">
                Look no further!
              </span>
              <h4 className="text-[#202122] font-Manrope mb-1 text-3xl md:text-[43.95px] md:leading-[52.74px] font-bold">
                Join Syncabout's Innovation
                <br />
                Journey
              </h4>
              <p className="font-Jost text-pretty  text-sm md:text-start leading-[26px] mb-1 font-normal text-[#666666]">
                Embrace innovation at Syncabout. Join our transformative journey
                where cutting-edge solutions meet unparalleled excellence
              </p>
              <div
                id="client-counter"
                className="grid md:grid-cols-2 place-content-center mb-1 place-items-center md:place-items-start gap-3"
              >
                {counterData.map((data) => {
                  return (
                    <div
                      key={data.id}
                      className="flex bg-[#FBF2E0] rounded-md justify-center gap-2 items-center p-6 flex-col"
                    >
                      <div>
                        <CountUp
                          end={data.total}
                          className="font-Manrope  text-4xl text-center leading-[30px] lg:text-[54px] lg:leading-[65px] font-bold text-[#202122]"
                        />
                        <span className="font-Manrope text-center text-4xl leading-[30px] lg:text-[54px] lg:leading-[65px] font-bold text-[#202122]">
                          {data.total >= 150 ? "+" : "%"}
                        </span>
                      </div>
                      <div>
                        <span className="text-[#ef7f1a] text-center font-Jost text-sm md:text-[18px] leading-[21px] mt-4 font-bold">
                          {data.title}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
              <Link
                className="bg-[#ef7f1a] p-3 md:py-[15px] md:px-[20px] hover:bg-[#fafafa] hover:shadow-inner rounded-full font-Jost text-base  text-start  leading-5 font-medium text-[#fafafa] hover:text-[#202122]"
                to={"/ourservice"}
              >
                View Services
              </Link>
            </div>
          </div>
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
              Our features
            </span>
            <h3 className="font-Manrope mb-[50px] text-[#000000] text-[32px] leading-[41.6px] text-center font-extrabold">
              We give our best to make you happy!
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
            <div className="flex flex-col md:flex-row justify-center items-center gap-2 text-start">
              <div className="bg-[#FFCF5C] hover:bg-[#ef7f1a] p-4 rounded-full">
                <img
                  src={"/whychooseus/robot.svg"}
                  alt="image"
                  className="h-10 w-10"
                />
              </div>
              <span className=" text-[#000000] font-Manrope text-center md:text-start text-[22px] leading-[33px] font-bold">
                A Name Where You Can Trust Blindly
              </span>
            </div>
            <div className="text-center md:text-start max-w-[500px]">
              <h4 className="text-balance text-[#666666] text-[20px] leading-[36px] font-Jost font-normal">
                Needs of our clients are always put ahead of our own and we
                focus on the importance of each and every project.
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

export default Whychooseus;
