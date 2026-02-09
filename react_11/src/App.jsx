import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import HelpSection from "./pages/helpSection";
import HomePage from "./pages/home";
import VacancySection from "./pages/vacancySection";
import WorkByCategorySection from "./pages/workByCategorySection";

function App() {
  return (
    <>
      <Header />
      <HomePage />
      <HelpSection />
      <WorkByCategorySection />
      <VacancySection />
      <Footer />
    </>
  );
}

export default App;
