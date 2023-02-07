import express  from "express";
import  addUser  from "../controller/user-controller.js";
const router = express.Router()
import User from "../schema/user-schema.js";

const getUser = async (req, res)=>{
    const users =  await User.find({})
    res.status(200).json(users)
   }

router.post('/add', addUser)
router.get('/all', getUser)
// router.post('/all', getUser)

export default router 