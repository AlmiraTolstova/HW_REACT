import Btn from "../button";
import NavIconSection from "../navIconsSection";
import NavSection from "../navSection";
import Logo from "../../assets/logo.png";
import styles from "./styles.module.css";

function Header() {
  const navItems = ["Home", "Blog", "Features", "Pricing", "Documentation"];
  return (
    <div className={styles.container}>
      <div className={styles.block1}>
        <img src={Logo}></img>
        <NavSection items={navItems} />
      </div>
      <div className={styles.block2}>
        <NavIconSection />
        <Btn variant="primary" children="Get started"></Btn>
      </div>
    </div>
  );
}

export default Header;
