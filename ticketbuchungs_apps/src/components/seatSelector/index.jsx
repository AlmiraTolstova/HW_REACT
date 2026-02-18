const SeatSelector = ({ seats, selectedSeats, onSeatToggle }) => {
  return (
    <div>
      <h3>Выберите места</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {seats.map((seat) => (
          <li key={seat}>
            <button
              onClick={() => onSeatToggle(seat)}
              style={{
                margin: "5px",
                backgroundColor: selectedSeats.includes(seat)
                  ? "green"
                  : "lightgray",
              }}
            >
              {seat}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SeatSelector;
