function Title({ onClick, specSymbol, titleText, userData }) {
  return (
    <h1>
      {titleText} {specSymbol} {userData.name}
    </h1>
  );
}
export default Title;
