import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import "../SeoServices/seoservices.css";
import { MdDescription } from "react-icons/md";

const SeoServices = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const cards = [
    {
      id: "1",
      title: "Competitor Analysis",
      description:
        "By researching and analyzing your competitor's content strategy, our content marketing efforts will put you ahead of your competitors.",
      imgUrl: "/seoservices/competitor.svg",
    },

    {
      id: "2",
      title: "Audience Analysis",
      description:
        "Our content marketing team will analyze your target audience and their interaction to deliver you the right content, which catches their attention.",
      imgUrl: "/seoservices/analysis.svg",
    },
    {
      id: "3",
      title: "Result-Oriented Content",
      description:
        "We specialize in tailoring content to your specific needs, delivering results that not only boost site traffic but also elevate click-through rates.",
      imgUrl: "/seoservices/result.svg",
    },
  ];

  const seoCards = [
    {
      id: "1",
      title: "Perfection delivered in time",
      description:
        "We know that Search engine optimization is a critical process to implement. But our years of experience in providing SEO Services to clients guide us about doing things better than others. Start getting more quality traffic by targetting the right audience at the right place, that too at right time.",
      imageUrl: "/seoservices/time.svg",
    },
    {
      id: "2",
      title: "Grow your Traffic with SEO Experts",
      description:
        "Taking SEO Services is a perfect tool to get consistent high-quality leads and an audience for your business.Your business deserves traffic and our SEO Experts are well versed in delivering the same with our correct implementation of all the SEO Levels.",
      imageUrl: "/seoservices/target.svg",
    },
    {
      id: "3",
      title: "Strategic SEO solution",
      description:
        "You might have heard about many Search engine optimization experts. But let us tell you it's no child play. Search engine optimization, especially when providing SEO Services to a client, demands strategic planning and strict execution of the same to get favorable results",
      imageUrl: "/seoservices/traffic.svg",
    },
    {
      id: "4",
      title: "Search Engine Optimization Expertise",
      description:
        "Being a top and reputed SEO company, we are the perfect option for your online venture. No matter what your marketing goals are, our SEO experts will keep you ahead of your competitors in the market with a result-driven marketing approach.",
      imageUrl: "/seoservices/bulb.svg",
    },
  ];

  return (
    <>
      <section className="w-full seoservices-bg bg-[url('/seoservices/seoservices.jpg')] bg-no-repeat bg-cover ">
        <div className="m-auto w-full max-w-7xl">
          {/* About section hero page */}

          <div
            id="seoservices-wrapper"
            className="gap-3 flex flex-wrap justify-start md:justify-between md:h-[57vh] items-center py-9 px-2 md:p-5"
          >
            <div>
              <span className="font-Jost text-[#ffffff] uppercase text-base md:text-lg leading-[30px] tracking-[5px] font-normal">
                Digital Marketing
              </span>
              <h2 className="font-Manrope text-3xl md:text-[60px] md:leading-[88px] font-extrabold text-[#ffffff]">
                SEO Services
              </h2>
            </div>
            <div>
              <div className="bg-[#ef7f1a] p-3 md:py-[25px] md:px-[50px] rounded-full">
                <ul className="flex items-center gap-5">
                  <li className="text-[#fff] text-base hover:text-[#454647] leading-[20px] font-Jost font-medium relative after:content-['\2192'] after:absolute  after:ml-1 after:text-white cursor-pointer">
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li className="font-Jost text-base leading-5 font-medium text-[#ffffff] cursor-pointer">
                    SEO Services
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="seoservices-content-bottom">
          <h1 className="font-Poppins text-2xl md:text-6xl  lg:text-8xl uppercase   lg:leading-[128px] font-bold opacity-20">
            it solution
          </h1>
        </div>
      </section>

      <section className=" bg-[#fafafa] py-10">
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
                src="/seoservices/seoserviceone.jpg"
                alt="image"
                className="rounded-md h-full w-full object-contain"
              />
              <div className="bg-[#ef7f1a] text-center w-full absolute bottom-0 p-6 rounded-b-md">
                <span className="font-Jost text-[#ffffff] text-lg leading-[26px] font-medium">
                  Get More Website Traffic with Fully Managed, Advanced SEO
                  Services.
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
              className="flex justify-center items-center text-center md:text-start md:items-start gap-3 md:gap-0 flex-col"
            >
              <span className="text-[#ef7f1a] font-Manrope  uppercase text-base md:text-lg leading-[21px] font-bold">
                SEARCH ENGINE OPTIMIZATION (SEO)
              </span>
              <h4 className="text-[#202122] font-Manrope uppercase mb-3 text-2xl md:text-[43.95px] md:leading-[52.74px] font-bold">
                If You Can Dream It, We Can Rank It
              </h4>
              <p className="font-Jost  text-base md:text-start leading-[26px] mb-3 font-normal text-[#666666]">
                With over 200 verified factors in play within Google’s search
                algorithm, most agencies will rely on old tactics that no longer
                work, or guess with new tactics that they hope will stick.
              </p>
              <div>
                <p className="font-Manrope text-lg md:text-start leading-[30px] font-semibold mb-3 md:mb-1 text-[#ef7f1a]">
                  What Sets Us Apart
                </p>
                <div className="grid text-start  md:grid-cols-2 gap-4 mb-4">
                  <span className="relative pl-5 before:content-['\2713'] before:text-[#ef7f1a] before:absolute before:top-[50%] before:left-[0%] brfore:-translate-x-1/2 before:-translate-y-1/2 text-[#202122] font-Manrope capitalize text-base md:text-base leading-[21px] font-bold">
                    Technical SEO Mastery
                  </span>
                  <span className="relative pl-5 before:content-['\2713'] before:text-[#ef7f1a] before:absolute before:top-[50%] before:left-[0%] brfore:-translate-x-1/2 before:-translate-y-1/2 text-[#202122] font-Manrope capitalize text-base md:text-base leading-[21px] font-bold">
                    Strategic Keyword Optimization
                  </span>
                  <span className="relative pl-5 before:content-['\2713'] before:text-[#ef7f1a] before:absolute before:top-[50%] before:left-[0%] brfore:-translate-x-1/2 before:-translate-y-1/2 text-[#202122] font-Manrope capitalize text-base md:text-base leading-[21px] font-bold">
                    Local SEO Dominance
                  </span>
                  <span className="relative pl-5 before:content-['\2713'] before:text-[#ef7f1a] before:absolute before:top-[50%] before:left-[0%] brfore:-translate-x-1/2 before:-translate-y-1/2 text-[#202122] font-Manrope capitalize text-base md:text-base leading-[21px] font-bold">
                    Content Excellence
                  </span>
                  <span className="relative pl-5 before:content-['\2713'] before:text-[#ef7f1a] before:absolute before:top-[50%] before:left-[0%] brfore:-translate-x-1/2 before:-translate-y-1/2 text-[#202122] font-Manrope capitalize text-base md:text-base leading-[21px] font-bold">
                    Comprehensive Analytics
                  </span>
                </div>
              </div>
              <div className="hover:bg-[#ffffff] hover:text-[#000000] hover:shadow-inner bg-[#ef7f1a] p-5 rounded-md text-jost text-base leading-4 font-medium text-[#ffffff]">
                <Link to={"/contactus"}>Contact Now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" py-10">
        <div className="w-full m-auto max-w-7xl ">
          <div className="flex justify-center items-center flex-col px-2">
            <div
              data-aos="fade-down"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-once="false"
              id="content "
              className="text-center"
            >
              <p className="font-Jost text-[#ef7f1a] uppercase text-lg md:text-[35px] md:leading-[42px] mb-3 font-bold ">
                Our SEO Services Process
              </p>
              <h4 className="font-Manrope text-[#202122] text-base md:text-[22px] md:leading-[27px] font-bold">
                Syncsbout adopts a proactive approach, ensuring websites are
                inherently SEO-friendly from the outset.
              </h4>
            </div>
            <div id="image" className=" py-7 md:py-16">
              <img src="/seoservices/seoservicetwo.png" alt="image" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fafafa] py-10">
        <div className="w-full m-auto max-w-7xl">
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
                Inherent Ideals
              </span>
              <h3 className="font-Manrope mb-[50px] text-[#000000] text-[32px] leading-[41.6px] text-center font-extrabold">
                Why Take SEO Services from Syncabout?
              </h3>
            </div>
            <div
              id="seo-card"
              className="grid md:grid-cols-2 gap-7  place-content-between place-items-center px-2"
            >
              {seoCards.map((seoCard) => {
                return (
                  <div
                    key={seoCard.id}
                    className="flex justify-evenly p-5 aspect-square max-w-96 min-h-72 lg:max-h-[368px] lg:min-w-[530px] items-center gap-3 flex-col border-dashed  border-[#dbdbdb] border-[2px] hover:border-[#ef7f1a] hover:border-solid"
                  >
                    <div>
                      <img
                        src={seoCard.imageUrl}
                        alt="image"
                        className="h-14 w-14"
                      />
                    </div>
                    <div className="flex justify-center text-center items-center flex-col gap-4">
                      <span className="text-[#000000] font-Manrope font-bold text-[22px] leading-[27px] ">
                        {seoCard.title}
                      </span>
                      <p className="font-Jost text-sm leading-[26px] font-normal text-[#666666]">
                        {seoCard.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
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
              <div className="grid gap-2 lg:grid-cols-2 md:gap-5 place-content-between place-items-center">
                <div
                  id="content-div"
                  className="flex justify-center items-center text-center md:text-start md:items-start gap-1 flex-col"
                >
                  <span className="text-[#ef7f1a] font-Manrope uppercase text-base md:text-lg leading-[21px] font-bold">
                    OUR CONTENT MARKETING SERVICES
                  </span>
                  <h4
                    className="text-[#202122] font-Manrope text-balance
                   mb-3 text-3xl md:text-[43.95px] md:leading-[52.74px] font-bold"
                  >
                    How Our Content Marketing Service Works
                  </h4>
                </div>
                <div
                  id="second-side"
                  className="flex justify-center items-center md:items-start gap-4 flex-col"
                >
                  <div>
                    <p className="text-[17px] text-center md:text-start leading-[30px] font-medium text-[#202122]">
                      Our expertise extends to understanding your audience
                      intimately, and crafting content that speaks directly to
                      their needs and interests. Elevate your digital presence
                      with our result-oriented content marketing approach.
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
                className="pt-24 grid gap-14 md:gap-5 lg:grid-cols-3 place-content-center place-items-center"
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
                        <h4 className="font-Manrope  text-[#202122] text-2xl leading-[40px] font-bold ">
                          {card.title}
                        </h4>
                        <p className="text-[#666666] font-Jost text-xl  leading-[33px] font-normal">
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

      <section className="seoservices  bg-[#fafafa]">
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
                  src={"/seoservices/pen.svg"}
                  alt="image"
                  className="h-10 w-10"
                />
              </div>
              <span className=" text-[#000000] font-Manrope text-center md:text-start text-[22px] leading-[33px] font-bold">
                Improve your SEO Score!
              </span>
            </div>
            <div className="text-center md:text-start">
              <h4 className="text-balance text-[#666666] text-[20px] leading-[36px] font-Jost font-normal ">
                Let Syncabout enhance your SEO score for unparalleled online
                success.
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

export default SeoServices;
