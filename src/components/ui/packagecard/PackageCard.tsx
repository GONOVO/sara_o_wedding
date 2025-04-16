"use client";

import Link from "next/link";
import styles from "./packagecard.module.css";
import { useEffect, useState } from "react";
import { IPackage } from "@/utils/interfaces";
import Image from "next/image";

function PackageCard({ img, list, title, btnText }: IPackage) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.mainCard}>
      <div className={styles.movePart}>
        <div className="relative h-[388px]">
          <Image src={img} alt={title} fill />
        </div>
        <h2 data-aos={screenWidth <= 440 ? "fade-up" : ""}>{title}</h2>
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <Link href="/">
        <span>View More</span>
      </Link>
      <button>
        <span>Investment</span>
        {btnText}
      </button>
    </div>
  );
}

export default PackageCard;
