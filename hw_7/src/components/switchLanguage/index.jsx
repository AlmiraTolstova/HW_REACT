import { useContext } from "react";
import LanguageContext from "../../context/languageContext";

function SwitchLanguage() {
  const { language, setLanguage } = useContext(LanguageContext);

  function toogleLanguage() {
    setLanguage(language === "deutsch" ? "russisch" : "deutsch");
  }

  return (
    <div>
      <h2>{language}</h2>
      <button onClick={toogleLanguage}>Switch language</button>
    </div>
  );
}
export default SwitchLanguage;
