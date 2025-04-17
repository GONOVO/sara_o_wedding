import Textwithborder from "@/components/aboutus/textwithborder/Textwithborder";
import ImageView from "@/components/imageview/HeroSection";
import React from "react";

function Aboutus() {
  return (
    <div>
      <ImageView imageSrc="/images/aboutushero.jpg" height="100vh" mb="0px" />
      <Textwithborder />
    </div>
  );
}

export default Aboutus;
