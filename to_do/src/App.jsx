import { useState } from "react";
import { TodosProvider } from "./context/toDoContext";
import TodoList from "./components/toDoList";
import AddTodoForm from "./components/addToDoForm";
import "./App.css";

function App() {
  const [filter, setFilter] = useState("all");

  return (
    <TodosProvider>
      <div className="app">
        <h1>ToDo App</h1>

        <AddTodoForm />

        <div className="filters">
          <button onClick={() => setFilter("all")}>Все</button>
          <button onClick={() => setFilter("active")}>Активные</button>
          <button onClick={() => setFilter("done")}>Выполненные</button>
        </div>

        <TodoList filter={filter} />
      </div>
    </TodosProvider>
  );
}

export default App;
