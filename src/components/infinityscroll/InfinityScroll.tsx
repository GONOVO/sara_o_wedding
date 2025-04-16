"use client";
import React, { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./Infinityscroll.module.css";

import Image from "next/image";

function InfinityScroll({ elements }: { elements: string[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Detect when the section is in the viewport
  const { ref, inView } = useInView({
    threshold: 0.1, // Triggers when 10% of the section is visible
    triggerOnce: false, // Keeps tracking
  });

  useEffect(() => {
    if (!inView) return; // Only update when in view

    const updateActiveCard = () => {
      if (!containerRef.current) return;
      const cards = Array.from(
        containerRef.current.querySelectorAll(".scroll-card")
      );
      const containerCenter = window.innerWidth / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const distance = Math.abs(containerCenter - cardCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    const scrollInterval = setInterval(updateActiveCard, 100);

    return () => clearInterval(scrollInterval);
  }, [inView]);

  return (
    <div className={styles["scroll-wrapper"]} ref={ref}>
      <div
        className={`${styles["scroll-track-left"]} ${
          inView ? "" : styles.animation_stop
        } flex gap-[50px]`}
        ref={containerRef}
      >
        {elements.map((item, index) => {
          let scaleClass = "scale-80 duration-5000"; // Default size

          if (index === activeIndex) {
            scaleClass = "scale-130"; // Center card
          } else if (index === activeIndex! - 1 || index === activeIndex! + 1) {
            scaleClass = "scale-95 duration-5000"; // Adjacent cards
          }

          return (
            <div
              key={index}
              className={`scroll-card transition-all duration-5000 ease-in-out relative ${scaleClass}`}
            >
              <div className={styles["scroll-item"]}>
                <Image
                  src={item}
                  alt="portfolio image"
                  fill
                  loading="eager"
                  unoptimized={true}
                  className="object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default InfinityScroll;
