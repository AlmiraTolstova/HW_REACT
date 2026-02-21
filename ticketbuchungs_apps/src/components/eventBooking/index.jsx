import { useEffect, useState } from "react";
import EventDetails from "../eventDetails";
import SeatSelector from "../seatSelector";
import styles from "./styles.module.css";
import { DatePicker } from "antd";
import eventData from "../../data/eventData";

const EventBooking = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventsOnDate, setEventsOnDate] = useState([{ events: [] }]);
  //useEffect(() => {}, [eventsOnDate]);

  const availableSeats = ["A1", "A2", "A3", "B1", "B2", "B3"];

  const handleSeatToggle = (seat) => {
    setSelectedSeats((prevSeats) =>
      prevSeats.includes(seat)
        ? prevSeats.filter((s) => s !== seat)
        : [...prevSeats, seat],
    );
  };

  const onChange = (date, dateString) => {
    // console.log(
    //   new Date(date),
    //   dateString,
    //   new Date("2026-03-21"),
    //   new Date(date).getDate() == new Date("2026-03-21").getDate(),
    // );
    setSelectedDate(dateString);
    setEventsOnDate(
      eventData.filter((item) => {
        return item.date.getDate() === new Date(date).getDate();
      }),
    );
  };

  return (
    <div className={styles.eventBooking}>
      <DatePicker onChange={onChange} />
      {eventsOnDate.length > 0 ? (
        eventsOnDate[0].events.map((item, index) => {
          return (
            <EventDetails
              key={index}
              title={item.title}
              date={selectedDate}
              location={item.location}
              seats={item.seats}
              selectedSeats={selectedSeats}
              onSeatToggle={handleSeatToggle}
            />
          );
        })
      ) : (
        <div></div>
      )}

      {/* <SeatSelector
        seats={availableSeats}
        selectedSeats={selectedSeats}
        onSeatToggle={handleSeatToggle}
      /> */}

      <div className={styles.eventBookingSelected}>
        <h3>Выбранные места:</h3>
        <p>{selectedSeats.length > 0 ? selectedSeats.join(", ") : "Нет"}</p>
      </div>
    </div>
  );
};

export default EventBooking;
