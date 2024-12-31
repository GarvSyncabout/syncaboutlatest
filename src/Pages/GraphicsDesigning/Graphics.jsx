import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../GraphicsDesigning/graphics.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Graphics = () => {
  const swiperImage = [
    {
      id: "1",
      imageUrl: "/graphicsdesigning/carouselone.jpg",
    },
    {
      id: "2",
      imageUrl: "/graphicsdesigning/carouseltwo.jpg",
    },
    {
      id: "3",
      imageUrl: "/graphicsdesigning/carouselthree.jpg",
    },
    {
      id: "4",
      imageUrl: "/graphicsdesigning/carouselfour.jpg",
    },
    {
      id: "5",
      imageUrl: "/graphicsdesigning/carouselfive.jpg",
    },
    {
      id: "6",
      imageUrl: "/graphicsdesigning/carouselsix.jpg",
    },
  ];

  const cards = [
    {
      id: "1",
      imageUrl: "/graphicsdesigning/graphicsthree.png",
      title: "Marketing and Digital Design",
      description: "Logos, brochures, social media graphics, and more.",
      btnTitle: "Get Started Now",
    },
    {
      id: "2",
      imageUrl: "/graphicsdesigning/graphicsfour.png",
      title: "Packaging Design",
      description: "Package designing with functionality.",
      btnTitle: "Get Started Now",
    },
    {
      id: "3",
      imageUrl: "/graphicsdesigning/graphicsfive.png",
      title: "Print Design",
      description: "Timeless prints that make a statement.",
      btnTitle: "Get Started Now",
    },
    {
      id: "4",
      imageUrl: "/graphicsdesigning/graphicssix.png",
      title: "Infographics",
      description: "Designing everything with our creative canvas.",
      btnTitle: "Get Started Now",
    },
  ];
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <section className="w-full graphicsdesigning-bg bg-[url('/graphicsdesigning/graphic.jpg')] bg-no-repeat bg-cover ">
        <div className="m-auto w-full max-w-7xl">
          {/* About section hero page */}

          <div
            id="seoservices-wrapper"
            className="gap-3 flex flex-wrap justify-start md:justify-between md:h-[57vh] items-center py-9 px-2 md:p-5"
          >
            <div>
              <span className="font-Jost text-[#ffffff] uppercase text-base md:text-lg leading-[30px] tracking-[5px] font-normal">
                Syncabout Business Solutions
              </span>
              <h2 className="font-Manrope text-3xl md:text-[60px] md:leading-[88px] font-extrabold text-[#ffffff]">
                Graphic Design Portfolio
              </h2>
            </div>
            <div>
              <div className="bg-[#ef7f1a] p-3 md:py-[25px] md:px-[50px] rounded-full">
                <ul className="flex items-center gap-5">
                  <li className="text-[#fff] text-base hover:text-[#454647] leading-[20px] font-Jost font-medium relative after:content-['\2192'] after:absolute  after:ml-1 after:text-white cursor-pointer">
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li className="font-Jost text-base leading-5 font-medium text-[#ffffff] cursor-pointer">
                    Graphic Design Portfolio
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="graphicsdesigning-content-bottom">
          <h1 className="font-Poppins text-2xl md:text-6xl  lg:text-8xl uppercase   lg:leading-[128px] font-bold opacity-20">
            it solution
          </h1>
        </div>
      </section>

      <section className="py-10">
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
                src="/graphicsdesigning/graphicsone.png"
                alt="image"
                className="rounded-md h-full w-full object-contain"
              />
              <div className="bg-[#ef7f1a] text-center absolute  left-0 bottom-0 md:max-w-[310px] p-7 rounded-md">
                <span className="font-Jost text-[#ffffff] text-lg leading-[26px] font-medium">
                  Stay ahead with our strategic solutions and shared success.
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
              className="flex justify-evenly h-full items-center text-center md:text-start md:items-start gap-3 md:gap-0 flex-col"
            >
              <span className="text-[#ef7f1a] font-Manrope  uppercase text-base md:text-lg leading-[21px] font-bold">
                Who we are
              </span>
              <h4 className="text-[#202122] font-Manrope uppercase mb-3 text-2xl md:text-[43.95px] md:leading-[52.74px] font-bold">
                Designing your imagination to reality!
              </h4>
              <p className="font-Jost  text-base md:text-start leading-[26px] mb-3 font-normal text-[#666666]">
                Graphic design services can be a powerful tool for any company,
                big or small. We create a unique and memorable brand identity
                that represents your company’s values and resonates with your
                target audience.
              </p>
              <div>
                <p className="font-Manrope text-lg md:text-start leading-[30px] font-semibold mb-3 md:mb-1 text-[#ef7f1a]">
                  Here’s an overview of what Syncabout offer in this field
                </p>
                <div className="grid text-start  md:grid-cols-2 gap-4 mb-4">
                  <span className="relative pl-5 before:content-['\2713'] before:text-[#ef7f1a] before:absolute before:top-[50%] before:left-[0%] brfore:-translate-x-1/2 before:-translate-y-1/2 text-[#202122] font-Manrope capitalize text-base md:text-base leading-[21px] font-bold">
                    Marketing and Digital Design
                  </span>
                  <span className="relative pl-5 before:content-['\2713'] before:text-[#ef7f1a] before:absolute before:top-[50%] before:left-[0%] brfore:-translate-x-1/2 before:-translate-y-1/2 text-[#202122] font-Manrope capitalize text-base md:text-base leading-[21px] font-bold">
                    Print Design
                  </span>
                  <span className="relative pl-5 before:content-['\2713'] before:text-[#ef7f1a] before:absolute before:top-[50%] before:left-[0%] brfore:-translate-x-1/2 before:-translate-y-1/2 text-[#202122] font-Manrope capitalize text-base md:text-base leading-[21px] font-bold">
                    Packaging Design
                  </span>
                  <span className="relative pl-5 before:content-['\2713'] before:text-[#ef7f1a] before:absolute before:top-[50%] before:left-[0%] brfore:-translate-x-1/2 before:-translate-y-1/2 text-[#202122] font-Manrope capitalize text-base md:text-base leading-[21px] font-bold">
                    Infographics, illustration and more
                  </span>
                </div>
              </div>
              <div className="hover:bg-[#ffffff] hover:text-[#000000] hover:shadow-inner bg-[#ef7f1a] p-5 rounded-md text-jost text-base leading-4 font-medium text-[#ffffff]">
                <Link to={"/contactus"}>Explore Now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fafafa] py-10">
        <div id="main-wrapper" className="max-w-7xl w-full m-auto">
          <div className="flex justify-center items-center text-center flex-col">
            <div
              id="content-div"
              data-aos="fade-down"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-once="false"
              className="pb-7"
            >
              <span className="text-[#ef7f1a] font-Manrope uppercase text-base md:text-lg leading-[21px] font-bold mb-3">
                Our Graphic Design Services
              </span>
              <h4 className="text-[#202122] font-Manrope uppercase mb-3 text-2xl md:text-[43.95px] md:leading-[52.74px] font-bold">
                Graphic Design Services
              </h4>
            </div>
            <div
              data-aos="fade-down"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-once="false"
              id="content-card"
              className="grid md:grid-cols-4 place-content-center place-items-center gap-4 p-2"
            >
              {cards.map((card) => {
                return (
                  <div key={card.id} className="shadow-md overflow-hidden">
                    <div className="group relative">
                      <img
                        src={card.imageUrl}
                        alt="image"
                        className="w-full h-full object-cover group overflow-hidden transition-all duration-300 ease-in-out  group-hover:scale-150 group-hover:delay-300  group-hover:duration-2000 group-hover:ease-linear"
                      />
                      <div className="absolute top-[50%] left-[50%] -translate-x-[50%] opacity-50 group-hover:ease-linear group-hover:delay-100 group-hover:duration-700  group-hover:opacity-100 h-full w-full  bg-[#ef7f1a] text-white -translate-y-[50%] ">
                        <div className="flex justify-center  gap-3 items-start text-start h-full  flex-col px-10 group-hover:-translate-y-8 group-hover:ease-linear group-hover:delay-300 group-hover:duration-300 ">
                          <h4 className="text-[#ffffff] font-Manrope uppercase mb-3 text-2xl md:text-[16px] md:leading-[26px] font-bold">
                            {card.title}
                          </h4>
                          <p className="text-[#ffffff] font-Manrope capitalize text-base leading-[26px] font-normal mb-3">
                            {card.description}
                          </p>
                          <div className="border-[1px]  border-[#ffffff]  p-2 rounded-sm">
                            <Link to={"/contactus"}>{card.btnTitle}</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-7xl m-auto w-full py-10">
          <div
            id="graphics-wrapper"
            className="flex justify-center items-center text-center flex-col gap-5 px-2"
          >
            <div
              id="content-div"
              data-aos="fade-down"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-once="false"
              className="pb-7"
            >
              <span className="text-[#ef7f1a] font-Manrope uppercase text-base text-balance md:text-lg leading-[21px] font-bold mb-3">
                Crafting graphic design solutions worth talking about
              </span>
              <h4 className="text-[#202122] font-Manrope uppercase mb-3 text-2xl md:text-[43.95px] md:leading-[52.74px] font-bold">
                Checkout Our Portfolio
              </h4>
            </div>
            <Swiper
              data-aos="fade-down"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              spaceBetween={10}
              slidesPerView={2}
              autoplay={true}
              loop={true}
              navigation={true}
              grid={{
                fill: 2,
              }}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                1280: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 2,
                },
                767: {
                  slidesPerView: 2,
                },
                600: {
                  slidesPerView: 1,
                },
                375: {
                  slidesPerView: 1,
                },
                320: {
                  slidesPerView: 1,
                },
              }}
              modules={[Grid, Pagination, Navigation, Autoplay]}
              className="mySwiper"
            >
              {swiperImage.map((swiper) => {
                return (
                  <SwiperSlide key={swiper.id}>
                    <img src={swiper.imageUrl} alt="image" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>

      <section className="graphics bg-[#fafafa]">
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
                  src={"/graphicsdesigning/graphicpen.svg"}
                  alt="image"
                  className="h-10 w-10"
                />
              </div>
              <span className=" text-[#000000] font-Manrope text-center md:text-start text-[22px] leading-[33px] font-bold">
                Are you ready for a brand
                <br />
                design that speaks your voice?
              </span>
            </div>
            <div className="text-center md:text-start max-w-[500px]">
              <h4 className=" text-[#666666] text-[20px] leading-[36px] font-Jost font-normal  ">
                You can leverage the power of visual communication to achieve
                your marketing and branding goals like never before.
              </h4>
            </div>
            <div className="text-end">
              <div className="hover:bg-[#ffffff] hover:text-[#000000] hover:shadow-inner bg-[#ef7f1a] p-3 rounded-md text-jost text-base leading-4 font-medium text-[#ffffff] ">
                <Link to={"/contactus"}>Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Graphics;
