import Logo from "../../assets/Cooljob.png";
import ActionsHeader from "../actionsHeader";
import NavHeader from "../navHeader";
import styles from "./styles.module.css";

function Header() {
  const headerLinks = [
    { label: "Поиск работы", href: "#" },
    { label: "Поиск стартапов", href: "#" },
  ];
  const headerActions = [
    {
      label: "Регистрация",
      type: "primary",
      onClick: () => console.log("Регистрация"),
    },
    {
      label: "Вход",
      type: "secondary",
      onClick: () => console.log("Вход"),
    },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.containerBlock1}>
          <img src={Logo} alt="Cooljob" />

          <NavHeader links={headerLinks} />
        </div>
        <div>
          <ActionsHeader actions={headerActions} />
        </div>
      </div>
    </header>
  );
}

export default Header;
