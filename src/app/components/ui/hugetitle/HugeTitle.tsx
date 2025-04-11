import styles from "./hugetitle.module.css";
function HugeTitle({ text }: { text: string }) {
  return (
    <h1
      className={`text-[var(--gold-color)] text-[208px] text-center z-4 relative mt-[2rem] ${styles.main_Title} lg:leading-[180px]`}
    >
      {text}
    </h1>
  );
}

export default HugeTitle;
