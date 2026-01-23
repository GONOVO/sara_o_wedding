import styles from "./hugetitle.module.css";

type HugeTitleProps = {
  text: string;
  color?: string;
  textShadow?: string;
  fontPercentage?: number;
  mt?: string;
  mtSm?: string;
  mtLg?: string;
};

const HugeTitle = ({
  text,
  color = "var(--gold-color)",
  textShadow,
  fontPercentage = 1,
  mt,
  mtSm,
  mtLg,
}: HugeTitleProps) => {
  const fontSize = `${218 * fontPercentage}px`;

  return (
    <h1
      className={`text-center z-4 relative ${styles.main_Title} lg:leading-[180px]`}
      style={{
        color,
        textShadow,
        fontSize,
        marginTop: mtSm || mt, // Default to mtSm if provided, otherwise use mt
        ["--font-size-multiplier" as string]: fontPercentage,
        ["--mt-lg" as string]: mtLg, // CSS custom property for large screens
      }}
      data-aos="zoom-in-out"
    >
      {text}
    </h1>
  );
};

export default HugeTitle;
