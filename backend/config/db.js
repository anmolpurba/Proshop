import mongoose from "mongoose";

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URL);
        console.log("DATABASE CONNECTED");
    } catch(error){
        console.log("ERROR");
        process.exit(1);
    }
};

export default connectDB;