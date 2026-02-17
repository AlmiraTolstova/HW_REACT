import { useContext } from "react";
import LanguageContext from "../../context/languageContext";
import styles from "./styles.module.css";

function SwitchLanguage() {
  const { language, setLanguage } = useContext(LanguageContext);

  function toogleLanguage() {
    setLanguage(language === "deutsch" ? "russisch" : "deutsch");
  }

  return (
    <div className={styles.card}>
      <h2>
        {language === "deutsch"
          ? "Deutsch wurde gewählt"
          : "Выбран русский язык"}
      </h2>
      <button onClick={toogleLanguage}>Switch language</button>
    </div>
  );
}
export default SwitchLanguage;
