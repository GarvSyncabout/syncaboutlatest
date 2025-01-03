import React from "react";
import { Link } from "react-router-dom";
import "../ContactUs/contactus.css";

const ContactUs = () => {
  const contactDetails = [
    {
      id: "1",
      iconImageUrl: "/contactus/callIcon.svg",
      title: "Contact Phone",
      description: "+91 93160 16153",
    },
    {
      id: "2",
      iconImageUrl: "/contactus/mailIcon.svg",
      title: "Contact Email",
      description: "connect@syncaboutconsultancy.com",
    },
    {
      id: "3",
      iconImageUrl: "/contactus/locationIcon.svg",
      title: "Contact Location",
      description:
        "1020 Sun Gravitas, Near Shyamal Cross Road,Radio Mirchi Road, Ahmedabad -380015 Gujarat, IN.",
    },
    {
      id: "4",
      iconImageUrl: "/contactus/timingIcon.svg",
      title: "Office Timing",
      workingDays: "Monday-Friday",
      WorkingHours: "10:00 AM to 7:00 PM",
    },
  ];

  return (
    <>
      <section className="w-full contactus-bg bg-[url('/contactus/contactus.jpg')] bg-no-repeat bg-cover ">
        <div className="m-auto w-full max-w-7xl">
          <div
            id="contactus-wrapper"
            className="gap-3 flex flex-wrap justify-start md:justify-between md:h-[57vh] items-center py-9 px-2 md:p-5"
          >
            <div>
              <span className="font-Jost text-[#ffffff] uppercase text-base md:text-lg leading-[30px] tracking-[5px] font-normal">
                We Are Available
              </span>
              <h2 className="font-Manrope text-3xl md:text-[60px] md:leading-[88px] font-extrabold text-[#ffffff]">
                ContactUs
              </h2>
            </div>
            <div>
              <div className="bg-[#ef7f1a] p-3 md:py-[25px] md:px-[50px] rounded-full">
                <ul className="flex items-center gap-5">
                  <li className="text-[#fff] text-base hover:text-[#454647] leading-[20px] font-Jost font-medium relative after:content-['\2192'] after:absolute  after:ml-1 after:text-white cursor-pointer">
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li className="font-Jost text-base leading-5 font-medium text-[#ffffff] cursor-pointer">
                    ContactUs
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="contactus-content-bottom">
          <h1 className="font-Poppins text-2xl md:text-6xl  lg:text-8xl uppercase   lg:leading-[128px] font-bold opacity-20">
            it solution
          </h1>
        </div>
      </section>
      <section>
        <div className="w-full max-w-7xl m-auto grid md:grid-cols-3 px-3 py-[80px]">
          <div
            id="content-div"
            className="flex justify-center items-center flex-col col-span-2"
          >
            <div className="mb-[20px] md:mb-[50px]">
              <p className="font-jost text-center md:text-left text-[16px] uppercase leading-[26px] font-normal text-[#ef7f1a]">
                Our Clients
              </p>
              <h2 className="font-Manrope text-center text-balance md:text-left text-2xl md:text-[60px] md:leading-[78px] font-extrabold text-[#202122] ">
                Our creative design solutions are for people, Contact Our
                Office.
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {contactDetails.map((details) => {
                return (
                  <div
                    key={details.id}
                    className="flex justify-start items-center gap-2"
                  >
                    <div className="bg-[#fafafa] rounded-full p-2">
                      <img
                        src={details.iconImageUrl}
                        className="h-10"
                        alt="Icons"
                      />
                    </div>
                    <div className="flex justify-center items-start flex-col">
                      <span className="text-[#666666] font-Jost text-[14px] leading-[26px] font-normal">
                        {details.title}
                      </span>
                      <span className="text-[#202122] text-[16px] text-wrap font-Manrope leading-[30px] font-extrabold">
                        {details.description}
                      </span>
                      <span className="text-[#202122] text-[16px] font-Manrope leading-[30px] font-extrabold">
                        {details.workingDays}
                      </span>
                      <span className="text-[#202122] text-[16px] font-Manrope leading-[30px] font-extrabold">
                        {details.WorkingHours}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div id="form-div" className="bg-[#fafafa]">
            <form className="flex justify-center gap-3 flex-col items-center ">
              <div>
                <h2 className="font-Manrope text-[24px] leading-[31px] font-extrabold text-[#202122]">
                  Get In Touch
                </h2>
              </div>
              <div>
                <input
                  className="outline-none bg-[#fafafa] border-b-[1px] border-opacity-20 pb-2 border-[#8d8d8d] font-Manrope text-sm leading-[26px] font-semibold text-[#202122]"
                  type="text"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <input
                  className="outline-none bg-[#fafafa] border-b-[1px] border-opacity-20 pb-2 border-[#8d8d8d] font-Manrope text-sm leading-[26px] font-semibold text-[#202122]"
                  type="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <input
                  className="outline-none bg-[#fafafa] border-b-[1px] border-opacity-20 pb-2 border-[#8d8d8d] font-Manrope text-sm leading-[26px] font-semibold text-[#202122]"
                  type="tel"
                  placeholder="Phone Number"
                  required
                />
              </div>
              <div>
                <textarea
                  className="outline-none resize-none  bg-[#fafafa] border-b-[1px] border-opacity-20 pb-2 border-[#8d8d8d] font-Manrope text-sm leading-[26px] font-semibold text-[#202122]"
                  placeholder="Your Message"
                  required
                  maxLength={80}
                />
              </div>
              <div className="bg-[#ef7f1a] p-3 md:px-7 md:py-5 hover:bg-[#fafafa] hover:shadow-inner rounded-full text-[#fafafa] hover:text-[#202122]">
                <button
                  className="font-Jost text-center text-base leading-5 font-medium "
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235030.5969873228!2d72.24252818671872!3d23.010804800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85c93ed0327d%3A0x8caedc46bf8b9f24!2sSyncabout%20Business%20Solutions%20Private%20Limited!5e0!3m2!1sen!2sin!4v1735901148033!5m2!1sen!2sin"
          width="100%"
          height="600"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
};

export default ContactUs;
