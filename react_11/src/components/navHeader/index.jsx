import styles from "./styles.module.css";

function NavHeader({ links }) {
  return (
    <nav className={styles.container}>
      {links.map((item, index) => (
        <a key={index} href={item.href}>
          {item.label}
        </a>
      ))}
    </nav>
  );
}

export default NavHeader;
