import Link from "next/link";
import React from "react";

const LinkTag = (href, children) => {
  return (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  );
};

export default LinkTag;
