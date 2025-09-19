"use client";
import styles from "./destination.module.css";
import Image from "next/image";
import ImageView from "@/components/imageview/HeroSection";
import DestinationModal from "@/components/ui/destinationmodal/DestinationModal";
import { useState } from "react";

const destinations = {
  row1: [
    { name: "Bahamas", image: "/images/destinations/bahams.jpg" },
    { name: "Barbados", image: "/images/destinations/barbados.jpg" },
    { name: "St. Lucia", image: "/images/destinations/st.lucia.jpg" },
    {
      name: "Trinidad & Tobago",
      image: "/images/destinations/trinidad-tobago.jpg",
    },
    { name: "Grenada", image: "/images/destinations/grenada.jpg" },
  ],
  row2: [
    { name: "Indonesia (Bali)", image: "/images/destinations/bali.jpg" },
    { name: "Singapore", image: "/images/destinations/singapore.jpg" },
    { name: "Malaysia", image: "/images/destinations/malaysia.jpg" },
    { name: "Bangkok", image: "/images/destinations/bangkok.jpg" },
  ],
  row3: [
    { name: "U.K", image: "/images/destinations/u-k.jpg" },
    { name: "France", image: "/images/destinations/france.jpg" },
    { name: "Italy", image: "/images/destinations/italy.jpg" },
    { name: "Denmark", image: "/images/destinations/denmark.jpg" },
  ],
  row4: [
    { name: "Morocco", image: "/images/destinations/morocco.jpg" },
    { name: "Egypt", image: "/images/destinations/egypt.jpg" },
    { name: "Ghana", image: "/images/destinations/ghana.jpg" },
    { name: "Kenya", image: "/images/destinations/kenya.webp" },
    { name: "South Africa", image: "/images/destinations/south-africa.jpg" },
    { name: "Uganda", image: "/images/destinations/uganda.jpg" },
  ],
};

// Mobile destinations grouped by regions
const mobileDestinationsByRegion = {
  caribbean: [
    { name: "Bahamas", image: "/images/destinations/bahams.jpg" },
    { name: "Barbados", image: "/images/destinations/barbados.jpg" },
    { name: "St. Lucia", image: "/images/destinations/st.lucia.jpg" },
    {
      name: "Trinidad & Tobago",
      image: "/images/destinations/trinidad-tobago.jpg",
    },
    { name: "Grenada", image: "/images/destinations/grenada.jpg" },
  ],
  asia: [
    { name: "Indonesia (Bali)", image: "/images/destinations/bali.jpg" },
    { name: "Singapore", image: "/images/destinations/singapore.jpg" },
    { name: "Malaysia", image: "/images/destinations/malaysia.jpg" },
    { name: "Bangkok", image: "/images/destinations/bangkok.jpg" },
  ],
  europe: [
    { name: "U.K", image: "/images/destinations/u-k.jpg" },
    { name: "France", image: "/images/destinations/france.jpg" },
    { name: "Italy", image: "/images/destinations/italy.jpg" },
    { name: "Denmark", image: "/images/destinations/denmark.jpg" },
  ],
  africa: [
    { name: "Morocco", image: "/images/destinations/morocco.jpg" },
    { name: "Egypt", image: "/images/destinations/egypt.jpg" },
    { name: "Ghana", image: "/images/destinations/ghana.jpg" },
    { name: "Kenya", image: "/images/destinations/kenya.webp" },
    { name: "South Africa", image: "/images/destinations/south-africa.jpg" },
    { name: "Uganda", image: "/images/destinations/uganda.jpg" },
  ],
};

// Separator component
const DestinationSeparator = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div
    className="text-center py-8 md:py-12 md:border-b border-gray-200 mb-2 md:mb-0 "
    data-aos="fade-up"
  >
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 md:mb-4">
      {title}
    </h2>
    <p className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-4">
      {description}
    </p>
  </div>
);

function DestinationWeddingsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState("");

  const handleDestinationClick = (destinationName: string) => {
    setSelectedDestination(destinationName);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedDestination("");
  };

  return (
    <main>
      {/* Header Section - Full Width */}
      {/* <div
        className="text-center pt-16  pb-16  w-full relative flex border-t-2 border-[var(--gold-color)]"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto px-4">
          <HugeTitle text="Destinations" fontPercentage={0.87} />

          <p className="text-lg md:text-xl  mb-4 mt-12">
            DISCOVER YOUR UNIQUE PLACE TO SAY I DO
          </p>
          <p className="text-base md:text-lg max-w-4xl mx-auto mb-8 leading-relaxed">
            Incredible destination Wedding and Events venues located in highly
            sought after destinations from tropical paradise&apos;s to private
            rural retreats, glamorous beach fronts and desert wonders. Get ready
            to hop on a plane and say wow!
          </p>
          {/* <div className="w-1 h-16 bg-black mx-auto"></div> */}
      {/* </div>
      </div> */}
      <ImageView imageSrc="/images/Dv_6.webp" title="DESTINATIONS" />
      <p className="text-lg md:text-4xl  mb-4 mt-12 text-center font-bold px-4">
        DISCOVER YOUR UNIQUE PLACE TO SAY I DO
      </p>
      <p className="text-base md:text-lg max-w-4xl mx-auto mb-8 leading-relaxed text-center px-4">
        Incredible destination Wedding and Events venues located in highly
        sought after destinations from tropical paradise&apos;s to private rural
        retreats, glamorous beach fronts and desert wonders. Get ready to hop on
        a plane and say wow!
      </p>
      <div className="w-1 h-16 bg-black mx-auto"></div>

      <div className="max-w-[1380px] w-[96%] mx-auto px-4 pb-8">
        {/* Mobile Destination Grid - Visual Cards */}
        <div className="lg:hidden">
          {/* Caribbean Islands */}
          <DestinationSeparator
            title="Caribbean Islands"
            description="Experience the perfect blend of tropical paradise and luxury. From pristine beaches to crystal-clear waters, these islands offer the ultimate romantic backdrop for your dream destination events and unforgettable celebrations."
          />
          <div className="space-y-4 mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {mobileDestinationsByRegion.caribbean.map((destination, index) => (
              <div
                key={index}
                className="relative h-88 rounded-lg overflow-hidden bg-gray-200 w-full cursor-pointer hover:opacity-90 transition-opacity"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                onClick={() => handleDestinationClick(destination.name)}
              >
                <Image
                  src={destination.image}
                  alt={`${destination.name} wedding venue`}
                  fill
                  sizes="(max-width: 768px) 100vw, 100vw"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  quality={85}
                />
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3
                    style={{
                      fontFamily: "var(--font-antic-didone)",
                    }}
                    className="text-white font-semibold text-xl"
                  >
                    {destination.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Asia */}
          <DestinationSeparator
            title="Asia"
            description="Discover the perfect harmony of ancient traditions and modern luxury. From the spiritual temples of Bali to the vibrant cityscapes of Singapore, Asia offers diverse and enchanting backdrops for premium destination events and sophisticated celebrations."
          />
          <div className="space-y-4 mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {mobileDestinationsByRegion.asia.map((destination, index) => (
              <div
                key={index}
                className="relative h-88 rounded-lg overflow-hidden bg-gray-200 w-full cursor-pointer hover:opacity-90 transition-opacity"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                onClick={() => handleDestinationClick(destination.name)}
              >
                <Image
                  src={destination.image}
                  alt={`${destination.name} wedding venue`}
                  fill
                  sizes="(max-width: 768px) 100vw, 100vw"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  quality={85}
                />
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3
                    style={{
                      fontFamily: "var(--font-antic-didone)",
                    }}
                    className="text-white font-semibold text-xl"
                  >
                    {destination.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Europe */}
          <DestinationSeparator
            title="Europe"
            description="Immerse yourself in timeless elegance and rich cultural heritage. From the romantic streets of Paris to the historic charm of Italy, Europe provides sophisticated and romantic backdrops for any distinguished event or special celebration."
          />
          <div className="space-y-4 mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {mobileDestinationsByRegion.europe.map((destination, index) => (
              <div
                key={index}
                className="relative h-88 rounded-lg overflow-hidden bg-gray-200 w-full cursor-pointer hover:opacity-90 transition-opacity"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                onClick={() => handleDestinationClick(destination.name)}
              >
                <Image
                  src={destination.image}
                  alt={`${destination.name} wedding venue`}
                  fill
                  sizes="(max-width: 768px) 100vw, 100vw"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  quality={85}
                />
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3
                    style={{
                      fontFamily: "var(--font-antic-didone)",
                    }}
                    className="text-white font-semibold text-xl"
                  >
                    {destination.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Africa */}
          <DestinationSeparator
            title="Africa"
            description="Experience the raw beauty and diverse landscapes of Africa. From the majestic deserts of Morocco to the vibrant cultures of South Africa, Africa provides unique venues for destination weddings, safari events, and cultural celebrations."
          />
          <div className="space-y-4 mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {mobileDestinationsByRegion.africa.map((destination, index) => (
              <div
                key={index}
                className="relative h-88 rounded-lg overflow-hidden bg-gray-200 w-full cursor-pointer hover:opacity-90 transition-opacity"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                onClick={() => handleDestinationClick(destination.name)}
              >
                <Image
                  src={destination.image}
                  alt={`${destination.name} wedding venue`}
                  fill
                  sizes="(max-width: 768px) 100vw, 100vw"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  quality={85}
                />
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3
                    style={{
                      fontFamily: "var(--font-antic-didone)",
                    }}
                    className="text-white font-semibold text-xl"
                  >
                    {destination.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Destination Grid - Full Grid */}
        <div className={styles.destinationGrid}>
          {/* Row 1: Caribbean Islands */}
          <DestinationSeparator
            title="Caribbean Islands"
            description="Experience the perfect blend of tropical paradise and luxury. From pristine beaches to crystal-clear waters, these islands offer the ultimate romantic backdrop for your dream destination events and unforgettable celebrations."
          />
          <div className={`${styles.destinationRow} ${styles.row1}`}>
            {destinations.row1.map((destination, index) => (
              <div
                key={index}
                className={`${styles.destinationCard} cursor-pointer hover:opacity-90 transition-opacity`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                onClick={() => handleDestinationClick(destination.name)}
              >
                {/* <div className={styles.cardImage}> */}
                <Image
                  src={destination.image}
                  alt={`${destination.name} wedding venue`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  className="object-cover"
                  loading="lazy"
                  quality={100}
                />
                <div className={styles.cardOverlay}>
                  <h3 className={styles.cardTitle}>{destination.name}</h3>
                </div>
                {/* </div> */}
              </div>
            ))}
          </div>

          {/* Row 2: Asia */}
          <DestinationSeparator
            title="Asia"
            description="Discover the perfect harmony of ancient traditions and modern luxury. From the spiritual temples of Bali to the vibrant cityscapes of Singapore, Asia offers diverse and enchanting backdrops for premium destination events and sophisticated celebrations."
          />
          <div className={`${styles.destinationRow} ${styles.row2}`}>
            {destinations.row2.map((destination, index) => (
              <div
                key={index}
                className={`${styles.destinationCard} cursor-pointer hover:opacity-90 transition-opacity`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                onClick={() => handleDestinationClick(destination.name)}
              >
                <div className={styles.cardImage}>
                  <Image
                    src={destination.image}
                    alt={`${destination.name} wedding venue`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className={styles.cardBackgroundImage}
                    loading="lazy"
                    quality={85}
                  />
                  <div className={styles.cardOverlay}>
                    <h3 className={styles.cardTitle}>{destination.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 3: Europe */}
          <DestinationSeparator
            title="Europe"
            description="Immerse yourself in timeless elegance and rich cultural heritage. From the romantic streets of Paris to the historic charm of Italy, Europe provides sophisticated and romantic backdrops for any distinguished event or special celebration."
          />
          <div className={`${styles.destinationRow} ${styles.row3}`}>
            {destinations.row3.map((destination, index) => (
              <div
                key={index}
                className={`${styles.destinationCard} cursor-pointer hover:opacity-90 transition-opacity`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                onClick={() => handleDestinationClick(destination.name)}
              >
                <div className={styles.cardImage}>
                  <Image
                    src={destination.image}
                    alt={`${destination.name} wedding venue`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className={styles.cardBackgroundImage}
                    loading="lazy"
                    quality={85}
                  />
                  <div className={styles.cardOverlay}>
                    <h3 className={styles.cardTitle}>{destination.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 4: Africa */}
          <DestinationSeparator
            title="Africa"
            description="Experience the raw beauty and diverse landscapes of Africa. From the majestic deserts of Morocco to the vibrant cultures of South Africa, Africa provides unique venues for destination weddings, safari events, and cultural celebrations."
          />
          <div className={`${styles.destinationRow} ${styles.row4}`}>
            {destinations.row4.map((destination, index) => (
              <div
                key={index}
                className={`${styles.destinationCard} cursor-pointer hover:opacity-90 transition-opacity`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                onClick={() => handleDestinationClick(destination.name)}
              >
                <div className={styles.cardImage}>
                  <Image
                    src={destination.image}
                    alt={`${destination.name} wedding venue`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 16.67vw"
                    className={styles.cardBackgroundImage}
                    loading="lazy"
                    quality={85}
                  />
                  <div className={styles.cardOverlay}>
                    <h3 className={styles.cardTitle}>{destination.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <DestinationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        destinationName={selectedDestination}
      />
    </main>
  );
}

export default DestinationWeddingsPage;
