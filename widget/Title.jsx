import React from "react";
import TitlePattern from "../icons/titlePattern";

const Title = ({ text }) => {
  return (
    <div className="relative">
      <h2 className="relative z-[1] text-3xl font-bold">{text}</h2>
      <div className="absolute left-0 w-auto top-6">
        <TitlePattern />
      </div>
    </div>
  );
};

export default Title;
