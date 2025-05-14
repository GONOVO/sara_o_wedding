"use client";
import React, { useEffect, useRef, useState } from "react";
import HugeTitle from "../../hugetitle/HugeTitle";
import styles from "./portfolio.module.css";
import eventsPortfolio from "@/data/eventsportfolio";
import LazyAutoPlayVideo from "../../videoplayer/VideoPlayer";
function EventsPortfolio() {
  const [visibleIndexes, setVisibleIndexes] = useState<Set<number>>(new Set());
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const updatedIndexes = new Set(visibleIndexes);
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            updatedIndexes.add(index); // Mark as visible
          }
        });
        setVisibleIndexes(updatedIndexes);
      },
      {
        threshold: 0,
        root: null,
        rootMargin: "300px",
      }
    );

    // Create a copy of stepRefs.current to use inside the effect
    const refsCopy = stepRefs.current;

    // Observe the elements
    refsCopy.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // Cleanup function: unobserve the elements
    return () => {
      refsCopy.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [visibleIndexes]);
  return (
    <section>
      <HugeTitle text="PORTFOLIO" mt="-3rem" fontPercentage={0.9} />
      <div className={`${styles.main_Steps} mt-16`}>
        {eventsPortfolio?.map((item, index) => (
          <React.Fragment key={index}>
            {index % 2 === 0 ? (
              <div
                ref={(el: HTMLDivElement | null): void => {
                  stepRefs.current[index] = el; // Do not return anything
                }}
                data-index={index}
                className={styles.steps_grid}
              >
                {item.vid ? (
                  <LazyAutoPlayVideo videoPath={item.vid} placeholderImage="/images/events_poster.webp" />
                ) : (
                  <div
                    className={styles.img_container}
                    style={{
                      backgroundImage: visibleIndexes.has(index)
                        ? `url(${item.img})`
                        : undefined, // Lazy load image
                    }}
                  ></div>
                )}
                <div className={styles.step_content}>
                  <h1>{item.title}</h1>
                  <div className={styles.mobile_Title}>
                    <h2 data-aos="fade-left">{item.subTitle}</h2>
                  </div>
                  {item.paragraphs.map((paragraph, i) => (
                    <p data-aos="fade-left" key={i}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ) : (
              <div
                ref={(el: HTMLDivElement | null): void => {
                  stepRefs.current[index] = el; // Do not return anything
                }}
                data-index={index}
                className={styles.steps_grid}
              >
                <div className={styles.step_content}>
                  <h1>{item.title}</h1>
                  <div className={styles.mobile_Title}>
                    <h2 data-aos="fade-right">{item.subTitle}</h2>
                  </div>
                  {item.paragraphs.map((paragraph, i) => (
                    <p data-aos="fade-right" key={i}>
                      {paragraph}
                    </p>
                  ))}
                </div>
                {item.vid ? (
                  <div className={styles.video_background}>
                    <LazyAutoPlayVideo
                      videoPath={item.vid}
                      placeholderImage="/images/events_poster.webp"
                    />
                  </div>
                ) : (
                  <div
                    className={styles.img_container}
                    style={{
                      backgroundImage: visibleIndexes.has(index)
                        ? `url(${item.img})`
                        : undefined, // Lazy load image
                      backgroundPosition: "right center",
                    }}
                  ></div>
                )}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default EventsPortfolio;
