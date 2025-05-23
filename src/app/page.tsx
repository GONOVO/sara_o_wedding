import dynamic from "next/dynamic";
import Hero from "../components/hero/Hero";
import LazyAutoPlayVideo from "@/components/ui/videoplayer/VideoPlayer";

const Productowner = dynamic(
  () => import("../components/productowner/Productowner")
);
const Featured = dynamic(() => import("../components/featured/Featured"));
const LifeTimeEvents = dynamic(
  () => import("../components/lifetimesevent/LifeTimeEvents")
);
const Gallery = dynamic(() => import("../components/gallery/OnInstagrame"));
const Contactus = dynamic(() => import("../components/contactus/Contactus"));

function page() {
  return (
    <>
      <Hero />
      {/* <Planners /> */}
      <LifeTimeEvents />
      <Featured />
      <Productowner />
      <section className="w-full md:h-[90vh] h-[50vh] relative">
        <LazyAutoPlayVideo
          videoPath="/videos/ev_h_44.mp4"
          placeholderImage="/images/Key_4.jpg"
        />
      </section>
      <Gallery />
      <Contactus />
    </>
  );
}

export default page;
