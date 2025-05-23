import Link from "next/link";
import styles from "./packages.module.css";
import Packges from "../../data/packages";
import dynamic from "next/dynamic";
const HugeTitle = dynamic(() => import("@/components/ui/hugetitle/HugeTitle"));
const PackageCard = dynamic(
  () => import("../../components/ui/packagecard/PackageCard")
);

function Packages() {
  return (
    <section className="bg-[rgba(244,240,235,1)] pt-10 h-fit">
      <HugeTitle text="PACKAGES" mt="0px" />
      <div className={styles.main_package}>
        {/* <MainTitle title="Packages" /> */}
        <div className={styles.package_grid}>
          {Packges.map((item, index) => (
            <PackageCard
              img={item.coverImg}
              title={item.title}
              list={item.list}
              key={index}
            />
          ))}
        </div>
        <div className={styles.bottom_cont} data-aos="fade-up">
          <h1>Need something Bespoke? Get in touch</h1>
          <Link
            href="/#contactus"
            className="text-white py-2 px-6 bg-black inline-block mx-auto"
          >
            INQUIRE
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Packages;
