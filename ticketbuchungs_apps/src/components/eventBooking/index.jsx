import { useState } from "react";
import EventDetails from "../eventDetails";
import SeatSelector from "../seatSelector";
import styles from "./styles.module.css";

const EventBooking = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const availableSeats = ["A1", "A2", "A3", "B1", "B2", "B3"];

  const handleSeatToggle = (seat) => {
    setSelectedSeats((prevSeats) =>
      prevSeats.includes(seat)
        ? prevSeats.filter((s) => s !== seat)
        : [...prevSeats, seat],
    );
  };

  return (
    <div className={styles.eventBooking}>
      <EventDetails
        title="Концерт Imagine Dragons"
        date="23.04.2026"
        location="Kazan"
      />

      <SeatSelector
        seats={availableSeats}
        selectedSeats={selectedSeats}
        onSeatToggle={handleSeatToggle}
      />

      <div className={styles.eventBookingSelected}>
        <h3>Выбранные места:</h3>
        <p>{selectedSeats.length > 0 ? selectedSeats.join(", ") : "Нет"}</p>
      </div>
    </div>
  );
};

export default EventBooking;
