import React from "react";
import Blog from "@/app/pages/Blog/Blog";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata = {
  title: "Blog List",
  description: "Learn more about our mission and values.",
};

const page = () => {
  return (
    <div>
      <Breadcrumb title={"Blog"} />
      <Blog />
    </div>
  );
};

export default page;
