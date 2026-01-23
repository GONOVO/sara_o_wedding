"use client";
import { useEffect, useRef, useState } from "react";

// Global state to track the currently playing video
let currentlyPlayingVideo: HTMLVideoElement | null = null;

export default function DetailVideoPlayer({
  videoPath,
  className = "",
}: {
  videoPath: string;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showControls, setShowControls] = useState(true);

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
      className={`w-full h-auto overflow-hidden relative cursor-pointer bg-black ${className}`}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      {/* Video element - WITH AUDIO (not muted) */}
      <video
        ref={videoRef}
        src={videoPath}
        playsInline
        loop
        className="w-full h-auto object-cover"
        onLoadedData={() => setIsLoaded(true)}
        style={{ pointerEvents: "none" }}
      />

      {/* Play/Pause button overlay */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          !isPlaying || showControls ? "opacity-100" : "opacity-0"
        }`}
        onClick={handlePlayPause}
        style={{ pointerEvents: "auto" }}
      >
        <div className="bg-black bg-opacity-60 rounded-full p-4 hover:bg-opacity-80 hover:scale-110 transition-all duration-200 shadow-lg">
          {isPlaying ? (
            // Pause icon
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="white"
              className="drop-shadow-lg"
            >
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          ) : (
            // Play icon
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="white"
              className="drop-shadow-lg ml-1"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </div>
      </div>

      {/* Loading indicator */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white opacity-75"></div>
        </div>
      )}

      {/* Video indicator badge with audio icon */}
      <div className="absolute top-2 right-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded">
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="white"
          className="inline mr-1"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="white"
          className="inline ml-1"
        >
          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
        </svg>
        AUDIO
      </div>
    </div>
  );
}
