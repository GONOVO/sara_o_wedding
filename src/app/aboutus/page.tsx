import Accolades from "@/components/aboutus/accolades/Accolades";
import Couple from "@/components/aboutus/couple/Couple";
import History from "@/components/aboutus/historycomp/History";
import Norules from "@/components/aboutus/norules/Norules";
import Persons from "@/components/aboutus/persons/Persons";
import Textwithborder from "@/components/aboutus/textwithborder/Textwithborder";
import ImageView from "@/components/imageview/HeroSection";
import persons from "@/data/persons";
import React from "react";

function Aboutus() {
  return (
    <div className="mt-[263px]">
      <ImageView
        imageSrc="/images/galleryport6.webp"
        height="90vh"
        mb="0px"
        positionY="20%"
      />
      <Textwithborder />
      <Persons data={persons[0]} />
      <Persons data={persons[1]} rev={true} />
      <History />
      <Accolades />
      <Norules />
      <ImageView
        imageSrc="/images/aboutview.webp"
        height="100vh"
        mb="0px"
        title="YOUR GUESTS SHOULD FEEL SPECIAL AND COMFORTABLE ENOUGH TO DANCE ON THE FURNITURE"
      />
      <Couple />
    </div>
  );
}

export default Aboutus;
