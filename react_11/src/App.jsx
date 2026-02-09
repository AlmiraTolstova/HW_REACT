import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import HelpSection from "./pages/helpSection";
import HomePage from "./pages/home";

function App() {
  return (
    <>
      <Header />
      <HomePage />
      <HelpSection />
      <Footer />
    </>
  );
}

export default App;
