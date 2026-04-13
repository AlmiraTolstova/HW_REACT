import { ListItem, ListItemText, Button, Box } from "@mui/material";
import { toggleTodo, deleteTodo } from "../../redux/slices/todoSlice";
import { useDispatch } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <ListItem
      secondaryAction={
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleToggle}
            startIcon={<CheckIcon />}
          >
            Complete
          </Button>

          <Button
            variant="contained"
            color="error"
            onClick={handleDelete}
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </Box>
      }
    >
      <ListItemText
        primary={todo.text}
        onClick={handleToggle}
        sx={{
          cursor: "pointer",
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      />
    </ListItem>
  );
}

export default TodoItem;
