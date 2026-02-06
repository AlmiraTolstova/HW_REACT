import styles from "./styles.module.css";
function NavSection({ items }) {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {items.map((item) => (
          <li key={item} className="nav__item">
            <a href={`#${item.toLowerCase()}`} className="nav__link">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavSection;
