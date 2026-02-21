import React, { useState } from "react";
import styles from "./styles.module.css";
import { Modal } from "antd";
import SeatSelector from "../seatSelector";

const EventDetails = ({
  title,
  date,
  location,
  seats,
  selectedSeats,
  onSeatToggle,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div onClick={() => setIsModalOpen(true)} className={styles.eventDetails}>
        <h2 className={styles.eventDetailsTitle}>{title}</h2>
        <p className={styles.eventDetailsInfo}>Дата: {date}</p>
        <p className={styles.eventDetailsInfo}>Место: {location}</p>
      </div>
      <Modal
        title={title}
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={() => handleOk()}
        onCancel={handleCancel}
      >
        <SeatSelector
          seats={seats}
          selectedSeats={selectedSeats}
          onSeatToggle={onSeatToggle}
        />
      </Modal>
    </div>
  );
};

export default EventDetails;
