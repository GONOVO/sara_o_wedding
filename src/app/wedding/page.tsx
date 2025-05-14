import DynamicGallery from "@/components/ui/events/dynamicgallry/DynamicGallery";
import Ourvission from "@/components/ui/events/ourvission/Ourvission";
import galleryPortfolio from "@/data/gallerrypotfolio";

import React from "react";

function Wedding() {
  return (
    <>
      <div className="relative">
        <h1 className="text-3xl sm:text-7xl text-white absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[1024px] w-full text-center sm:leading-[80px]">
          marrying breathtaking design with unparalleled planning
        </h1>
        <video
          aria-hidden="true"
          className="w-full object-cover h-[494px] lg:h-[805px] transition-opacity duration-500"
          src="/videos/wedding_hero_vid.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="/images/wedding_hero_poster.webp"
        />
      </div>
      <DynamicGallery
        images={galleryPortfolio.map((person) => person.allImages[1])}
        title="WORLD CLASS
WEDDINGS & EVENTS"
      />
      <Ourvission
        image="/images/vission_wedding.webp"
        caption="A full wedding planning service for creative, design-led couples"
        paragraph="Alice Wilkes Design offers full-service luxury wedding planning and design, working with couples who want to push the boundaries of what’s possible with weddings. Based in London, we plan, design and manage exclusive celebrations in the UK, Europe and across the world. Alice Wilkes Design’s signature style is a wedding that fuses exceptional design with impeccable detail."
      />
    </>
  );
}

export default Wedding;
