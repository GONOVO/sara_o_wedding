"use client";
import React from "react";
import SharedForm from "../ui/sharedform/SharedForm";
import styles from "./contactus.module.css";

const MobileFrame = React.lazy(() => import("../ui/mobileframe/Mobile"));

function Contactus() {
  return (
    <section
      className={styles.main_grid_contactus}
      id="contactus"
    >
      <div data-aos="fade-right">
        <h3 className="text-5xl font-bold">CONTACT US</h3>
        <SharedForm
          title="Our friendly team would love to hear from you."
          subtitle=""
          className={styles.contactForm}
        />
      </div>

      <div className={styles.sec_main_container}>
        <div className={styles.mobiles_container} data-aos="fade-left">
          <div className={styles.first_mob}>
            <MobileFrame
              video="/videos/ev_33.mp4"
              fallback="https://onnxbbbfkidlh7fg.public.blob.vercel-storage.com/sara-o-events/event_vid_1.webp"
            />
          </div>
          <MobileFrame
            video="/videos/contactusmob2.mp4"
            fallback="https://onnxbbbfkidlh7fg.public.blob.vercel-storage.com/sara-o-events/contactusfall2.webp"
          />
        </div>
      </div>
    </section>
  );
}

export default Contactus;
