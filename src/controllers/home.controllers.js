const ctrlHome={}

ctrlHome.getHome = (request,response)=>{
    response.send({
        message:"peticion get"
    })
}

ctrlHome.postHome = (request,response)=>{
    console.log(request.body)
    response.send({
        message:"peticion post"
    })
}
ctrlHome.putHome = (request,response)=>{
    response.send({
        message:"peticion put"
    })
}
ctrlHome.deleteHome = (request,response)=>{
    response.send({
        message:"peticion delete"
    })
}
ctrlHome.getUser = (request,response)=>{
    response.send({
            "nombre":"juan",
            "apellido":"perez"
        })
}

module.exports=ctrlHome;

