import React, { useState } from "react";
import { Container, Typography, TextField, Button } from "@mui/material";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const handleNum1Change = (e) => setNum1(e.target.value);
  const handleNum2Change = (e) => setNum2(e.target.value);

  const add = () => setResult(parseFloat(num1) + parseFloat(num2));
  const subtract = () => setResult(parseFloat(num1) - parseFloat(num2));
  const multiply = () => setResult(parseFloat(num1) * parseFloat(num2));
  const divide = () => {
    if (parseFloat(num2) === 0) {
      setResult("Cannot divide by zero");
    } else {
      setResult(parseFloat(num1) / parseFloat(num2));
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "50px" }}>
      <Typography variant="h4" gutterBottom>
        Calculator
      </Typography>

      <TextField
        label="First Number"
        variant="outlined"
        margin="normal"
        fullWidth
        value={num1}
        onChange={handleNum1Change}
        type="number"
      />

      <TextField
        label="Second Number"
        variant="outlined"
        margin="normal"
        fullWidth
        value={num2}
        onChange={handleNum2Change}
        type="number"
      />

      <Button
        variant="contained"
        color="primary"
        onClick={add}
        style={{ marginBottom: "1rem" }}
        fullWidth
      >
        Add
      </Button>

      <Button
        variant="contained"
        color="primary"
        onClick={subtract}
        fullWidth
        style={{ marginBottom: "1rem" }}
      >
        Subtract
      </Button>

      <Button
        variant="contained"
        color="primary"
        onClick={multiply}
        fullWidth
        style={{ marginBottom: "1rem" }}
      >
        Multiply
      </Button>

      <Button
        variant="contained"
        color="primary"
        onClick={divide}
        fullWidth
        style={{ marginBottom: "1rem" }}
      >
        Divide
      </Button>

      {result !== null && (
        <Typography variant="h5" style={{ marginTop: "20px" }}>
          Result: {result}
        </Typography>
      )}
    </Container>
  );
};

export default Calculator;
