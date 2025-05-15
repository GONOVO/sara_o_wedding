import React from "react";

import dynamic from "next/dynamic";

const Caption = dynamic(() => import("@/components/ui/events/caption/Caption"));
const DynamicGallery = dynamic(
  () => import("@/components/ui/events/dynamicgallry/DynamicGallery")
);
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
const VideoView = dynamic(
  () => import("@/components/ui/events/video_view/VideoView")
);
import eventsImages from "@/data/eventsgallery";
import eventsPortfolio from "@/data/eventsportfolio";

function page() {
  return (
    <>
      <div className="relative">
        <h1
          className="text-3xl sm:text-5xl text-white absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[450px] text-center sm:leading-[60px]"
          data-aos="zoom-in-out"
        >
          exclusive events with elevated design
        </h1>
        <video
          aria-hidden="true"
          className="w-full object-cover h-[494px] lg:h-[805px] transition-opacity duration-500"
          src="/videos/eventshero.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="/images/poster_vid_ev.webp"
        />
      </div>
      <DynamicGallery
        images={eventsImages}
        title="Exclusive brands exceptional execution"
      />
      <Ourvission
        image="/images/events_vission.webp"
        caption="ABOUT ARW AND ALICE WILKES"
        paragraph=" Founded by designer Alice Wilkes, ARW is a London-based    event design and production studio. We create events that combine
              exquisite visual details with flawless planning and execution,
              beautifully capturing the essence of your brand."
      />
      <Caption
        text="We have worked with Alice for both events and creative mailers and
        have been really impressed by all of her work and would highly
        recommend."
        brand="L'Oreal"
      />
      <VideoView
        videoPath="/videos/events.mp4"
        videoPoster="/images/events_poster.webp"
      />
      <EventsPortfolio portfolioData={eventsPortfolio} />
      <Bundlers />
      <Tellusmore />
    </>
  );
}

export default page;
