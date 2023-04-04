import React, { useEffect, PureComponent } from "react";
import { Power4 } from "gsap";
import TweenMax from "gsap";
import Title from "@/widget/Title";

const About = () => {
  useEffect(() => {
    var magnets = document.querySelectorAll(".magnetic");
    var strength = 20;

    magnets.forEach((magnet) => {
      magnet.addEventListener("mousemove", moveMagnet);
      magnet.addEventListener("mouseout", function (event) {
        TweenMax.to(event.currentTarget, 1, {
          x: 0,
          y: 0,
          ease: Power4.easeOut,
        });
      });
    });

    function moveMagnet(event) {
      var magnetButton = event.currentTarget;
      var bounding = magnetButton.getBoundingClientRect();

      //console.log(magnetButton, bounding)

      TweenMax.to(magnetButton, 1, {
        x:
          ((event.clientX - bounding.left) / magnetButton.offsetWidth - 0.5) *
          strength,
        y:
          ((event.clientY - bounding.top) / magnetButton.offsetHeight - 0.5) *
          strength,
        ease: Power4.easeOut,
      });

      //magnetButton.style.transform = 'translate(' + (((( event.clientX - bounding.left)/(magnetButton.offsetWidth))) - 0.5) * strength + 'px,'+ (((( event.clientY - bounding.top)/(magnetButton.offsetHeight))) - 0.5) * strength + 'px)';
    }

    let button = document.querySelector(".primary-button");
    let item = document.querySelector(".primary-button .round");

    button.addEventListener("mouseenter", function (event) {
      this.classList += " animate";

      let buttonX = event.offsetX;
      let buttonY = event.offsetY;

      if (buttonY < 24) {
        item.style.top = 0 + "px";
      } else if (buttonY > 30) {
        item.style.top = 48 + "px";
      }

      item.style.left = buttonX + "px";
      item.style.width = "1px";
      item.style.height = "1px";
    });

    button.addEventListener("mouseleave", function () {
      this.classList.remove("animate");

      let buttonX = event.offsetX;
      let buttonY = event.offsetY;

      if (buttonY < 24) {
        item.style.top = 0 + "px";
      } else if (buttonY > 30) {
        item.style.top = 48 + "px";
      }
      item.style.left = buttonX + "px";
    });
    var cursor = document.querySelector(".blob");

    document.addEventListener("mousemove", function (e) {
      var x = e.clientX;
      var y = e.clientY;
      cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
    });
  }, []);

  return (
    <>
      <div className="grid grid-cols-12 overflow-hidden border border-white">
        <div className="col-span-4">
          <img
            src="/images/DP.jpg"
            className="object-cover w-full h-full"
            alt="Dhruvit Patel"
          />
        </div>
        <div className="flex items-center col-span-8 p-10">
          <div>
            <h1 className="text-4xl font-bold">
              <span className="text-orange gradient-text">Hello !</span> 👋 I'm
              Dhruvit Patel
            </h1>
            <div className="orange-line mt-2 h-0.5 w-20 bg-orange"></div>
            <p className="mt-4 text-sm">
              As a UI Developer with over 4 years of experience, I have a deep
              understanding of user experience and design principles that help
              create visually appealing and functional websites. I specialize in
              creating responsive designs that adapt to different screen sizes
              and devices to ensure seamless user experiences across all
              platforms.
            </p>
            <div className="mt-5 magnetic">
              <button class="primary-button">
                <div className="btn-text">Let's Connect !</div>
                <span class="round" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Title text="About me" />
        <p className="mt-6 text-xl font-medium leading-loose">
          <span className="pr-16 text-xs font-medium uppercase text-smooth">
            Hello!
          </span>
          My self Dhruvit Patel a professional UI Developer & Product Designer
          with 4+ years of experience in the IT Industry. I have a proven track
          record of success in developing visually stunning user experiences, as
          well as unique, creative, or SEO-friendly websites and web
          applications. My vision has always been straightforward:{" "}
          <span className="text-2xl font-semibold gradient-text">
            WORK WITH PASSION
          </span>{" "}
          to solve real world problems. And today, I've worked on over 100+
          different types of projects, including client-based, product-based,
          and national-level government projects, and continue striving for
          more. I'm still as eager as ever to go the extra mile and take that
          extra step.
        </p>
      </div>
    </>
  );
};

export default About;
