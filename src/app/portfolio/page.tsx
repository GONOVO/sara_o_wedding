import InfinityScroll from "@/components/infinityscroll/InfinityScroll";
import GalleryPortfolio from "@/components/portfoliogallery/GalleryPortfolio";
import HugeTitle from "@/components/ui/hugetitle/HugeTitle";
import portfolio from "@/data/portfolio";

function page() {
  return (
    <>
      <section className="scroll-container relative bg-[rgba(244,240,235,1)]   block py-4 mt-[260px]">
        <HugeTitle text="PORTFOLIO" fontPercentage={0.9} />
        <InfinityScroll elements={portfolio} />
      </section>
      <GalleryPortfolio />
    </>
  );
}

export default page;
