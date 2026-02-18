import { useState } from "react";

function ColorForm({ colorFunction }) {
  // состояние выбранного цвета
  const [newColor, setNewColor] = useState("#ffffff");

  // обработка изменения цвета
  const handleChange = (event) => {
    setNewColor(event.target.value);
  };

  // отправка формы
  const handleSubmit = (event) => {
    event.preventDefault();
    colorFunction(newColor);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        padding: "20px",
        background: "#fff",
        borderRadius: "8px",
      }}
    >
      <input
        type="color"
        value={newColor}
        onChange={handleChange}
        style={{ width: "300px", height: "300px" }}
      />

      <button type="submit">Change background</button>
    </form>
  );
}

export default ColorForm;
