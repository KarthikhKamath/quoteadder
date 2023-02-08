import express, { response } from "express"
import User from "../schema/user-schema.js"

 export const addUser = async (req, res)=>{
   const user =  req.body
   const newUser = new User(user) 

   try{
      await newUser.save()
      res.status(201).json(newUser)
   }
   catch(err){
      res.status(409).json({message:err.message})
   }

 } 
 export default addUser