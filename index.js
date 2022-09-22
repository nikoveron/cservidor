const express = require("express")
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const port = 3000
app.use(express.json())
app.use(require("./src/routes/home.routes"));
app.use(require("./src/routes/tasks.routes"));
app.use(require("./src/routes/user.routes"));

const dbConnect = require('./src/db/connection');


app.use(express.static(path.join(__dirname, 'src/public/img')));

app.listen(port,()=>{
    console.log(`Servidor corriendo en el puerto ${port}`)
})



