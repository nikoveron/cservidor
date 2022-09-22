const mongoose = require('mongoose');
const modelsUser = require('../models/modelsUser');

const conexion=()=>{
mongoose.connect("mongodb+srv://nikoveron:niko123@cluster0.a6yxyxd.mongodb.net/?retryWrites=true&w=majority")
}

module.exports = conexion;