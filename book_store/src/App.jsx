import "./App.css";
import Header from "./components/header";
import Main from "./pages/main";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Main></Main>} />
        <Route path="/readers" element={<Main></Main>} />
      </Routes>
    </div>
  );
}

export default App;
