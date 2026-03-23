import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import UserList from "./components/userList";

function App() {
  const userArray = [
    { id: 0, name: "Harry Potter" },
    { id: 1, name: "Hermione Granger" },
    { id: 2, name: "Ron Weasley" },
    { id: 3, name: "Albus Dumbledore" },
    { id: 4, name: "Severus Snape" },
    { id: 5, name: "Draco Malfoy" },
    { id: 6, name: "Rubeus Hagrid" },
    { id: 7, name: "Sirius Black" },
    { id: 8, name: "Remus Lupin" },
    { id: 9, name: "Minerva McGonagall" },
    { id: 10, name: "Neville Longbottom" },
    { id: 11, name: "Luna Lovegood" },
    { id: 12, name: "Ginny Weasley" },
    { id: 13, name: "Fred Weasley" },
    { id: 14, name: "George Weasley" },
    { id: 15, name: "Bellatrix Lestrange" },
    { id: 16, name: "Lucius Malfoy" },
    { id: 17, name: "Dolores Umbridge" },
    { id: 18, name: "Cedric Diggory" },
    { id: 19, name: "Lord Voldemort" },
  ];
  const [filter, setFilter] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(userArray);

  function filterUsers(filter, users) {
    return users.filter((user) =>
      user.name.toLowerCase().includes(filter.toLowerCase()),
    );
  }

  function handleChange(value) {
    setFilter(value);
    setFilteredUsers(filterUsers(value, userArray));
  }

  return (
    <div>
      <input
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      ></input>
      <UserList userArr={filteredUsers}></UserList>
    </div>
  );
}

export default App;
