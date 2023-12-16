import { app } from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv"

// dotenv connection here of import modules

dotenv.config({
    path : './env'
})

connectDB().then(

    app.listen(process.env.PORT, () => {
        console.log(`server stared on port ${process.env.PORT}`);
    })
).catch((error) => {
    console.error("Error to connect app" , error);
})






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