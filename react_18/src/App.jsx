import { useState } from "react";
import "./App.css";
import Home from "./components/home";
import { useEffect } from "react";
function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(true);
  }, []);

  const styles = {
    color: isDark ? "white" : "black",
    backgroundColor: isDark ? "black" : "white",
  };
  return (
    <div style={styles}>
      <h1>App </h1>
      <Home isDark={isDark} setIsDark={setIsDark} />
    </div>
  );
}
export default App;
