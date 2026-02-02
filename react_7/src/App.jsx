import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import MainContent from "./components/mainContent";
import Footer from "./components/footer";
function App() {
  // const [numbers, setNumbers] = useState([1, -121, 1, -7]);

  // function pushOne() {
  //   setNumbers([...numbers, -1]);
  // }

  // function filterList() {
  //   setNumbers(numbers.filter((number) => number > 0));
  // }

  // const [setData, setUserData] = useState({ name: "Alice", age: 18 });

  const [theme, setTheme] = useState("light");

  function changeTheme() {
    setTheme(function (prevTheme) {
      return prevTheme === "light" ? "dark" : "light";
    });
  }

  return (
    <div>
      {/* <button onClick={pushOne}>Push one</button>
      <button onClick={filterList}>Filter one</button>
      <ul>
        {numbers.map((num) => {
          return <li key={Math.random()}>{num}</li>;
        })}
      </ul>
      <h1></h1> */}
      <Header theme={theme} changeTheme={changeTheme} />
      <MainContent theme={theme} />
      <Footer theme={theme} />
    </div>
  );
}
export default App;
