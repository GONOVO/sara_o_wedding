import React from "react";
import styles from "./oninsta.module.css";
import HugeTitle from "../ui/hugetitle/HugeTitle";
import LazyAutoPlayVideo from "../ui/videoplayer/VideoPlayer";
import Image from "next/image";

function Gallery() {
  // const weLoveText =
  //   "We love a girl who knows what she wants, and for #MariahCarey it’s an emerald-cut engagement ring. 👏 Find out what she did with each sparkler—including the 35-carat diamond worth $10 million from ex-fiancé James Packerv. 💍";
  // const asWeWalk =
  //   "As you walk down the aisle, elegance meets simplicity. Soft textured florals grow from moss puddles, and a wild lace floral pillar rises gracefully, echoing the iconic stone arach. Every detail, from tactile walls to blooms in the soft sunlight,creates an ethereal journey to the alter. Florals beautifully curated by our member @filmandfoliage";
  return (
    <section className="lg:mt-4 mt-8">
      <HugeTitle text="GALLERY" />
      <div className={`${styles.main_grid} -top-10 lg:-top-32 relative`}>
        <div className={styles.row_1_2}>
          <div
            // style={{ backgroundImage: "url(/images/gallery5.webp)" }}
            className={styles.gallery_item}
            data-aos="fade-right"
          >
            <LazyAutoPlayVideo videoPath="/videos/gallery_vid_1.mp4" />
            {/* <p>{weLoveText}</p> */}
          </div>
          <div className={styles.col_1_1}>
            <div
              data-aos="fade-right"
              className={styles.gallery_item}
              // style={{ backgroundImage: "url(/images/gallery2.webp)" }}
            >
              <Image
                src="/images/gallery1.webp"
                alt="gallery image"
                fill
                loading="lazy"
                className="object-cover"
              />
              {/* <p>{asWeWalk}</p> */}
            </div>
            <div
              className={styles.gallery_item}
              // style={{ backgroundImage: "url(/images/gallery7.webp)" }}
            >
              <Image
                src="/images/gallery2.JPG"
                alt="gallery image"
                fill
                loading="lazy"
                className="object-cover"
              />
              {/* <p>{asWeWalk}</p> */}
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
              src="/images/gallery3.JPG"
              alt="gallery image"
              fill
              loading="lazy"
              className="object-cover"
            />
            {/* <p>{weLoveText}</p> */}
          </div>
          <div
            data-aos="zoom-out"
            className={styles.gallery_item}
            // style={{ backgroundImage: "url(/images/gallery3.webp)" }}
          >
            <Image
              src="/images/gallery4.JPG"
              alt="gallery image"
              fill
              loading="lazy"
              className="object-cover"
            />
            {/* <p>{asWeWalk}</p> */}
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
                src="/images/gallery5.JPG"
                alt="gallery image"
                fill
                loading="lazy"
                className="object-cover"
              />
              {/* <p>{asWeWalk}</p> */}
            </div>
            <div
              data-aos="fade-left"
              className={styles.gallery_item}
              // style={{ backgroundImage: "url(/images/gallery1.webp)" }}
            >
              <Image
                src="/images/gallery6.JPG"
                alt="gallery image"
                fill
                loading="lazy"
                className="object-cover"
              />
              {/* <p>{weLoveText}</p> */}
            </div>
          </div>
          <div data-aos="fade-left" className={styles.gallery_item}>
            <LazyAutoPlayVideo videoPath="/videos/gallery_vid_2.mp4" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
