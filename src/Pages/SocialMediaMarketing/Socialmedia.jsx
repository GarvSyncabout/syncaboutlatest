import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import "../SocialMediaMarketing/socialmedia.css";
import Accordion from "../../Components/Accordion/Accordion";

const Socialmedia = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const accordionData = [
    {
      id: "1",
      title:
        "What’s the Difference Digital Marketing & Social Media Marketing?",
      description:
        "Many people use digital and social media marketing interchangeably. They believe that implementing various B2B social media marketing methods alone qualifies as digital marketing. However, social media marketing is only a fraction of the bigger picture.",
    },
    {
      id: "2",
      title: "What Is Social Media Marketing?",
      description:
        "Social media marketing is an online marketing method that utilizes different social media platforms, such as Facebook, Twitter, LinkedIn and Pinterest, to establish brand recognition, capture customers’ attention and connect brands with a broader, more diverse audience segment. Social media marketing for small businesses and enterprises is a powerful way to reach your prospects right where they spend their time online and bolster your brand engagement.",
    },
    {
      id: "3",
      title: "Are Digital and Social Media Marketing Essential to Business?",
      description:
        "Yes. Digital and social media marketing are critical components of online success. Although digital and social media marketing strategies vary, these marketing tactics share the same goals: to boost brand awareness and drive more revenue.",
    },
  ];

  const socialCards = [
    {
      id: "1",
      title: "Strategic Social Media Marketing",
      description:
        "Our well-qualified and highly experienced social media marketing team follows a strategic social media marketing plan to deliver satisfying results to our clients. We use different marketing approaches for each social media platform as per the business industry requirements.",
      imageUrl: "/socialmediamarketing/time.svg",
    },
    {
      id: "2",
      title: "Expert Social Media Managers",
      description:
        "We have a large team of expert social media specialists with numerous years of experience in social media management. Our team possesses an in-depth understanding of social media algorithms and user behavior, crucial for the overall growth of social media channels.",
      imageUrl: "/socialmediamarketing/target.svg",
    },
    {
      id: "3",
      title: "Surprising Marketing Results",
      description:
        "Our continuous hard work and research in the social media world helped us to track the social media algorithms and work accordingly. We offer organic and paid social media marketing services. We guarantee to offer the desired results in your focused budget as well as at a particular time.",
      imageUrl: "/socialmediamarketing/traffic.svg",
    },
    {
      id: "4",
      title: "Social Media Marketing Expertise",
      description:
        "Syncabout is one of the prominent social media marketing companies that offer strategic social media consulting services as well as social media management services. Since 2010, we have managed numerous social media channels for our clients across the globe.",
      imageUrl: "/socialmediamarketing/bulb.svg",
    },
  ];
  return (
    <>
      <section className="w-full socialmediamarketing-bg bg-[url('/socialmediamarketing/socialmedia.jpg')] bg-no-repeat bg-cover ">
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
                Social Media Marketing
              </h2>
            </div>
            <div>
              <div className="bg-[#ef7f1a] p-3 md:py-[25px] md:px-[50px] rounded-full">
                <ul className="flex items-center gap-5">
                  <li className="text-[#fff] text-base hover:text-[#454647] leading-[20px] font-Jost font-medium relative after:content-['\2192'] after:absolute  after:ml-1 after:text-white cursor-pointer">
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li className="font-Jost text-base leading-5 font-medium text-[#ffffff] cursor-pointer">
                    Social Media Marketing
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="socialmediamarketing-content-bottom">
          <h1 className="font-Poppins text-2xl md:text-6xl  lg:text-8xl uppercase   lg:leading-[128px] font-bold opacity-20">
            it solution
          </h1>
        </div>
      </section>

      <section className="py-10 ">
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
                Why Hire Social Media Marketing Services from Syncabout?
              </h3>
            </div>
            <div
              id="seo-card"
              className="grid md:grid-cols-2 gap-7  place-content-between place-items-center px-2"
            >
              {socialCards.map((socialCard) => {
                return (
                  <div
                    key={socialCard.id}
                    className="flex justify-evenly p-5 aspect-square max-w-96 min-h-72 lg:max-h-[368px] lg:min-w-[530px] items-center gap-3 flex-col border-dashed  border-[#dbdbdb] border-[2px] hover:border-[#ef7f1a] hover:border-solid"
                  >
                    <div>
                      <img
                        src={socialCard.imageUrl}
                        alt="image"
                        className="h-14 w-14"
                      />
                    </div>
                    <div className="flex justify-center text-center items-center flex-col gap-4">
                      <span className="text-[#000000] font-Manrope font-bold text-[22px] leading-[27px] ">
                        {socialCard.title}
                      </span>
                      <p className="font-Jost text-sm leading-[26px] font-normal text-[#666666]">
                        {socialCard.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-[#fafafa]">
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
              className="flex justify-center items-center text-center md:text-start md:items-start gap-1 md:gap-4 flex-col"
            >
              <span className="text-[#ef7f1a] font-Manrope text-base md:text-lg leading-[21px] font-bold">
                SOCIAL MEDIA MARKETING
              </span>
              <h4 className="text-[#202122] font-Manrope mb-3 text-2xl md:text-[43.95px] md:leading-[52.74px] font-bold">
                Engage Your Customers - Build Your Brand
              </h4>
              <p className="font-Jost   text-base md:text-start leading-[26px] mb-3 font-normal text-[#666666]">
                In the era of digitalization, you just cannot ignore the power
                of social media platforms. It is not enough to have your social
                business accounts on those platforms, you need a strategy for
                social media platforms that can create awareness about your
                brand among your target audience and bring your users back to
                your website to take action.
              </p>
              <Link
                className="bg-[#ef7f1a] p-3 md:py-[20px] md:px-[30px] hover:bg-[#fafafa] hover:shadow-inner rounded-full font-Jost text-base  text-start  leading-5 font-medium text-[#fafafa] hover:text-[#202122]"
                to={"/mission"}
              >
                Get Started Now
              </Link>
            </div>
            <div id="image-div" className="relative">
              <img
                src="/socialmediamarketing/socialmediatwo.jpg"
                alt="who we are image"
                className="rounded-md"
              />
              <div className="absolute bottom-0 bg-[#ef7f1a] p-5 w-full rounded-tr-md ">
                <p className="font-Jost text-[#ffffff] text-base text-center leading-[26px] font-medium">
                  Boost Your Sales with Impressive and Positive Social
                  Relationships
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="m-auto w-full max-w-7xl">
          <div className="grid lg:grid-cols-2 place-content-center gap-7 place-items-center">
            <div
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-once="false"
              id="image-div"
            >
              <div className="relative">
                <img
                  src="/socialmediamarketing/socialmediathree.jpg"
                  alt="image"
                  className="h-full w-full object-cover rounded-md"
                />
                <div className="absolute content-[] right-3 top-3 left-3 bg-[#ffffff] md:max-w-[300px] p-1 md:p-4 rounded-md">
                  <span className="text-[#ef7f1a] font-Manrope text-base md:text-lg leading-[21px] font-bold">
                    Revolutionize Your Brand
                  </span>
                  <h4 className="text-[#202122] font-Manrope mb-3 text-2xl   font-bold">
                    Unleash the Strategic Power of Social Media for Success.
                  </h4>
                </div>

                <div className="absolute content-[] left-3 bottom-3 right-3 bg-[#ef7f1a] md:max-w-[300px] p-1 md:p-4 rounded-md">
                  <span className="text-[#ffffff] font-Manrope text-base md:text-lg leading-[21px] font-bold">
                    Navigating the Digital Wave
                  </span>
                  <h4 className="text-[#202122] font-Manrope mb-3 text-2xl   font-bold">
                    Elevate your brand with effective social media marketing.
                  </h4>
                </div>
              </div>
            </div>
            <div
              id="content-div"
              className="flex justify-center items-center text-center md:text-start md:items-start gap-1 md:gap-4 flex-col"
            >
              <span className="text-[#ef7f1a] font-Manrope text-base md:text-lg leading-[21px] font-bold">
                SMM Service
              </span>
              <h4 className="text-[#202122] font-Manrope mb-3 text-2xl md:text-[43.95px] md:leading-[52.74px] font-bold">
                Social Media Marketing FAQs
              </h4>
              <p className="font-Jost text-sm md:text-start leading-[26px] mb-3 font-normal text-[#666666]">
                Explore why both digital and social media marketing are
                essential components for businesses aiming to thrive in the
                online landscape.
              </p>

              {/*  Accordian container */}

              <div className="px-2">
                {accordionData.map((data) => {
                  return (
                    <Accordion
                      key={data.id}
                      title={data.title}
                      content={data.description}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="socialmedia  bg-[#fafafa]">
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
                  src={"/socialmediamarketing/pen.svg"}
                  alt="image"
                  className="h-10 w-10"
                />
              </div>
              <span className=" text-[#000000] font-Manrope text-center md:text-start text-[22px] leading-[33px] font-bold">
                Take the Next Step Towards Success
              </span>
            </div>
            <div className="text-center md:text-start max-w-[500px]">
              <h4 className=" text-[#666666] text-[20px] leading-[36px] font-Jost font-normal  ">
                We can elevate your online presence and achieve your goals
                together.
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

export default Socialmedia;
