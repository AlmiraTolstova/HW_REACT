import { useState } from "react";
import { useTodos } from "../../context/toDoContext";
import styles from "./styles.module.css";

function AddTodoForm() {
  const [value, setValue] = useState("");
  const { addTodo } = useTodos();

  const submitHandler = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Новая задача"
      />
      <button type="submit">Добавить</button>
    </form>
  );
}

export default AddTodoForm;
