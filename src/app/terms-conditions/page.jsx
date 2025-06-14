import React from "react";
import Breadcrumb from "@/app/components/Breadcrumb";
import Terms from "@/app/pages/Terms/Terms";

export const metadata = {
  title: "Terms & Conditions",
  description: "Learn more about our mission and values.",
};

const page = () => {
  return (
    <div>
      <Breadcrumb title={"Terms & Conditions"} />
      <Terms />
    </div>
  );
};

export default page;
