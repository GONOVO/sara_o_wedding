"use client";

import Link from "next/link";
import styles from "./footer.module.css";
import Image from "next/image";
import links from "@/data/links";
import socialMedia from "@/data/socilamedia";
import { INavItem } from "@/utils/interfaces";

function Footer() {
  const images = [
    "/images/foot2.webp",
    "/images/foot1.webp",
    "/images/foot3.webp",
  ];
  // Clientexperience@saraoevent.com
  // Create footer links including dropdown items
  const footerLinks: INavItem[] = [];

  links.forEach((link: INavItem) => {
    if (link.dropdown && link.items) {
      // Add dropdown items to footer
      footerLinks.push(...link.items);
    } else if (!link.dropdown) {
      // Add regular links to footer
      footerLinks.push(link);
    }
  });

  return (
    <footer className={styles.footer}>
      <div className={styles.main_grid_footer}>
        <div>
          <div className={styles.title}>
            <span data-aos="fade-up">Explore our latest work on</span>
            <h1 data-aos="fade-up">Instagram</h1>
          </div>
          <div className={styles.gallery}>
            <div className={styles.images_container}>
              {images.map((item, index) => (
                <Link
                  href="https://www.instagram.com/saraoevents/?igsh=MW8zMnFtd2ZxMGozeg%3D%3D#"
                  key={index}
                >
                  <Image
                    src={item}
                    className={`object-cover ${styles.gImage}`}
                    alt="insta Image"
                    fill
                    quality={80}
                    loading="lazy"
                    data-aos="zoom-in-out"
                  />
                </Link>
              ))}
            </div>
            <div className="flex gap-4 my-8 justify-center  w-[96%] mx-auto flex-wrap relative">
              {socialMedia.map((item, index) => {
                if (item.name && item.address) {
                  // This is a location item - show dropdown with both addresses
                  return (
                    <div key={index} className="group">
                      <div
                        className="w-[36px] h-[36px] border-2 border-[#e0cfb9] rounded-full flex items-center justify-center p-2 cursor-pointer"
                        onClick={(e) => {
                          e.preventDefault();
                          const tooltip = e.currentTarget.nextElementSibling;
                          if (tooltip) {
                            const isVisible =
                              tooltip.classList.contains("opacity-100");
                            tooltip.classList.remove(
                              "opacity-100",
                              "opacity-0"
                            );
                            tooltip.classList.add(
                              isVisible ? "opacity-0" : "opacity-100"
                            );
                          }
                        }}
                      >
                        <Image
                          src={item.svg}
                          alt="location"
                          width={24}
                          height={24}
                          loading="lazy"
                          className="w-5 h-5"
                        />
                      </div>
                      {/* Dropdown tooltip with both addresses */}
                      <div className="absolute bottom-full mb-2 opacity-0 transition-all duration-500 delay-300 pointer-events-auto mx-auto w-fit sm:fixed sm:bottom-4 left-[3%] sm:left-0 sm:right-0 sm:mx-auto sm:w-fit sm:z-50 md:absolute md:bottom-full md:left-1/2 md:transform md:-translate-x-1/2 lg:w-[300px]">
                        <div className="bg-white border border-[#e0cfb9] rounded-lg p-3 shadow-lg w-[90vw] lg:w-full text-center">
                          <h4 className="text-sm font-medium text-[var(--semiGray-color)] mb-3">
                            Choose Location
                          </h4>
                          <div className="space-y-2">
                            <Link
                              href="https://www.google.com/maps/place/103+Ibadan+St,+Ebute+Metta,+Lagos+101245,+Lagos,+Nigeria/@6.4880883,3.3855408,865m/data=!3m2!1e3!4b1!4m6!3m5!1s0x103b8c84bef8b8d7:0x78e7c137fc1a2d9a!8m2!3d6.4880883!4d3.3881157!16s%2Fg%2F11ggw1tcg6?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block p-2 rounded hover:bg-gray-50 transition-colors"
                            >
                              <span className="text-sm font-medium text-[var(--semiGray-color)] hover:text-[var(--gold-color)]">
                                Lagos, Nigeria
                              </span>
                              <br />
                              <span className="text-xs text-gray-500">
                                103 Ibadan St, Ebute Metta, Lagos
                              </span>
                            </Link>
                            <Link
                              href="https://www.google.com/maps/place/13+The+Crossways,+Wembley+HA9+9NG,+UK/@51.5675553,-0.2837141,1083m/data=!3m1!1e3!4m6!3m5!1s0x4876116333cfb7c3:0x685030d6a0359a57!8m2!3d51.5675553!4d-0.2789505!16s%2Fg%2F11ggw1tcg6?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block p-2 rounded hover:bg-gray-50 transition-colors"
                            >
                              <span className="text-sm font-medium text-[var(--semiGray-color)] hover:text-[var(--gold-color)]">
                                London, UK
                              </span>
                              <br />
                              <span className="text-xs text-gray-500">
                                13 The Crossways, Wembley HA9 9NG, UK
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                } else {
                  // This is a regular social media item
                  return (
                    <Link
                      key={index}
                      href={item.link}
                      className="relative w-[36px] h-[36px] border-2 border-[#e0cfb9] rounded-full flex items-center justify-center p-2"
                      data-aos="flip-left"
                      data-aos-delay={index * 100}
                      data-aos-offset="0"
                    >
                      <Image
                        src={item.svg}
                        alt={item.name || "social media"}
                        width={24}
                        height={24}
                        loading="lazy"
                        className="w-5 h-5"
                      />
                    </Link>
                  );
                }
              })}
            </div>
          </div>
        </div>
        <div className={styles.middle} data-aos="zoom-in-out">
          <div className="mx-[12%] flex items-center flex-col gap-2 text-[var(--semiGray-color)] w-fit">
            <div className="flex items-end">
              <p className="h-fit text-xs">EST.D</p>
              <div className="relative w-14 h-14 mx-2">
                <Image
                  src="/svgs/s_logo.svg"
                  alt="S logo"
                  fill
                  loading="lazy"
                />
              </div>
              <p className="h-fit text-xs">2010</p>
            </div>
            <div>
              <div className="relative w-40 h-20 m-auto">
                <Image
                  src="/svgs/sara_o.svg"
                  alt="sara_o"
                  fill
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div style={{ marginTop: "2rem", textAlign: "center" }}>
            <span className={styles.copyright}>
              © 2025 SARA.O
              <br /> Proudly Designed by{" "}
              <Link
                className="font-semibold hover:underline"
                href="https://gonovo.tech/"
              >
                GONOVO
              </Link>
            </span>
            <div className={styles.terms_polices_container}>
              <Link href="/" className={styles.terms_Polices}>
                Terms & Conditions
              </Link>
              <span style={{ margin: "0 2px" }}> | </span>
              <Link href="/" className={styles.terms_Polices}>
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.dis_menu_Mobile}>
          <div className={styles.title}>
            <span data-aos="fade-up">Quick</span>
            <h1 data-aos="fade-up">Menu</h1>
          </div>
          <ul data-aos="fade-up">
            {footerLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.path ?? "/"}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
