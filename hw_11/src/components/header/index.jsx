import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <ul>
        <li>
          <Link to={"/"}>Main</Link>
        </li>
        <li>
          <Link to={"/articleslist"}>Articles list</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
