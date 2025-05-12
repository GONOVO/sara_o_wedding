import React from "react";
import LazyAutoPlayVideo from "../../videoplayer/VideoPlayer";

function VideoView() {
  return (
    <section className="w-full md:h-[90vh] h-[50vh] relative">
      <div className="absolute inset-0">
        <LazyAutoPlayVideo
          videoPath="/videos/events.mp4"
          placeholderImage="/images/events_poster.webp"
          //   objectPosition="top"
        />
      </div>
    </section>
  );
}

export default VideoView;
