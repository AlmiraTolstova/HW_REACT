import { useState } from "react";
function Form() {
  //   let text = "";
  //   function handleChange(event) {
  //     text = event.target.value;
  //     console.log(text);
  //   }
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <form>
      {/* <input type="text" onChange={(event) => handleChange(event)}></input>
      <button>Click me</button> */}
      <input type="text" value={title} onChange={handleChange} />
      <button>Click me</button>
      <p>{title}</p>
    </form>
  );
}

export default Form;
