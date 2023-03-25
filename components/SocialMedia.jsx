import React, { useEffect } from "react";
import Title from "./../widget/Title";

const SocialMedia = () => {
  return (
    <>
      <div className="mt-16">
        <Title text="Social Media" />

        <div className="flex items-center justify-between w-full mt-6 border border-white p-6">
          <div className="overflow-hidden h-10 single-social-media group">
            <a
              href="https://www.linkedin.com/in/dhruvit-patel07/"
              target="_blank"
              className="text-xl font-bold flex items-center gap-2 transition group-hover:-translate-y-9 "
            >
              <span>Linkedin</span>
              <span className="text-3xl font-medium">{">>"}</span>
            </a>
            <a
              href="https://www.linkedin.com/in/dhruvit-patel07/"
              target="_blank"
              className="text-xl font-bold flex items-center gap-2  transition group-hover:-translate-y-9"
            >
              <span>Linkedin</span>
              <span className="text-3xl font-medium">{">>"}</span>
            </a>
          </div>
          <div className="overflow-hidden h-10 single-social-media group">
            <a
              href="https://www.instagram.com/dhruvit_patel07/"
              target="_blank"
              className="text-xl font-bold flex items-center gap-2 transition group-hover:-translate-y-9 "
            >
              <span>Instagram</span>
              <span className="text-3xl font-medium">{">>"}</span>
            </a>
            <a
              href="https://www.instagram.com/dhruvit_patel07/"
              target="_blank"
              className="text-xl font-bold flex items-center gap-2  transition group-hover:-translate-y-9"
            >
              <span>Instagram</span>
              <span className="text-3xl font-medium">{">>"}</span>
            </a>
          </div>
          <div className="overflow-hidden h-10 single-social-media group">
            <a
              href="https://twitter.com/Dhruvit56073922"
              target="_blank"
              className="text-xl font-bold flex items-center gap-2 transition group-hover:-translate-y-9 "
            >
              <span>Twitter</span>
              <span className="text-3xl font-medium">{">>"}</span>
            </a>
            <a
              href="https://twitter.com/Dhruvit56073922"
              target="_blank"
              className="text-xl font-bold flex items-center gap-2  transition group-hover:-translate-y-9"
            >
              <span>Twitter</span>
              <span className="text-3xl font-medium">{">>"}</span>
            </a>
          </div>
          <div className="overflow-hidden h-10 single-social-media group">
            <a
              href="https://www.facebook.com/dhruvit.patel.31105"
              target="_blank"
              className="text-xl font-bold flex items-center gap-2 transition group-hover:-translate-y-9 "
            >
              <span>Facebook</span>
              <span className="text-3xl font-medium">{">>"}</span>
            </a>
            <a
              href="https://www.facebook.com/dhruvit.patel.31105"
              target="_blank"
              className="text-xl font-bold flex items-center gap-2  transition group-hover:-translate-y-9"
            >
              <span>Facebook</span>
              <span className="text-3xl font-medium">{">>"}</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialMedia;
