import { useSelector } from "react-redux";
import { Box, Typography, List, Card } from "@mui/material";
import TodoItem from "../todoItem";

function TodoList() {
  const todos = useSelector((state) => state.todos);

  return (
    <Card sx={{ textAlign: "center", mt: 4, p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Todo List
      </Typography>

      <List>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </List>
    </Card>
  );
}

export default TodoList;
