import Slider from "@/components/slider/Slider";
const GalleryPortfolio = dynamic(
  () => import("@/components/portfoliogallery/GalleryPortfolio")
);
import HugeTitle from "@/components/ui/hugetitle/HugeTitle";
import nationalPortfolio from "@/data/nationalPortfolio";
import galleryNationalPortfolio from "@/data/galleryNationalPortfolio";
import dynamic from "next/dynamic";

function page() {
  return (
    <>
      <section className="scroll-container relative bg-[rgba(244,240,235,1)]   block py-4">
        <HugeTitle text="PORTFOLIO" fontPercentage={0.9} />
        <Slider elements={nationalPortfolio} />
      </section>
      <GalleryPortfolio
        galleryPortfolio={galleryNationalPortfolio}
        baseRoute="national-couple"
      />
    </>
  );
}

export default page;
