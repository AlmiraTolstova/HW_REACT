import styles from "./styles.module.css";
import ThemeSwitcher from "../themeSwitcher/index";

function Header(props) {
  const { theme, changeTheme } = props;
  return (
    <header className={`${styles.header} ${styles[theme]}`}>
      <h1 className={styles.title}>Header</h1>

      <div className={styles.switcher}>
        <ThemeSwitcher theme={theme} changeTheme={changeTheme} />
      </div>
    </header>
  );
}

export default Header;
