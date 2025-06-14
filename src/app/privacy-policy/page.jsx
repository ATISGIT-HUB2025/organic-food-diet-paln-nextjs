import React from "react";
import Breadcrumb from "@/app/components/Breadcrumb";
import Privacy from "@/app/pages/Privacy/Privacy";

export const metadata = {
  title: "Privacy Policy",
  description: "Learn more about our mission and values.",
};

const page = () => {
  return (
    <div>
      <Breadcrumb title={"Privacy Policy"} />
      <Privacy />
    </div>
  );
};

export default page;
