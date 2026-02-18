import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
const BASE_URL = "https://jsonplaceholder.typicode.com";
function App() {
  const [users, setUsers] = useState([]);
  async function fetchUsers() {
    try {
      const response = await axios.get(`${BASE_URL}/users`);
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchUsers();
  }, []);
  if (users.length === 0) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <button onClick={fetchUsers}>refresh</button>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <p>
              {user.username} {user.website}
            </p>
          </div>
        );
      })}
    </div>
  );
}
export default App;
