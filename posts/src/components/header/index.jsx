import styles from "./styles.module.css";
import Logo from "../../assets/logo.svg";

function Header({ links }) {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <img className={styles.logo} src={Logo} alt="Logo"></img>
        <nav>
          {links.map((link) => (
            <a className={styles.links} key={link.path} href={link.path}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default Header;
