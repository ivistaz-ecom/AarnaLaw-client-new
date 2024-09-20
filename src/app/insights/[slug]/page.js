import React from "react";
import Navbar from "@components/Navbar";
import Insights from "./insights";
const page = ({ params }) => {
  return (
    <div>
      <div>
        <Navbar />
        <Insights slug={params.slug} />
      </div>
    </div>
  );
};

export default page;
