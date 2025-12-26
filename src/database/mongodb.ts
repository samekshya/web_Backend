import mongoose from "mongoose";    
import {MONGODB_URI} from "../config";

export async function connectDatabase(){
    try {
        console.log("MONGODB_URI:", MONGODB_URI);
        await mongoose.connect(MONGODB_URI);
        console.log("Connect to MongoDB");
    }catch (error) {
        console.error("Database Error:", error);
        process.exit(1); // Exit process with failure
    }
}
