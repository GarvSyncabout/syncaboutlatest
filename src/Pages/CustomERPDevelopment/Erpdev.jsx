import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import "../CustomERPDevelopment/erpdev.css";
import { FaRegCheckCircle } from "react-icons/fa";

const Erpdev = () => {
  const cards = [
    {
      id: "1",
      title: "ERP Development Consulting",
      description:
        "Our ERP consultants conduct an analysis of your present business environment and gains a thorough understanding of your strategic business objectives and desired outcomes.",
      imgUrl: "/customerpdevelopment/screen.svg",
    },

    {
      id: "2",
      title: "ERP Applications Development",
      description:
        "Our technical experts leverage the latest industry technologies and programming languages to develop feature-rich custom ERP applications tailored to your business needs.",
      imgUrl: "/customerpdevelopment/development.svg",
    },
    {
      id: "3",
      title: "Custom ERP Dashboards",
      description:
        "We create service-oriented architectures (SOAs) and develop robust platforms for predictive analytics, decision support, executive dashboards, and performance monitoring.",
      imgUrl: "/customerpdevelopment/dashbord.svg",
    },
    {
      id: "4",
      title: "Custom ERP System Development",
      description:
        "We customize ERP development services to meet the needs of organizations, ensuring robust and scalable systems for valuable and trustable data insights on web and mobile platforms.",
      imgUrl: "/customerpdevelopment/system.svg",
    },
  ];

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <section className="w-full erpdev-bg bg-[url('/customerpdevelopment/erpdev.jpg')] bg-no-repeat bg-cover ">
        <div className="m-auto w-full max-w-7xl">
          {/* About section hero page */}

          <div
            id="erpdev-wrapper"
            className="gap-3 flex flex-wrap justify-start md:justify-between md:h-[57vh] items-center py-9 px-2 md:p-5"
          >
            <div>
              <span className="font-Jost text-[#ffffff] uppercase text-base md:text-lg leading-[30px] tracking-[5px] font-normal">
                ERP Software Development Services
              </span>
              <h2 className="font-Manrope text-3xl md:text-[60px] md:leading-[88px] font-extrabold text-[#ffffff]">
                Custom ERP Development
              </h2>
            </div>
            <div>
              <div className="bg-[#ef7f1a] p-3 md:py-[25px] md:px-[50px] rounded-full">
                <ul className="flex items-center gap-5">
                  <li className="text-[#fff] text-base hover:text-[#454647] leading-[20px] font-Jost font-medium relative after:content-['\2192'] after:absolute  after:ml-1 after:text-white cursor-pointer">
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li className="font-Jost text-base leading-5 font-medium text-[#ffffff] cursor-pointer">
                    ERP Development
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="erpdev-content-bottom">
          <h1 className="font-Poppins text-2xl md:text-6xl  lg:text-8xl uppercase   lg:leading-[128px] font-bold opacity-20">
            it solution
          </h1>
        </div>
      </section>

      <section className="bg-[#fafafa]">
        <div className="w-full max-w-7xl m-auto pt-10">
          <div
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-once="false"
            id="div-wrappper"
            className="flex justify-between gap-2 md:gap-6 items-center flex-col p-2 md:p-0"
          >
            <div
              id="div-content"
              className="flex justify-between w-full items-center p-2 md:p-0"
            >
              <div>
                <span className="text-[#ef7f1a] font-Manrope text-center md:text-start  uppercase text-base md:text-lg leading-[21px] font-bold">
                  Custom ERP
                </span>
                <h4 className="text-[#202122] font-Manrope uppercase mb-3 text-3xl md:text-[33px] md:leading-[52.74px] font-bold">
                  ERP Software Development
                </h4>
              </div>
              <div>
                <h4 className="text-balance text-[#666666] text-[18px] leading-[26px]   font-Jost font-normal ">
                  Crafting ERP solutions for web and mobile, ensuring
                  <br />
                  seamless operations and intuitive user experiences.
                </h4>
              </div>
              <div>
                <div className="hover:bg-[#ffffff] hover:text-[#000000] hover:shadow-inner bg-[#ef7f1a] p-3 rounded-md text-jost text-base leading-4 font-medium text-[#ffffff]">
                  <Link to={"/contactus"}>Contact Us</Link>
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
                      <h4 className="font-Manrope  text-[#202122] text-2xl font-bold ">
                        {card.title}
                      </h4>
                      <p className="text-[#666666]  font-Jost text-sm leading-[26px] font-normal">
                        {card.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div id="main-wrappper" className="w-full m-auto max-w-7xl py-9">
          <div className="grid lg:grid-cols-2 w-full place-content-between gap-4 items-center">
            <div
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-once="false"
              id="image-div"
              className="relative"
            >
              <img
                src={"/customerpdevelopment/erptwo.jpg"}
                alt="image"
                className="rounded-md h-fit"
              />
              <div className="bg-[#ef7f1a] text-center absolute bottom-0 w-full p-5 rounded-b-md">
                <span className="font-Jost text-[#ffffff] text-base leading-[26px] font-medium">
                  Trust Syncabout Solutions as your dedicated ERP development
                  partner.
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
              className="px-2 flex justify-center gap-2  flex-col"
            >
              <span className="text-[#ef7f1a] font-Manrope text-start  uppercase text-base md:text-lg leading-[21px] font-bold">
                ERP Solutions
              </span>
              <h4 className="text-[#202122] font-Manrope uppercase mb-3 text-2xl md:text-[43.95px] md:leading-[52.74px] font-bold">
                Innovate with Syncabout Solutions
              </h4>
              <p className="font-Jost  text-base md:text-start leading-[26px] mb-3 font-normal text-[#666666]">
                Offering tailored solutions that redefine efficiency and elevate
                your operations.
              </p>
              <div
                id="sub-content-div"
                className="flex justify-center items-center flex-col gap-4 md:gap-2"
              >
                <div className="flex justify-between items:start md:items-center gap-3 flex-col md:flex-row ">
                  <FaRegCheckCircle size={"2em"} color="#ef7f1a" />
                  <div>
                    <span className="text-[#202122] text-base md:text-2xl leading-[40px] font-bold mb-2 font-Manrope">
                      Custom ERP Development
                    </span>
                    <h4 className="font-Jost text-base md:text-start leading-[26px] mt-2 font-normal text-[#666666]">
                      Creating a custom ERP system from scratch, including
                      business analysis, end-to-end software development, data
                      migration, integrations, quality assurance, and
                      post-implementation support
                    </h4>
                  </div>
                </div>
                <div className="flex justify-between items:start md:items-center gap-3 flex-col md:flex-row">
                  <FaRegCheckCircle size={"2em"} color="#ef7f1a" />
                  <div>
                    <span className="text-[#202122] text-base md:text-2xl leading-[40px] font-bold mb-2 font-Manrope">
                      ERP Modules Development
                    </span>
                    <h4 className="font-Jost text-base md:text-start leading-[26px] mt-2 font-normal text-[#666666]">
                      Building an ERP module, incorporating architecture, UX and
                      UI design, module development, manual and automated QA
                      testing, as well as continual upkeep and support.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="erp  bg-[#fafafa]">
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
                  src={"/customerpdevelopment/rocket.svg"}
                  alt="image"
                  className="h-10 w-10"
                />
              </div>
              <span className=" text-[#000000] font-Manrope text-center md:text-start text-[22px] leading-[33px] font-bold">
                Are you ready to launch
                <br />
                your next project?
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

export default Erpdev;
