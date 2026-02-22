import "./App.css";
import React from "react";
import EventBooking from "./components/eventBooking";
import EventProvider from "./components/eventProvider";

function App() {
  return (
    <div>
      <EventProvider>
        <EventBooking></EventBooking>
      </EventProvider>
    </div>
  );
}

export default App;
