import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "reactjs-popup/dist/index.css";
import "../Our Clients Section/clients.css";

const Clients = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const contentData = [
    {
      id: "1",
      heading: "Customer Testimonials",
      subHeading: "What our Clients say about us!",
    },
  ];

  const blogCards = [
    {
      id: "1",
      clientImgUrl: "/Blogsection/designservice.png",
      ClientName: "Jhone Ales",
      clientRole: "Client",
      description:
        "Syncabout has been instrumental in transforming our business strategies. Their innovative solutions and unwavering commitment have propelled us to new heights. Truly a strategic partner for success!",
      stars: "",
    },
    {
      id: "2",
      clientImgUrl: "/Blogsection/designservice.png",
      ClientName: "Jhone Ales",
      clientRole: "Client",
      description:
        "Syncabout has been instrumental in transforming our business strategies. Their innovative solutions and unwavering commitment have propelled us to new heights. Truly a strategic partner for success!",
      stars: "",
    },
    {
      id: "3",
      clientImgUrl: "/Blogsection/designservice.png",
      ClientName: "Jhone Ales",
      clientRole: "Client",
      description:
        "Syncabout has been instrumental in transforming our business strategies. Their innovative solutions and unwavering commitment have propelled us to new heights. Truly a strategic partner for success!",
      stars: "",
    },
    {
      id: "4",
      clientImgUrl: "/Blogsection/designservice.png",
      ClientName: "Jhone Ales",
      clientRole: "Client",
      description:
        "Syncabout has been instrumental in transforming our business strategies. Their innovative solutions and unwavering commitment have propelled us to new heights. Truly a strategic partner for success!",
      stars: "",
    },
    {
      id: "5",
      clientImgUrl: "/Blogsection/designservice.png",
      ClientName: "Jhone Ales",
      clientRole: "Client",
      description:
        "Syncabout has been instrumental in transforming our business strategies. Their innovative solutions and unwavering commitment have propelled us to new heights. Truly a strategic partner for success!",
      stars: "",
    },
    {
      id: "6",
      clientImgUrl: "/Blogsection/designservice.png",
      ClientName: "Jhone Ales",
      clientRole: "Client",
      description:
        "Syncabout has been instrumental in transforming our business strategies. Their innovative solutions and unwavering commitment have propelled us to new heights. Truly a strategic partner for success!",
      stars: "",
    },
  ];

  return (
    <section className="bg-[#ffffff]">
      <div
        data-aos="fade-down"
        data-aos-delay="50"
        data-aos-duration="1000"
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

        <div className="client-swiper">
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
                    <div id="client-starts"></div>
                    <div id="client-description">
                      <p>{item.description}</p>
                    </div>
                    <div id="client-details">
                      <div className="client-content flex justify-center items-center flex-col">
                        <span> {item.ClientName}</span>
                        <span>{item.clientRole}</span>
                      </div>
                    </div>
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

export default Clients;
