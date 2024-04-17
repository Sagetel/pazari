import styles from "./page.module.scss";
import FilterMain from "../../components/filterMain";
export default function Home() {
  return (
    <main className={styles.main}>
      <FilterMain />
    </main>
  );
}
