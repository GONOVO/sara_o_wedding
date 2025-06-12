"use client";
import dynamic from "next/dynamic";
import { useState, useCallback } from "react";
import { use } from "react"; // Import the 'use' hook
import DetailVideoPlayer from "@/components/ui/gallerycard/DetailVideoPlayer";

const Modalandslider = dynamic(
  () => import("@/components/aboutus/modal_slider/Modalandslider")
);
const ImageView = dynamic(() => import("@/components/imageview/HeroSection"));
import couples from "@/data/gallerrypotfolio";
//  import Image from "next/image";

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

  const {
    femaleName,
    maleName,
    allImages,
    allVideos,
    coverImage,
    coverVideo,
    eventName,
  } = choosedCouple;

  // Combine images and videos into a single media array for display
  const allMedia = [
    ...(allImages || []).map((url) => ({ url, type: "image" })),
    ...(allVideos || []).map((url) => ({ url, type: "video" })),
  ];

  // For the cover, prefer video if available, otherwise use image
  const coverMedia = coverVideo || coverImage;

  return (
    <div>
      <ImageView
        imageSrc={`${coverMedia}`}
        height="70dvh"
        title={eventName ? `${eventName}` : `${maleName} & ${femaleName}`}
        positionY={`${
          choosedCouple.positionY ? choosedCouple.positionY : "20%"
        }`}
      />

      <div className="columns-1 sm:columns-2  lg:columns-3 gap-3 space-y-4 max-w-7xl mx-auto p-4">
        {allMedia.map((media, index) => (
          <div
            key={`${media.url}-${index}`}
            className="w-full overflow-hidden relative mb-3 break-inside-avoid"
            data-aos="zoom-in-out"
          >
            {media.type === "video" ? (
              <DetailVideoPlayer
                videoPath={media.url}
                className="transition-transform hover:scale-105 duration-300"
              />
            ) : (
              <img
                src={media.url}
                alt={`${maleName} and ${femaleName} - Photo ${index + 1}`}
                className="w-full h-auto object-cover transition-transform hover:scale-105 duration-300 cursor-zoom-in"
                loading="lazy"
                onClick={() => handleImageClick(index)}
              />
            )}
          </div>
        ))}
      </div>

      {isModalOpen && (
        <Modalandslider
          images={allMedia
            .filter((media) => media.type === "image")
            .map((media) => media.url)} // Only pass images to modal
          indexImage={indexImage}
          onClose={toggleModal}
        />
      )}
    </div>
  );
}
