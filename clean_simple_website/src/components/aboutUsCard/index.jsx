import styles from "./styles.module.css";

function AboutUsCard({ imgLink, title, description }) {
  return (
    <div className={styles.container}>
      <img src={imgLink}></img>
      <h6>{title}</h6>
      <p>{description}</p>
    </div>
  );
}

export default AboutUsCard;
