import { useSelector, useDispatch } from "react-redux";
import { reset } from "../../redux/slices/userSlice";

function UserList() {
  const dispatch = useDispatch();
  const usersList = useSelector((state) => state);

  const users = useSelector((state) => state.users.usersList);

  return (
    <div>
      <h2>User List</h2>
      <button onClick={() => console.log(usersList)}>Reducer to console</button>
      <button onClick={() => dispatch(reset())}>Reset reducer</button>
      <ul>
        {users.map((userItem) => (
          <li key={userItem.id}>
            {userItem.name}({userItem.email})
          </li>
        ))}
      </ul>
    </div>
  );
}
export default UserList;
