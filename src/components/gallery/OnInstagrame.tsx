import React from "react";
import styles from "./oninsta.module.css";
import HugeTitle from "../ui/hugetitle/HugeTitle";
import LazyAutoPlayVideo from "../ui/videoplayer/VideoPlayer";
import Image from "next/image";
import Link from "next/link";

function Gallery() {
  return (
    <section className="lg:mt-4 mt-8">
      <HugeTitle text="GALLERY" />
      <div className={`${styles.main_grid} -top-10 lg:-top-16 relative`}>
        <div className={styles.row_1_2}>
          <Link href="/portfolio">
            <div className={styles.gallery_item} data-aos="fade-right">
              <LazyAutoPlayVideo
                videoPath="/videos/vvvv.mp4"
                placeholderImage="https://onnxbbbfkidlh7fg.public.blob.vercel-storage.com/sara-o-events/vf_4.webp"
              />
              <p className="text-white">Conferences/Summits</p>
            </div>
          </Link>
          <div className={styles.col_1_1}>
            <div data-aos="fade-right" className={styles.gallery_item}>
              <Link href="/portfolio">
                <Image
                  src="https://onnxbbbfkidlh7fg.public.blob.vercel-storage.com/sara-o-events/h_ev1.webp"
                  alt="gallery image"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={85}
                  loading="lazy"
                  className="object-cover"
                />
                <p>Birthday</p>
              </Link>
            </div>
            <div className={styles.gallery_item}>
              <Link href="/portfolio">
                <Image
                  src="https://onnxbbbfkidlh7fg.public.blob.vercel-storage.com/sara-o-events/gallery2.webp"
                  alt="gallery image"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={85}
                  loading="lazy"
                  className="object-cover"
                />
                <p>Destinations</p>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.row_1_1}>
          <div data-aos="zoom-out" className={styles.gallery_item}>
            <Link href="/portfolio">
              <Image
                src="https://onnxbbbfkidlh7fg.public.blob.vercel-storage.com/sara-o-events/gallery3.webp"
                alt="gallery image"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
                loading="lazy"
                className="object-cover"
              />
              <p style={{ alignItems: "end" }}>Fashion</p>
            </Link>
          </div>
          <div data-aos="zoom-out" className={styles.gallery_item}>
            <Link href="/portfolio">
              <Image
                src="https://onnxbbbfkidlh7fg.public.blob.vercel-storage.com/sara-o-events/gallery4.webp"
                alt="gallery image"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
                loading="lazy"
                className="object-cover"
              />
              <p>Decoration</p>
            </Link>
          </div>
        </div>
        <div className={styles.row_2_1}>
          <div className={styles.col_1_1}>
            <div data-aos="fade-left" className={styles.gallery_item}>
              <Link href="/portfolio">
                <LazyAutoPlayVideo
                  videoPath="/videos/m222.mp4"
                  placeholderImage="https://onnxbbbfkidlh7fg.public.blob.vercel-storage.com/sara-o-events/vf_5.webp"
                />
                <p style={{ alignItems: "end" }}>Private Events</p>
              </Link>
            </div>
            <div data-aos="fade-left" className={styles.gallery_item}>
              <Link href="/portfolio">
                <Image
                  src="https://onnxbbbfkidlh7fg.public.blob.vercel-storage.com/sara-o-events/gallery6.webp"
                  alt="gallery image"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={85}
                  loading="lazy"
                  className="object-cover"
                />
                <p style={{ alignItems: "end" }}>Corporate</p>
              </Link>
            </div>
          </div>
          <div data-aos="fade-left" className={styles.gallery_item}>
            <Link href="/portfolio">
              <LazyAutoPlayVideo
                videoPath="/videos/homeP_1.mp4"
                placeholderImage="https://onnxbbbfkidlh7fg.public.blob.vercel-storage.com/sara-o-events/vf_6.webp"
              />
              <p>Weddings</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
