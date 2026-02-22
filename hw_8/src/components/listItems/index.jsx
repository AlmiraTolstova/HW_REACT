import React from "react";
import { useEffect } from "react";

import { useState } from "react";

function ListItems() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    console.log("компонент обновлен");
  }, []);

  function adddItem() {
    setItems([...items, inputValue]);
    setInputValue("");
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Введите текст"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={adddItem}>Add element</button>
      <ul>
        {items.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default ListItems;
