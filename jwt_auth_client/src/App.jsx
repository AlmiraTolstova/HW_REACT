import "./App.css";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Register from "./pages/register";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import ProtectorRoute from "./components/protectorRoute";

import Home from "./pages/home";
import Nav from "./components/nav";
function App() {
  return (
    <Router>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route
            path="/profile"
            element={
              <ProtectorRoute>
                <Profile></Profile>
              </ProtectorRoute>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
