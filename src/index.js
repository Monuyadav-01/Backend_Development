import connectDB from "./db";
import dotenv from "dotenv"

dotenv.config({
    path : './env'
})

connectDB()






// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// import express from "express"

//     const app = express()


// ;  ( async() => {
//     try {
//         await mongoose.connect(`${process.env.MONGOBDB_URL}/${DB_NAME}`)
        
//         app.on("error", (error) => {
//             console.log("ERROR", error);
//             throw error
//         })
        
//         app.listen(process.env.PORT, () => {
//             console.log(`app is listing on port :${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.error(error);
//         throw error
//     }
// })()