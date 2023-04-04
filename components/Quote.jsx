import React from "react";
import LineIcon from "./../icons/line";
import DownloadIcon from "@/icons/downloadIcon";
import Link from "next/link";

const Quote = () => {
  return (
    <div className="flex justify-between mt-16">
      <h1 className="text-5xl font-bold leading-tight w-[70%] ">
        Design experience beyond your
        <span className="relative ml-6">
          expectations
          <div className="absolute -left-2 top-6">
            <LineIcon />
          </div>
        </span>
        <br /> <span className="gradient-text">imagination</span> 💭
      </h1>
      <div className="relative flex items-center justify-center">
        <img
          src="./images/download-resume.png"
          className="h-[200px] w-[200px] downloadIcon"
          alt=""
        />
        <Link href="#" className="absolute w-[30px] h-[30px] animate-bounce">
          <DownloadIcon />
        </Link>
      </div>
    </div>
  );
};

export default Quote;
