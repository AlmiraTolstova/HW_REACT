import styles from "./styles.module.css";

const SeatSelector = ({ seats, selectedSeats, onSeatToggle }) => {
  return (
    <div className={styles.seatSelector}>
      <h3 className={styles.seatSelectorTitle}>Выберите места</h3>

      <div className={styles.seatSelectorGrid}>
        {seats.map((seat, index) => {
          return (
            <button
              key={index}
              className={`${styles.seat} ${
                seat.isSelected ? styles.seatSelected : ""
              }`}
              // onClick={() => onSeatToggle(seat)}
            >
              {index}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SeatSelector;
