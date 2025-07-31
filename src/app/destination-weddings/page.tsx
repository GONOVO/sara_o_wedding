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

function DestinationWeddingsPage() {
  return (
    <main>
      {/* Header Section - Full Width */}
      <div
        className="text-center py-16 bg-[var(--gold-color)] w-full"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto px-4">
          <HugeTitle text="Destinations" fontPercentage={0.9} color="#fff" />

          <p className="text-lg md:text-xl text-gray-600 mb-4">
            DISCOVER YOUR UNIQUE PLACE TO SAY I DO
          </p>
          <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
            Incredible destination wedding venues located in highly sought after
            destinations from tropical paradise&apos;s to private rural
            retreats, glamorous beach fronts and desert wonders. Get ready to
            hop on a plane and say your vows!
          </p>
          {/* <div className="w-1 h-16 bg-black mx-auto"></div> */}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Destination Grid */}
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
