import React from "react";
import LazyAutoPlayVideo from "../../videoplayer/VideoPlayer";

function VideoView({
  videoPath,
  videoPoster,
}: {
  videoPath: string;
  videoPoster: string;
}) {
  return (
    <section className="w-full md:h-[80vh] h-[50vh] relative">
      <div className="absolute inset-0">
        <LazyAutoPlayVideo
          videoPath={videoPath}
          placeholderImage={videoPoster}
          //   objectPosition="top"
        />
      </div>
    </section>
  );
}

export default VideoView;
