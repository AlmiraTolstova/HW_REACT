import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import HomePage from "./pages/homePage";
import ClientLogoSection from "./components/clientLogosSection";
import DesktopMobileSection from "./components/desktopMobileSection";
import AboutUSSection from "./components/aboutUsSection";

function App() {
  return (
    <>
      <Header></Header>
      <HomePage />
      <ClientLogoSection />
      <DesktopMobileSection />
      <AboutUSSection />
    </>
  );
}

export default App;
