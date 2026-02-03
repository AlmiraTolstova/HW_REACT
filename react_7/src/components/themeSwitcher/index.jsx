function ThemeSwitcher({ theme, changeTheme }) {
  return (
    <div>
      <button onClick={changeTheme}>Switch Theme</button>
    </div>
  );
}

export default ThemeSwitcher;
