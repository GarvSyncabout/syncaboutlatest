import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./blog.css";
import { Link } from "react-router-dom";
import client from "../../SanityClient/client";
import imageUrlBuilder from "@sanity/image-url";
import { format } from "date-fns";
const AllBlog = () => {
  const [allPostsData, setAllPosts] = useState([]);

  const builder = imageUrlBuilder(client);
  function urlFor(source) {
    return builder.image(source);
  }

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        categories[] -> {
        title,
        },
        heroSubTitle,
        _id,
      
        comments,
        description,
        buttonTitle,
        body,
        "mainImage": {
    "_type": "image",
    "asset": {
      "_ref": "image-1f997023965892c6d33f329b23c171813f23f81f-1200x720-png",
      "_type": "reference",
    }
      },
   _createdAt
    }`
      )
      .then((data) => {
        setAllPosts(data);
        console.log(allPostsData.map((data) => data.categories));
      })
      .catch(console.error);
  }, []);

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
            {allPostsData &&
              allPostsData.map((blog) => {
                const formattedDate = format(
                  new Date(blog._createdAt),
                  "MMMM dd, yyyy"
                );

                return (
                  <div
                    id="card-wrapper"
                    key={blog._id}
                    className="flex justify-between flex-col items-start shadow-md rounded-md"
                  >
                    <div>
                      <img
                        src={urlFor(blog.mainImage.asset._ref).url()}
                        alt="blog img"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex justify-between items-start text-start flex-col gap-2 p-4">
                      <Link
                        to={"/" + blog.slug.current}
                        key={blog.slug.current}
                        className="font-Manrope text-[21px] capitalize leading-[25px] pb-[10px] font-bold text-[#000000] hover:text-[#ef7f1a]"
                      >
                        {blog.title}
                      </Link>

                      <p className="font-Manrope text-[14px] leading-[21px] font-medium text-[#666666]">
                        {blog.description}
                      </p>
                      <Link
                        className="text-xs leading-[30px] font-bold font-Manrope uppercase text-[#000000] hover:text-[#ef7f1a]"
                        to={`/${blog.slug.current}`}
                      >
                        {blog.buttonTitle} &#187;
                      </Link>
                    </div>
                    <div className="flex justify-start items-center  gap-2 p-4 border-[#adadad] border-t-[1px] border-opacity-20 w-full">
                      <span className="  font-Manrope text-[#adadad] text-[12px] leading-[15px] font-medium">
                        {formattedDate}
                      </span>
                      <span className="font-Manrope text-[#adadad] text-[12px] leading-[15px] font-medium">
                        {`${blog.comments} Comments`}
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

export default AllBlog;
