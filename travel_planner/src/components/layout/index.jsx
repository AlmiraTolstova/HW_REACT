import { NavLink, Outlet } from "react-router-dom";
function Layout() {
  return (
    <div className="layout">
      <header className="header">
        <div className="container">
          <h1 className="logo">🏙️ Travel planner</h1>
          <nav className="nav">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              end
            >
              Главная
            </NavLink>
            <NavLink
              to="/categories"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Категории
            </NavLink>
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Избранное
            </NavLink>
          </nav>
        </div>
      </header>
      <main className="main-content">
        <div className="container">
          <Outlet />
        </div>
      </main>
      <footer className="footer">
        <div className="container">
          <p>© 2026 Travel planner. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
export default Layout;
