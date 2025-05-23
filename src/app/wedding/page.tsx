import React from "react";
import dynamic from "next/dynamic";

const Caption = dynamic(() => import("@/components/ui/events/caption/Caption"));
// const DynamicGallery = dynamic(
//   () => import("@/components/ui/events/dynamicgallry/DynamicGallery")
// );
const Ourvission = dynamic(
  () => import("@/components/ui/events/ourvission/Ourvission")
);
const EventsPortfolio = dynamic(
  () => import("@/components/ui/events/portfolio/EventsPortfolio")
);
const VideoView = dynamic(
  () => import("@/components/ui/events/video_view/VideoView")
);
// import galleryPortfolio from "@/data/gallerrypotfolio";
import weddingsPortfolio from "@/data/weddingPortfoliosec";
import Bundlers from "@/components/ui/events/popular_bundles/Bundlers";
import Tellusmore from "@/components/ui/events/tellusmore/Tellusmore";
import weddingBundles from "@/data/weddingBundles";
import ImageView from "@/components/imageview/HeroSection";

function Wedding() {
  return (
    <>
      <div className="relative">
        <ImageView
          imageSrc="/images/galleryport6.webp"
          height="90vh"
          mb="0px"
          positionY="20%"
        />
      </div>

      <Ourvission
        image="/images/vission_wedding.webp"
        caption="CREATING YOUR DREAM WEDDING, ANYWHERE IN THE WORLD"
        paragraph="Sara O Events offers full-service luxury wedding planning and design, working with couples who want to create unforgettable celebrations. Led by Yewande Rwang-Dung, we plan, design and manage exclusive destination weddings across the world - from romantic beach ceremonies to elegant castle receptions. Sara O Events' signature style brings exceptional design and impeccable detail to every wedding, creating magical moments that transform your special day into extraordinary memories."
      />
      <Caption
        text="It felt like an absolute fairytale from start to finish."
        brand="CHIDERA & YINKA"
      />
      <VideoView
        videoPath="/videos/wedding_hero_vid.mp4"
        videoPoster="/images/wedding_hero_poster.webp"
      />
      <EventsPortfolio portfolioData={weddingsPortfolio} />
      <Bundlers bundles={weddingBundles} />
      <Tellusmore
        video="/videos/wedding_tell_video.mp4"
        posterVideo="/images/wedding_tell_poster.webp"
      />
    </>
  );
}

export default Wedding;
