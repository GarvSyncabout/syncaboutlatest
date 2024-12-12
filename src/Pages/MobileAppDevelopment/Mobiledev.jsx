import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import "../MobileAppDevelopment/mobiledev.css";
const Mobiledev = () => {
  const cards = [
    {
      id: "1",
      title: "Committed Developers",
      description:
        "Syncabout houses a team of dedicated hybrid app developers that focuses on delivering top-quality solutions to meet your business needs.",
      imgUrl: "/mobileappdevelopment/developer.svg",
    },

    {
      id: "2",
      title: "On-Time Delivery",
      description:
        "Our Hybrid application developers work diligently to ensure your project is delivered precisely within the stated time, guaranteeing quality and efficiency.",
      imgUrl: "/mobileappdevelopment/time.svg",
    },
    {
      id: "3",
      title: "Cross-Platform Compatibility",
      description:
        "Our Hybrid application developers work diligently to ensure your project is delivered precisely within the stated time, guaranteeing quality and efficiency.",
      imgUrl: "/mobileappdevelopment/bulb.svg",
    },
    {
      id: "4",
      title: "Custom AppDevelopment",
      description:
        "Our Hybrid application developers work diligently to ensure your project is delivered precisely within the stated time, guaranteeing quality and efficiency.",
      imgUrl: "/mobileappdevelopment/writing.svg",
    },
  ];

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <section className="w-full mobiledev-bg bg-[url('/mobileappdevelopment/mobileappdev.jpg')] bg-no-repeat bg-cover ">
        <div className="m-auto w-full max-w-7xl">
          {/* About section hero page */}

          <div
            id="mobiledev-wrapper"
            className="gap-3 flex flex-wrap justify-start md:justify-between md:h-[57vh] items-center py-9 px-2 md:p-5"
          >
            <div>
              <span className="font-Jost text-[#ffffff] uppercase text-base md:text-lg leading-[30px] tracking-[5px] font-normal">
                Mobile App Development Solutions
              </span>
              <h2 className="font-Manrope text-3xl md:text-[60px] md:leading-[88px] font-extrabold text-[#ffffff]">
                App Development
              </h2>
            </div>
            <div>
              <div className="bg-[#ef7f1a] p-3 md:py-[25px] md:px-[50px] rounded-full">
                <ul className="flex items-center gap-5">
                  <li className="text-[#fff] text-base hover:text-[#454647] leading-[20px] font-Jost font-medium relative after:content-['\2192'] after:absolute  after:ml-1 after:text-white cursor-pointer">
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li className="font-Jost text-base leading-5 font-medium text-[#ffffff] cursor-pointer">
                    App Development
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mobiledev-content-bottom">
          <h1 className="font-Poppins text-2xl md:text-6xl  lg:text-8xl uppercase   lg:leading-[128px] font-bold opacity-20">
            it solution
          </h1>
        </div>
      </section>

      <section className="py-10 bg-[#fafafa]">
        <div id="main-wrapper" className="max-w-7xl w-full m-auto">
          <div className="grid md:grid-cols-2 gap-4 place-content-center place-items-center p-2">
            <div
              id="img-div"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-once="false"
              className="relative"
            >
              <img
                src="/mobileappdevelopment/mobileappdevone.jpg"
                alt="image"
                className="rounded-md"
              />
              <div className="bg-[#ef7f1a] absolute bottom-0 p-4 rounded-b-md">
                <span className="font-Jost text-[#ffffff] text-base leading-[26px] font-medium">
                  Build The Base For A Successful Future For Your Business
                  Through Native Apps Development Services!
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
                Mobile solutions
              </span>
              <h4 className="text-[#202122] font-Manrope uppercase mb-3 text-3xl md:text-[43.95px] md:leading-[52.74px] font-bold">
                Native App Development
              </h4>
              <p className="font-Jost  text-base md:text-start leading-[26px] mb-3 font-normal text-[#666666]">
                If you are looking for an effective way of making an impact on
                the digital market with your business strategies and services,
                then Native App Development is the perfect way to do so. Native
                applications are those apps, which are specifically designed and
                developed according to a particular platform, which allows the
                use of device-specific hardware and software. A Native app can
                utilize the resources that are specific to a given OS without
                hurting other functionalities.
              </p>

              <div className="hover:bg-[#fafafa] hover:text-[#000000] hover:shadow-inner bg-[#ef7f1a] p-5 rounded-md text-jost text-base leading-4 font-medium text-[#ffffff]">
                <Link to={"/contactus"}>Get Started Now</Link>
              </div>
            </div>
          </div>
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
          >
            <div
              id="div-content-two"
              className="flex justify-center items-center flex-col gap-6 "
            >
              <div className="grid lg:grid-cols-2 md:gap-5 place-content-between place-items-center">
                <div
                  id="content-div"
                  className="flex justify-center items-center text-center md:text-start md:items-start gap-1 flex-col"
                >
                  <span className="text-[#ef7f1a] font-Manrope uppercase text-base md:text-lg leading-[21px] font-bold">
                    App Development service
                  </span>
                  <h4
                    className="text-[#202122] font-Manrope text-balance
                   mb-3 text-3xl md:text-[43.95px] md:leading-[52.74px] font-bold"
                  >
                    Hybrid App Development
                  </h4>
                </div>
                <div
                  id="second-side"
                  className="flex justify-center items-center md:items-start gap-4 flex-col"
                >
                  <div>
                    <p className="text-[17px] text-center md:text-start leading-[30px] font-medium text-[#202122]">
                      Syncabout mobile engineering team is skilled in hybrid
                      apps development representing the lines of excellent code
                      that ‘wraps’ the existing customer’s web project and
                      extends its functionality on various mobile devices.
                    </p>
                  </div>
                  <div
                    id="button-div"
                    className="flex justify-start items-center gap-3"
                  >
                    <div className="p-3 bg-[#ef7f1a] rounded-md hover:bg-[#ffffff] hover:shadow-inner text-[#ffffff] hover:text-[#000000] ">
                      <Link className="font-jost font-Jost text-base leading-5 font-medium  ">
                        View More
                      </Link>
                    </div>
                    <div className="p-3 bg-[#ef7f1a] rounded-md hover:bg-[#ffffff] hover:shadow-inner text-[#ffffff] hover:text-[#000000]">
                      <Link className="font-jost font-Jost text-base leading-5 font-medium">
                        Contact Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="card-div"
                className="py-16 grid gap-14 md:gap-5 lg:grid-cols-4 place-content-center place-items-center"
              >
                {cards.map((card) => {
                  return (
                    <div
                      key={card.id}
                      className="relative lg:aspect-square p-5 bg-[#ffffff] shadow-md  flex justify-center text-center items-center flex-col"
                    >
                      <div
                        id="card-img"
                        className="absolute bg-[#ef7f1a] p-4 rounded-full top-[0%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
                      >
                        <img
                          src={card.imgUrl}
                          alt="Card Image"
                          className="h-12 w-12 filter brightness(0) invert(1)"
                        />
                      </div>
                      <div className="flex justify-center items-center flex-col gap-5 pt-9 pb-6">
                        <h4 className="font-Manrope  text-[#202122] text-lg font-bold ">
                          {card.title}
                        </h4>
                        <p className="text-[#666666] font-Jost text-sm leading-[26px] font-normal">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mobile  bg-[#fafafa]">
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
                  src={"/mobileappdevelopment/phone.svg"}
                  alt="image"
                  className="h-10 w-10"
                />
              </div>
              <span className=" text-[#000000] font-Manrope text-center md:text-start text-[22px] leading-[33px] font-bold">
                Schedule Our Mobile App
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

export default Mobiledev;
