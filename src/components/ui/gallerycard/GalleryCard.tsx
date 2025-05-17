import Image from "next/image";
import styles from "./gallerycard.module.css";
import { IPortfolioitem } from "@/utils/interfaces";

function GalleryCard({ item }: { item: IPortfolioitem }) {
  const { image, maleName, femaleName, eventName } = item;
  return (
    <article className={styles.card_container}>
      <div className={`${styles.inner_container} w-full h-full relative`}>
        <Image
          src={image}
          alt="card view"
          fill
          className="object-cover"
          loading="lazy"
        />
      </div>
      <div
        className={`${styles.effect_div} w-full h-full  flex justify-center items-center bg-[#28282BD9]`}
      >
        {maleName && femaleName && (
          <h1 className="text-3xl text-white p-8 w-full text-center leading-snug tracking-widest">
            {maleName.length <= femaleName.length ? (
              <>
                <span>{maleName} &</span>
                <br />
                <span>{femaleName}</span>
              </>
            ) : (
              <>
                <span>{maleName} </span>
                <br />
                <span>& {femaleName}</span>
              </>
            )}
          </h1>
        )}
        {eventName && (
          <h1 className="text-3xl text-white p-8 w-full text-center leading-snug tracking-widest">
            {eventName}
          </h1>
        )}
      </div>
    </article>
  );
}

export default GalleryCard;
