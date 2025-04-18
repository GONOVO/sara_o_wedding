import Persons from "@/components/aboutus/persons/Persons";
import Textwithborder from "@/components/aboutus/textwithborder/Textwithborder";
import ImageView from "@/components/imageview/HeroSection";
import React from "react";

function Aboutus() {
  return (
    <div>
      <ImageView imageSrc="/images/aboutushero.jpg" height="100vh" mb="0px" />
      <Textwithborder />
      <Persons />
    </div>
  );
}

export default Aboutus;
