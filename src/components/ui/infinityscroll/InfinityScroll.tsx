import React from "react";
import styles from "./Infinityscroll.module.css";
import { Card } from "./card/Card";
export interface IPelements {
  image: string;
}
function InfinityScroll({
  elements,
  reverse,
  variant = "default",
}: {
  elements: IPelements[];
  reverse?: boolean;
  variant?: "default" | "services";
}) {
  const trackClass = reverse
    ? variant === "services"
      ? styles["scroll-track-right-services"]
      : styles["scroll-track-right"]
    : variant === "services"
    ? styles["scroll-track-left-services"]
    : styles["scroll-track-left"];

  return (
    <div className={styles["scroll-wrapper"]}>
      <div className={trackClass}>
        {/* Duplicate items to ensure seamless scroll */}
        {elements.map((item, index) => (
          <Card image={item.image} key={index} variant={variant} />
        ))}
      </div>
    </div>
  );
}

export default InfinityScroll;
