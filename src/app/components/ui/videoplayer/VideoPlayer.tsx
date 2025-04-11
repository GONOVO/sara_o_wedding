// "use client";
// import { useEffect, useRef, useState } from "react";

// export default function LazyAutoPlayVideo({
//   videoPath,
// }: {
//   videoPath: string;
// }) {
//   const containerRef = useRef(null);
//   const videoRef = useRef<HTMLVideoElement | null>(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.5 }
//     );

//     if (containerRef.current) {
//       observer.observe(containerRef.current);
//     }

//     return () => {
//       if (containerRef.current) {
//         observer.unobserve(containerRef.current);
//       }
//     };
//   }, []);

//   useEffect(() => {
//     if (isVisible && videoRef.current) {
//       videoRef.current.play().catch(() => {});
//     } else {
//       videoRef.current?.pause();
//     }
//   }, [isVisible]);

//   return (
//     <div ref={containerRef} className="w-full h-full overflow-hidden">
//       {isVisible && (
//         <video
//           ref={videoRef}
//           src={videoPath}
//           muted
//           playsInline
//           loop
//           className="object-cover w-full h-full"

//         />
//       )}
//     </div>
//   );
// }
"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function LazyAutoPlayVideo({
  videoPath,
  placeholderImage, // e.g. "/images/fallback.jpg"
}: {
  videoPath: string;
  placeholderImage: string;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
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
    if (videoRef.current) {
      if (isVisible) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isVisible]);

  return (
    <div ref={containerRef} className="w-full h-full overflow-hidden relative">
      {!isLoaded && isVisible && (
        <Image
          src={placeholderImage}
          alt="Video placeholder"
          fill
          className="object-cover"
        />
      )}
      {isVisible && (
        <video
          ref={videoRef}
          src={videoPath}
          muted
          playsInline
          loop
          className={`object-cover w-full h-full transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoadedData={() => setIsLoaded(true)}
        />
      )}
    </div>
  );
}
