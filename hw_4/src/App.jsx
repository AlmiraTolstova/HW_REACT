import { useState } from "react";

import "./App.css";
import CitySelector from "./components/citySelector";
import MathQuiz from "./components/mathQuiz";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <h1>Task 1</h1>
      <CitySelector />
      <h2>Task 2</h2>
      <MathQuiz></MathQuiz>
    </>
  );
}

export default App;
