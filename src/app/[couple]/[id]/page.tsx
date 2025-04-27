"use client";

import Modalandslider from "@/components/aboutus/modal_slider/Modalandslider";
import couples from "@/data/couples";
import Image from "next/image";
import { useState, useCallback } from "react";

interface CouplePageProps {
  params: { id: string };
}

export default function CouplePage({ params }: CouplePageProps) {
  const coupleNum = parseInt(params.id, 10);
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

  const { femaleName, maleName, coupleImages } = choosedCouple;

  return (
    <div className="p-6">
      <h1 className="text-5xl text-center italic font-extralight mb-8">
        {maleName} & {femaleName}
      </h1>

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {coupleImages.map((img, index) => (
          <div
            key={`${img}-${index}`}
            className="w-full overflow-hidden rounded-md relative mb-4 break-inside-avoid cursor-zoom-in"
            onClick={() => handleImageClick(index)}
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
          images={coupleImages}
          indexImage={indexImage}
          onClose={toggleModal}
        />
      )}
    </div>
  );
}
