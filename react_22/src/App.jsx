import "./App.css";
import MainComponent from "./components/mainComponent";
import UserProvider from "./components/userProvider";

function App() {
  return (
    <UserProvider>
      <MainComponent />
    </UserProvider>
  );
}

export default App;
