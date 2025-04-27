import Image from "next/image";
import React from "react";

function Modalandslider({
  indexImage,
  images,
  onClose,
}: {
  images: string[];
  indexImage: number;
  onClose: () => void;
}) {
  const [currentIndex, setCurrentIndex] = React.useState(indexImage);

  const goNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const goPrev = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  return (
    <div className="fixed inset-0 w-full h-full bg-[var(--dark-filter-color)] z-50 flex items-center justify-center p-4">
      <div
        className="relative w-full max-w-6xl max-h-[90vh] flex flex-col"
        style={{ height: "90vh" }}
      >
        <button
          onClick={onClose}
          className="self-end mb-4  bg-white/30 hover:bg-white/50 rounded-full w-10 h-10 flex items-center justify-center z-10 p-2 hover:cursor-pointer"
        >
          <Image
            src="/svgs/exitIcon.svg"
            alt="exit icon"
            width={36}
            height={36}
          />
        </button>
        <div className="relative flex-1 flex items-center">
          <button
            onClick={goPrev}
            className="absolute left-4 bg-white/30 hover:bg-white/50 rounded-full w-10 h-10 z-10 p-2 flex justify-center hover:cursor-pointer"
          >
            <Image
              src="/svgs/leftAngle.svg"
              alt="left Angle icon"
              width={16}
              height={16}
            />
          </button>
          <div className="relative w-full h-full">
            <Image
              src={images[currentIndex]}
              alt={`Image ${currentIndex + 1} of ${images.length}`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
              quality={100}
            />
          </div>
          <button
            onClick={goNext}
            className="absolute right-4 bg-white/30 hover:bg-white/50 rounded-full w-10 h-10 z-10 p-2 flex justify-center cursor-pointer"
          >
            <Image
              src="/svgs/rightAngle.svg"
              alt="right Angle icon"
              width={16}
              height={16}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modalandslider;
