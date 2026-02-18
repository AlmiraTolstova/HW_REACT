import { useTodos } from "../../context/toDoContext";
import styles from "./styles.module.css";

function TodoItem({ todo }) {
  const { toggleTodo, removeTodo } = useTodos();

  return (
    <li className={styles.item}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />

      <span className={todo.completed ? styles.done : ""}>{todo.title}</span>

      <button onClick={() => removeTodo(todo.id)}>✕</button>
    </li>
  );
}

export default TodoItem;
