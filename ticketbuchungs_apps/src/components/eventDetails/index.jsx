import React, { useState, useContext } from "react";
import styles from "./styles.module.css";
import { Modal } from "antd";
import SeatSelector from "../seatSelector";
import EventContext from "../../context/eventContext";

const EventDetails = ({ title, date, location, seats, item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setSeats } = useContext(EventContext);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className={styles.eventDetails}>
        <h2 className={styles.eventDetailsTitle}>{title}</h2>
        <p className={styles.eventDetailsInfo}>Дата: {date}</p>
        <p className={styles.eventDetailsInfo}>Место: {location}</p>
        <button
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          Buy a ticket
        </button>
      </div>
      <Modal
        title={title}
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={() => handleOk()}
        onCancel={handleCancel}
      >
        <SeatSelector item={item} />
      </Modal>
    </div>
  );
};

export default EventDetails;
