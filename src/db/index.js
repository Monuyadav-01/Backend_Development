import mongoose from "mongoose";
import { DB_NAME } from "../constants";


const connectDB = async () => {
    try {
        const connectionInstense = await mongoose.connect(`${process.env.MONGOBDB_URL}/${DB_NAME}`)
        console.log(`\n MongoDB connected on DB_HOST : ${connectionInstense.connection.host}`);
        
    } catch (error) {
        console.log("MONGODB connection error", error);
        process.exit(1)
    }
}

export default connectDB