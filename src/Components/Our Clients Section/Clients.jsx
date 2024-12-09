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
import { CiStar } from "react-icons/ci";
import ReactStars from "react-rating-stars-component";

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
      clientImgUrl: "/Clients Section/client.jpg",
      ClientName: "Jhone Ales",
      clientRole: "CEO",
      description:
        "Syncabout has been instrumental in transforming our business strategies. Their innovative solutions and unwavering commitment have propelled us to new heights. Truly a strategic partner for success!",
      stars: 3,
    },
    {
      id: "2",
      clientImgUrl: "/Clients Section/client.jpg",
      ClientName: "Jhone Ales",
      clientRole: "CEO",
      description:
        "Syncabout has been instrumental in transforming our business strategies. Their innovative solutions and unwavering commitment have propelled us to new heights. Truly a strategic partner for success!",
      stars: 3,
    },
    {
      id: "3",
      clientImgUrl: "/Clients Section/client.jpg",
      ClientName: "Jhone Ales",
      clientRole: "CEO",
      description:
        "Syncabout has been instrumental in transforming our business strategies. Their innovative solutions and unwavering commitment have propelled us to new heights. Truly a strategic partner for success!",
      stars: 3,
    },
    {
      id: "4",
      clientImgUrl: "/Clients Section/client.jpg",
      ClientName: "Jhone Ales",
      clientRole: "CEO",
      description:
        "Syncabout has been instrumental in transforming our business strategies. Their innovative solutions and unwavering commitment have propelled us to new heights. Truly a strategic partner for success!",
      stars: 3,
    },
    {
      id: "5",
      clientImgUrl: "/Clients Section/client.jpg",
      ClientName: "Jhone Ales",
      clientRole: "CEO",
      description:
        "Syncabout has been instrumental in transforming our business strategies. Their innovative solutions and unwavering commitment have propelled us to new heights. Truly a strategic partner for success!",
      stars: 3,
    },
    {
      id: "6",
      clientImgUrl: "/Clients Section/client.jpg",
      ClientName: "Jhone Ales",
      clientRole: "CEO",
      description:
        "Syncabout has been instrumental in transforming our business strategies. Their innovative solutions and unwavering commitment have propelled us to new heights. Truly a strategic partner for success!",
      stars: 3,
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
                  <div className="grid rounded grid-rows-3 items-center  place-content-center place-items-start">
                    <div id="client-starts">
                      <ReactStars
                        count={5}
                        value={item.stars}
                        // onChange={ratingChanged}
                        size={30}
                        activeColor="#ef7f1a"
                      />
                    </div>
                    <div id="client-description">
                      <p className="font-Jost text-lg leading-[26px] font-normal text-[#666666]">
                        {item.description}
                      </p>
                    </div>
                    <div id="client-details">
                      <div className="client-content flex justify-center items-start gap-2">
                        <div>
                          <img
                            src={item.clientImgUrl}
                            alt="Client Image"
                            className="!w-14 !h-14 object-cover rounded-full"
                          />
                        </div>
                        <div className="flex justify-center items-start flex-col">
                          <span className="font-Manrope text-[#202122] text-2xl leading-[31px] font-bold">
                            {item.ClientName}
                          </span>
                          <span className="font-Jost text-sm leading-[26px] font-normal text-[#ef7f1a]">
                            {item.clientRole}
                          </span>
                        </div>
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
