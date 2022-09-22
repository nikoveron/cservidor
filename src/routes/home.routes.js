
const router=require("express").Router();


const {getUser,deleteHome,getHome,postHome,putHome}=require("../controllers/home.controllers");


router.get("/",getHome);
router.put("/",putHome);
router.delete("/",deleteHome);
router.get("/",getUser);
router.post("/",postHome);



module.exports=router;


