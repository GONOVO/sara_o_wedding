"use client";
import { useEffect, useRef, useState } from "react";

export default function LazyAutoPlayVideo() {
  const containerRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [isVisible]);

  return (
    <div ref={containerRef} className="w-full h-full overflow-hidden">
      {isVisible && (
        <video
          ref={videoRef}
          src="/videos/lifeevents.mp4"
          muted
          playsInline
          className="object-cover w-full h-full"
        />
      )}
    </div>
  );
}
