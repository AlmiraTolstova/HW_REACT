import { useState } from "react";
import "./App.css";
import LanguageProvider from "./components/languageProvider";
import SwitchLanguage from "./components/switchLanguage";

function App() {
  return (
    <>
      <LanguageProvider>
        <SwitchLanguage></SwitchLanguage>
      </LanguageProvider>
    </>
  );
}

export default App;
