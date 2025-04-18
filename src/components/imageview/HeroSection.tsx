import React from "react";
import styles from "./herosectionstyle.module.css";
function ImageView({
  imageSrc,
  height,
  mb,
}: {
  imageSrc: string;
  height?: string;
  mb?: string;
}) {
  return (
    <section
      className={styles.hero_section}
      style={{
        backgroundImage: `url(${imageSrc})`,
        height,
        marginBottom: mb,
      }}
    >
      <div className="absolute inset-0 bg-[var(--filter-color)]"></div>
    </section>
  );
}

export default ImageView;
