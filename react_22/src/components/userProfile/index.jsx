import { useContext } from "react";
import { UserContext } from "../../context/userContext";

const UserProfile = () => {
  const { user, logoutUser } = useContext(UserContext);

  return (
    <div>
      <h2>Профиль пользователя</h2>
      <p>
        <strong>Логин:</strong> {user.login}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>

      <button onClick={logoutUser}>Выйти</button>
    </div>
  );
};

export default UserProfile;
