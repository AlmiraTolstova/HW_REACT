function FlexBox(props) {
  const style = {
    display: "flex",
    justifyContent: "space-around",
    border: "1px solid coral",
    padding: "10px",
  };

  return <div style={style}>{props.children}</div>;
}

export default FlexBox;
