import mongoose from "mongoose"
import {mongoUri} from "../helpers/config.js"

const db = mongoose.connect(
    mongoUri,
    // { useFindAndModify: false},
    (err)=>{
        if(!err){
            console.log("MongoDB Connection Succeeded")
        }else{
            console.log("Error in DB connection: " + err)
        }
    })

export default db
