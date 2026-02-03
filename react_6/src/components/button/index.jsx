import styles from "./styles.module.css";

function Button({ title }) {
  console.log(styles);

  return <button className={styles.button}>{title}</button>;
}

export default Button;
