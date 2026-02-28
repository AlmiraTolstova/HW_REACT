import { useState } from "react";
import { UserContext } from "../../context/userContext";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);

  const loginUser = (data) => {
    setUser({
      login: data.login,
      email: data.email,
    });
    setIsRegistered(true);
  };

  const logoutUser = () => {
    setUser(null);
    setIsRegistered(false);
  };

  return (
    <UserContext.Provider value={{ user, isRegistered, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
