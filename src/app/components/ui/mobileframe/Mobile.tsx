import "./mobile.css";

import LazyAutoPlayVideo from "../videoplayer/VideoPlayer";

interface IMobileframe {
  video: string;
  fallback: string;
}

function MobileFrame({ video, /*image,*/ fallback }: IMobileframe) {
  return (
    <div className="mobile_container">
      <div className="specker_notch">
        <p className="speker_ele"></p>
        <p className="camera_ele"></p>
      </div>
      <p className="button left_top_btn"></p>
      <p className="button left_avarage_btn"></p>
      <p className="button left_bottom_btn"></p>
      <p className="button right_btn"></p>
      <div className="mobile_content">
        <LazyAutoPlayVideo videoPath={video} placeholderImage={fallback} />
      </div>
    </div>
  );
}

export default MobileFrame;
