"use client";
import dynamic from "next/dynamic";
import { useState, useCallback, useRef } from "react";
import { use } from "react"; // Import the 'use' hook

const Modalandslider = dynamic(
  () => import("@/components/aboutus/modal_slider/Modalandslider")
);
const ImageView = dynamic(() => import("@/components/imageview/HeroSection"));
import couples from "@/data/gallerrypotfolio";
import galleryNationalPortfolio from "@/data/galleryNationalPortfolio";
import { IPortfolioitem } from "@/utils/interfaces";
//  import Image from "next/image";

interface CouplePageProps {
  params: Promise<{ couple: string; id: string }>; // params is a Promise now
}

const VideoCard = ({ videoUrl }: { videoUrl: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div
      className="w-full overflow-hidden relative mb-3 break-inside-avoid cursor-pointer aspect-video"
      onClick={handleClick}
      data-aos="zoom-in-out"
    >
      <video
        ref={videoRef}
        src={videoUrl}
        className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        preload="metadata"
        loop
        playsInline
        // poster={poster}
      />
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-transparent bg-opacity-30">
          <div className="w-16 h-16  rounded-full flex items-center justify-center border-2 border-white">
            <svg
              className="w-8 h-8 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default function CouplePage({ params }: CouplePageProps) {
  // Unwrap the params using React.use() to get the actual value
  const unwrappedParams = use(params);
  const coupleType = unwrappedParams.couple; // "couple" or "national-couple"
  const coupleNum = parseInt(unwrappedParams.id, 10);

  // Select the appropriate portfolio dataset based on route
  const isNationalPortfolio = coupleType === "national-couple";
  const portfolioData = isNationalPortfolio
    ? galleryNationalPortfolio
    : couples;

  // Find the couple by ID in the appropriate dataset
  const choosedCouple = portfolioData.find((item) => item.id === coupleNum) as
    | IPortfolioitem
    | undefined;

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
    allImages = [],
    allVideos = [],
    coverImage,
    eventName,
  } = choosedCouple;

  // Ensure all optional properties have defaults
  const safeEventName = eventName;
  const safeCoverImage = coverImage;

  return (
    <div>
      <ImageView
        imageSrc={safeCoverImage || choosedCouple.image || ""}
        height="70dvh"
        title={
          safeEventName ||
          (maleName && femaleName
            ? `${maleName} & ${femaleName}`
            : maleName || femaleName || "Event")
        }
        positionY={`${
          choosedCouple.positionY ? choosedCouple.positionY : "20%"
        }`}
      />

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 space-y-4 max-w-7xl mx-auto p-4">
        {allVideos &&
          allVideos.map((video, index) => (
            <VideoCard key={`video-${index}`} videoUrl={video} />
          ))}
        {allImages.map((img, index) => (
          <div
            key={`${img}-${index}`}
            className="w-full overflow-hidden relative mb-3 break-inside-avoid cursor-zoom-in"
            onClick={() => handleImageClick(index)}
            data-aos="zoom-in-out"
          >
            <img
              src={img}
              alt={`${maleName} and ${femaleName} - Photo ${index + 1}`}
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
