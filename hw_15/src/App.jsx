import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import UserList from "./components/userList";

function App() {
  const userArray = [
    {
      id: 0,
      name: "John",
    },
    {
      id: 1,
      name: "Anna",
    },
    {
      id: 2,
      name: "Alice",
    },
  ];

  return (
    <div>
      <UserList userArr={userArray}></UserList>
    </div>
  );
}

export default App;
