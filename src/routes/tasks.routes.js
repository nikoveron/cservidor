

const routerTask = require("express").Router();


const {tasksAll,tasksAdd,tasksDelete,tasksDone,tasksUndo}=require("../controllers/tasks.controllers");


 routerTask.get("/", tasksAll);
 routerTask.post("/", tasksAdd);
routerTask.delete("/", tasksDelete);
routerTask.put("/", tasksDone);
routerTask.put("/", tasksUndo);



module.exports=routerTask;