import Accolades from "@/components/aboutus/accolades/Accolades";
import History from "@/components/aboutus/historycomp/History";
import Persons from "@/components/aboutus/persons/Persons";
import Textwithborder from "@/components/aboutus/textwithborder/Textwithborder";
import ImageView from "@/components/imageview/HeroSection";

import persons from "@/data/persons";
import React from "react";

function Aboutus() {
  return (
    <div>
      <ImageView imageSrc="/images/aboutushero.jpg" height="90vh" mb="0px" />
      <Textwithborder />
      <Persons data={persons[0]} />
      <Persons data={persons[1]} rev={true} />
      <History />
      <Accolades />
    </div>
  );
}

export default Aboutus;
