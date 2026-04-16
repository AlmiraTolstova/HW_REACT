import { useSelector } from "react-redux";
import styles from "./styles.module.css";

function Result() {
  const { result, submitted } = useSelector((state) => state.questionnaire);

  if (!submitted) return null;

  return (
    <div className={styles.result}>
      <h2>Your score:</h2>
      <p>{result}</p>
    </div>
  );
}

export default Result;
