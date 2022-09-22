routerUser = require('express').Router();

const {userAll,userAdd,userDelete,userUpdate}=require('../controllers/user.controllers');

routerUser.get('', userAll);
routerUser.post('', userAdd);
routerUser.delete('', userDelete);
routerUser.put('', userUpdate);


module.exports=routerUser;