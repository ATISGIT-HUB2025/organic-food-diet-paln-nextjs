import React from "react";
import AboutUs from "@/app/pages/AboutUs/AboutUs";

export const metadata = {
  title: "About Us ",
  description: "Learn more about our mission and values.",
};

const page = () => {
  return (
    <div>
      <AboutUs />
    </div>
  );
};

export default page;
