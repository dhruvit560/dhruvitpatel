import React from "react";
import Title from "./../widget/Title";
import Link from "next/link";

const Experience = () => {
  const data = [
    {
      position: "UI Developer",
      company: "Knovator Technologies",
      website: "https://knovator.com/",
      year: "Mar 2021 - Present",
    },
    {
      position: "UI Developer",
      company: "Webmigrates Technologies",
      website: "https://www.webmigrates.com/",
      year: "Aug 2020 - Mar 2021",
    },
    {
      position: "UI Developer",
      company: "Siliconbrain Technosoft LLP",
      website:
        "https://www.linkedin.com/company/siliconbrain-technosoft/?originalSubdomain=in",
      year: "Jan 2020 - Jul 2020",
    },

    {
      position: "UI/UX Designer",
      company: "OptimumBrew Technology LLP",
      website: "https://optimumbrew.com/",
      year: "Nov 2018 - Nov 2019",
    },
  ];
  return (
    <div className="mt-8">
      <Title text="Experience" />
      <div className="grid grid-cols-2 mt-8 experience">
        {data.map((items) => {
          return (
            <div className="flex items-center justify-between p-6 border border-white single-experience">
              <div>
                <h3 className="mb-1 text-xl font-bold">{items.position}</h3>
                <Link
                  href={items.website}
                  target="_blank"
                  className="transition text-light-primary hover:text-white"
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
