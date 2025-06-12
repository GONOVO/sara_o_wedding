"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Global state to track the currently playing video
let currentlyPlayingVideo: HTMLVideoElement | null = null;

export default function GalleryVideoCard({
  videoPath,
  placeholderImage,
}: {
  videoPath: string;
  placeholderImage: string;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showControls, setShowControls] = useState(false);

  const handlePlayPause = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!videoRef.current) return;

    if (isPlaying) {
      // Pause current video
      videoRef.current.pause();
      setIsPlaying(false);
      currentlyPlayingVideo = null;
    } else {
      // Pause any currently playing video
      if (currentlyPlayingVideo && currentlyPlayingVideo !== videoRef.current) {
        currentlyPlayingVideo.pause();
        // Trigger state update for the previously playing video
        currentlyPlayingVideo.dispatchEvent(new Event("pause"));
      }

      // Play this video
      videoRef.current.play().catch(console.error);
      setIsPlaying(true);
      currentlyPlayingVideo = videoRef.current;
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => {
      setIsPlaying(false);
      currentlyPlayingVideo = null;
    };

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <div
      className="w-full h-full overflow-hidden relative cursor-pointer"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      {/* Placeholder image */}
      {!isLoaded && (
        <Image
          src={placeholderImage}
          alt="Video placeholder"
          fill
          className="object-cover"
          loading="lazy"
        />
      )}

      {/* Video element */}
      <video
        ref={videoRef}
        src={videoPath}
        muted
        playsInline
        loop
        className={`object-cover w-full h-full transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoadedData={() => setIsLoaded(true)}
        style={{ pointerEvents: "none" }} // Prevent direct video clicks
      />

      {/* Play/Pause button overlay */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 z-10 ${
          !isPlaying || showControls ? "opacity-100" : "opacity-0"
        }`}
        onClick={handlePlayPause}
        style={{ pointerEvents: "auto" }} // Ensure this layer captures clicks
      >
        <div className="bg-black bg-opacity-60 rounded-full p-3 hover:bg-opacity-80 hover:scale-110 transition-all duration-200 shadow-lg">
          {isPlaying ? (
            // Pause icon
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="white"
              className="drop-shadow-lg"
            >
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          ) : (
            // Play icon
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="white"
              className="drop-shadow-lg ml-0.5"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </div>
      </div>

      {/* Loading indicator */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center z-5">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white opacity-75"></div>
        </div>
      )}

      {/* Video indicator badge */}
      <div className="absolute top-2 right-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded z-10">
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="white"
          className="inline mr-1"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
        VIDEO
      </div>
    </div>
  );
}
