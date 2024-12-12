import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../SoftwareDevelopment/softwaredev.css";
import { Link } from "react-router-dom";

const Softwaredev = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <section className="w-full softwaredev-bg bg-[url('/softwaredevelopment/softwaredev.jpg')] bg-no-repeat bg-cover ">
        <div className="m-auto w-full max-w-7xl">
          {/* About section hero page */}

          <div
            id="softwaredev-wrapper"
            className="gap-3 flex flex-wrap justify-start md:justify-between md:h-[57vh] items-center py-9 px-2 md:p-5"
          >
            <div>
              <span className="font-Jost text-[#ffffff] uppercase text-base md:text-lg leading-[30px] tracking-[5px] font-normal">
                THIS IS A PLACE WHERE IDEAS GROW
              </span>
              <h2 className="font-Manrope text-3xl md:text-[60px] md:leading-[88px] font-extrabold text-[#ffffff]">
                Software Development
              </h2>
            </div>
            <div>
              <div className="bg-[#ef7f1a] p-3 md:py-[25px] md:px-[50px] rounded-full">
                <ul className="flex items-center gap-5">
                  <li className="text-[#fff] text-base hover:text-[#454647] leading-[20px] font-Jost font-medium relative after:content-['\2192'] after:absolute  after:ml-1 after:text-white cursor-pointer">
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li className="font-Jost text-base leading-5 font-medium text-[#ffffff] cursor-pointer">
                    software development
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="softwaredev-content-bottom">
          <h1 className="font-Poppins text-2xl md:text-6xl  lg:text-8xl uppercase   lg:leading-[128px] font-bold opacity-20">
            it solution
          </h1>
        </div>
      </section>

      <section className=" py-10">
        <div id="main-wrapper" className="max-w-7xl w-full m-auto">
          <div className="grid md:grid-cols-2 gap-7 md:gap-4 place-content-center place-items-center p-2">
            <div
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-once="false"
              id="img-div"
              className="relative"
            >
              <img
                src="/softwaredevelopment/softwaredevone.jpg"
                alt="image"
                className="rounded-md"
              />
              <div className="bg-[#ef7f1a] text-center w-full absolute bottom-0 p-6 rounded-b-md">
                <span className="font-Jost text-[#ffffff] text-lg leading-[26px] font-medium">
                  Software Development Services For Your Innovative Ideas
                </span>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-once="false"
              id="content-div"
              className="flex justify-center items-center text-center md:text-start md:items-start gap-3 md:gap-3 flex-col"
            >
              <span className="text-[#ef7f1a] font-Manrope  uppercase text-base md:text-lg leading-[21px] font-bold">
                SYNCABOUT DEVELOPMENT SERVICES
              </span>
              <h4 className="text-[#202122] font-Manrope uppercase mb-3 text-3xl md:text-[43.95px] md:leading-[52.74px] font-bold">
                Software Development
              </h4>
              <p className="font-Jost  text-base md:text-start leading-[26px] mb-3 font-normal text-[#666666]">
                We help our partners accelerate disruption both within their
                organizations and industries. They strategize new ideas and
                obtain real business value by getting the most out of our
                production-ready custom software development services. Talk to
                our experts today!
              </p>
              <div className="grid text-start  md:grid-cols-2 gap-4 mb-4">
                <span className="relative pl-5 before:content-['\2713'] before:text-[#ef7f1a] before:absolute before:top-[50%] before:left-[0%] brfore:-translate-x-1/2 before:-translate-y-1/2 text-[#202122] font-Manrope capitalize text-base md:text-base leading-[21px] font-bold">
                  Innovative Solutions
                </span>
                <span className="relative pl-5 before:content-['\2713'] before:text-[#ef7f1a] before:absolute before:top-[50%] before:left-[0%] brfore:-translate-x-1/2 before:-translate-y-1/2 text-[#202122] font-Manrope capitalize text-base md:text-base leading-[21px] font-bold">
                  Production-Ready Customization
                </span>

                <span className="relative pl-5 before:content-['\2713'] before:text-[#ef7f1a] before:absolute before:top-[50%] before:left-[0%] brfore:-translate-x-1/2 before:-translate-y-1/2 text-[#202122] font-Manrope capitalize text-base md:text-base leading-[21px] font-bold">
                  Strategic Ideation
                </span>
                <span className="relative pl-5 before:content-['\2713'] before:text-[#ef7f1a] before:absolute before:top-[50%] before:left-[0%] brfore:-translate-x-1/2 before:-translate-y-1/2 text-[#202122] font-Manrope capitalize text-base md:text-base leading-[21px] font-bold">
                  Expert Consultation
                </span>
              </div>
              <div className="hover:bg-[#ffffff] hover:text-[#000000] hover:shadow-inner bg-[#ef7f1a] p-5 rounded-md text-jost text-base leading-4 font-medium text-[#ffffff]">
                <Link to={"/contactus"}>Contact Now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fafafa] py-10">
        <div id="main-wrapper" className="max-w-7xl w-full m-auto">
          <div className="flex justify-center items-center text-center md:text-start flex-col">
            <div
              id="content-div"
              data-aos="fade-down"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-once="false"
            >
              <div className="pb-7">
                <span className="text-[#ef7f1a] font-Manrope  uppercase text-base md:text-lg leading-[21px] font-bold mb-3">
                  Software Development
                </span>
                <h4 className="text-[#202122] font-Manrope uppercase mb-3 text-2xl md:text-[43.95px] md:leading-[52.74px] font-bold">
                  Get 100% Customizable Software Development Services By Experts
                </h4>
              </div>
            </div>
            <div
              data-aos="fade-down"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-once="false"
              id="content-card"
              className="grid md:grid-cols-2 w-full place-content-between place-items-center gap-4 p-2"
            >
              <div className="border shadow-md overflow-hidden">
                <div className="relative">
                  <img
                    src="/softwaredevelopment/softwaredevtwo.jpg"
                    className="overflow-hidden  transition-all duration-300 ease-in-out  hover:scale-150 hover:delay-300  hover:duration-2000 hover:ease-linear"
                  />
                  <div className="absolute top-[50%] left-[50%] -translate-x-[50%] opacity-40 hover:opacity-100  bg-[#ef7f1a] text-white -translate-y-[50%] ">
                    <div className="flex justify-center gap-3 items-start flex-col p-1">
                      <h4>Custom software development</h4>
                      <p>
                        We plan tailored software solutions for you to achieve
                        operational excellence and deliver them fast and error-
                        free
                      </p>
                      <div className="border-[1px]  border-[#ffffff]  p-2 rounded-sm">
                        <Link to={"/contactus"}>Contact Now</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border shadow-md overflow-hidden">
                <div className="relative">
                  <img
                    src="/softwaredevelopment/softwaredevthree.jpg"
                    className="overflow-hidden  transition-all duration-300 ease-in-out  hover:scale-150 hover:delay-300  hover:duration-2000 hover:ease-linear"
                  />
                  <div className="absolute top-[50%] left-[50%] -translate-x-[50%] opacity-40 hover:opacity-100  bg-[#ef7f1a] text-white -translate-y-[50%] ">
                    <div className="flex justify-center gap-3 items-start flex-col p-1">
                      <h4>Custom software development</h4>
                      <p>
                        We plan tailored software solutions for you to achieve
                        operational excellence and deliver them fast and error-
                        free
                      </p>
                      <div className="border-[1px]  border-[#ffffff]  p-2 rounded-sm">
                        <Link to={"/contactus"}>Contact Now</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-10">
        <div
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-once="false"
          id="wrapper"
          className="m-auto w-full max-w-7xl flex justify-center gap-16 flex-col items-center py-9 px-2 "
        >
          <div className="inherent-content flex justify-center gap-2 items-center flex-col">
            <span className="font-Jost text-sm text-center uppercase tracking-normal leading-[26px] pb-[10px] font-normal  text-[#ef7f1a]">
              Nothing Is Impossible To Make Dream into Reality
            </span>
            <h3 className="font-Manrope mb-[50px] text-[#000000] text-[32px] leading-[41.6px] text-center font-extrabold">
              Do You Need Consultation On Advance Software Development ?
            </h3>
          </div>
          <div
            id="div-content"
            className="grid w-full place-content-evenly place-items-center bg-[#FBF2E0]  md:grid-cols-2 gap-2  rounded-sm"
          >
            <div id="child-div-image">
              <img
                src="/softwaredevelopment/softwaredevfour.jpg"
                alt="image"
                className="rounded-sm"
              />
            </div>
            <div
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-once="false"
              id="content-div"
              className="flex justify-center items-center text-center md:text-start md:items-start gap-3 md:gap-3 flex-col px-10 p-2 "
            >
              <h4 className="text-[#ef7f1a] font-Manrope uppercase mb-3 text-2xl md:text-[40px] md:leading-[52.74px] font-bold">
                Software Development
              </h4>
              <p className="font-Jost  text-base md:text-start leading-[26px] mb-3 font-normal text-[#666666]">
                We help our partners accelerate disruption both within their
                organizations and industries. They strategize new ideas and
                obtain real business value by getting the most out of our
                production-ready custom software development services. Talk to
                our experts today!
              </p>
              <div className="flex justify-center items-start gap-1 md:gap-0 text-start flex-col mb-4">
                <span className="relative pl-5 before:content-['\25A0'] before:text-xs before:text-[#ef7f1a] before:absolute before:top-[50%] before:left-[0%] brfore:-translate-x-1/2 before:-translate-y-1/2 text-[#202122] font-Manrope capitalize text-sm md:text-base leading-[21px]  font-bold">
                  Sucesfully Delivered more then 20 Solutions.
                </span>
                <span className="relative pl-5 before:content-['\25A0'] before:text-xs before:text-[#ef7f1a] before:absolute before:top-[50%] before:left-[0%] brfore:-translate-x-1/2 before:-translate-y-1/2 text-[#202122] font-Manrope capitalize text-sm  md:text-base leading-[21px] font-bold">
                  Top Notch security for the enhancement of the Application.
                </span>
                <span className="relative pl-5 before:content-['\25A0'] before:text-xs before:text-[#ef7f1a] before:absolute before:top-[50%] before:left-[0%] brfore:-translate-x-1/2 before:-translate-y-1/2 text-[#202122] font-Manrope capitalize text-sm  md:text-base leading-[21px] font-bold">
                  A Group of experts can develop any Idea into the reality.
                </span>
              </div>
              <div className="hover:bg-[#ffffff] hover:text-[#000000] hover:shadow-inner bg-[#ef7f1a] p-5 rounded-md text-jost text-base leading-4 font-medium text-[#ffffff]">
                <Link to={"/contactus"}>Contact Now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="software  bg-[#fafafa]">
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
              <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-[#FFCF5C] hover:bg-[#ef7f1a] p-4 rounded-full">
                <img
                  src={"/softwaredevelopment/robot.svg"}
                  alt="image"
                  className="h-10 w-10"
                />
              </div>
              <span className=" text-[#000000] font-Manrope text-center md:text-start text-[22px] leading-[33px] font-bold">
                Schedule Our software
                <br />
                Development Service Today
              </span>
            </div>
            <div className="text-center md:text-start">
              <h4 className="text-balance text-[#666666] text-[20px] leading-[36px] font-Jost font-normal max-w-[500px]">
                Needs of our clients are always put ahead of our own and we
                focus on the importance of each and every project.
              </h4>
            </div>
            <div className="text-end">
              <div className="hover:bg-[#ffffff] hover:text-[#000000] hover:shadow-inner bg-[#ef7f1a] p-3 rounded-md text-jost text-base leading-4 font-medium text-[#ffffff]">
                <Link to={"/contactus"}>Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Softwaredev;
