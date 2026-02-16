import { useState } from "react";
import LanguageContext from "../../context/languageContext";

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("deutsch");
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;
