import Caption from "@/components/ui/events/caption/Caption";
import DynamicGallery from "@/components/ui/events/dynamicgallry/DynamicGallery";
import Ourvission from "@/components/ui/events/ourvission/Ourvission";
import Bundlers from "@/components/ui/events/popular_bundles/Bundlers";
import EventsPortfolio from "@/components/ui/events/portfolio/EventsPortfolio";
import Tellusmore from "@/components/ui/events/tellusmore/Tellusmore";
import VideoView from "@/components/ui/events/video_view/VideoView";

import eventsImages from "@/data/eventsgallery";

import React from "react";

function page() {
  return (
    <>
      <div className="relative">
        <h1 className="text-3xl sm:text-5xl text-white absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[450px] text-center sm:leading-[60px]">
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
      <Caption />
      <VideoView />
      <EventsPortfolio />
      <Bundlers />
      <Tellusmore />
    </>
  );
}

export default page;
