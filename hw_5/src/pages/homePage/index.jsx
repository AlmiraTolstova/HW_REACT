import styles from "./styles.module.css";
import LogoBtns from "../../components/logoBtns";

function HomePages() {
  return (
    <main className={styles.home}>
      <h1 className={styles.title}>LIFE IS WASTED ON THE LIVING</h1>
      <p className={styles.text}>Sign in with</p>
      <LogoBtns />
    </main>
  );
}
export default HomePages;
