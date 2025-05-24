import dynamic from "next/dynamic";
const ImageView = dynamic(() => import("@/components/imageview/HeroSection"));
const Servicesection = dynamic(
  () => import("@/components/ui/servicesection/Servicesection")
);

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
          <span>Weddings</span>|<span>Corporate & Non-Profit</span>|
          <span>Social Events</span>
        </h2>
      </div>
      <Servicesection />
    </main>
  );
}

export default page;
