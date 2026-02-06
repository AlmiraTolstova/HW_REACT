import styles from "./styles.module.css";

function CityCard({ img_link, description, facts }) {
  return (
    <div className={styles.cityCard}>
      <img src={img_link}></img>
      <p>{description}</p>
      <p>{facts}</p>
    </div>
  );
}
export default CityCard;
