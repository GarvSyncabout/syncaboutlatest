import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Blogs/blog.css";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogCards = [
    {
      id: "1",
      imgUrl: "/blog/designservice.png",
      date: "March 12, 2024",
      comments: "0 Comment",
      heading: "The Importance of Responsive UI/UX Design Services",
      description:
        "These days every one using mobile and users are now everywhere, accessing information and interacting with brands on a vast",
      buttonTitle: "Read More",
    },
    {
      id: "2",
      imgUrl: "/blog/softwaredevelopment.png",
      date: "February 7, 2024",
      comments: "0 Comment",
      heading:
        "8 Reasons Why Your Business Needs Custom Software Development Service",
      description:
        "In the fast-paced digital landscape, having the right tools and technologies can make a significant difference in the success of",
      buttonTitle: "Read More",
    },
    {
      id: "3",
      imgUrl: "/blog/business.png",
      date: "February 7, 2024",
      comments: "0 Comment",
      heading:
        "Why Web Design and Development Is Important for Business in 2024",
      description:
        "In today’s digital age, having a strong online presence is non-negotiable for businesses.",
      buttonTitle: "Read More",
    },
    {
      id: "4",
      imgUrl: "/blog/designservice.png",
      date: "March 12, 2024",
      comments: "0 Comment",
      heading: "The Importance of Responsive UI/UX Design Services",
      description:
        "These days every one using mobile and users are now everywhere, accessing information and interacting with brands on a vast",
      buttonTitle: "Read More",
    },
    {
      id: "5",
      imgUrl: "/blog/softwaredevelopment.png",
      date: "February 7, 2024",
      comments: "0 Comment",
      heading:
        "8 Reasons Why Your Business Needs Custom Software Development Service",
      description:
        "In the fast-paced digital landscape, having the right tools and technologies can make a significant difference in the success of",
      buttonTitle: "Read More",
    },
    {
      id: "6",
      imgUrl: "/blog/business.png",
      date: "February 7, 2024",
      comments: "0 Comment",
      heading:
        "Why Web Design and Development Is Important for Business in 2024",
      description:
        "In today’s digital age, having a strong online presence is non-negotiable for businesses.",
      buttonTitle: "Read More",
    },
  ];

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <section className="w-full blog-bg bg-[url('/blog/blog.jpg')] bg-no-repeat bg-cover ">
        <div className="m-auto w-full max-w-7xl">
          {/* About section hero page */}

          <div
            id="seoservices-wrapper"
            className="gap-3 flex flex-wrap justify-start md:justify-between md:h-[57vh] items-center py-9 px-2 md:p-5"
          >
            <div>
              <span className="font-Jost text-[#ffffff] uppercase text-base md:text-lg leading-[30px] tracking-[5px] font-normal">
                Great tips & suggestions
              </span>
              <h2 className="font-Manrope text-3xl md:text-[60px] md:leading-[88px] font-extrabold text-[#ffffff]">
                Blogs
              </h2>
            </div>
            <div>
              <div className="bg-[#ef7f1a] p-3 md:py-[25px] md:px-[50px] rounded-full">
                <ul className="flex items-center gap-5">
                  <li className="text-[#fff] text-base hover:text-[#454647] leading-[20px] font-Jost font-medium relative after:content-['\2192'] after:absolute  after:ml-1 after:text-white cursor-pointer">
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li className="font-Jost text-base leading-5 font-medium text-[#ffffff] cursor-pointer">
                    Blogs
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-content-bottom">
          <h1 className="font-Poppins text-2xl md:text-6xl  lg:text-8xl uppercase   lg:leading-[128px] font-bold opacity-20">
            it solution
          </h1>
        </div>
      </section>

      <section className="py-10">
        <div
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-once="false"
          className="max-w-7xl m-auto"
        >
          <div className="grid md:grid-cols-3 gap-4 px-2">
            {blogCards.map((card) => {
              return (
                <div
                  id="card-wrapper"
                  key={card.id}
                  className="flex justify-between flex-col items-start shadow-md rounded-md"
                >
                  <div>
                    <img
                      src={card.imgUrl}
                      alt="blog img"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex justify-between items-start text-start flex-col gap-2 p-4">
                    <Link
                      to={`/blogs/${card.id}`}
                      className="font-Manrope text-[21px] capitalize leading-[25px] pb-[10px] font-bold text-[#000000] hover:text-[#ef7f1a]"
                    >
                      {card.heading}
                    </Link>
                    <p className="font-Manrope text-[14px] leading-[21px] font-medium text-[#666666]">
                      {card.description}
                    </p>
                    <Link
                      className="text-xs leading-[30px] font-bold font-Manrope uppercase text-[#000000] hover:text-[#ef7f1a]"
                      to={"/blogs"}
                    >
                      Read More &#187;
                    </Link>
                  </div>
                  <div className="flex justify-start items-center  gap-2 p-4 border-[#adadad] border-t-[1px] border-opacity-20 w-full">
                    <span className="  font-Manrope text-[#adadad] text-[12px] leading-[15px] font-medium">
                      {card.date}
                    </span>
                    <span className="font-Manrope text-[#adadad] text-[12px] leading-[15px] font-medium">
                      {card.comments}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
