import dynamic from "next/dynamic";
import Hero from "../components/hero/Hero";
import LazyAutoPlayVideo from "@/components/ui/videoplayer/VideoPlayer";
const InfinityScroll=dynamic(()=>import("@/components/ui/infinityscroll/InfinityScroll"));
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
      <div className="pt-16 pb-16 bg-gray-100 mb-16">
        <h2 className="text-center md:text-5xl text-4xl  text-uppercase mb-6">
         JOIN OUR CORPORATE CLIENTS
        </h2>
        <InfinityScroll
          elements={clients.slice(0, 15).map((image) => ({ image }))}
        />
        <InfinityScroll
          elements={clients.slice(15, 30).map((image) => ({ image }))}
          reverse={true}
        />
      </div>
      <Contactus />
    </>
  );
}

export default page;
