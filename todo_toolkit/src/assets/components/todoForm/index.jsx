import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/slices/todoSlice";
import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";

function TodoForm() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedText = text.trim();

    // проверка пустой строки
    if (!trimmedText) return;

    const newTodo = {
      id: Date.now(),
      text: trimmedText,
      completed: false,
    };

    dispatch(addTodo(newTodo));

    setText("");
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        sx={{ mb: 2 }}
        fullWidth
        label="Enter new todo"
        variant="outlined"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <Button fullWidth type="submit" variant="contained">
        Add Todo
      </Button>
    </Box>
  );
}

export default TodoForm;
