import GeoIcon from "../../assets/icons/locationIcon.svg";
import styles from "./styles.module.css";

function VacancyCard({
  iconColor,
  title,
  position,
  location,
  logo,
  company,
  timeStamp,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.cardTitle}>
        <div
          style={{
            backgroundColor: iconColor,
            width: "14px",
            height: "14px",
            marginRight: "17px",
            borderRadius: "50%",
          }}
        ></div>
        <h6>{title}</h6>
      </div>
      <h5>{position}</h5>
      <div className={styles.cardGeo}>
        <img src={GeoIcon}></img>
        <span>{location}</span>
      </div>
      <div className={styles.cardCompanyDate}>
        <img src={logo}></img>
        <span>
          {company}
          {timeStamp}
        </span>
      </div>
    </div>
  );
}

export default VacancyCard;
