import DynamicGallery from "@/components/ui/events/DynamicGallery";
import LazyAutoPlayVideo from "@/components/ui/videoplayer/VideoPlayer";
import eventsImages from "@/data/eventsgallery";

import React from "react";

function page() {
  return (
    <>
      <div className="relative">
        <h1 className="text-3xl sm:text-5xl text-white absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[450px] text-center sm:leading-[60px]">
          exclusive events with elevated design
        </h1>
        <LazyAutoPlayVideo
          videoPath="/videos/eventshero.mp4"
          placeholderImage="/images/eventsplaceholder.webp"
        />
      </div>
      <DynamicGallery images={eventsImages} />
    </>
  );
}

export default page;
