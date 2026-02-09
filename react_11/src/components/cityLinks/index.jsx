import styles from "./styles.module.css";

function CityLinks({ cities }) {
  return (
    <nav className={styles.navCities}>
      {cities.map((city) => (
        <a className={styles.navLink} key={city} href="#">
          {city}
        </a>
      ))}
    </nav>
  );
}

export default CityLinks;
