import SearchBar from "../../components/searchBar";
import styles from "./styles.module.css";

function HomePage() {
  return (
    <main className={styles.home}>
      <div className={styles.homeContainer}>
        <h1 className={styles.title}>
          Один клик <span>и работа в кармане</span>
        </h1>
        <SearchBar />
      </div>
    </main>
  );
}
export default HomePage;
