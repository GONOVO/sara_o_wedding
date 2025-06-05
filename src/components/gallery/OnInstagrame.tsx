import React from "react";
import styles from "./oninsta.module.css";
import HugeTitle from "../ui/hugetitle/HugeTitle";
import LazyAutoPlayVideo from "../ui/videoplayer/VideoPlayer";
import Image from "next/image";

function Gallery() {
  return (
    <section className="lg:mt-4 mt-8">
      <HugeTitle text="GALLERY" />
      <div className={`${styles.main_grid} -top-10 lg:-top-16 relative`}>
        <div className={styles.row_1_2}>
          <div
            // style={{ backgroundImage: "url(/images/gallery5.webp)" }}
            className={styles.gallery_item}
            data-aos="fade-right"
          >
            <LazyAutoPlayVideo
              // videoPath="/videos/gallery_vid_1.mp4"
              videoPath="/videos/ev_44.mp4"
              placeholderImage="/images/cover_g_v_1.webp"
            />
            <p className="text-white">Corporate</p>
          </div>
          <div className={styles.col_1_1}>
            <div
              data-aos="fade-right"
              className={styles.gallery_item}
              // style={{ backgroundImage: "url(/images/gallery2.webp)" }}
            >
              <Image
                src="/images/h_ev1.webp"
                alt="gallery image"
                fill
                loading="lazy"
                className="object-cover"
              />
              <p> Birthday</p>
            </div>
            <div
              className={styles.gallery_item}
              // style={{ backgroundImage: "url(/images/gallery7.webp)" }}
            >
              <Image
                src="/images/gallery2.webp"
                alt="gallery image"
                fill
                loading="lazy"
                className="object-cover"
              />
              <p>Destinations</p>
            </div>
          </div>
        </div>
        <div className={styles.row_1_1}>
          <div
            data-aos="zoom-out"
            className={styles.gallery_item}
            // style={{ backgroundImage: "url(/images/gallery4.webp)" }}
          >
            <Image
              src="/images/gallery3.webp"
              alt="gallery image"
              fill
              loading="lazy"
              className="object-cover"
            />
            <p style={{ alignItems: "end" }}>Fashion</p>
          </div>
          <div
            data-aos="zoom-out"
            className={styles.gallery_item}
            // style={{ backgroundImage: "url(/images/gallery3.webp)" }}
          >
            <Image
              src="/images/gallery4.webp"
              alt="gallery image"
              fill
              loading="lazy"
              className="object-cover"
            />
            <p>Decoration</p>
          </div>
        </div>
        <div className={styles.row_2_1}>
          <div className={styles.col_1_1}>
            <div
              data-aos="fade-left"
              className={styles.gallery_item}
              // style={{ backgroundImage: "url(/images/gallery6.webp)" }}
            >
              <Image
                src="/images/gallery5.webp"
                alt="gallery image"
                fill
                loading="lazy"
                className="object-cover"
              />
              <p style={{ alignItems: "end" }}>Decoration</p>
            </div>
            <div
              data-aos="fade-left"
              className={styles.gallery_item}
              // style={{ backgroundImage: "url(/images/gallery1.webp)" }}
            >
              <Image
                src="/images/gallery6.webp"
                alt="gallery image"
                fill
                loading="lazy"
                className="object-cover"
              />
              <p style={{ alignItems: "end" }}>Private Events</p>
            </div>
          </div>
          <div data-aos="fade-left" className={styles.gallery_item}>
            <LazyAutoPlayVideo
              videoPath="/videos/gallery_vid_2.mp4"
              placeholderImage="/images/cover_g_v_2.webp"
            />
            <p>Weddings</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
