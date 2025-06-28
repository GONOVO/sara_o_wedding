import React from "react";
import Image from "next/image";
import styles from "../Infinityscroll.module.css";

export const Card = ({ image }: { image: string }) => {
  return (
    <article className={styles["scroll-item"]}>
      <Image src={image} alt="card" fill />
    </article>
  );
};
