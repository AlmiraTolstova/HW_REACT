import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "./redux/slices/userSlice";
import Player from "./components/player";

function App() {
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.user.data);
  const count = useSelector((state) => state.user.count);
  const volume = useSelector((state) => state.player.volume);
  const user = useSelector((state) => state.user.data);

  function logout() {
    dispatch(reset());
  }

  return (
    <div>
      <h1>Player</h1>
      <Player></Player>
    </div>
  );
}

export default App;
