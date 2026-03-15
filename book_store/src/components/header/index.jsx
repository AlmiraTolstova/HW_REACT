import { Link } from "react-router";
function Header() {
  return (
    <div>
      <Link to="/">Books list</Link>
      <Link style={{ marginLeft: "30px" }} to="/readers">
        Readers list
      </Link>
      <Link style={{ marginLeft: "30px" }} to="/dashboard">
        Dashboard
      </Link>
    </div>
  );
}

export default Header;
