import { useState } from "react";

import "./App.css";
import CitySelector from "./components/citySelector";
import MathQuiz from "./components/mathQuiz";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <CitySelector />
      <MathQuiz></MathQuiz>
    </>
  );
}

export default App;
