import React from "react";
import Breadcrumb from "@/app/components/Breadcrumb";
import MelaPlan from "@/app/pages/MelaPlan/MelaPlan";

export const metadata = {
  title: "Meal Plans",
  description: "Learn more about our mission and values.",
};

const page = () => {
  return (
    <div>
      <Breadcrumb title={"Meal Plan"} />
      <MelaPlan />
    </div>
  );
};

export default page;
