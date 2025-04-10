import React from "react";
import Hero from "./components/hero/Hero";
import Planners from "./components/planners/Planners";
import Productowner from "./components/productowner/Productowner";
import Featured from "./components/featured/Featured";
import LifeTimeEvents from "./components/lifetimesevent/LifeTimeEvents";
import ImageView from "./components/imageview/HeroSection";

function page() {
  return (
    <>
      <Hero />
      <Planners />
      <LifeTimeEvents />
      <Featured />
      <Productowner />
      <ImageView />
    </>
  );
}

export default page;
