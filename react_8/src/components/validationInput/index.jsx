import { useState } from "react";
function Form() {
  const [title, setTitle] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [message, setMessage] = useState("");
  const handleChange = (event) => {
    const newValue = event.target.value;
    setTitle(newValue);
    if (newValue.length < 5) {
      setIsValid(false);
      setMessage("The title should be more the 5 symbols.");
    } else {
      setIsValid(true);
      setMessage("The title is valid");
    }
  };
  return (
    <form>
      <input
        style={{ borderColor: isValid ? "green" : " red", outline: "none" }}
        type="text"
        value={title}
        onChange={handleChange}
      />
      <p style={{ color: isValid ? "green" : "red" }}>{message}</p>
    </form>
  );
}
export default Form;
