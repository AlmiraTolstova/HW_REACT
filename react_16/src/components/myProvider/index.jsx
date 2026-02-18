import { useState } from "react";
import MyContext from "../../context/myContext";
function MyProvider({ children }) {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  return (
    <MyContext.Provider value={{ count, increment, decrement }}>
      {children}
    </MyContext.Provider>
  );
}
export default MyProvider;
