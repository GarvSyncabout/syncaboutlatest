import React, { useState, useEffect } from "react";
import "../ScrollToTop Section/scrolltop.css";
import { FaArrowCircleUp } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const ScrollToTop = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  return (
    <div
      data-aos="fade"
      data-aos-delay="50"
      data-aos-duration="1000"
      className={isSticky ? "scrollToTop" : "Hiiden"}
    >
      <FaArrowCircleUp
        cursor={"pointer"}
        color="#ef7f1a"
        size={"2em"}
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      />
    </div>
  );
};

export default ScrollToTop;
