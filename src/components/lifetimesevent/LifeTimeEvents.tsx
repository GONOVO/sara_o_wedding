import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./lifetime.module.css";
// import LazyAutoPlayVideo from "../ui/videoplayer/VideoPlayer";
function LifeTimeEvents() {
  return (
    <section className="max-w-[1280px] mx-auto mt-24 mb-12 grid lg:grid-cols-[1.1fr_0.9fr] grid-cols-1 gap-1">
      <div className="xl:ps-2 ps-4 px-4 order-1 lg:order-0">
        <h1
          className={`lg:text-[86px]  text-[42px] leading-[42px] text-[#222222] font-normal lg:text-end  lg:leading-[100px] mb-8 ${styles.main_Title}`}
        >
          Once in a lifetime events
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:max-w-full max-w-[430px]">
          <div>
            <p className="text-sm leading-6">
              SARA O Events sets the platinum standard for weddings and events
              across the globe. Renowned for our visionary approach and
              impeccable execution, we curate extraordinary celebrations by
              collaborating with the world’s most talented artisans,
              transforming dreams into breathtaking realities. With an artist’s
              eye and a perfectionist’s touch, we craft moments that don’t just
              happen, but live on forever.
            </p>
            <Link
              href="/ourservices"
              className="inline-block my-6  border-2 py-2 px-8 tracking-[3px]text-xs nunito_font hover:bg-black hover:text-white"
            >
              OUR SERVICES
            </Link>
          </div>
          <div className={`w-full h-[45vh] relative ${styles.smImage}`}>
            <Image
              src="/images/reallife1.JPG"
              alt="reallife"
              fill
              className="object-cover"
              style={{ boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div
        className={`xl:w-full w-[92%] mx-auto lg:mx-0 lg:w-[97%] lg:mr-auto h-[100vh] relative ${styles.lgImage}`}
      >
        <Image
          src="/images/reallife3.JPG"
          alt="real life"
          fill
          className="object-cover"
          style={{ boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}
          loading="lazy"
        />
        {/* <LazyAutoPlayVideo /> */}
      </div>
    </section>
  );
}

export default LifeTimeEvents;
