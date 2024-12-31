import React from "react";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <section>
      <div className="m-auto w-full max-w-7xl ">
        <div
          id="wrapper-container"
          className="flex justify-center h-screen items-center flex-col "
        >
          <img src="/NotFound Section/404-notfound.png" className="h-80" />
          <div className="flex justify-center items-center flex-col gap-3">
            <h1 className="font-Manrope text-xl md:text-[36px] text-center leading-[39px] font-normal text-[#333333]">
              Oops, looks like the page is lost.
            </h1>
            <p className="text-[#333333] text-sm md:text-[22px] text-center leading-[28px] font-Manrope font-normal">
              This is not a fault, just an accident that was not intentional.
            </p>
          </div>
          <div className="mt-5">
            <Link
              className="font-Jost text-sm leading-[24px] text-[#ffffff] bg-[#ef7f1a] hover:bg-[#1d152c]    p-2 md:px-2 md:py-3 rounded-md "
              to={"/"}
            >
              Back To Home Page
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notfound;
