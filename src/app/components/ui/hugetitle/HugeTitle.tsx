// import styles from "./hugetitle.module.css";
// function HugeTitle({
//   text,
//   color,
//   textShadow,
//   fontPercentage,
// }: {
//   text: string;
//   color?: string;
//   textShadow?: string;
//   fontPercentage?: number;
// }) {
//   return (
//     <h1
//       className={`text-[208px] text-center z-4 relative mt-[2rem] ${styles.main_Title} lg:leading-[180px]`}
//       style={{
//         color: color || "var(--gold-color)",
//         textShadow: textShadow || "",
//         fontSize: fontPercentage * 208 || "208px",
//       }}
//     >
//       {text}
//     </h1>
//   );
// }

// export default HugeTitle;
import styles from "./hugetitle.module.css";

type HugeTitleProps = {
  text: string;
  color?: string;
  textShadow?: string;
  fontPercentage?: number;
};

const HugeTitle = ({
  text,
  color = "var(--gold-color)",
  textShadow,
  fontPercentage = 1,
}: HugeTitleProps) => {
  const fontSize = `${218 * fontPercentage}px`;

  return (
    <h1
      className={`text-center z-4 relative mt-[2rem] ${styles.main_Title} lg:leading-[180px]`}
      style={{
        color,
        textShadow,
        fontSize,
        ["--font-size-multiplier" as string]: fontPercentage,
      }}
    >
      {text}
    </h1>
  );
};

export default HugeTitle;
