import React from "react";
import Hero from "./components/hero/Hero";
import Planners from "./components/planners/Planners";
import Productowner from "./components/productowner/Productowner";

function page() {
  return (
    <>
      <Hero />
      <Planners />
      <Productowner />
    </>
  );
}

export default page;
