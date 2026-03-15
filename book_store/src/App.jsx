import "./App.css";
import Header from "./components/header";
import Main from "./pages/main";
import { Routes, Route } from "react-router-dom";
import Readers from "./pages/readers";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Main></Main>} />
        <Route path="/readers" element={<Readers></Readers>} />
        <Route path="/dashboard" element={<Dashboard></Dashboard>} />
      </Routes>
    </div>
  );
}

export default App;
