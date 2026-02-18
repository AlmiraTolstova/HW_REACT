import "./App.css";
import MyProvider from "./components/myProvider";
import { useContext } from "react";
import MyContext from "./context/myContext";
function App() {
  return (
    <MyProvider>
      <CounterDisplay />
      <IncrementButton />
      <DecrementButton />
    </MyProvider>
  );
}
const CounterDisplay = () => {
  const { count } = useContext(MyContext);
  return <h1>Count: {count}</h1>;
};
const IncrementButton = () => {
  const { increment } = useContext(MyContext);
  return <button onClick={increment}>Increase</button>;
};
const DecrementButton = () => {
  const { decrement } = useContext(MyContext);
  return <button onClick={decrement}>Decrement</button>;
};
export default App;
