import Breadcrumb from "@/app/components/Breadcrumb";
import React from "react";
import About from "../Hero/About";
import Counter from "./Counter";
import Mission from "./Mission";
import Testimonials from "../Testimonils/Testimonials";
import Blog from "../Blog/Blog";

const AboutUs = () => {
  return (
    <>
      <Breadcrumb title={"About Us"} />
      <About />
      <Counter />
      <Mission />
      <Testimonials />
      <Blog limit={3} />
    </>
  );
};

export default AboutUs;
