import { useSelector } from "react-redux";
import { Box, Typography, List } from "@mui/material";
import TodoItem from "../todoItem";

function TodoList() {
  const todos = useSelector((state) => state.todos);

  return (
    <Box>
      <Typography variant="h3" gutterBottom>
        Todo List
      </Typography>

      <List>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </List>
    </Box>
  );
}

export default TodoList;
