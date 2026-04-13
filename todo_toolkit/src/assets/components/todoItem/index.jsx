import { ListItem, ListItemText } from "@mui/material";

function TodoItem({ todo }) {
  return (
    <ListItem>
      <ListItemText
        primary={todo.text}
        sx={{
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      />
    </ListItem>
  );
}

export default TodoItem;
