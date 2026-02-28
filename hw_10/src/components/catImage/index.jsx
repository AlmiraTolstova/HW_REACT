import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

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
    <div>
      <img src={catData.url}></img>
      <button onClick={getCat}>New cat</button>
    </div>
  );
}

export default CatImage;
