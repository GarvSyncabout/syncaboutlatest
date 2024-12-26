import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import "reactjs-popup/dist/index.css";
import "../Blogs Section/blogs.css";
import { HiMiniCalendarDateRange } from "react-icons/hi2";
import { FaComments } from "react-icons/fa";

const Blogs = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const contentData = [
    {
      id: "1",
      heading: "Our Blogs",
      subHeading: "Explore our IT services blog today!",
    },
  ];

  const blogCards = [
    {
      id: "1",
      imgUrl: "/Blogsection/designservice.png",
      date: "March 12, 2024",
      comments: "0 Comment",
      heading: "The Importance of Responsive UI/UX Design Services",
      buttonTitle: "Read More",
    },
    {
      id: "2",
      imgUrl: "/Blogsection/softwaredevelopment.png",
      date: "February 7, 2024",
      comments: "0 Comment",
      heading:
        "8 Reasons Why Your Business Needs Custom Software Development Service",
      buttonTitle: "Read More",
    },
    {
      id: "3",
      imgUrl: "/Blogsection/business.png",
      date: "February 7, 2024",
      comments: "0 Comment",
      heading:
        "Why Web Design and Development Is Important for Business in 2024",
      buttonTitle: "Read More",
    },
    {
      id: "4",
      imgUrl: "/Blogsection/designservice.png",
      date: "March 12, 2024",
      comments: "0 Comment",
      heading: "The Importance of Responsive UI/UX Design Services",
      buttonTitle: "Read More",
    },
    {
      id: "5",
      imgUrl: "/Blogsection/softwaredevelopment.png",
      date: "February 7, 2024",
      comments: "0 Comment",
      heading:
        "8 Reasons Why Your Business Needs Custom Software Development Service",
      buttonTitle: "Read More",
    },
    {
      id: "6",
      imgUrl: "/Blogsection/business.png",
      date: "February 7, 2024",
      comments: "0 Comment",
      heading:
        "Why Web Design and Development Is Important for Business in 2024",
      buttonTitle: "Read More",
    },
  ];

  return (
    <section className="bg-[#ffffff]">
      <div
        data-aos="fade-down"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-once="false"
        className=" m-auto w-full max-w-7xl text-center gap-5 h-full p-5 pt-[110px] pb-[80px] "
      >
        <div className="flex justify-center items-center">
          {contentData.map((data) => {
            return (
              <div
                key={data.id}
                className="flex justify-center items-center gap-3 flex-col md:mb-[60px] text-wrap max-w-[750px] "
              >
                <span className="font-Jost text-sm uppercase tracking-normal leading-[26px]  pb-[10px] font-normal  text-[#ef7f1a]">
                  {data.heading}
                </span>
                <h2 className="font-Manrope mb-[50px] text-[#000000] text-[32px] leading-[41.6px] text-center font-extrabold">
                  {data.subHeading}
                </h2>
              </div>
            );
          })}
        </div>

        {/* blog cards */}

        <div className="blog-swiper">
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            breakpoints={{
              1024: {
                slidesPerView: 3, // Show 3 cards on small screens and big screens laptops
              },
              768: {
                slidesPerView: 2, // Show 2 cards on tablets
              },
              480: {
                slidesPerView: 1, // Show 1 card on mobile devices
              },
              320: {
                slidesPerView: 1, // Show 1 card on mobile devices
              },
              375: {
                slidesPerView: 1, // Show 1 card on mobile devices
              },
            }}
          >
            {blogCards.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <div className="grid rounded grid-rows-[1fr_200px_auto] place-content-center place-items-start">
                    <div id="card-image">
                      <img
                        src={item.imgUrl}
                        alt="blog img"
                        className=" rounded-tl rounded-tr"
                      />
                    </div>
                    <div id="card-content" className="px-2 pt-7">
                      <div className="flex justify-start gap-3 mb-[10px] items-center">
                        <div className="calnder-div flex justify-center gap-1 items-center">
                          {" "}
                          <HiMiniCalendarDateRange />
                          <h5 className="text-sm text-start leading-[26px] font-normal text-[#666666] hover:text-[#ef7f1a]">
                            {item.date}
                          </h5>
                        </div>
                        <div className="flex justify-center gap-1 items-center">
                          {" "}
                          <FaComments />
                          <h5 className="text-sm text-start leading-[26px] font-normal text-[#666666] hover:text-[#ef7f1a]">
                            {item.comments}
                          </h5>
                        </div>
                      </div>
                      <div className="flex justify-center  items-center">
                        <Link to={`/blogs`}>
                          <h4 className="text-[#202122] hover:text-[#ef7f1a] text-balance text-start mb-5 font-Manrope text-2xl leading-[32px] font-semibold">
                            {item.heading}
                          </h4>
                        </Link>
                      </div>
                    </div>

                    <Link
                      to={"/"}
                      className=" bg-[#fafafa] text-[#666666] rounded-full text-sm leading-5 font-medium hover:bg-[#ef7f1a] hover:text-[#ffffff] p-3"
                    >
                      &#8594;&nbsp;{item.buttonTitle}
                    </Link>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
