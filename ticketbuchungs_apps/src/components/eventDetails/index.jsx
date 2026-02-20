import React from "react";
import styles from "./styles.module.css";

const EventDetails = ({ title, date, location }) => {
  return (
    <div className={styles.eventDetails}>
      <h2 className={styles.eventDetailsTitle}>{title}</h2>
      <p className={styles.eventDetailsInfo}>Дата: {date}</p>
      <p className={styles.eventDetailsInfo}>Место: {location}</p>
    </div>
  );
};

export default EventDetails;
