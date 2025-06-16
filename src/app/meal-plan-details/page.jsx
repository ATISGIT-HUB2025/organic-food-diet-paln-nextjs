import React from "react";
import Breadcrumb from "@/app/components/Breadcrumb";
import MelaPlanDetails from "@/app/pages/MelaPlanDetails/MelaPlanDetails";

export const metadata = {
  title: "Meal Plans Details",
  description: "Learn more about our mission and values.",
};

const page = () => {
  return (
    <div>
      <Breadcrumb title={"Meal Plan Details"} />
      <MelaPlanDetails />
    </div>
  );
};

export default page;
