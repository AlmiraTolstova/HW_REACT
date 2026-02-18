import { useTodos } from "../../context/toDoContext";
import TodoItem from "../toDoItem";
import styles from "./styles.module.css";

function TodoList({ filter }) {
  const { todos } = useTodos();

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "done") return todo.completed;
    return true;
  });

  return (
    <ul className={styles.list}>
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
