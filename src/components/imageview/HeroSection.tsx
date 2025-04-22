import React from "react";
import styles from "./herosectionstyle.module.css";
function ImageView({
  imageSrc,
  height,
  mb,
  positionY,
  title,
}: {
  imageSrc: string;
  height?: string;
  mb?: string;
  positionY?: string;
  title?: string;
}) {
  return (
    <section
      className={`${styles.hero_section}`}
      style={{
        backgroundImage: `url(${imageSrc})`,
        height,
        marginBottom: mb,
        backgroundPositionY: `${positionY}`,
      }}
    >
      <div className="absolute inset-0 bg-[var(--filter-color)]">
        {title && (
          <div className="max-w-[1024px] mx-auto relative top-1/2 -translate-y-1/2">
            <h1 className="text-[11.5vw] leading-[70px] sm:leading-[90px]  md:text-7xl lg:text-[86px] text-white text-center md:leading-[110px] px-4 lg:px-0">
              {title}
            </h1>
          </div>
        )}
      </div>
    </section>
  );
}

export default ImageView;
