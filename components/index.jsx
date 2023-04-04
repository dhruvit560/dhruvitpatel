import React, { useRef, useEffect, PureComponent } from "react";
// import { gsap, Power2, Power4 } from "gsap";
// import TweenMax from "gsap";
import Experience from "./Experience";
import Skills from "./Skills";
import SocialMedia from "./SocialMedia";
import About from "./About";
import Appreciations from "./Appreciations";
import Quote from "./Quote";

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
      <div className="blob" />
      <div className="relative min-h-screen py-10">
        <div className="container">
          <div className="p-10 border border-white rounded-xl">
            {/* <div className="flex items-center justify-between">
              <p>Logo</p>
              <div className="flex">
                <div className="px-3 py-2 border border-white bg-primary">
                  About Us
                </div>
                <div className="px-3 py-2 border border-white bg-primary">
                  About Us
                </div>
                <div className="px-3 py-2 border border-white bg-primary">
                  About Us
                </div>
              </div>
            </div> */}

            <About />
            <Experience />
            <Skills />
            <Appreciations />
            <SocialMedia />
            <Quote />
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
