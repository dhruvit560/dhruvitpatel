import React from "react";
import Title from "./../widget/Title";
import Link from "next/link";

const Experience = () => {
  const data = [
    {
      position: "UI/UX Designer",
      company: "OptimumBrew Technology LLP",
      website: "https://optimumbrew.com/",
      year: "Nov 2018 - Nov 2019",
    },
    {
      position: "UI Developer",
      company: "Siliconbrain Technosoft LLP",
      website:
        "https://www.linkedin.com/company/siliconbrain-technosoft/?originalSubdomain=in",
      year: "Jan 2020 - Jul 2020",
    },
    {
      position: "UI Developer",
      company: "Webmigrates Technologies",
      website: "https://www.webmigrates.com/",
      year: "Aug 2020 - Mar 2021",
    },
    {
      position: "UI Developer",
      company: "Knovator Technologies",
      website: "https://knovator.com/",
      year: "Mar 2021 - Present",
    },
  ];
  return (
    <div className="mt-16">
      <Title text="Experience" />
      <div className="mt-10 grid grid-cols-2">
        {data.map((items) => {
          return (
            <div className="border border-white p-6 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-1">{items.position}</h3>
                <Link
                  href={items.website}
                  target="_blank"
                  className="text-light-primary hover:text-white transition"
                >
                  {items.company}
                </Link>
              </div>
              <p className="text-sm">{items.year}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
