import ImageView from "@/components/imageview/HeroSection";
import Servicesection from "@/components/ui/servicesection/Servicesection";

function page() {
  return (
    <main className="mt-[260px]">
      <ImageView
        imageSrc="/images/ourservices_cover.webp"
        title="OUR SERVICES"
      />
      <div>
        <h2 className="text-center -mt-8 mb-16 flex gap-4 justify-center font-medium text-lg px-4 flex-wrap">
          <span>Weddings</span>|<span>Corporate & Non-Profit</span>|
          <span>Social Events</span>
        </h2>
      </div>
      <Servicesection />
    </main>
  );
}

export default page;
