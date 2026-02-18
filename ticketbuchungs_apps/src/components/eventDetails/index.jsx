import React from "react";

const EventDetails = ({ title, date, location }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>Дата: {date}</p>
      <p>Место: {location}</p>
    </div>
  );
};

export default EventDetails;
