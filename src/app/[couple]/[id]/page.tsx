"use client";
import dynamic from "next/dynamic";
import { useState, useCallback } from "react";
import { use } from "react"; // Import the 'use' hook
import DetailVideoPlayer from "@/components/ui/gallerycard/DetailVideoPlayer";
import Image from "next/image";

const Modalandslider = dynamic(
  () => import("@/components/aboutus/modal_slider/Modalandslider"),
  { ssr: false }
);

import couples from "@/data/gallerrypotfolio";

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

  const { femaleName, maleName, allImages, allVideos, coverImage, video } =
    choosedCouple;

  // Combine images and videos into a single media array for display
  const allMedia = [
    ...(allImages || []).map((url) => ({ url, type: "image" })),
    ...(allVideos || []).map((url) => ({ url, type: "video" })),
  ];

  // For the cover, prefer video if available, otherwise use image
  const coverMedia = video || coverImage;

  return (
    <div className="min-h-screen bg-white">
      <div className="w-full h-[70vh] relative">
        {video ? (
          <DetailVideoPlayer
            videoPath={video}
            className="w-full h-full object-cover"
          />
        ) : (
          <Image
            src={coverMedia}
            alt={`${maleName} and ${femaleName}`}
            fill
            className="object-cover"
            priority
          />
        )}
      </div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          {maleName} & {femaleName}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {allMedia.map((media, index) => (
            <div key={index} className="relative aspect-square">
              {media.type === "video" ? (
                <DetailVideoPlayer
                  videoPath={media.url}
                  className="w-full h-full object-cover"
                />
              ) : (
                <Image
                  src={media.url}
                  alt={`${maleName} and ${femaleName} - Photo ${index + 1}`}
                  fill
                  className="w-full h-auto object-cover transition-transform hover:scale-105 duration-300 cursor-zoom-in"
                  priority
                  onClick={() => handleImageClick(index)}
                />
              )}
            </div>
          ))}
        </div>
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
