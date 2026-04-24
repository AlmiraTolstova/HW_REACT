import { Navigate } from "react-router";
function ProtectorRoute({ children }) {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
}

export default ProtectorRoute;
