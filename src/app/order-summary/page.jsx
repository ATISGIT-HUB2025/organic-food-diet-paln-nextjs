import React from "react";
import Breadcrumb from "@/app/components/Breadcrumb";
import OrderSummary from "@/app/pages/OrderSummary/OrderSummary";

export const metadata = {
  title: "Order Summary",
  description: "Learn more about our mission and values.",
};

const page = () => {
  return (
    <div>
      <Breadcrumb title={"Order Summary"} />
      <OrderSummary />
    </div>
  );
};

export default page;
