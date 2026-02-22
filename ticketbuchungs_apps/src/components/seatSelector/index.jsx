import styles from "./styles.module.css";
import { useEffect, useState, useContext } from "react";
import EventContext from "../../context/eventContext";

const SeatSelector = ({ item }) => {
  const { occupySeat, eventsOnDate } = useContext(EventContext);

  // Находим актуальную версию нашего события в контексте
  // eventsOnDate — это массив дат, внутри которых есть массив events
  // В вашем текущем провайдере вы кладете туда [{events: [...]}]
  const currentEvent = eventsOnDate[0]?.events?.find((e) => e.id === item.id);
  const currentSeats = currentEvent ? currentEvent.seats : item.seats;

  return (
    <div className={styles.seatSelector}>
      <h3 className={styles.seatSelectorTitle}>Выберите места</h3>

      <div className={styles.seatSelectorGrid}>
        {currentSeats.map((seat, index) => {
          return (
            <button
              key={seat.id || index}
              className={`${styles.seat} ${
                seat.isSelected ? styles.seatSelected : ""
              }`}
              onClick={() => occupySeat(seat, item)}
            >
              {seat.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SeatSelector;
