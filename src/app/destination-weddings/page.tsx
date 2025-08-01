"use client";
import styles from "./destination.module.css";
import Image from "next/image";
import HugeTitle from "@/components/ui/hugetitle/HugeTitle";

const destinations = {
  row1: [
    { name: "Bahamas", image: "/images/destinations/bahams.jpg" },
    { name: "Barbados", image: "/images/destinations/barbados.avif" },
    { name: "St. Lucia", image: "/images/destinations/st.lucia.jpeg" },
    {
      name: "Trinidad & Tobago",
      image: "/images/destinations/trinidad-tobago.jpg",
    },
    { name: "Grenada", image: "/images/destinations/grenada.avif" },
  ],
  row2: [
    { name: "Indonesia (Bali)", image: "/images/destinations/bali.jpg" },
    { name: "Singapore", image: "/images/destinations/singapore.jpg" },
    { name: "Malaysia", image: "/images/destinations/malaysia.webp" },
    { name: "Bangkok", image: "/images/destinations/bangkok.jpg" },
  ],
  row3: [
    { name: "U.K", image: "/images/destinations/u-k.png" },
    { name: "France", image: "/images/destinations/france.jpg" },
    { name: "Italy", image: "/images/destinations/italy.jpg" },
    { name: "Denmark", image: "/images/destinations/denmark.webp" },
  ],
  row4: [
    { name: "Morocco", image: "/images/destinations/morocco.webp" },
    { name: "Egypt", image: "/images/destinations/egypt.jpg" },
    { name: "Ghana", image: "/images/destinations/ghana.jpg" },
    { name: "Kenya", image: "/images/destinations/kenya.webp" },
    { name: "South Africa", image: "/images/destinations/south-africa.jpg" },
    { name: "Uganda", image: "/images/destinations/uganda.jpg" },
  ],
};

// Mobile-specific destinations (all destinations)
const mobileDestinations = [
  // First 4 as requested
  { name: "Bahamas", image: "/images/destinations/bahams.jpg" },
  { name: "Indonesia (Bali)", image: "/images/destinations/bali.jpg" },
  { name: "France", image: "/images/destinations/france.jpg" },
  { name: "Egypt", image: "/images/destinations/egypt.jpg" },

  // Row 1: Caribbean Islands (remaining)
  { name: "Barbados", image: "/images/destinations/barbados.avif" },
  { name: "St. Lucia", image: "/images/destinations/st.lucia.jpeg" },
  {
    name: "Trinidad & Tobago",
    image: "/images/destinations/trinidad-tobago.jpg",
  },
  { name: "Grenada", image: "/images/destinations/grenada.avif" },

  // Row 2: Asia (remaining)
  { name: "Singapore", image: "/images/destinations/singapore.jpg" },
  { name: "Malaysia", image: "/images/destinations/malaysia.webp" },
  { name: "Bangkok", image: "/images/destinations/bangkok.jpg" },

  // Row 3: Europe (remaining)
  { name: "U.K", image: "/images/destinations/u-k.png" },
  { name: "Italy", image: "/images/destinations/italy.jpg" },
  { name: "Denmark", image: "/images/destinations/denmark.webp" },

  // Row 4: Africa (remaining)
  { name: "Morocco", image: "/images/destinations/morocco.webp" },
  { name: "Ghana", image: "/images/destinations/ghana.jpg" },
  { name: "Kenya", image: "/images/destinations/kenya.webp" },
  { name: "South Africa", image: "/images/destinations/south-africa.jpg" },
  { name: "Uganda", image: "/images/destinations/uganda.jpg" },
];

function DestinationWeddingsPage() {
  return (
    <main>
      {/* Header Section - Full Width */}
      <div
        className="text-center mt-16  pb-16 bg-[rgba(244,240,235,1)] w-full relative flex"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto px-4">
          <HugeTitle
            text="Destinations"
            fontPercentage={0.9}
            mtSm="-50px"
            mtLg="-100px"
          />

          <p className="text-lg md:text-xl text-gray-600 mb-4 mt-12">
            DISCOVER YOUR UNIQUE PLACE TO SAY I DO
          </p>
          <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
            Incredible destination Wedding and Events venues located in highly
            sought after destinations from tropical paradise&apos;s to private
            rural retreats, glamorous beach fronts and desert wonders. Get ready
            to hop on a plane and say wow!
          </p>
          {/* <div className="w-1 h-16 bg-black mx-auto"></div> */}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Mobile Destination Grid - Visual Cards */}
        <div className="lg:hidden">
          {/* First 4 destinations - Full width */}
          <div className="space-y-4 mb-4">
            {mobileDestinations.slice(0, 4).map((destination, index) => (
              <div
                key={index}
                className="relative h-48 rounded-lg overflow-hidden bg-gray-200 w-full"
                data-aos="fade-up"
                data-aos-delay={index * 100}
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
                  <h3 className="text-white font-semibold text-lg">
                    {destination.name}
                  </h3>
                  <p className="text-white text-sm opacity-90">
                    WEDDING VENUES
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Remaining destinations - 2 column grid */}
          <div className="grid grid-cols-2 gap-4">
            {mobileDestinations.slice(4).map((destination, index) => (
              <div
                key={index + 4}
                className="relative h-48 rounded-lg overflow-hidden bg-gray-200"
                data-aos="fade-up"
                data-aos-delay={(index + 4) * 100}
              >
                <Image
                  src={destination.image}
                  alt={`${destination.name} wedding venue`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  quality={85}
                />
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3 className="text-white font-semibold text-lg">
                    {destination.name}
                  </h3>
                  <p className="text-white text-sm opacity-90">
                    WEDDING VENUES
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Destination Grid - Full Grid */}
        <div className={styles.destinationGrid}>
          {/* Row 1: Caribbean Islands */}
          <div className={`${styles.destinationRow} ${styles.row1}`}>
            {destinations.row1.map((destination, index) => (
              <div
                key={index}
                className={styles.destinationCard}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className={styles.cardImage}>
                  <Image
                    src={destination.image}
                    alt={`${destination.name} wedding venue`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    className={styles.cardBackgroundImage}
                    loading="lazy"
                    quality={85}
                  />
                  <div className={styles.cardOverlay}>
                    <h3 className={styles.cardTitle}>{destination.name}</h3>
                    <p className={styles.cardSubtitle}>WEDDING VENUES</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: Asia */}
          <div className={`${styles.destinationRow} ${styles.row2}`}>
            {destinations.row2.map((destination, index) => (
              <div
                key={index}
                className={styles.destinationCard}
                data-aos="fade-up"
                data-aos-delay={index * 100}
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
                    <p className={styles.cardSubtitle}>WEDDING VENUES</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Row 4: Africa */}
          <div className={`${styles.destinationRow} ${styles.row4}`}>
            {destinations.row4.map((destination, index) => (
              <div
                key={index}
                className={styles.destinationCard}
                data-aos="fade-up"
                data-aos-delay={index * 100}
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
                    <p className={styles.cardSubtitle}>WEDDING VENUES</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Row 3: Europe */}
          <div className={`${styles.destinationRow} ${styles.row3}`}>
            {destinations.row3.map((destination, index) => (
              <div
                key={index}
                className={styles.destinationCard}
                data-aos="fade-up"
                data-aos-delay={index * 100}
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
                    <p className={styles.cardSubtitle}>WEDDING VENUES</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default DestinationWeddingsPage;
