const express = require("express");
const route = express.Router();
const tasks = require("../tasks")

const validGet = (req, res, next) => {
  if (req.method !== "GET") {
    res.status(400).send("Invalid http request method",);
  }
  next();
};
route.get("/", validGet,  (req, res) => {
    res.status(200).json(tasks);
  });

route.get("/completed", validGet, (req, res) => {
    const result = tasks.filter(tasks => tasks.completed);
     
       return res.status(200).send(result);
     
  });
route.get("/incompleted", validGet, (req, res) => { 
    const result = tasks.filter(tasks => tasks.completed === false);
    if (result.length == 0) {
      return res.status(404).send("no tasks incompleted");
     } else {

       return res.status(200).send(result);
     }
  });
route.get("/:id", validGet, (req, res) => { 
  const params = req.params;
  const id = Number(params.id);
  const task = tasks.find((task) => task.id === id);

  if (!task) {
    return res.status(404).send("Task not found");
  }

  res.status(200).json(task);
  });
module.exports = route;

/* const id = req.params.id;
    const result = tasks.filter(tasks => tasks.id === id);
    if (id == tasks.id) {
      
    } else {
      return res.status(404).send(" tasks not found");
     } */