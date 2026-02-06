import NavSection from "../navSection";

function Header() {
  const navItems = ["Home", "Blog", "Features", "Pricing", "Documentation"];
  return (
    <div>
      {" "}
      <NavSection items={navItems} />
    </div>
  );
}

export default Header;
