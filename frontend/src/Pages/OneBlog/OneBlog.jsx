import React, { useEffect, useState } from "react";
import client from "../../SanityClient/client";
import BlockContent from "@sanity/block-content-to-react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./blogdetails.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Blogs from "../../Components/Blogs Section/Blogs";
import imageUrlBuilder from "@sanity/image-url";
// import { Link as ScrollLink } from "react-scroll";

const OneBlog = () => {
  const [postData, setPostData] = useState(null);
  const builder = imageUrlBuilder(client);

  function urlFor(source) {
    return builder.image(source);
  }

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == $slug]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
             }
           },
         body,
        "name": author->name,
        "authorImage": author->image
       }`,
        { slug }
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData) return <div>Loading...</div>;

  // const navigation = useNavigate();

  return (
    <>
      {postData ? (
        <>
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
                    src={urlFor(postData.authorImage).width(100).url()}
                    alt="blog image"
                    className="rounded-md"
                  />
                  <div
                    id="time-date-wrapper"
                    className="flex justify-start gap-2 items-start text-start"
                  >
                    {/* <span
                      id="date"
                      className="text-[17px] leading-[30px] font-medium font-Manrope text-[#666666] hover:text-[#ef7f1a] "
                    >
                      &#128197;{blog.blogData.date}
                    </span> */}
                    {/* <span
                      id="time"
                      className="text-[17px] leading-[30px] font-medium font-Manrope text-[#666666] hover:text-[#ef7f1a] "
                    >
                      &#128340;{blog.blogData.time}
                    </span> */}
                  </div>
                  <div id="detail-wrapper">
                    <div>
                      {/* {blog?.blogDetails?.map((data, index) => {
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
                      })} */}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center pl-5 pr-5 pt-5">
                  {/* <button
                    onClick={() => {
                      if (blog.id > 1) {
                        navigation(`/blogs/${blog.id - 1}`);
                      }
                    }}
                    disabled={blog.id === 1}
                    className={`font-Manrope text-base leading-5 text-[#000000] hover:text-[#ef7f1a] font-bold relative ${
                      blog.id === 1 ? "opacity-50 cursor-not-allowed" : ""
                    } before:content-['«'] before:absolute before:text-2xl before:font-Manrope before:font-bold before:text-[#000000] before:hover:text-[#ef7f1a] before:-top-2 before:left-0 before:-ml-[14px]`}
                  >
                    Prev
                  </button> */}

                  {/* <button
                    onClick={() => {
                      if (`blogs/${blog.id}` === `blogs/${blog.id}`) {
                        navigation(`/blogs/${blog.id + 1}`);
                      }
                    }}
                    className="font-Manrope text-base leading-5 text-[#000000] hover:text-[#ef7f1a] font-bold relative after:absolute after:content-['\00BB'] after:text-2xl after:font-Manrope after:font-bold after:text-[#000000] after:hover:text-[#ef7f1a] after:-top-2 "
                  >
                    Next
                  </button> */}
                </div>
              </div>
              {/* <div id="sidebar" className="order-first lg:order-last p-2">
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
                            <Link to={`/blogs/${otherBlog.id}`}>
                              <h2 className="text-lg leading-5 font-bold font-Manrope text-[#000000] hover:text-[#ef7f1a]">
                                {otherBlog.imageBlogHeading}
                              </h2>
                            </Link>
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
                  role="table"
                  className="table-auto border border-[#ef7f1a] rounded-lg p-2 w-full overflow-x-auto"
                >
                  <thead className="bg-[#ef7f1a]">
                    <tr>
                      <th className="px-3 py-3 text-left text-base font-medium text-white">
                        Table of Content
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {blog?.blogDetails?.map((tableDetail, index) => {
                      return (
                        <tr
                          key={index}
                          className="hover:underline text-[#818181]"
                        >
                          <td className="px-2 py-2 text-left text-base">
                            <ScrollLink
                              to={tableDetail.question}
                              smooth={true}
                              duration={1000}
                              offset={-80} // Adjust offset for fixed navbar
                              className="hover:text-[#ef7f1a] focus:text-[#ef7f1a] transition-colors duration-300"
                            >
                              {tableDetail.question}
                            </ScrollLink>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div> */}
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

export default OneBlog;
