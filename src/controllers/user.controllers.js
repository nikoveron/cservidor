const User = require("../models/modelsUser"); // Importamos el modelo de datos

const userCtrl = {};

userCtrl.userAll = (req, res) => {
    res.send({message: "userAll"});
}

userCtrl.userAdd = (req, res) => {
    res.send({message: "userAdd"});
}

userCtrl.userDelete = (req, res) => {
    res.send({message: "userDelete"});
}

userCtrl.userUpdate = (req, res) => {
    res.send({message: "userUpdate"});
}


module.exports=userCtrl;
