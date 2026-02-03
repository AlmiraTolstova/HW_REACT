import Button from "./components/button";
import "./App.css";
import CardList from "./components/cardList.jsx";
import { useState } from "react";

const teams = [
  {
    name: "Dragons United",
    members: [
      "David Miller",
      "Ethan Turner",
      "Natalie Clark",
      "Sophie Gomez",
      "Tom Hanks",
    ],
  },
  {
    name: "Golden Eagles",
    members: [
      "Lisa Ray",
      "Harry Ford",
      "Betty Cooper",
      "George King",
      "Alice Morgan",
    ],
  },
  {
    name: "Mighty Warriors",
    members: [
      "Sam Wilson",
      "John Norton",
      "Emma Cartright",
      "Daniel Lewis",
      "Megan Stone",
    ],
  },
  {
    name: "Falcon Flyer",
    members: [
      "Oscar Wilde",
      "Robert Brown",
      "Victoria Smith",
      "Rachel Adams",
      "Matthew Johns",
    ],
  },
  {
    name: "Storm Breakers",
    members: [
      "Lucas White",
      "Eva Taylor",
      "Charles Anderson",
      "Emily Johnson",
      "Aaron Carter",
    ],
  },
];
function App() {
  const [count, setCount] = useState(0);
  // const [username, setUsername] = useState();
  function plusOne() {
    setCount((prev) => prev + 1);
    // setCount(count + 1);
  }
  return (
    <>
      <Button title={"Login"} />

      <div>
        <h1>Football Teams</h1>

        <CardList teams={teams} />
      </div>
      <div>
        <h1>Count: {count}</h1>
        <button onClick={plusOne}>plus one</button>
      </div>
    </>
  );
}

export default App;
