import styles from "./styles.module.css";

const SeatSelector = ({ seats, selectedSeats, onSeatToggle }) => {
  return (
    <div className={styles.seatSelector}>
      <h3 className={styles.seatSelectorTitle}>Выберите места</h3>

      <div className={styles.seatSelectorGrid}>
        {seats.map((seat) => {
          const isSelected = selectedSeats.includes(seat);

          return (
            <button
              key={seat}
              className={`${styles.seat} ${
                isSelected ? styles.seatSelected : ""
              }`}
              onClick={() => onSeatToggle(seat)}
            >
              {seat}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SeatSelector;
