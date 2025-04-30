import dynamic from "next/dynamic";
import Hero from "../components/hero/Hero";
const Planners = dynamic(() => import("../components/planners/Planners"));
const Productowner = dynamic(
  () => import("../components/productowner/Productowner")
);
const Featured = dynamic(() => import("../components/featured/Featured"));
const LifeTimeEvents = dynamic(
  () => import("../components/lifetimesevent/LifeTimeEvents")
);
const ImageView = dynamic(() => import("../components/imageview/HeroSection"));
const Gallery = dynamic(() => import("../components/gallery/OnInstagrame"));
const Contactus = dynamic(() => import("../components/contactus/Contactus"));

function page() {
  return (
    <>
      <Hero />
      <Planners />
      <LifeTimeEvents />
      <Featured />
      <Productowner />
      <ImageView imageSrc="/images/view1.webp" />
      <Gallery />
      <Contactus />
    </>
  );
}

export default page;
