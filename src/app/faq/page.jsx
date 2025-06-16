import React from "react";
import Breadcrumb from "@/app/components/Breadcrumb";
import Faq from "@/app/pages/FAQ/Faq";

export const metadata = {
  title: "Frequently Asked Questions",
  description: "Learn more about our mission and values.",
};

const page = () => {
  return (
    <div>
      <Breadcrumb title={"Faq's"} />
      <Faq />
    </div>
  );
};

export default page;
