import "./App.css";
import Header from "./components/header";
import Main from "./pages/main";
import { Routes, Route } from "react-router-dom";
import Readers from "./pages/readers";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Main></Main>} />
        <Route path="/readers" element={<Readers></Readers>} />
      </Routes>
    </div>
  );
}

export default App;
