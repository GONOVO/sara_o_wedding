import React from "react";
import styles from "./Infinityscroll.module.css";
import { Card } from "./card/Card";
export interface IPelements {
  image: string;
}
function InfinityScroll({
  elements,
  reverse
}: {
  elements: IPelements[];
  reverse?: boolean;
}) {
  return (
    <div className={styles["scroll-wrapper"]}>
      <div
        className={
          reverse ? styles["scroll-track-right"] : styles["scroll-track-left"]
          
        }
      >
        {/* Duplicate items to ensure seamless scroll */}
        {elements.map((item, index) => (
          <Card image={item.image} key={index} />
        ))}
      </div>
    </div>
  );
}

export default InfinityScroll;
