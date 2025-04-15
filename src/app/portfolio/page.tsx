import React from "react";
import InfinityScroll from "../components/infinityscroll/InfinityScroll";
import portfolio from "@/data/portfolio";
import HugeTitle from "../components/ui/hugetitle/HugeTitle";
import GalleryPortfolio from "../components/portfoliogallery/GalleryPortfolio";

function page() {
  return (
    <>
      <section className="scroll-container relative bg-[var(--gold-color)]   block py-4">
        <HugeTitle text="PORTFOLIO" color="#FFF" fontPercentage={0.9} />

        <InfinityScroll elements={portfolio} />
      </section>
      <GalleryPortfolio />
    </>
  );
}

export default page;
