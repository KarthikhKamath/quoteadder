import express from "express"
const app = express()
import mongoose from "mongoose";
import connection from "./database/db.js";
import router from "./routes/routes.js";
mongoose.set('strictQuery', false)
import Routes from "./routes/routes.js";
import cors from "cors"
import bodyParser from "body-parser";
import path from "path"
const port = process.env.PORT || 4000

app.use(bodyParser.json({extended:true}))
app.use(cors())
    
app.use('/', Routes)  

connection();

// app.use(express.static(path.join(__dirname, './clieny/build')))

// app.get("*",(req,res)=>{
  
//   res.sendFile(path.join(__dirname,"./client/build/index.html"))
// })


 
app.listen(4000, ()=>{
  console.log("Running")  
})