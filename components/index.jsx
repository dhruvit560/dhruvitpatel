import React, { useRef, useEffect, PureComponent } from "react";
import { gsap, Power2, Power4 } from "gsap";
import TweenMax from "gsap";
import Experience from "./Experience";
import Skills from "./Skills";
import SocialMedia from "./SocialMedia";
import About from "./About";
import Appreciations from "./Appreciations";

const Portfolio = () => {
  useEffect(() => {
    var cursor = document.querySelector(".blob");

    document.addEventListener("mousemove", function (e) {
      var x = e.clientX;
      var y = e.clientY;
      cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
    });
  }, []);

  return (
    <>
      <div className="blob relative z-0" />
      <div className="min-h-screen bg-primary py-10">
        <div className="container">
          <div className="rounded-xl border border-white p-10">
            <About />
            <Experience />
            <Skills />
            <Appreciations />
            <SocialMedia />
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
