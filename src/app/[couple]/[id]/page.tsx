"use client";
import dynamic from "next/dynamic";
import { useState, useCallback, useRef, useEffect } from "react";
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

// Lazy loading component for portfolio images (keeping img tag)
const LazyPortfolioImage = ({
  src,
  alt,
  onClick,
}: {
  src: string;
  alt: string;
  onClick: () => void;
}) => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !shouldLoad) {
          setShouldLoad(true);
        }
      },
      { rootMargin: "50px" }
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [shouldLoad]);

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden relative mb-3 break-inside-avoid cursor-zoom-in"
      onClick={onClick}
      data-aos="zoom-in-out"
    >
      {shouldLoad && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          className={`w-full h-auto object-cover transition-transform hover:scale-105 duration-300 transition-opacity duration-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
        />
      )}
      {!isLoaded && shouldLoad && (
        <div className="w-full h-64 bg-gray-200 animate-pulse rounded-lg"></div>
      )}
    </div>
  );
};

const VideoCard = ({ videoUrl }: { videoUrl: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !shouldLoad) {
          setShouldLoad(true);
          if (videoRef.current) {
            videoRef.current.load();
          }
        }
      },
      { rootMargin: "100px" }
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [shouldLoad]);

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
      ref={containerRef}
      className="w-full overflow-hidden relative mb-3 break-inside-avoid cursor-pointer aspect-video"
      onClick={handleClick}
      data-aos="zoom-in-out"
    >
      {shouldLoad && (
        <video
          ref={videoRef}
          src={videoUrl}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
          preload="none"
          loop
          playsInline
          // poster={poster}
        />
      )}
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
          <LazyPortfolioImage
            key={`${img}-${index}`}
            src={img}
            alt={`${maleName} and ${femaleName} - Photo ${index + 1}`}
            onClick={() => handleImageClick(index)}
          />
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
