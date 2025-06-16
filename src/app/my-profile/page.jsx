import React from "react";
import Breadcrumb from "@/app/components/Breadcrumb";
import MyProfile from "@/app/pages/MyProfile/MyProfile";

export const metadata = {
  title: "My Profile",
  description: "Learn more about our mission and values.",
};

const page = () => {
  return (
    <div>
      <Breadcrumb title={"My Profile"} />
      <MyProfile />
    </div>
  );
};

export default page;
