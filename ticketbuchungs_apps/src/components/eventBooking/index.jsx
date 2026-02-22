import { useEffect, useState, useContext } from "react";
import EventDetails from "../eventDetails";
import SeatSelector from "../seatSelector";
import styles from "./styles.module.css";
import { DatePicker } from "antd";
import eventData from "../../data/eventData";
import EventContext from "../../context/eventContext";

const EventBooking = () => {
  // const [selectedSeats, setSelectedSeats] = useState([]);
  const { selectedDate, setSelectedDate } = useContext(EventContext);
  const { selectedDateString, setSelectedDateString } =
    useContext(EventContext);
  const { eventsOnDate, setEventsOnDate } = useContext(EventContext);
  const { seats, setSeats } = useContext(EventContext);

  const onChange = (date, dateString) => {
    setSelectedDate(date);
    setSelectedDateString(dateString);
  };

  return (
    <div className={styles.eventBooking}>
      <DatePicker onChange={onChange} />
      {eventsOnDate.length > 0 ? (
        eventsOnDate?.[0]?.events?.map((item, index) => {
          return (
            <EventDetails
              key={index}
              title={item.title}
              date={selectedDateString}
              location={item.location}
              seats={item.seats}
              item={item}
            />
          );
        })
      ) : (
        <div></div>
      )}
      {seats?.length > 0 ? (
        <div>Selected tickets</div>
      ) : (
        <div>Tickets list is empty</div>
      )}
      {seats?.map((item, index) => {
        return (
          <div key={index}>
            seat: {item.seat} event: {item.eventName}
          </div>
        );
      })}
    </div>
  );
};

export default EventBooking;
