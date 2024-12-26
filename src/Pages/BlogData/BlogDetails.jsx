import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "../BlogData/blogdetails.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { SiAnswer } from "react-icons/si";
import { MdDescription } from "react-icons/md";

const BlogDetails = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const Blogs = [
    {
      id: 1,
      heroData: {
        heading: "The Importance of Responsive UI/UX Design Services",
        subHeading:
          "These days every one using mobile and users are now everywhere, accessing information and interacting with brands on a vast array of devices with screens",
      },
      blogData: {
        imgurl: "/blogdetails/designservice.png",

        date: "March 12,2024",
        time: "11:50am",
      },
    },
    {
      id: 2,
      blogData: {
        imgurl: "/blogdetails/softwaredevelopment.png",
        date: "",
        time: "",
      },
      heroData: {
        heading:
          "8 Reasons Why Your Business Needs Custom Software Development Service",
        subHeading:
          "In the fast-paced digital landscape, having the right tools and technologies can make a significant difference in the success of your business.",
      },
    },
    {
      id: 3,
      blogData: {
        imgurl: "/blogdetails/business.png",
        date: "",
        time: "",
      },
      heroData: {
        heading:
          "Why Web Design and Development Is Important for Business in 2024",
        subHeading:
          "In today's digital age, having a strong online presence is non-negotiable for businesses.",
      },
    },
    {
      id: 4,
      heroData: {
        heading: "The Importance of Responsive UI/UX Design Services",
        subHeading:
          "These days every one using mobile and users are now everywhere, accessing information and interacting with brands on a vast array of devices with screens",
      },
      blogData: {
        imgurl: "/blogdetails/designservice.png",
        date: "March 12,2024",
        time: "11:50am",
      },
    },
    {
      id: 5,
      blogData: {
        imgurl: "/blogdetails/softwaredevelopment.png",
        date: "",
        time: "",
      },
      heroData: {
        heading:
          "8 Reasons Why Your Business Needs Custom Software Development Service",
        subHeading:
          "In the fast-paced digital landscape, having the right tools and technologies can make a significant difference in the success of your business.",
      },
    },
    {
      id: 6,
      blogData: {
        imgurl: "/blogdetails/business.png",
        date: "",
        time: "",
      },
      heroData: {
        heading:
          "Why Web Design and Development Is Important for Business in 2024",
        subHeading:
          "In today's digital age, having a strong online presence is non-negotiable for businesses.",
      },
    },
  ];

  const { id } = useParams();
  const blog = Blogs.find((blog) => blog.id === parseInt(id));

  return (
    <section>
      {blog ? (
        <>
          <section className="w-full blogdetail-bg bg-[url('/blog/blog.jpg')] bg-no-repeat bg-cover ">
            <div className="m-auto w-full max-w-7xl">
              <div
                id="blogdetail-wrapper"
                className="gap-3 flex flex-wrap justify-start md:justify-between md:h-[57vh] items-center py-9 px-2 md:p-5"
              >
                <div className="md:max-w-[900px]">
                  <span className="font-Jost text-[#ffffff] uppercase text-base md:text-base leading-[30px] font-normal">
                    {blog.heroData.subHeading}
                  </span>
                  <h2 className="font-Manrope text-xl md:text-[35px] md:leading-[45px]  font-extrabold text-[#ffffff]">
                    {blog.heroData.heading}
                  </h2>
                </div>
                <div>
                  <div className="bg-[#ef7f1a] p-3 md:py-[25px] md:px-[50px] rounded-full">
                    <ul className="flex items-center gap-5">
                      <li className="text-[#fff] text-base hover:text-[#454647] leading-[20px] font-Jost font-medium relative after:content-['\2192'] after:absolute  after:ml-1 after:text-white cursor-pointer">
                        <Link to={"/blogs"}>blogs</Link>
                      </li>
                      <li className="font-Jost text-base leading-5 font-medium text-[#ffffff] cursor-pointer">
                        BlogDetail
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="blogdetail-content-bottom">
              <h1 className="font-Poppins text-2xl md:text-6xl  lg:text-8xl uppercase   lg:leading-[128px] font-bold opacity-20">
                it solution
              </h1>
            </div>
          </section>
          <section>
            <div
              id="main-wrapper"
              className="w-full max-w-7xl m-auto grid grid-cols-[auto_320px] place-content-center place-items-center"
            >
              <div id="blog-detail-container" className="p-2">
                <div id="card-wrapper">
                  <img
                    src={blog.blogData.imgurl}
                    alt="blog image"
                    className="rounded-md"
                  />
                  <div
                    id="time-date-wrapper"
                    className="flex justify-start gap-2 items-start text-start"
                  >
                    <span
                      id="date"
                      className="text-[17px] leading-[30px] font-medium font-Manrope text-[#666666] hover:text-[#ef7f1a] "
                    >
                      &#128197;{blog.blogData.date}
                    </span>
                    <span
                      id="time"
                      className="text-[17px] leading-[30px] font-medium font-Manrope text-[#666666] hover:text-[#ef7f1a] "
                    >
                      &#128340;{blog.blogData.time}
                    </span>
                  </div>
                  <div id="detail-wrapper">
                    <div>
                      <h2 className="font-Jost text-[43px] leading-[52px] font-bold text-[#000000]">
                        The Importance of Responsive UI/UX Design Services
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div id="sidebar">Sidebar</div>
            </div>
          </section>
        </>
      ) : (
        <div>Blogs Details Not Found</div>
      )}
    </section>
  );
};

export default BlogDetails;
