const TaskModel = require('../models/modelsTask'); // Importamos el modelo de datos

const tasksCtrl = {};

 tasksCtrl.tasksAll = (req, res) => {
     res.send({message: "tasksAll"});
 }

 tasksCtrl.tasksAdd = (req, res) => {
     res.send({message: "tasksAdd"});
 }

 tasksCtrl.tasksDelete = (req, res) => {
     res.send({message: "tasksDelete"});
 }

 tasksCtrl.tasksDone = (req, res) => {
     res.send({message: "tasksDone"});
 }

 tasksCtrl.tasksUndo = (req, res) => {
     res.send({message: "tasksUndo"});
 }




module.exports=tasksCtrl;