import styles from "./styles.module.css";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { logout } from "../../redux/slices/authSlice";

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const tokenData = token ? jwtDecode(token) : null;

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <div className={styles.container}>
      <h1>
        {tokenData ? (
          <span>
            {tokenData.user.id} {tokenData.user.email}
          </span>
        ) : (
          "Login inot account"
        )}
      </h1>
      <button onClick={handleLogout} className={styles}>
        {tokenData ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default Profile;
