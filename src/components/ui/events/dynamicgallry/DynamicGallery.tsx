import React from "react";

function DynamicGallery({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  return (
    <section className="pb-8 pt-16 max-w-7xl mx-auto">
      <h1 className="text-black text-3xl sm:text-5xl max-w-[560px] text-center mx-auto  mb-8 px-4">
        {title}
      </h1>
      <div className="columns-1 sm:columns-2  lg:columns-3 gap-3 space-y-4 max-w-7xl mx-auto p-4">
        {images.map((img, index) => (
          <div
            key={`${img}-${index}`}
            className="w-full overflow-hidden relative mb-3 break-inside-avoid cursor-zoom-in"
            data-aos="zoom-in-out"
          >
            <img
              src={img}
              alt={`event ${index + 1}`}
              className="w-full h-auto object-cover transition-transform hover:scale-105 duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default DynamicGallery;
