import "./App.css";
import Title from "./components/title";

function App() {
  return (
    <>
      <Title titleText={"Profile"} specSymbol={"*"} />
      <Title titleText={"Contacts"} specSymbol={"+"} />
      <Title titleText={"Price"} specSymbol={"#"} />
    </>
  );
}
export default App;
