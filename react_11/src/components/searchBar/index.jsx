import styles from "./styles.module.css";
import LocationIcon from "../../assets/icons/locationIcon.svg";
import SearchIcon from "../../assets/icons/searchIcon.svg";

export default function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <div className={styles.searchField}>
        <img src={SearchIcon} alt="location" className={styles.searchIcon} />
        <input type="text" placeholder="Должность или компания" />
      </div>

      <div className={styles.divider} />

      <div className={styles.searchField}>
        <img
          src={LocationIcon}
          alt="location"
          className={styles.locationIcon}
        />
        <input type="text" placeholder="Город, Страна" />
      </div>

      <button className={styles.searchButton}>Поиск</button>
    </div>
  );
}
