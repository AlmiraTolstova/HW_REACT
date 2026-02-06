import { useState } from "react";
import CityCard from "../cityCard";

import styles from "./styles.module.css";

const citiesData = [
  {
    name: "Токио",

    description:
      "Столица Японии, известная своими неоновыми огнями, многолюдностью и современной архитектурой.",

    imageUrl:
      "https://www.topmagazine.cz/wp-content/uploads/2021/06/tokio-1024x576.jpg",

    facts: [
      "Токио - самый населенный мегаполис в мире.",

      "Здесь расположена самая высокая башня в Японии - Токийская башня.",

      "В Токио проходят множество культурных событий и фестивалей.",
    ],
  },

  {
    name: "Киото",

    description:
      "Город на острове Хонсю, известный своими многочисленными классическими буддийскими храмами, а также садами, императорскими дворцами, синтоистскими святилищами и традиционными деревянными домами.",

    imageUrl: "https://voyagejapan.com/files/core/407_image.jpg",

    facts: [
      "В Киото насчитывается более 1600 буддийских храмов.",

      "Этот город был столицей Японии более тысячи лет.",
    ],
  },

  {
    name: "Осака",

    description:
      "Город в центральной части острова Хонсю, известен своими современными достопримечательностями и активной ночной жизнью.",

    imageUrl:
      "https://www.guidesulysse.com/images/destinations/iStock-458229395.jpg",

    facts: [
      "Осака известна своим замком, который играл ключевую роль в объединении Японии в XVI веке.",

      "Город является кулинарной столицей Японии.",
    ],
  },

  {
    name: "Хоккайдо",

    description:
      "Самый северный остров Японии, известный своей природой, снежными фестивалями и уникальной культурой.",

    imageUrl:
      "https://pohcdn.com/sites/default/files/styles/paragraph__live_banner__lb_image__1660bp/public/live_banner/Hokkaido.jpg",

    facts: [
      "Хоккайдо предлагает отличные условия для зимних видов спорта, особенно для лыжного спорта и сноубординга.",

      "Летом остров привлекает туристов своими цветущими лавандовыми полями.",
    ],
  },

  {
    name: "Нагоя",

    description:
      "Город в центре Хонсю, известен своим отраслевым влиянием и историческими достопримечательностями.",

    imageUrl:
      "https://wrenjapan.com/wp-content/uploads/2025/01/nagoyacastle-1095x730.jpg",

    facts: [
      "Нагоя - один из важнейших промышленных городов Японии, центр автомобилестроения.",

      "Здесь находится известный Нагойский замок с позолоченными делфинами на крыше.",
    ],
  },
];

function CitySelector() {
  const [value, setValue] = useState(0);

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div className={styles.citySelector}>
      <form>
        <label>
          Выберите город:
          <select value={value} onChange={handleChange}>
            {citiesData.map((item, index) => {
              return (
                <option key={index} value={index}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </label>
      </form>
      <CityCard
        img_link={citiesData[value].imageUrl}
        description={citiesData[value].description}
        facts={citiesData[value].facts}
      />
    </div>
  );
}
export default CitySelector;
