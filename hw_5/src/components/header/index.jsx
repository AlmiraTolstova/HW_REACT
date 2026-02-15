import styles from "./styles.module.css";
import LogoSpotify from "../../assets/spotify.svg";

function Header() {
  return (
    <div className={styles.header}>
      <img src={LogoSpotify}></img>
    </div>
  );
}

export default Header;
