import styles from "./styles.module.css";

function WorkByCategoryCard({ icon, title }) {
  return (
    <div className={styles.card}>
      <img src={icon}></img>
      <h4>{title}</h4>
    </div>
  );
}
export default WorkByCategoryCard;
