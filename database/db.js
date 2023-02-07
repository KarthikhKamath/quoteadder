import express from "express"
import mongoose from "mongoose"

const connection= async ()=>{
    const URL = 'mongodb+srv://karthikkamath:karthikkamath@cluster0.bnenauh.mongodb.net/?retryWrites=true&w=majority'
    try{
       await mongoose.connect(URL, {useUnifiedTOpology:true, useNewUrlParser:true})
       console.log("connectedd")
    }
    catch(err){
        console.log("Error while connecting", err)
    }
}
export default connection