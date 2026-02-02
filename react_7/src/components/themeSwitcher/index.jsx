function ThemeSwitcher(props) {
  const { theme, changeTheme } = props;
  return (
    <div>
      <button onClick={changeTheme}>Switch Theme</button>
    </div>
  );
}

export default ThemeSwitcher;
