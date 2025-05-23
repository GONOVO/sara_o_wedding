import Link from "next/link";
import styles from "./footer.module.css";
import Image from "next/image";
import links from "@/data/links";
import socialMedia from "@/data/socilamedia";

function Footer() {
  const images = [
    "/images/foot2.webp",
    "/images/foot1.webp",
    "/images/foot3.webp",
  ];
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
            <div className="flex gap-4 my-8 justify-center  w-[96%] mx-auto flex-wrap">
              {socialMedia.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="relative w-[36px] h-[36px]  border-2 border-[#e0cfb9] rounded-full flex items-center justify-center p-2"
                  data-aos="flip-left"
                  data-aos-delay={index * 100}
                  data-aos-offset="0"
                >
                  <Image
                    src={item.svg}
                    alt="instagrame"
                    width={24}
                    height={24}
                    loading="lazy"
                    className="w-5 h-5"
                  />
                </Link>
              ))}
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
            {links.map((link, index) => (
              <li key={index}>
                <Link href={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
