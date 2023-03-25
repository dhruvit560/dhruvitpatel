import React from "react";
import TitlePattern from "./../icons/title-pattern";

const Title = ({ text }) => {
  return (
    <div className="relative">
      <h2 className="relative z-[1] text-3xl font-bold">{text}</h2>
      <div className="absolute top-6 left-0 w-auto">
        <TitlePattern />
      </div>
    </div>
  );
};

export default Title;
