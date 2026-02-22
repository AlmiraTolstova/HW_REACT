import EventContext from "../../context/eventContext";
import { useEffect, useState } from "react";
import eventData from "../../data/eventData";

function EventProvider({ children }) {
  // 1. Основной источник правды (вся база событий)
  const [defEventData, setDefEventData] = useState([{ events: [] }]);
  // 2. Выбранная дата (объект дня из DatePicker)
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDateString, setSelectedDateString] = useState(null);
  // 3. Отфильтрованные события
  const [eventsOnDate, setEventsOnDate] = useState([{ events: [] }]);

  const [seats, setSeats] = useState([]);

  // Загружаем данные один раз при старте
  useEffect(() => {
    setDefEventData(eventData);
  }, []);

  // Синхронизирует отфильтрованный список при любом изменении базы или даты
  useEffect(() => {
    if (!selectedDate) {
      setEventsOnDate([]);
      return;
    }

    const filteredEvents = defEventData.filter((item) => {
      return item.date.getDate() === new Date(selectedDate).getDate();
    });
    setEventsOnDate(filteredEvents);
  }, [defEventData, selectedDate]);

  function occupySeat(seat, item) {
    const foundSeat = seats.find((selSeat) => {
      return (selSeat.seat === seat.label) & (selSeat.eventName === item.title);
    });

    if (foundSeat) {
      let tempSeatsList = seats;
      setSeats(
        tempSeatsList.filter((selSeat) => {
          return (
            (selSeat.label === seat.label) & (selSeat.eventName === item.title)
          );
        }),
      );
    } else {
      let tempSeatsList = seats;
      tempSeatsList.push({
        seat: seat.label,
        eventName: item.title,
      });
      setSeats(tempSeatsList);
    }
    setDefEventData((prevData) => {
      return prevData.map((day) => ({
        ...day,
        events: day.events.map((event) => {
          if (event.id === item.id) {
            return {
              ...event,
              seats: event.seats.map((s) => {
                if (s.id === seat.id) {
                  return { ...s, isSelected: !s.isSelected };
                }
                return s;
              }),
            };
          }
          return event;
        }),
      }));
    });
  }

  return (
    <div>
      <EventContext.Provider
        // value={{ seats, setSeats, toggleSeat, selectedSeats }}
        value={{
          selectedDate,
          setSelectedDate,
          selectedDateString,
          setSelectedDateString,
          eventsOnDate,
          setEventsOnDate,
          defEventData,
          setDefEventData,
          occupySeat,
          seats,
          setSeats,
        }}
      >
        {children}
      </EventContext.Provider>
    </div>
  );
}

export default EventProvider;
