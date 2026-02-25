import Header from "../../header";
import styles from "./styles.module.css";

function HomePage() {
  const headerLinks = [
    { label: "Главная", path: "/" },
    { label: "Музыка", path: "/music" },
    { label: "Сообщества", path: "/communities" },
    { label: "Друзья", path: "/friends" },
  ];
  return (
    <div>
      <Header links={headerLinks}></Header>
    </div>
  );
}
export default HomePage;
