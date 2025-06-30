import React from "react";
import Image from "next/image";
import styles from "../Infinityscroll.module.css";

export const Card = ({
  image,
  variant = "default",
}: {
  image: string;
  variant?: "default" | "services";
}) => {
  const cardClass =
    variant === "services"
      ? styles["scroll-item-services"]
      : styles["scroll-item"];

  return (
    <article className={cardClass}>
      <Image src={image} alt="card" fill />
    </article>
  );
};
