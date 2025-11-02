import React from "react";
import GalleryCard from "../ui/gallerycard/GalleryCard";
import Link from "next/link";
import { IPortfolioitem } from "@/utils/interfaces";

function GalleryPortfolio({
  galleryPortfolio,
  baseRoute = "couple",
}: {
  galleryPortfolio: IPortfolioitem[];
  baseRoute?: string;
}) {
  return (
    <section id="gallery" className="max-w-7xl px-4 mx-auto py-16">
      <div className="flex gap-5 flex-wrap justify-center">
        {galleryPortfolio.map((item, index) => (
          <Link
            key={index}
            href={`/${baseRoute}/${item.id}`}
            data-aos="zoom-in-out"
            data-aos-offset="0"
          >
            <GalleryCard item={item} />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default GalleryPortfolio;
