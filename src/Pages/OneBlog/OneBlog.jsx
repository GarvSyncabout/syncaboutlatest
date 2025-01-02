import React, { useEffect, useState } from "react";
import client from "../../SanityClient/client";
import { PortableText } from "@portabletext/react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./oneblog.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Blogs from "../../Components/Blogs Section/Blogs";
import imageUrlBuilder from "@sanity/image-url";
import moment from "moment";
import { format } from "date-fns";

const OneBlog = () => {
  const [relatedData, setRelatedData] = useState(null);
  const [postData, setPostData] = useState(null);
  const builder = imageUrlBuilder(client);
  const navigate = useNavigate();

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
         mainImage{
              asset->{
                _id,
                url
               }
             },
     _createdAt
      }`
      )
      .then((data) => {
        setRelatedData(data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == $slug]{
          _id,
          title,
          slug,
        categories[]->{
        title,
        },
          heroSubTitle,
          mainImage{
            asset->{
              _id,
              url
             }
           },
         body,
        "name": author->name,
        "authorImage": author->image,
        _createdAt,
        'toc': body[style == 'h3']{
       'text': children[0].text,
       'key' : children[0]._key
        } 
       }`,
        { slug }
      )
      .then((data) => {
        setPostData(data[0]);
      })
      .catch(console.error);
  }, [slug]);

  if (!postData)
    return (
      <div className="text-5xl h-[600px] text-[#000000] text-center">
        LOADING...
      </div>
    );

  const components = {
    listItem: {
      bullet: ({ children }) => (
        <li className="ml-7 mb-4 text-[#818181] list-disc">{children}</li>
      ),
    },

    block: {
      h2: ({ children }) => (
        <h2 className="font-Jost text-2xl  md:text-[43px] md:leading-[52px] mb-2 font-bold text-[#000000]">
          {children}
        </h2>
      ),
      h3: ({ children }) => (
        <h3 className="font-Jost text-2xl md:text-[41px] md:leading-[40px] mb-2 font-bold text-[#000000]">
          {children}
        </h3>
      ),
      h4: ({ children }) => (
        <h4 className="font-Jost text-xl md:text-[30px] md:leading-[40px] mb-2 font-bold text-[#000000]">
          {children}
        </h4>
      ),
      p: ({ children }) => (
        <p className="text-[#818181] text-[17px] text-justify mb-2 leading-[30px] font-Manrope font-medium">
          {children}
        </p>
      ),
      customHeading: ({ children }) => (
        <h2 className="text-lg text-primary text-purple-700">{children}</h2>
      ),
    },
    marks: {
      link: ({ children }) => {
        return (
          <a
            className="cursor-pointer text-blue-950"
            onClick={() => {
              navigate(`/seo-service`);
            }}
          >
            {children}
          </a>
        );
      },
    },
  };

  return (
    <>
      {postData ? (
        <>
          <section className="w-full blogdetail-bg bg-[url('/blog/blog.jpg')] bg-no-repeat bg-cover">
            <div className="m-auto w-full max-w-7xl">
              <div
                id="blogdetail-wrapper"
                className="gap-3 flex flex-wrap justify-start md:justify-between md:h-[57vh] items-center py-9 px-2 md:p-5"
              >
                <div className="md:max-w-[900px]">
                  <div className="flex justify-start items-start gap-2 mb-2">
                    <div className="flex items-center flex-row justify-center gap-1">
                      <img
                        src="/blogdetails/user.svg"
                        alt="image"
                        className="h-4 w-4"
                      />
                      <span className=" font-Jost text-[#ffffff] capitalize text-base md:text-base leading-[30px] font-bold">
                        {postData.name}
                      </span>
                    </div>
                    <div className="flex items-center flex-row justify-center gap-1">
                      <img
                        src="blogdetails/tag.svg"
                        alt="image"
                        className="h-4 w-4"
                      />
                      {postData.categories.map((category, index) => {
                        return (
                          <span
                            id="category"
                            className="font-Jost text-[#ffffff] capitalize text-base md:text-base leading-[30px] font-bold"
                            key={index}
                          >
                            {category.title}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                  <span className="font-Jost text-[#ffffff] uppercase text-base md:text-base leading-[30px] font-normal mb-2">
                    {postData.heroSubTitle}
                  </span>
                  <h2 className="font-Manrope text-xl md:text-[35px] md:leading-[45px]  font-extrabold text-[#ffffff] mb-2">
                    {postData.title}
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
              className="w-full max-w-7xl m-auto grid lg:grid-cols-[auto_410px]  place-content-between md:place-items-stretch"
            >
              <div id="blog-detail-container" className="p-2">
                <div
                  id="card-wrapper"
                  className=" flex justify-center items-start flex-col gap-2  border-b-[1px] border-[#ef7f1a] border-opacity-40 pb-5 "
                >
                  <img
                    src={urlFor(postData.mainImage.asset.url).url()}
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
                      &#128197;
                      {moment(postData._createdAt).format("LL")}
                    </span>
                    <span
                      id="time"
                      className="text-[17px] leading-[30px] font-medium font-Manrope text-[#666666] hover:text-[#ef7f1a] "
                    >
                      &#128337;
                      {moment(postData._createdAt).format("LT")}
                    </span>
                  </div>

                  <PortableText value={postData.body} components={components} />
                </div>
                <div className="flex justify-between items-center pl-5 pr-5 pt-5">
                  <button
                    onClick={() => {
                      if (postData.slug > 1) {
                        navigate(`/blogs/${postData.slug - 1}`);
                      }
                    }}
                    disabled={postData.id === 1}
                    className={`font-Manrope text-base leading-5 text-[#000000] hover:text-[#ef7f1a] font-bold relative ${
                      postData.id === 1 ? "opacity-50 cursor-not-allowed" : ""
                    } before:content-['«'] before:absolute before:text-2xl before:font-Manrope before:font-bold before:text-[#000000] before:hover:text-[#ef7f1a] before:-top-2 before:left-0 before:-ml-[14px]`}
                  >
                    Prev
                  </button>

                  <button
                    onClick={() => {
                      if (`blogs/${postData.id}` === `blogs/${postData.id}`) {
                        navigate(`/blogs/${postData.id + 1}`);
                      }
                    }}
                    className="font-Manrope text-base leading-5 text-[#000000] hover:text-[#ef7f1a] font-bold relative after:absolute after:content-['\00BB'] after:text-2xl after:font-Manrope after:font-bold after:text-[#000000] after:hover:text-[#ef7f1a] after:-top-2 "
                  >
                    Next
                  </button>
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

                  {relatedData
                    ? relatedData.map((relatedPost) => {
                        const formattedDate = format(
                          new Date(relatedPost._createdAt),
                          "MMMM dd, yyyy"
                        );
                        return (
                          <div key={relatedPost._id}>
                            <Link
                              className="text-Jost text-sm"
                              to={"/" + relatedPost.slug.current}
                              key={relatedPost.slug.current}
                            >
                              <div
                                id="card-wrapper"
                                className="flex justify-center items-start gap-2 mb-3 md:mb-4 "
                              >
                                <img
                                  src={urlFor(
                                    relatedPost.mainImage.asset.url
                                  ).url()}
                                  className="object-cover md:h-[100px] rounded-md"
                                  alt="images"
                                />

                                <div className="hidden md:block">
                                  <Link
                                    to={"/" + relatedPost.slug.current}
                                    key={relatedPost.slug.current}
                                  >
                                    <h2 className="text-[14px] text-wrap leading-5 font-bold font-Manrope text-[#000000] hover:text-[#ef7f1a]">
                                      {relatedPost.title}
                                    </h2>
                                  </Link>
                                  <span className="font-Manrope text-sm leading-4 font-medium text-[#adadad]">
                                    {formattedDate}
                                  </span>
                                  <div>
                                    <Link
                                      className="text-Jost hover:text-[#ef7f1a] text-xs relative after:content-['\00BB'] after:absolute after:top-0 after:ml-[2px]   "
                                      to={"/" + relatedPost.slug.current}
                                      key={relatedPost.slug.current}
                                    >
                                      ReadMore
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </div>
                        );
                      })
                    : "No Related Post Available"}
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
                    {postData?.toc?.map((toc) => {
                      return (
                        <tr
                          key={toc.text}
                          className="hover:underline text-[#818181]"
                        >
                          <td className="px-2 py-2 text-left text-base">
                            <a
                              href={`#${toc.text}`}
                              className="hover:text-[#ef7f1a] cursor-pointer focus:text-[#ef7f1a] transition-colors duration-300"
                            >
                              {toc.text}
                            </a>
                          </td>
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

export default OneBlog;
