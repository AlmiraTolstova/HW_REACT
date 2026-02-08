import Btn from "../button";
import Button from "../button";
import NavIconSection from "../navIconsSection";
import NavSection from "../navSection";

function Header() {
  const navItems = ["Home", "Blog", "Features", "Pricing", "Documentation"];
  return (
    <div>
      {" "}
      <NavSection items={navItems} />
      <NavIconSection />
      <Btn />
    </div>
  );
}

export default Header;
