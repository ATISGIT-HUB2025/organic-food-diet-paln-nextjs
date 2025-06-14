import React from "react";
import Breadcrumb from "@/app/components/Breadcrumb";
import Refund from "@/app/pages/Refund/Refund";

export const metadata = {
  title: "Refund Policy",
  description: "Learn more about our mission and values.",
};

const page = () => {
  return (
    <div>
      <Breadcrumb title={"Refund Policy"} />
      <Refund />
    </div>
  );
};

export default page;
