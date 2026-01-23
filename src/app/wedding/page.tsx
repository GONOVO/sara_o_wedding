import React from "react";
import dynamic from "next/dynamic";

const Caption = dynamic(() => import("@/components/ui/events/caption/Caption"));
const Ourvission = dynamic(
  () => import("@/components/ui/events/ourvission/Ourvission")
);
const EventsPortfolio = dynamic(
  () => import("@/components/ui/events/portfolio/EventsPortfolio")
);
const VideoView = dynamic(
  () => import("@/components/ui/events/video_view/VideoView")
);
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
          imageSrc="https://onnxbbbfkidlh7fg.public.blob.vercel-storage.com/sara-o-events/wedding_Page/wedding_hero.webp"
          height="90vh"
          mb="0px"
          positionY="20%"
        />
      </div>

      <Ourvission
        image="https://onnxbbbfkidlh7fg.public.blob.vercel-storage.com/sara-o-events/Dv_5.webp"
        caption="CREATING YOUR DREAM WEDDING, ANYWHERE IN THE WORLD"
        paragraph="Sara O Events offers full-service luxury wedding planning and design, working with couples who want to create unforgettable celebrations. Led by Yewande Rwang-Dung, we plan, design and manage exclusive destination weddings across the world - from romantic beach ceremonies to elegant castle receptions. Sara O Events' signature style brings exceptional design and impeccable detail to every wedding, creating magical moments that transform your special day into extraordinary memories."
      />
      <Caption
        text="It felt like an absolute fairytale from start to finish."
        brand="IFE & HAZEL"
      />
      <VideoView
        videoPath="/videos/wedding_hero_vid.mp4"
        videoPoster="https://onnxbbbfkidlh7fg.public.blob.vercel-storage.com/sara-o-events/wedding_Page/wedding_hero_poster.webp"
      />
      <EventsPortfolio portfolioData={weddingsPortfolio} />
      <Bundlers bundles={weddingBundles} />
      <Tellusmore
        video="/videos/wedd_vid_1.mp4"
        posterVideo="https://onnxbbbfkidlh7fg.public.blob.vercel-storage.com/sara-o-events/wedding_tell_poster.webp"
      />
    </>
  );
}

export default Wedding;
