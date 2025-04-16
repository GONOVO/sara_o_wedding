import React from "react";
import styles from "./herosectionstyle.module.css";
function ImageView() {
  return (
    <section className={styles.hero_section}>
      <div className="absolute inset-0 bg-[var(--filter-color)]"></div>
      {/* <div className={styles.texts}>
        <h1 data-aos="zoom-out">NEVER MISS A THING</h1>
      </div> */}
    </section>
  );
}

export default ImageView;
