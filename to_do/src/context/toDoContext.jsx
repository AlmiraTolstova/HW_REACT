import { createContext, useContext, useEffect, useState } from "react";

const TodosContext = createContext(null);

export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || [],
  );

  // сохранение в localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // ➕ добавить задачу
  const addTodo = (title) => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        title,
        completed: false,
      },
    ]);
  };

  // удалить задачу
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //  изменить статус
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  return (
    <TodosContext.Provider value={{ todos, addTodo, removeTodo, toggleTodo }}>
      {children}
    </TodosContext.Provider>
  );
};

// кастомный хук (удобно!)
export const useTodos = () => useContext(TodosContext);
