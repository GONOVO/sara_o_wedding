import React from "react";

import dynamic from "next/dynamic";

const Accolades = dynamic(
  () => import("@/components/aboutus/accolades/Accolades")
);
const Couple = dynamic(() => import("@/components/aboutus/couple/Couple"));
const History = dynamic(
  () => import("@/components/aboutus/historycomp/History")
);
const Norules = dynamic(() => import("@/components/aboutus/norules/Norules"));
const Persons = dynamic(() => import("@/components/aboutus/persons/Persons"));
const Textwithborder = dynamic(
  () => import("@/components/aboutus/textwithborder/Textwithborder")
);
const ImageView = dynamic(() => import("@/components/imageview/HeroSection"));

import persons from "@/data/persons";

function Aboutus() {
  return (
    <div>
      <ImageView
        imageSrc="/images/design_wedding.webp"
        // imageSrc="/images/galleryport6.webp"
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
