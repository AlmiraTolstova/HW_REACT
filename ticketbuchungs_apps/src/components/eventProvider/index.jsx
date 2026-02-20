import EventContext from "../../context/eventContext";
import { useState } from "react";
import eventData from "../../data/eventData";

function EventProvider({ children }) {
  const [seats, setSeats] = useState(eventData[0].events[0].seats);

  const toggleSeat = (id) => {
    setSeats((prev) =>
      prev.map((seat) =>
        seat.id === id ? { ...seat, isSelected: !seat.isSelected } : seat,
      ),
    );
  };

  const selectedSeats = seats
    .filter((seat) => seat.isSelected)
    .map((seat) => seat.id);

  return (
    <div>
      <EventContext.Provider
        value={{ seats, setSeats, toggleSeat, selectedSeats }}
      >
        {children}
      </EventContext.Provider>
    </div>
  );
}

export default EventProvider;
