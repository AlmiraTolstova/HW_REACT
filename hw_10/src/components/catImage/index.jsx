import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./styles.module.css";

function CatImage() {
  const CAT_API = "https://api.thecatapi.com/v1/images/search";

  async function getCat() {
    await axios
      .get(CAT_API)
      .then((response) => {
        console.log(response);
        setCatData(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("getCat is finished");
      });
  }

  const [catData, setCatData] = useState([]);

  useEffect(() => {
    getCat();
  }, []);
  return (
    <div className={styles.catCard}>
      <img src={catData.url}></img>
      <button className={styles.blueButton} onClick={getCat}>
        Load new Image
      </button>
    </div>
  );
}

export default CatImage;
