import dynamic from "next/dynamic";
import Hero from "../components/hero/Hero";
import LazyAutoPlayVideo from "@/components/ui/videoplayer/VideoPlayer";
import InfinityScroll from "@/components/ui/infinityscroll/InfinityScroll";
import { clients } from "@/data/clients";
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
      <div className="lg:pt-56 pb-16 bg-gray-100">
        <h2 className="text-center md:text-6xl text-4xl font-semibold text-uppercase my-2">
          OUR CLIENTS
        </h2>
        <InfinityScroll
          elements={clients.slice(0, 11).map((image) => ({ image }))}
        />
        <InfinityScroll
          elements={clients.slice(11, 22).map((image) => ({ image }))}
          reverse={true}
        />
      </div>
      <LifeTimeEvents />
      <Featured />
      <Productowner />
      <section className="w-full md:h-[90vh] h-[50vh] relative">
        <LazyAutoPlayVideo
          videoPath="/videos/ev_h_44.mp4"
          placeholderImage="/images/vid_h_place1.png"
        />
      </section>
      <Gallery />
      <Contactus />
    </>
  );
}

export default page;
