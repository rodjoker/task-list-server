const express = require("express");
const edit = express.Router();
const tasks = require("../tasks");

edit.post("/", (req, res) => {
    const newTask = req.body;
    tasks.push(newTask);//con el push agregamos newTask a tasks
    res.status(201).json({mensaje: "Added Task"});
 }); 
edit.put("/:id", (req, res) => {
    const body = req.body;
    const params = req.params;
    const id = Number(params.id);
    const taskIndex = tasks.findIndex((task) => {
        return task.id === id;
    })
const ubdatedTask = {
    ...body,
    id,
}
tasks[taskIndex] = ubdatedTask;
    console.log(taskIndex);
    res.status(200).json({mensaje:"modified task"})   
 });
edit.patch("/:id", (req, res) => {
    const body = req.body;
    const params = req.params;
    const id = Number(params.id);
    const taskIndex = tasks.findIndex((task) => {
        return task.id === id;
    })
const ubdatedTask = {
    ...tasks[taskIndex],
    ...body,
}
tasks[taskIndex] = ubdatedTask;   
    res.status(200).json({mensaje:"modified task"});
 });
edit.delete("/:id", (req, res) => {
    const params = req.params;
    const id = Number(params.id);
    const taskIndex = tasks.findIndex((task) => {
        return task.id === id;
    })
tasks.splice(taskIndex, 1);
    console.log(taskIndex);
    res.status(204).json({mensaje:"deleted task"});
 })
 module.exports = edit;


