import styles from "./styles.module.css";

function Footer(props) {
  const { theme } = props;
  return (
    <footer className={`${styles.footer} ${styles[theme]}`}>
      <p className={styles.copy}>2026 Footer</p>

      <p className={styles.info}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam{" "}
      </p>
    </footer>
  );
}

export default Footer;
