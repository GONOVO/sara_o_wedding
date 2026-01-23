import Slider from "@/components/slider/Slider";
const GalleryPortfolio = dynamic(
  () => import("@/components/portfoliogallery/GalleryPortfolio")
);
import HugeTitle from "@/components/ui/hugetitle/HugeTitle";
import weddingPortfolio from "@/data/weddingPortfolio";

import dynamic from "next/dynamic";
import galleryPortfolio from "@/data/gallerrypotfolio";
function page() {
  return (
    <>
      <section className="scroll-container relative bg-[rgba(244,240,235,1)]   block py-4">
        <HugeTitle text="PORTFOLIO" fontPercentage={0.9} />
        <Slider elements={weddingPortfolio} />
      </section>
      <GalleryPortfolio galleryPortfolio={galleryPortfolio} />
    </>
  );
}

export default page;
