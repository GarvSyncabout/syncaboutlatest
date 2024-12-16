import React, { useEffect, useRef, useState } from "react";
import "../Accordion/accordion.css";
function Accordion(props) {
  const [active, setActive] = useState(false);
  const content = useRef(null);
  const [height, setHeight] = useState("0px");

  function toggleAccordion() {
    setActive(!active);
    setHeight(active ? "0px" : `${content.current.scrollHeight}px`);
  }

  return (
    <div className="text-start accordion__section">
      <div
        className={`accordion ${active ? "active" : ""}`}
        onClick={toggleAccordion}
      >
        <p className="font-Manrope text-base md:text-lg font-bold">
          {props.title}
        </p>
        <span
          className="font-Manrope font-bold text-base md:text-lg"
          style={{ marginLeft: "20px" }}
        >
          {active ? "-" : "+"}
        </span>
      </div>
      <div
        ref={content}
        style={{ maxHeight: `${height}` }}
        className="accordion__content font-Jost text-sm md:text-start leading-[26px] mb-3 font-normal text-[#666666]"
      >
        <div
          className="accordion__text"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  );
}

export default Accordion;
