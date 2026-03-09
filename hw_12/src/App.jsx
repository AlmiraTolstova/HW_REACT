import { useState } from "react";
import "./App.css";
import ValueDisplay from "./components/valueDisplay";

function App() {
  const [value, setValue] = useState("");

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      ></input>
      <ValueDisplay value={value}></ValueDisplay>
    </div>
  );
}

export default App;
