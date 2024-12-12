import React, { useEffect } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import "../LifeAtSyncabout/lifeatsyncabout.css";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";

const Lifeatsyncabout = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const photoGrid = [
    {
      id: "1",
      image: "/lifeatsyncabout/imgone.png",
    },
    {
      id: "2",
      image: "/lifeatsyncabout/imgtwo.png",
    },
    {
      id: "3",
      image: "/lifeatsyncabout/imgthree.png",
    },
    {
      id: "4",
      image: "/lifeatsyncabout/imgfour.png",
    },
    {
      id: "5",
      image: "/lifeatsyncabout/imgfive.png",
    },
    {
      id: "6",
      image: "/lifeatsyncabout/imgsix.png",
    },
  ];
  return (
    <>
      <section className="w-full lifeatsyncabout-bg bg-[url('/lifeatsyncabout/lifeatsyncabout.jpg')] bg-no-repeat bg-cover ">
        <div className="m-auto w-full max-w-7xl">
          {/* About section hero page */}

          <div
            id="lifeatsyncabout-wrapper"
            className="gap-3 flex flex-wrap justify-start md:justify-between md:h-[57vh] items-center py-9 px-2 md:p-5"
          >
            <div>
              <span className="font-Jost text-[#ffffff] uppercase text-base md:text-lg leading-[30px] tracking-[5px] font-normal">
                Growing Together at Syncabout
              </span>
              <h2 className="font-Manrope text-4xl md:text-[80px] md:leading-[88px] font-extrabold text-[#ffffff]">
                Life at Syncabout
              </h2>
            </div>
            <div>
              <div className="bg-[#ef7f1a] p-3 md:py-[25px] md:px-[60px] rounded-full">
                <ul className="flex items-center gap-5">
                  <li className="text-[#fff] text-base hover:text-[#454647] leading-[20px] font-Jost font-medium relative after:content-['\2192'] after:absolute  after:ml-1 after:text-white cursor-pointer">
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li className="font-Jost text-base leading-5 font-medium text-[#ffffff] cursor-pointer">
                    Life at Syncabout
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="lifeatsyncabout-content-bottom">
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
          className="m-auto w-full max-w-7xl flex justify-center gap-16 flex-col items-center pt-9 "
        >
          <div className="inherent-content flex justify-center gap-2 items-center flex-col">
            <span className="font-Jost text-sm uppercase tracking-normal leading-[26px] pb-[10px] font-normal  text-[#ef7f1a]">
              Life at syncabout
            </span>
            <h3 className="font-Manrope mb-[50px] text-[#000000] text-3xl md:text-[32px] leading-[41.6px] text-center font-extrabold">
              At Syncabout, we believe happy employees are the driving force
              behind innovation and success!
            </h3>
          </div>
          <div className="grid md:grid-cols-3  gap-16 p-5">
            <Gallery withDownloadButton>
              {photoGrid.map((cards) => {
                return (
                  <Item
                    key={cards.id}
                    original={cards.image}
                    thumbnail={cards.image}
                    width="700"
                    height="500"
                  >
                    {({ ref, open }) => (
                      <div className="relative" ref={ref} onClick={open}>
                        <img src={cards.image} />
                        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-0 transition duration-1000 ease-in-out hover:opacity-40"></div>
                      </div>
                    )}
                  </Item>
                );
              })}
            </Gallery>
          </div>
        </div>
      </section>
    </>
  );
};

export default Lifeatsyncabout;
