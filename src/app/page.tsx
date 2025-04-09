import React from "react";
import Hero from "./components/hero/Hero";
import Planners from "./components/planners/Planners";
import Productowner from "./components/productowner/Productowner";
import Featured from "./components/hero/Featured";

function page() {
  return (
    <>
      <Hero />
      <Planners />
      <Productowner />
      <Featured />
    </>
  );
}

export default page;
