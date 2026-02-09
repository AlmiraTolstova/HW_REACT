import Icon1 from "../../assets/icons/icon1.svg";
import Icon2 from "../../assets/icons/Icon2.svg";
import Icon3 from "../../assets/icons/icon3.svg";
import Icon4 from "../../assets/icons/icon4.svg";
import Icon5 from "../../assets/icons/icon5.svg";
import Icon6 from "../../assets/icons/icon6.svg";
import Icon7 from "../../assets/icons/icon7.svg";
import Icon8 from "../../assets/icons/icon8.svg";
import Icon9 from "../../assets/icons/icon9.svg";
import Icon10 from "../../assets/icons/Vector.svg";
import WorkByCategoryCard from "../../components/workByCategoryCard";
import styles from "./styles.module.css";

function WorkByCategorySection() {
  const iconsList = [
    {
      icon: Icon1,
      title: "Финансы",
    },
    {
      icon: Icon2,
      title: "Грузоперевозки",
    },
    {
      icon: Icon3,
      title: "Дизайн",
    },
    {
      icon: Icon4,
      title: "Ресторанный бизнес",
    },
    {
      icon: Icon5,
      title: "Медицина",
    },
    {
      icon: Icon6,
      title: "Мультимедиа",
    },
    {
      icon: Icon7,
      title: "Служба поддержки",
    },
    {
      icon: Icon8,
      title: "Менеджмент",
    },
    {
      icon: Icon9,
      title: "Продажи",
    },
  ];
  return (
    <section className={styles.category}>
      <div className={styles.container}>
        <h2>Работа по категориям</h2>
        <div className={styles.cardContainer}>
          {iconsList.map((item, index) => {
            return (
              <WorkByCategoryCard
                key={index}
                icon={item.icon}
                title={item.title}
              />
            );
          })}
          <div className={styles.cardLink}>
            <img src={Icon10}></img>
            <h4>{"Больше категорий"}</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
export default WorkByCategorySection;
