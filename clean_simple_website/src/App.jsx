import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import HomePage from "./pages/homePage";
import ClientLogoSection from "./components/clientLogosSection";

function App() {
  return (
    <>
      <h1>New Project</h1>
      <Header></Header>
      <HomePage />
      <ClientLogoSection />
    </>
  );
}

export default App;
