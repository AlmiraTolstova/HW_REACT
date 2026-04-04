import "./App.css";
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Button,
  Container,
  Box,
  Paper,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  Card,
} from "@mui/material";
import { useState, useEffect } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasksList, setTasksList] = useState([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasksList(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksList));
  }, [tasksList]);

  // Добавление задачи
  function addTask() {
    if (!task.trim()) return;

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTasksList([...tasksList, newTask]);
    setTask("");
  }

  // Переключение выполнения
  function toggleTask(id) {
    const updatedTasks = tasksList.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t,
    );
    setTasksList(updatedTasks);
  }

  // Удаление задачи
  function deleteTask(id) {
    const filteredTasks = tasksList.filter((t) => t.id !== id);
    setTasksList(filteredTasks);
  }
  return (
    <div>
      {" "}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            To-Do List
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Box sx={{ m: 2 }}>
          <Paper>
            <Card>
              <Typography>Add a new task</Typography>
              <Box sx={{ display: "flex", mt: 3 }}>
                <TextField
                  id="outlined-basic"
                  label="Enter a task"
                  variant="outlined"
                  fullWidth
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") addTask();
                  }}
                />
                <Button variant="contained" sx={{ ml: 1 }} onClick={addTask}>
                  Add
                </Button>
              </Box>
              <List>
                {tasksList.map((t) => (
                  <ListItem key={t.id}>
                    <Checkbox
                      checked={t.completed}
                      onChange={() => toggleTask(t.id)}
                    ></Checkbox>
                    <ListItemText
                      primary={t.text}
                      sx={{
                        textDecoration: t.completed ? "line-through" : "none",
                      }}
                    ></ListItemText>
                    <Button onClick={() => deleteTask(t.id)}>Delete</Button>
                  </ListItem>
                ))}
              </List>
            </Card>
          </Paper>
        </Box>
      </Container>
    </div>
  );
}

export default App;
