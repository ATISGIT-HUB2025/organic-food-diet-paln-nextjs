import React from "react";
import Breadcrumb from "@/app/components/Breadcrumb";
import FreeNutrition from "@/app/pages/FreeNutrition/FreeNutrition";

export const metadata = {
  title: "Free Nutrition and Diet Consultation",
  description: "Learn more about our mission and values.",
};

const page = () => {
  return (
    <div>
      <Breadcrumb title={"Free Nutrition and Diet Consultation"} />
      <FreeNutrition />
    </div>
  );
};

export default page;
