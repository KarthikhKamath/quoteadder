import express  from "express";
import  addUser  from "../controller/user-controller.js";
const Routes = express.Router()
import User from "../schema/user-schema.js";

const getUser = async (req, res)=>{
    const users =  await User.find({})
    res.status(200).json(users)
   }

Routes.post('/add', addUser)
Routes.get('/all', getUser)
// router.post('/all', getUser)

export default Routes 