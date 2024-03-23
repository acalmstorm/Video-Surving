//require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
//import mongoose from "mongoose";
//import { projectDB  } from "./constants";
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})

connectDB()



/*
import express from "express"
const app=express()

( async () => {
    try{
      await mongoose.connect(`${process.env.MONGODB_URL}/$
        {projectDB}`)
        app.on("error", (error)=> {
            console.log("error" , error);
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port $
            {process.env.PORT}`);
        })

    }
    catch(error){
        console.error("ERROR:",error)
        throw error
    }
})()
*/