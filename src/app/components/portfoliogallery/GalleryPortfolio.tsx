import React from "react";
import GalleryCard from "../ui/gallerycard/GalleryCard";
import galleryPortfolio from "@/data/gallerrypotfolio";

function GalleryPortfolio() {
  return (
    <section className="max-w-7xl px-4 mx-auto py-16">
      <div className="flex gap-5 flex-wrap justify-center">
        {galleryPortfolio.map((item, index) => (
          <GalleryCard item={item} key={index} />
        ))}
      </div>
    </section>
  );
}

export default GalleryPortfolio;
