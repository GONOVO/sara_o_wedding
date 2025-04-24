"use client";
import Modalandslider from "@/components/aboutus/modal_slider/Modalandslider";
import couples from "@/data/couples";
import Image from "next/image";
import { useState, useCallback } from "react";
import { use } from "react";

interface CouplePageProps {
  params: Promise<{ id: string }>;
}

export default function CouplePage({ params }: CouplePageProps) {
  const { id } = use(params);
  const coupleNum = parseInt(id);
  const choosedCouple = couples[coupleNum - 1];

  const { femaleName, maleName, coupleImages } = choosedCouple;
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

  return (
    <div className="p-6">
      <h1 className="text-5xl text-center italic font-extralight mb-8">
        {maleName} & {femaleName}
      </h1>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(330px,1fr))] gap-4  auto-rows-[400px] auto-flow-dense">
        {coupleImages.map((img, index) => (
          <div
            key={`${img}-${index}`}
            className="relative w-full h-full cursor-zoom-in"
          >
            <Image
              src={img}
              alt={`${maleName} and ${femaleName} - Photo ${index + 1}`}
              fill
              className="object-cover"
              loading="lazy"
              onClick={() => handleImageClick(index)}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
