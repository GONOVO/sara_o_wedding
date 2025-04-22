import Accolades from "@/components/aboutus/accolades/Accolades";
import History from "@/components/aboutus/historycomp/History";
import Norules from "@/components/aboutus/norules/Norules";
import Persons from "@/components/aboutus/persons/Persons";
import Textwithborder from "@/components/aboutus/textwithborder/Textwithborder";
import ImageView from "@/components/imageview/HeroSection";

import persons from "@/data/persons";
import React from "react";

function Aboutus() {
  return (
    <div>
      <ImageView
        imageSrc="/images/galleryport6.jpg"
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
    </div>
  );
}

export default Aboutus;
