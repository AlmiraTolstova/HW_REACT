import { useState, useEffect } from "react";
import styles from "./styles.module.css";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isTimerOn, setIsTimerOn] = useState(false);

  useEffect(() => {
    if (isTimerOn) {
      const timeId = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);

      return () => {
        clearInterval(timeId);
      };
    }
  }, [isTimerOn]);

  return (
    <div>
      <p>{seconds}</p>
      <div>
        <button onClick={() => setIsTimerOn(true)}>Start</button>
        <button>Stop</button>
        <button>Reset</button>
      </div>
    </div>
  );
}
