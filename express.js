const express = require("express");
const app = express();
const host = "localhost";

const port = 3000;

const tasks = [
    {
      id: "123456",
      isCompleted: false,
      description: "Estudiar React",
    },
    {
      id: "789012",
      isCompleted: true,
      description: "Estudiar Express",
    },
    {
      id: "345678",
      isCompleted: false,
      description: "Aprender a consumir API",
    },
  ];

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.listen(3000, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});