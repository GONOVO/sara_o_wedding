import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./lifetime.module.css";
// import LazyAutoPlayVideo from "../ui/videoplayer/VideoPlayer";
function LifeTimeEvents() {
  return (
    <section className="overflow-x-hidden">
      <div className="max-w-[1280px] mx-auto mt-24 mb-12 grid lg:grid-cols-[1.1fr_0.9fr] grid-cols-1 gap-1">
        <div className="xl:ps-2 ps-4 px-4 order-1 lg:order-0">
          <h1
            className={`lg:text-[86px]  text-[42px] leading-[42px] text-[#222222] font-normal lg:text-end  lg:leading-[100px] mb-8 ${styles.main_Title}`}
            data-aos="fade-right"
          >
            <span className="sm:hidden">
              <span className="ms-[5%] text-[10.2vw]">Once</span>
              <br />
              <span className="text-[10vw] mt-4 block">
                in a lifetime events
              </span>
            </span>
            <span className="sm:block hidden">Once in a lifetime events</span>
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:max-w-full max-w-[430px]">
            <div>
              <p className="text-sm leading-6" data-aos="fade-right">
                SARA O Events sets the platinum standard for weddings and events
                across the globe. Renowned for our visionary approach and
                impeccable execution, we curate extraordinary celebrations by
                collaborating with the world’s most talented artisans,
                transforming dreams into breathtaking realities. With an
                artist’s eye and a perfectionist’s touch, we craft moments that
                don’t just happen, but live on forever.
              </p>
              <Link
                href="/ourservices"
                className="inline-block my-6  border-2 py-2 px-8 tracking-[3px]text-xs nunito_font hover:bg-black hover:text-white"
                data-aos="fade-right"
              >
                OUR SERVICES
              </Link>
            </div>
            <div
              className={`w-full h-[45vh] relative ${styles.smImage} lg:block hidden`}
              data-aos="fade-left"
            >
              {/* <Image
                // src="/images/reallife1.webp"
                src="/images/reallife3.webp"
                alt="reallife"
                fill
                className="object-cover"
                style={{ boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}
                loading="lazy"
              /> */}
              <video
                aria-hidden="true"
                className="w-full object-cover absolute h-full transition-opacity duration-500 "
                src="/videos/homeP_1.mp4"
                autoPlay={true}
                loop
                muted
                playsInline
                poster="/images/events_poster.webp"
              />
            </div>
          </div>
        </div>
        <div
          className={`xl:w-full w-[86%] mx-auto lg:mx-0 lg:w-[97%] lg:mr-auto h-[100vh] relative ${styles.lgImage}`}
          data-aos="fade-left"
        >
          <Image
            // src="/images/reallife3.webp"
            src="/images/bu1.jpg"
            alt="real life"
            fill
            className="object-cover"
            style={{ boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}
            loading="lazy"
          />
          <div className="bg-white p-2 absolute h-[210px] -right-[5%] transition-opacity duration-500 sm:hidden block -bottom-[50px] w-[70%]">
            <video
              aria-hidden="true"
              className="object-cover w-full h-full"
              src="/videos/homeP_1.mp4"
              autoPlay={true}
              loop
              muted
              playsInline
              poster="/images/events_poster.webp"
            />
          </div>
          {/* <LazyAutoPlayVideo /> */}
        </div>
      </div>
    </section>
  );
}

export default LifeTimeEvents;
