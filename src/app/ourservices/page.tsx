import dynamic from "next/dynamic";
const ImageView = dynamic(() => import("@/components/imageview/HeroSection"));
const Servicesection = dynamic(
  () => import("@/components/ui/servicesection/Servicesection")
);
import InfinityScroll from "@/components/ui/infinityscroll/InfinityScroll";
import { clients } from "@/data/clients";

function page() {
  return (
    <main>
      <ImageView
        imageSrc="/images/ourservices_cover.webp"
        title="OUR SERVICES"
      />
      <div>
        <h2
          className="text-center -mt-8 mb-16 flex gap-4 justify-center font-medium text-xs sm:text-lg px-4 flex-wrap"
          data-aos="fade-up"
        >
          <span>Destination Weddings</span>|
          <span>Corporate & Private Events</span>|<span>Entertainment</span>|
          <span>Hospitality</span>
        </h2>
      </div>
      <Servicesection />
      <div className="pt-16 pb-16 bg-gray-100 my-32">
        <h2 className="text-center md:text-6xl text-4xl  text-uppercase mb-8 font-medium">
          OUR CORPORATE CLIENTS
        </h2>
        <InfinityScroll
          elements={clients.slice(0, 14).map((image) => ({ image }))}
          variant="services"
        />
        <InfinityScroll
          elements={clients.slice(14, 29).map((image) => ({ image }))}
          reverse={true}
          variant="services"
        />
      </div>
    </main>
  );
}

export default page;
