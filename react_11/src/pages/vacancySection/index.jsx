import Sony from "../../assets/vacancyLogos/Sony.svg";
import Facebook from "../../assets/vacancyLogos/facebook.svg";
import Cola from "../../assets/vacancyLogos/Cola.svg";
import styles from "./styles.module.css";

import VacancyCard from "../../components/vacancyCard";

function VacancySection() {
  const vacancyList = [
    {
      iconColor: "#5182FF",
      title: "Финансы",
      position: "Менеджер по управлению финансами в крупной компании",
      location: "Осака, Япония",
      logo: Sony,
      company: "Sony,",
      timeStamp: " 3 дня назад",
    },
    {
      iconColor: "#FF51EE",
      title: "Продажи",
      position: "Специалист по продажам",
      location: "Коясан, Япония",
      logo: Facebook,
      company: "Facebook,",
      timeStamp: " 7 дней назад",
    },
    {
      iconColor: "#58D94D",
      title: "Служба поддержки",
      position: "Оператор колл центра",
      location: "Томаму, Япония",
      logo: Cola,
      company: "CocaCola,",
      timeStamp: " 1 день назад",
    },
    {
      iconColor: "#FF9051",
      title: "Мультимедиа",
      position: "Системный администратор",
      location: "Токио, Япония",
      logo: Sony,
      company: "Sony,",
      timeStamp: " 3 дня назад",
    },
    {
      iconColor: "#F84242",
      title: "Дизайн",
      position: "Дизайнер интерьера в профессиональную студию в центре города",
      location: "Йокогама, Япония",
      logo: Facebook,
      company: "Facebook,",
      timeStamp: " 7 дней назад",
    },
    {
      iconColor: "#383838",
      title: "Грузоперевозки",
      position: "Водитель на дальние дистанции",
      location: "Кобе. Япония",
      logo: Cola,
      company: "CocaCola,",
      timeStamp: " 1 день назад",
    },
  ];
  return (
    <section className={styles.vacancySecion}>
      <div className={styles.container}>
        <h2>Новые вакансии</h2>
        <p>Найди работу своей мечты прямо сейчас</p>
        <div className={styles.cardsContainer}>
          {vacancyList.map((item, index) => {
            return (
              <VacancyCard
                key={index}
                iconColor={item.iconColor}
                title={item.title}
                position={item.position}
                location={item.location}
                logo={item.logo}
                company={item.company}
                timeStamp={item.timeStamp}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default VacancySection;
