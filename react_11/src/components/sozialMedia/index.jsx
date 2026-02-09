import styles from "./styles.module.css";

function SozialMedia({ icon }) {
  return <img className={styles.icon} src={icon}></img>;
}

export default SozialMedia;
