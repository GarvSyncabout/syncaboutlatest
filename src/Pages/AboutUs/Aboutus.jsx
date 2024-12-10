import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../AboutUs/aboutus.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Clients from "../../Components/Our Clients Section/Clients";

const Aboutus = () => {
  const cards = [
    {
      id: "1",
      title: "Our Vision",
      description:
        "The vision of Syncabout is to be a global leader in providing the best and unique IT solution to improve your productivity and business strength. Our try is to be actively updated with the latest trends of the business as well as the technology used in the IT industry. We work with the aspect of creativity, then comes trust to build a strong relationship with our clients for a long time of period.",
      imgUrl: "/aboutus/bulb.svg",
    },

    {
      id: "2",
      title: "Our Mission",
      description:
        "Web Design and Development Company is to create innovative products and deliver unique services which process quality and customer satisfaction to add value to your business. Our dedicated teams especially focus on the needs and requirements of the clients to build strong and long-term relations. With the aim to meet the clients demands, our teamwork to bring successful growth for various businesses.",
      imgUrl: "/aboutus/writing.svg",
    },
  ];

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <section className="w-full aboutus-bg bg-[url('/aboutus/aboutus.jpg')] bg-no-repeat bg-cover ">
        <div className="m-auto w-full max-w-7xl">
          {/* About section hero page */}

          <div
            id="aboutus-wrapper"
            className="gap-3 flex flex-wrap justify-start md:justify-between md:h-[57vh] items-center p-5"
          >
            <div>
              <span className="font-Jost text-[#ffffff] uppercase text-lg leading-[30px] tracking-[5px] font-normal">
                We are dedicated
              </span>
              <h2 className="font-Manrope text-5xl md:text-[80px] md:leading-[88px] font-extrabold text-[#ffffff]">
                About Us
              </h2>
            </div>
            <div>
              <div className="bg-[#ef7f1a] p-4 md:py-[25px] md:px-[60px] rounded-full">
                <ul className="flex items-center gap-5">
                  <li className="text-[#fff] text-base hover:text-[#454647] leading-[20px] font-Jost font-medium relative after:content-['\2192'] after:absolute  after:ml-1 after:text-white cursor-pointer">
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li className="font-Jost text-base leading-5 font-medium text-[#ffffff] cursor-pointer">
                    About Us
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="aboutus-content-bottom">
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
            className="grid lg:grid-cols-2 gap-4 place-content-between place-items-center"
          >
            <div
              id="content-div"
              className="flex justify-center items-center text-center md:text-start md:items-start gap-1 md:gap-3 flex-col"
            >
              <span className="text-[#ef7f1a] font-Manrope text-base md:text-lg leading-[21px] font-bold">
                Who We Are
              </span>
              <h4 className="text-[#202122] font-Manrope mb-2 text-3xl md:text-[43.95px] md:leading-[52.74px] font-bold">
                A Full Service Business Development Company
              </h4>
              <p className="font-Jost text-balance  text-sm md:text-start leading-[26px] mb-2 font-normal text-[#666666]">
                We are a business development company that believes in teamwork
                to give effective results with such content and strategies for
                our clients who always keep themselves one step ahead of us.
              </p>
              <p className="font-Jost  text-balance  text-sm md:text-start mb-2 leading-[26px] font-normal text-[#666666]">
                We have experts who are result-oriented in building online brand
                presence not only by being ranked in SERP but also by showing a
                dominant presence on social media.
              </p>
              <Link
                className="bg-[#ef7f1a] p-3 md:py-[20px] md:px-[30px] hover:bg-[#fafafa] hover:shadow-inner rounded-full font-Jost text-base  text-start  leading-5 font-medium text-[#fafafa] hover:text-[#202122]"
                to={"/mission"}
              >
                Explore Now
              </Link>
            </div>
            <div id="image-div" className="relative">
              <img
                src="/aboutus/whoweare.jpg"
                alt="who we are image"
                className="rounded-md"
              />
              <div className="absolute bottom-0 bg-[#ef7f1a] p-5 max-w-[250px] rounded-tr-md ">
                <p className="font-Jost text-[#ffffff] text-base leading-[26px] font-medium">
                  Stay ahead with our strategic solutions and shared success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#fafafa]">
        <div className="m-auto w-full max-w-7xl p-3 py-[80px]">
          {/* main content */}

          <div
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-once="false"
            className=""
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
                    OUR VISION AND MISSION
                  </span>
                  <h4
                    className="text-[#202122] font-Manrope text-balance
                   mb-3 text-3xl md:text-[43.95px] md:leading-[52.74px] font-bold"
                  >
                    Create a work atmosphere that can facilitate growth
                  </h4>
                </div>
                <div
                  id="second-side"
                  className="flex justify-center items-center md:items-start gap-4 flex-col"
                >
                  <div>
                    <p className="text-[17px] text-center md:text-start leading-[30px] font-medium text-[#202122]">
                      At Syncabout, we have a comprehensive process for website
                      design that ensures we deliver high-quality websites that
                      meet the specific needs of our clients.
                    </p>
                    <p className="text-[17px] text-center md:text-start leading-[30px] font-medium text-[#202122]">
                      We believe in complete transparency with our clients.
                    </p>
                  </div>
                  <div
                    id="button-div"
                    className="flex justify-start items-center gap-3"
                  >
                    <div className="p-3 bg-[#ef7f1a] rounded-md">
                      <Link className=" text-[#ffffff] font-jost font-Jost text-base leading-5 font-medium  ">
                        Our Services
                      </Link>
                    </div>
                    <div className=" p-3 bg-[#ef7f1a] rounded-md ">
                      <Link className=" text-[#ffffff] font-jost font-Jost text-base leading-5 font-medium">
                        Create Appointment
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="card-div"
                className="py-16 grid gap-14 md:gap-5 lg:grid-cols-2 place-content-center place-items-center"
              >
                {cards.map((card) => {
                  return (
                    <div
                      key={card.id}
                      className="relative p-5 bg-[#ffffff] shadow-md  flex justify-center text-center items-center flex-col"
                    >
                      <div
                        id="card-img"
                        className="absolute bg-[#ef7f1a] p-4 rounded-full top-[0%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
                      >
                        <img
                          src={card.imgUrl}
                          alt="Card Image"
                          className="h-12 w-12 filter brightness(0) invert(1);"
                        />
                      </div>
                      <div className="flex justify-center items-center flex-col gap-2 pt-9 pb-6">
                        <h4 className="font-Manrope text-[#202122] text-2xl font-bold ">
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
      <section>
        <Clients />
      </section>
    </>
  );
};

export default Aboutus;
