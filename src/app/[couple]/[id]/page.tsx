"use client";
import dynamic from "next/dynamic";
import { useState, useCallback } from "react";
import { use } from "react"; // Import the 'use' hook

const Modalandslider = dynamic(
  () => import("@/components/aboutus/modal_slider/Modalandslider")
);
import ImageView from "@/components/imageview/HeroSection";
import couples from "@/data/gallerrypotfolio";
import Image from "next/image";

interface CouplePageProps {
  params: Promise<{ id: string }>; // params is a Promise now
}

export default function CouplePage({ params }: CouplePageProps) {
  // Unwrap the params using React.use() to get the actual value
  const unwrappedParams = use(params);
  const coupleNum = parseInt(unwrappedParams.id, 10);
  const choosedCouple = couples[coupleNum - 1];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [indexImage, setIndexImage] = useState(0);

  const toggleModal = useCallback(() => {
    setIsModalOpen((prev) => !prev);
  }, []);

  const handleImageClick = useCallback(
    (index: number) => {
      setIndexImage(index);
      toggleModal();
    },
    [toggleModal]
  );

  if (!choosedCouple) {
    return <div className="p-6 text-center">Couple not found</div>;
  }

  const { femaleName, maleName, allImages, coverImage } = choosedCouple;

  return (
    <div className="mt-[263px]">
      <ImageView
        imageSrc={`${coverImage}`}
        height="70dvh"
        title={`${maleName} & ${femaleName}`}
        positionY={`${
          choosedCouple.positionY ? choosedCouple.positionY : "20%"
        }`}
      />

      <div className="columns-1 sm:columns-2  lg:columns-3 gap-3 space-y-4 max-w-7xl mx-auto p-4">
        {allImages.map((img, index) => (
          <div
            key={`${img}-${index}`}
            className="w-full overflow-hidden relative mb-3 break-inside-avoid cursor-zoom-in"
            onClick={() => handleImageClick(index)}
            data-aos="zoom-in-out"
          >
            <Image
              src={img}
              alt={`${maleName} and ${femaleName} - Photo ${index + 1}`}
              width={600}
              height={800}
              className="w-full h-auto object-cover transition-transform hover:scale-105 duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {isModalOpen && (
        <Modalandslider
          images={allImages}
          indexImage={indexImage}
          onClose={toggleModal}
        />
      )}
    </div>
  );
}
