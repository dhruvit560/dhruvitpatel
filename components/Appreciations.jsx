import React from "react";
import Title from "./../widget/Title";
import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

const data = [
  {
    img: "https://picsum.photos/200",
    name: "Dhruvit Patel",
    position: "Web designer",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam quas cumque nesciunt natus, totam error neque ullam vero inventore libero nisi exercitationem accusamus praesentium hic tempore quasi aspernatur magnam corrupti!",
  },
  {
    img: "https://picsum.photos/201",
    name: "Dhruvit Patel",
    position: "Web designer",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam quas cumque nesciunt natus, totam error neque ullam vero inventore libero nisi exercitationem accusamus praesentium hic tempore quasi aspernatur magnam corrupti!",
  },
  {
    img: "https://picsum.photos/202",
    name: "Dhruvit Patel",
    position: "Web designer",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam quas cumque nesciunt natus, totam error neque ullam vero inventore libero nisi exercitationem accusamus praesentium hic tempore quasi aspernatur magnam corrupti!",
  },
  {
    img: "https://picsum.photos/203",
    name: "Dhruvit Patel",
    position: "Web designer",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam quas cumque nesciunt natus, totam error neque ullam vero inventore libero nisi exercitationem accusamus praesentium hic tempore quasi aspernatur magnam corrupti!",
  },
];
const Appreciations = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 6000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mt-10">
      <Title text="Appreciations" />
      <div className="mt-8">
        <Slider {...settings} className="border border-white">
          {data.map((items) => (
            <div className="p-4 border-r border-white -mr-[1px]">
              <div className="flex items-center gap-3">
                <img
                  src={items.img}
                  className="object-cover rounded-full h-14 w-14"
                  alt="Dhruvit Patel"
                />
                <div>
                  <h4 className="font-semibold mb-0.5 text-lg">{items.name}</h4>
                  <p className="text-sm text-light-primary">{items.position}</p>
                </div>
              </div>
              <p className="mt-4 text-sm">{items.review}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Appreciations;
