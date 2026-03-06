import styles from "./styles.module.css";
import { useRef, useState, useEffect } from "react";

function ToggleText() {
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const [duration, setDuration] = useState(200);
  const [height, setHeight] = useState("auto");

  useEffect(() => {
    const el = textRef.current;
    if (el) return;
    if (isVisible) {
      setHeight(el.scrollHeight + "px");
    } else {
      setHeight("0px");
    }
  }, [isVisible]);

  const toggleText = () => {};

  return (
    <div>
      <h1> Скрытие и отображение текста с анимацией</h1>
      <button onClick={toggleText}>Скрыть текст</button>
      <div ref={textRef}>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit
        </p>
      </div>
    </div>
  );
}

export default ToggleText;
