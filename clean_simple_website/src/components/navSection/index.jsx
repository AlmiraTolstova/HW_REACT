import styles from "./styles.module.css";
function NavSection({ items }) {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        {items.map((item) => (
          <li key={item} className={styles.nav__item}>
            <a href={`#${item.toLowerCase()}`} className={styles.nav__link}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavSection;
