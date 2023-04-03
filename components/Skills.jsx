import React, { useEffect } from "react";
import Title from "./../widget/Title";
import Marquee from "react-fast-marquee";

const Skills = () => {
  const language = [
    {
      name: "HTML",
    },
    {
      name: "CSS",
    },
    {
      name: "SCSS/LESS",
    },
    {
      name: "Tailwindcss",
    },
    {
      name: "Bootstrap",
    },
    {
      name: "Java script",
    },
    {
      name: "React.js",
    },
    {
      name: "Next.js",
    },
  ];
  return (
    <>
      <div className="mt-10">
        <Title text="My Skills" />

        <div className="relative flex items-center justify-between w-full mt-8">
          <Marquee speed={80} gradient={false} className="scroll-hidden">
            {language.map((items, i) => {
              return (
                <p className="skill-text border-font mx-14">
                  <span>{items.name}</span>
                </p>
              );
            })}
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default Skills;
