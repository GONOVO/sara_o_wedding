import React from "react";

import dynamic from "next/dynamic";

const Caption = dynamic(() => import("@/components/ui/events/caption/Caption"));
// const DynamicGallery = dynamic(
//   () => import("@/components/ui/events/dynamicgallry/DynamicGallery")
// );
const Ourvission = dynamic(
  () => import("@/components/ui/events/ourvission/Ourvission")
);
const Bundlers = dynamic(
  () => import("@/components/ui/events/popular_bundles/Bundlers")
);
const EventsPortfolio = dynamic(
  () => import("@/components/ui/events/portfolio/EventsPortfolio")
);
const Tellusmore = dynamic(
  () => import("@/components/ui/events/tellusmore/Tellusmore")
);

import eventsPortfolio from "@/data/eventsportfolio";
import bundlesEvents from "@/data/eventBundles";
import ImageView from "@/components/imageview/HeroSection";

function page() {
  return (
    <>
      <div className="relative">
        <video
          aria-hidden="true"
          className="w-full object-cover h-[494px] lg:h-[805px] transition-opacity duration-500"
          src="/videos/events.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="/images/poster_vid_ev.webp"
        />
      </div>

      <Ourvission
        image="/images/events_vission.webp"
        caption="ABOUT SARA O EVENTS AND YEWANDE RWANG-DUNG"
        paragraph=" Founded by visionary designer and co-founder Yewande Rwang-Dung, Sara O Events is a premier full-service event planning and design studio specializing in modern, personalized celebrations for private clients worldwide. With a sharp eye for luxury details and a passion for transforming spaces, Yewande crafts immersive experiences that reflect each client’s unique vision. Every event is meticulously executed through her proven system of seamless planning, an extensive network of trusted vendors, and an unwavering commitment to excellence in every detail."
      />
      <Caption
        text="We have worked with Yewande for both events and creative projects, and we’ve been consistently impressed by her exceptional work. Her attention to detail, creativity, and professionalism make her an absolute pleasure to collaborate with. We couldn’t recommend her more highly."
        brand="KEYSTONE CORPORATE"
      />
      <ImageView
        // imageSrc="/images/design_wedding.webp"
        imageSrc="/images/f_ev4.webp"
        height="90vh"
        mb="0px"
        positionY="20%"
      />
      {/* <VideoView
        videoPath="/videos/events.mp4"
        videoPoster="/images/events_poster.webp"
      /> */}
      <EventsPortfolio portfolioData={eventsPortfolio} />
      <Bundlers bundles={bundlesEvents} />
      <Tellusmore
        video="/videos/ev_vid2.mp4"
        posterVideo="/images/events_poster.webp"
      />
    </>
  );
}

export default page;
