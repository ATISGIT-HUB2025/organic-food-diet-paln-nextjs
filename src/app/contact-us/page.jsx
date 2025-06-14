import React from "react";
import Contact from "@/app/pages/Contact/Contact";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata = {
  title: "Contact Us",
  description: "Learn more about our mission and values.",
};

const page = () => {
  return (
    <div>
      <Breadcrumb title={"Contact Us"} />
      <Contact />
    </div>
  );
};

export default page;
