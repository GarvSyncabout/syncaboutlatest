import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "../BlogData/blogdetails.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Blogs from "../../Components/Blogs Section/Blogs";

const BlogDetails = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const BlogsData = [
    {
      id: 1,
      remainingBlogs: [
        {
          id: 2,
          imageBlogsUrl: "/blogdetails/softwaredevelopment.png",
          imageBlogHeading:
            "8 Reasons Why Your Business Needs Custom Software Development Service",
          imageBlogDate: "February 7,2024",
          imageBlogButtonTitle: "Read More",
        },
        {
          imageBlogsUrl: "/blogdetails/business.png",
          imageBlogHeading:
            "Why Web Design and Development Is Important for Business in 2024",
          imageBlogDate: "February 7,2024",
          imageBlogButtonTitle: "Read More",
        },
      ],
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
      blogDetails: [
        {
          question: "The Importance of Responsive UI/UX Design Services",
          answer:
            "These days every one using mobile and users are now everywhere, accessing information and interacting with brands on a vast array of devices with screens of all sizes. They’re on laptops, tablets, smartphones, and a plethora of other devices with varying screen sizes. If your website or application isn’t designed to adapt seamlessly to this reality, you’re likely losing out on potential customers and hindering your brand’s success. This is where responsive UI/UX design services from experts like Syncabout Solutions become invaluable.",
        },
        {
          question: "What is Responsive UI/UX Design?",
          answer:
            "Responsive UI/UX design is a web development approach that focuses on creating interfaces that automatically adjust to the user’s screen size, resolution, and device orientation. This means that whether someone is accessing your website from a massive desktop monitor or a pocket-sized smartphone, the design elements, content, and navigation will rearrange themselves to provide the best possible viewing and interaction experience.",
        },
        {
          question: "Why is Responsive Design So Crucial?",
          answer:
            "There are numerous reasons why responsive UI/UX design is non-negotiable in the modern era:",
          points: [
            {
              title: "Enhanced User Experience (UX):",
              content:
                "A positive user experience is the foundation of any successful website or app. Responsive design ensures that your content is easy to read, buttons are easy to tap, and navigation is intuitive regardless of the device being used. This translates to happier users, longer site visits, and increased conversions.",
            },
            {
              title: "Improved Search Engine Optimization (SEO):",
              content:
                "Google and other search engines love responsive websites. They prioritize mobile-friendly sites in search results because they know that’s where the majority of users are. By prioritizing responsive design, you can significantly improve your search rankings.",
            },
            {
              title: "Boosted Brand Perception:",
              content:
                "A website that looks and functions flawlessly across devices conveys professionalism and attention to detail. Responsive design helps you build a strong, trustworthy brand image.",
            },
            {
              title: "Increased Accessibility:",
              content:
                "Responsive design makes your website accessible to a wider audience, including users with disabilities who may use assistive technologies. It helps you meet accessibility guidelines and tap into a broader market.",
            },
            {
              title: "Cost-Effectiveness:",
              content:
                " Rather than developing and maintaining separate versions of your website for different devices, responsive design offers a streamlined solution. This saves development time and money in the long run.",
            },
          ],
        },

        {
          question: "Syncabout Solutions: You’re Partners in Responsive Design",
          answer:
            "At Syncabout Solutions, we understand the critical importance of responsive design for businesses of all sizes. Our talented UI/UX designers and developers possess deep expertise in creating websites and applications that deliver exceptional user experiences across the device spectrum.",
          subAnswer: "Our UI/UX Design Services Include:",
          points: [
            {
              title: "Research and Strategy:",
              content:
                "We deeply analyze your target audience, their needs, and their device preferences, laying the foundation for a tailored responsive design strategy.",
            },
            {
              title: "Responsive Wire framing:",
              content:
                "We create detailed wireframes that demonstrate how your website or app will look and function on various devices.",
            },
            {
              title: "Visually appealing and Intuitive Interface Design: ",
              content:
                " We prioritize aesthetics and usability to ensure a design that both attracts and engages users.",
            },
            {
              title: "Cross-Device Testing: ",
              content:
                "Our rigorous testing ensures that your website or app works perfectly across various browsers, devices, and operating systems.",
            },
            {
              title: "On-going Support and Optimization:",
              content:
                "We offer on-going maintenance and support to help you adapt your responsive design as technologies and user needs evolve.",
            },
          ],
        },

        {
          question: "The Benefits of Choosing Syncabout Solutions",
          points: [
            {
              title: "Proven Track Record:",
              content:
                "We have a strong portfolio of successfully delivered responsive design projects for clients across industries.",
            },
            {
              title: "Customer-Centric Approach:",
              content:
                "We put your users’ needs at the heart of everything we do.",
            },
            {
              title: "Cutting-Edge Technologies:",
              content:
                "We utilize the latest tools and frameworks to deliver the most advanced responsive design solutions.",
            },
          ],
          descriptionOne:
            "In today’s constantly connected world, where internet access is available almost everywhere, ensuring a seamless user experience across all devices is crucial for capturing and retaining the attention of your target audience.",
          descriptionTwo:
            "Responsive UI/UX design ensures that your digital presence adapts seamlessly to any screen size, providing an exceptional user experience that keeps visitors engaged and coming back for more.",
          descriptionThree:
            "Responsive UI/UX design is an essential element for any successful digital strategy. If you want to enhance your online presence, boost customer satisfaction, and achieve your business goals, partnering with Syncabout Solutions is a smart investment. Contact us today to learn more about how our responsive UI/UX design services can power your digital success.",
        },
      ],
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
  const blog = BlogsData.find((blog) => blog.id === parseInt(id));

  return (
    <>
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
              <h1 className="font-Poppins text-2xl md:text-6xl lg:text-8xl uppercase lg:leading-[128px] font-bold opacity-20">
                it solution
              </h1>
            </div>
          </section>
          <section>
            <div
              id="main-wrapper"
              className="w-full max-w-7xl m-auto grid lg:grid-cols-[auto_510px]  place-content-center place-items-start"
            >
              <div id="blog-detail-container" className="p-2">
                <div
                  id="card-wrapper"
                  className=" flex justify-center items-start flex-col gap-2  border-b-[1px] border-[#ef7f1a] border-opacity-40 pb-5 "
                >
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
                      {blog.blogDetails.map((data, index) => {
                        return (
                          <div id={data.question} key={index}>
                            <h2 className="font-Jost text-[43px] leading-[52px] mb-2 font-bold text-[#000000]">
                              {data.question}
                            </h2>
                            <p className="text-[#818181] text-[17px] mb-2 leading-[30px] font-Manrope font-medium">
                              {data.answer}
                            </p>
                            <h2 className="font-Jost text-[33px] leading-[42px] mb-2 font-bold text-[#000000]">
                              {data.subAnswer}
                            </h2>
                            <ul className="ml-5 list-disc text-[#818181]">
                              {data.points?.map((point, index) => {
                                return (
                                  <li key={index} className="mb-3">
                                    <p className="text-[#818181] text-[17px] leading-[30px] font-Manrope font-medium">
                                      <strong>{point.title}</strong>
                                      {point.content}
                                    </p>
                                  </li>
                                );
                              })}
                            </ul>
                            <p className="text-[#818181] text-[17px] mb-2 leading-[30px] font-Manrope font-medium">
                              {data.descriptionOne}
                            </p>
                            <p className="text-[#818181] text-[17px] mb-2 leading-[30px] font-Manrope font-medium">
                              {data.descriptionTwo}
                            </p>
                            <p className="text-[#818181] text-[17px] mb-2 leading-[30px] font-Manrope font-medium">
                              {data.descriptionThree}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center pl-5 pr-5 pt-5">
                  <Link className="font-Manrope text-base leading-5 text-[#000000] hover:text-[#ef7f1a] font-bold relative before:absolute before:content-['\00AB'] before:text-2xl before:font-Manrope before:font-bold before:text-[#000000] before:hover:text-[#ef7f1a] before:-top-2 before:left-0 before:-ml-[14px] ">
                    Prev
                  </Link>
                  <Link className="font-Manrope text-base leading-5 text-[#000000] hover:text-[#ef7f1a] font-bold relative after:absolute after:content-['\00BB'] after:text-2xl after:font-Manrope after:font-bold after:text-[#000000] after:hover:text-[#ef7f1a] after:-top-2 ">
                    Next
                  </Link>
                </div>
              </div>
              <div id="sidebar" className="order-first lg:order-last p-2">
                <div
                  id="related-post"
                  className="border-b-[1px] border-[#8d8d8d] border-opacity-15 mb-4"
                >
                  <h2 className="font-Jost text-2xl uppercase leading-[70px] lg:leading-[90px] font-bold text-[#ef7f1a]  lg:text-4xl">
                    Related Posts
                  </h2>
                  <div>
                    {blog.remainingBlogs?.map((otherBlog, index) => {
                      return (
                        <div
                          key={index}
                          className="flex justify-center items-start gap-2 mb-3 md:mb-4"
                        >
                          <img
                            src={otherBlog.imageBlogsUrl}
                            className="object-cover md:h-[100px] rounded-md"
                            alt="images"
                          />
                          <div className="hidden md:block">
                            <h2 className="text-lg leading-5 font-bold font-Manrope text-[#000000] hover:text-[#ef7f1a]">
                              {otherBlog.imageBlogHeading}
                            </h2>
                            <span className="font-Manrope text-base leading-4 font-medium text-[#adadad]">
                              {otherBlog.imageBlogDate}
                            </span>
                            <div>
                              <Link
                                className="text-Jost hover:text-[#ef7f1a] text-sm relative after:content-['\00BB'] after:absolute after:top-0 after:ml-[2px]   "
                                to={`blogs/${blog.remainingBlogs.id}`}
                              >
                                {otherBlog.imageBlogButtonTitle}
                              </Link>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <table
                  id="table-of-content"
                  className="table-auto border-[1px] border-[#ef7f1a] !rounded-full p-2"
                >
                  <thead className="bg-[#ef7f1a]">
                    <tr>
                      <th className="px-3 py-3 text-left text-base font-medium text-[#fafafa] p-2">
                        Table of Content
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {blog.blogDetails.map((tableDetail, index) => {
                      return (
                        <tr
                          className="list-decimal list-item ml-5 text-[#818181] hover:underline"
                          key={index}
                        >
                          <a href={`#${tableDetail.question}`}>
                            <td className="px-2 py-2 text-left text-base text-[#818181]">
                              {tableDetail.question}
                            </td>
                          </a>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          <section>
            <Blogs />
          </section>
        </>
      ) : (
        <div>Blogs Details Not Found</div>
      )}
    </>
  );
};

export default BlogDetails;
