import styles from "./hugetitle.module.css";
function HugeTitle({ text }: { text: string }) {
  return (
    <h1
      className={`text-[#EEEDEB] text-[208px] text-center z-4 relative ${styles.main_Title}`}
    >
      {text}
    </h1>
  );
}

export default HugeTitle;
