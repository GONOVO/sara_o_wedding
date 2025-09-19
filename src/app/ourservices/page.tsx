import dynamic from "next/dynamic";
const ImageView = dynamic(() => import("@/components/imageview/HeroSection"));
const Servicesection = dynamic(
  () => import("@/components/ui/servicesection/Servicesection")
);
import InfinityScroll from "@/components/ui/infinityscroll/InfinityScroll";
import { clients } from "@/data/clients";
import Link from "next/link";
import styles from "./packages.module.css";
import Packges from "../../data/packages";
const HugeTitle = dynamic(() => import("@/components/ui/hugetitle/HugeTitle"));
const PackageCard = dynamic(
  () => import("../../components/ui/packagecard/PackageCard")
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
          <span>Destination Weddings</span>|
          <span>Corporate & Private Events</span>|<span>Entertainment</span>|
          <span>Hospitality</span>
        </h2>
      </div>
      <Servicesection />

      {/* Packages Section */}
      <section className="bg-[rgba(244,240,235,1)] pt-10 h-fit">
        <HugeTitle text="PACKAGES" mt="0px" />
        <div className={styles.main_package}>
          <div className={styles.package_grid}>
            {Packges.map((item, index) => (
              <PackageCard
                img={item.coverImg}
                title={item.title}
                list={item.list}
                key={index}
              />
            ))}
          </div>
          <div className={styles.bottom_cont} data-aos="fade-up">
            <h1>Need something Bespoke? Get in touch</h1>
            <Link
              href="/#contactus"
              className="text-white py-2 px-6 bg-black inline-block mx-auto"
            >
              INQUIRE
            </Link>
          </div>
        </div>
      </section>

      <div className="py-28 bg-gray-100">
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
