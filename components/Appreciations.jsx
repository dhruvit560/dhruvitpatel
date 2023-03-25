import React from "react";
import Title from "./../widget/Title";

const Appreciations = () => {
  return (
    <div className="mt-16">
      <Title text="Appreciations" />
      <div className="mt-8 grid grid-cols-2">
        <div className="border border-white p-4 ">
          <div className="flex items-center gap-3">
            <img
              src="https://picsum.photos/200"
              className="h-14 w-14 rounded-full object-cover"
              alt=""
            />
            <div>
              <h4 className="font-semibold mb-0.5 text-lg">John Doe</h4>
              <p className="text-sm text-light-primary">Web designer</p>
            </div>
          </div>
          <p className="text-sm mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
            quas cumque nesciunt natus, totam error neque ullam vero inventore
            libero nisi exercitationem accusamus praesentium hic tempore quasi
            aspernatur magnam corrupti!
          </p>
        </div>
        <div className="border border-white p-4 ">
          <div className="flex items-center gap-3">
            <img
              src="https://picsum.photos/200"
              className="h-14 w-14 rounded-full object-cover"
              alt=""
            />
            <div>
              <h4 className="font-semibold mb-0.5 text-lg">John Doe</h4>
              <p className="text-sm text-light-primary">Web designer</p>
            </div>
          </div>
          <p className="text-sm mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
            quas cumque nesciunt natus, totam error neque ullam vero inventore
            libero nisi exercitationem accusamus praesentium hic tempore quasi
            aspernatur magnam corrupti!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Appreciations;
