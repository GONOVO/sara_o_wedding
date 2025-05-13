import styles from "./hugetitle.module.css";

type HugeTitleProps = {
  text: string;
  color?: string;
  textShadow?: string;
  fontPercentage?: number;
  mt?: string;
};

const HugeTitle = ({
  text,
  color = "var(--gold-color)",
  textShadow,
  fontPercentage = 1,
  mt,
}: HugeTitleProps) => {
  const fontSize = `${218 * fontPercentage}px`;

  return (
    <h1
      className={`text-center z-4 relative  mt-[2rem] ${styles.main_Title} lg:leading-[180px]`}
      style={{
        color,
        textShadow,
        fontSize,
        marginTop: mt,
        ["--font-size-multiplier" as string]: fontPercentage,
      }}
      data-aos="zoom-in-out"
    >
      {text}
    </h1>
  );
};

export default HugeTitle;
