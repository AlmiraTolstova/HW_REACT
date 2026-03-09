import { Link } from "react-router-dom";
import "./styles.css";
import { PieChart } from "@mui/x-charts/PieChart";
import { useContext } from "react";
import StoreContext from "../../context/storeContext";
import { Flex } from "antd";

const settings = {
  margin: { right: 5 },
  width: 200,
  height: 200,
  hideLegend: false,
};

function Home() {
  const { statisticsData } = useContext(StoreContext);

  const data = [
    {
      label: "Мест всего",
      value: statisticsData.placesCount,
      color: "#0088FE",
    },
    {
      label: "Мест в избранном",
      value: statisticsData.favoritesCount,
      color: "#00C49F",
    },
  ];

  const data2 = [
    {
      label: "Задач всего",
      value: statisticsData.taskCount,
      color: "#0088FE",
    },
    {
      label: "Задач выполнено",
      value: statisticsData.taskCompletedCount,
      color: "#00C49F",
    },
  ];

  return (
    <div className="home">
      <div className="hero">
        <h1>Добро пожаловать в наш город!</h1>
        <p>Откройте для себя удивительные места и достопримечательности</p>
        <Link to="/districts" className="cta-button">
          Исследовать районы →
        </Link>
        <div>
          <div>
            <p>Объекты</p>
            <PieChart
              series={[
                {
                  innerRadius: 50,
                  outerRadius: 100,
                  data: data,
                  arcLabel: "value",
                },
              ]}
              {...settings}
            />
          </div>
          <p>Задачи</p>
          <PieChart
            series={[
              {
                innerRadius: 50,
                outerRadius: 100,
                data: data2,
                arcLabel: "value",
              },
            ]}
            {...settings}
          />
        </div>
      </div>
      <div className="features">
        <h2>Почему стоит посетить наш город?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <span className="feature-icon">🏛️</span>
            <h3>Богатая история</h3>
            <p>
              Город с вековой историей и уникальными памятниками архитектуры
            </p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🌳</span>
            <h3>Живописные парки</h3>
            <p>Множество зеленых зон для отдыха и прогулок</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🎭</span>
            <h3>Культурная жизнь</h3>
            <p>Театры, музеи и выставки на любой вкус</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
