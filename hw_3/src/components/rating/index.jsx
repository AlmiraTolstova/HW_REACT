import styles from "./styles.module.css";
import { useState } from "react";

function Rating() {
  const ratingList = [
    "https://www.clipartmax.com/png/middle/297-2970338_rating-2-out-of-5-gold-stars.png",
    "https://www.clipartmax.com/png/middle/73-731815_stars-clipart-2-5-star-rating.png",
    "https://www.clipartmax.com/png/middle/67-676956_out-of-3-out-of-5-star-rating.png",
    "https://www.clipartmax.com/png/middle/67-676995_5-star-rating-png.png",
  ];
  const [ratingValue, setRatingValue] = useState(0);

  return (
    <div className={styles.container}>
      <img src={ratingList[ratingValue]}></img>
      <div className={styles.btnContainer}>
        <button className={styles.bad} onClick={() => setRatingValue(0)}>
          Плохо
        </button>
        <button className={styles.ok} onClick={() => setRatingValue(1)}>
          Приемлемо
        </button>
        <button className={styles.good} onClick={() => setRatingValue(2)}>
          Хорошо
        </button>
        <button className={styles.excellent} onClick={() => setRatingValue(3)}>
          Отлично
        </button>
      </div>
    </div>
  );
}

export default Rating;
