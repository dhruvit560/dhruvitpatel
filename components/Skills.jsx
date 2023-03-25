import React, { useEffect } from "react";
import Title from "./../widget/Title";

const Skills = () => {
  return (
    <>
      <div className="mt-16">
        <Title text="My Skills" />

        <div className="flex items-center justify-between w-full mt-6">
          <a href="#" className="skill-text border-font">
            <span>HTML</span>
          </a>
          <a href="#" className="skill-text border-font">
            <span>CSS3</span>
          </a>
          <a href="#" className="skill-text border-font">
            <span>Bootstrap</span>
          </a>
          <a href="#" className="skill-text border-font">
            <span>Tailwind</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Skills;
