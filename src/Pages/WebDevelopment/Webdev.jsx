import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import "../WebDevelopment/webdev.css";

const Webdev = () => {
  const companyValuesCards = [
    {
      id: "1",
      number: "01",
      title: "Discovery",
      description:
        "We conduct a thorough market research, competitor analysis, target audience, and clients' requirement before starting out with the project.",
    },
    {
      id: "2",
      number: "02",
      title: "Prototype",
      description:
        "We initiate by crafting a user flow map, strategically determining the optimal navigability of the website for an enhanced user experience.",
    },
    {
      id: "3",
      number: "03",
      title: "Design",
      description:
        "Our web designers adopt the latest trends and use the best colors, visual effects, typography, and animations that suit the brand identity.",
    },
    {
      id: "4",
      number: "04",
      title: "Development",
      description:
        "Full-stack web solutions with the help of the tech stack like Angular, React, HTML5/CSS3, Node.js, PHP(Laravel, Cake PHP, CodeIgniter), MySQL, MongoDB etc.",
    },
    {
      id: "5",
      number: "05",
      title: "Testing",
      description:
        "Prior to your site's launch, we conduct a thorough review of codes, features, and functionalities, ensuring a seamless website experience.",
    },
    {
      id: "6",
      number: "06",
      title: "Maintenance",
      description:
        "In case you need to update any functionality or add custom features and conduct a thorough maintenance, hire our expert web developers right away.",
    },
  ];

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <section className="w-full webdev-bg bg-[url('/webdevelopment/webdev.jpg')] bg-no-repeat bg-cover ">
        <div className="m-auto w-full max-w-7xl">
          {/* About section hero page */}

          <div
            id="webdev-wrapper"
            className="gap-3 flex flex-wrap justify-start md:justify-between md:h-[57vh] items-center py-9 px-2 md:p-5"
          >
            <div>
              <span className="font-Jost text-[#ffffff] uppercase text-base md:text-lg leading-[30px] tracking-[5px] font-normal">
                THIS IS A PLACE WHERE IDEAS GROW
              </span>
              <h2 className="font-Manrope text-4xl md:text-[80px] md:leading-[88px] font-extrabold text-[#ffffff]">
                Web Development
              </h2>
            </div>
            <div>
              <div className="bg-[#ef7f1a] p-3 md:py-[25px] md:px-[60px] rounded-full">
                <ul className="flex items-center gap-5">
                  <li className="text-[#fff] text-base hover:text-[#454647] leading-[20px] font-Jost font-medium relative after:content-['\2192'] after:absolute  after:ml-1 after:text-white cursor-pointer">
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li className="font-Jost text-base leading-5 font-medium text-[#ffffff] cursor-pointer">
                    web development
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="webdev-content-bottom">
          <h1 className="font-Poppins text-2xl md:text-6xl  lg:text-8xl uppercase   lg:leading-[128px] font-bold opacity-20">
            it solution
          </h1>
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
                  className="relative flex rounded justify-center items-start gap-2 flex-col border-dashed border-[#dbdbdb] max-w-96 min-h-72 p-4 border-[2px] hover:border-[#ef7f1a] hover:border-solid "
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
                    <p className="font-Jost text-sm leading-[26px] font-normal text-[#666666]">
                      {cards.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#fafafa] py-10">
        <div id="main-wrapper" className="max-w-7xl w-full m-auto">
          <div className="grid md:grid-cols-2 gap-4 place-content-center place-items-center p-2">
            <div
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-once="false"
              id="content-div"
              className="flex justify-center items-center text-center md:text-start md:items-start gap-3 md:gap-3 flex-col"
            >
              <span className="text-[#ef7f1a] font-Manrope  uppercase text-base md:text-lg leading-[21px] font-bold">
                DEVELOPMENT SERVICES
              </span>
              <h4 className="text-[#202122] font-Manrope uppercase mb-3 text-3xl md:text-[43.95px] md:leading-[52.74px] font-bold">
                eCommerce Development
              </h4>
              <p className="font-Jost  text-base md:text-start leading-[26px] mb-3 font-normal text-[#666666]">
                We help in driving customer satisfaction, expanding audiences,
                and boosting sales. We assure that your website is developed
                with a robust business strategy and the advanced top- notch
                development technologies.
              </p>
              <div
                className="grid text-start  md:grid-cols-2 gap-4 mb-3
              "
              >
                <span className="relative pl-5 before:content-['\2713'] before:text-[#ef7f1a] before:absolute before:top-[50%] before:left-[0%] brfore:-translate-x-1/2 before:-translate-y-1/2 text-[#202122] font-Manrope capitalize text-base md:text-lg leading-[21px] font-bold">
                  Social eCommerce Developmen
                </span>
                <span className="relative pl-5 before:content-['\2713'] before:text-[#ef7f1a] before:absolute before:top-[50%] before:left-[0%] brfore:-translate-x-1/2 before:-translate-y-1/2 text-[#202122] font-Manrope capitalize text-base md:text-lg leading-[21px] font-bold">
                  B2B or B2C Marketplace
                </span>

                <span className="relative pl-5 before:content-['\2713'] before:text-[#ef7f1a] before:absolute before:top-[50%] before:left-[0%] brfore:-translate-x-1/2 before:-translate-y-1/2 text-[#202122] font-Manrope capitalize text-base md:text-lg leading-[21px] font-bold">
                  Online Store Develpment
                </span>
                <span className="relative pl-5 before:content-['\2713'] before:text-[#ef7f1a] before:absolute before:top-[50%] before:left-[0%] brfore:-translate-x-1/2 before:-translate-y-1/2 text-[#202122] font-Manrope capitalize text-base md:text-lg leading-[21px] font-bold">
                  eCommerce Aggregators
                </span>
              </div>
              <div className="hover:bg-[#ffffff] hover:text-[#000000] hover:shadow-inner bg-[#ef7f1a] p-5 rounded-md text-jost text-base leading-4 font-medium text-[#ffffff]">
                <Link to={"/contactus"}>Contact Now</Link>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-once="false"
              id="img-div"
              className="relative"
            >
              <img
                src="/webdevelopment/webdevone.jpg"
                alt="image"
                className="rounded-md"
              />
              <div className="bg-[#ef7f1a] absolute bottom-0 p-4 rounded-b-md">
                <span className="font-Jost text-[#ffffff] text-base leading-[26px] font-medium">
                  Rendering high-performance and robust eCommerce Solutions to
                  take your business to a level ahead.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div id="main-wrapper" className="max-w-7xl w-full m-auto">
          <div className="grid md:grid-cols-2 gap-4 place-content-center place-items-center p-2">
            <div
              id="img-div"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-once="false"
            >
              <img
                src="/webdevelopment/webdevtwo.jpg"
                alt="image"
                className="rounded-md"
              />
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
                DEVELOPMENT SERVICES
              </span>
              <h4 className="text-[#202122] font-Manrope uppercase mb-3 text-3xl md:text-[43.95px] md:leading-[52.74px] font-bold">
                Laravel Development
              </h4>
              <p className="font-Jost  text-base md:text-start leading-[26px] mb-3 font-normal text-[#666666]">
                As an experienced Laravel application development company, we
                partner with both small and large enterprises to build custom
                high- quality websites, web applications & mobile apps. Our
                developers have extensive experience and work with an array of
                industries to deliver robust solutions.
              </p>

              <div className="hover:bg-[#fafafa] hover:text-[#000000] hover:shadow-inner bg-[#ef7f1a] p-5 rounded-md text-jost text-base leading-4 font-medium text-[#ffffff]">
                <Link to={"/contactus"}>Get Started Now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="schedule bg-[#fafafa]">
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
                  src={"/webdevelopment/plane.svg"}
                  alt="image"
                  className="h-10 w-10"
                />
              </div>
              <span className=" text-[#000000] font-Manrope text-center md:text-start text-[22px] leading-[33px] font-bold">
                Schedule our website
                <br /> development service today
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

export default Webdev;
