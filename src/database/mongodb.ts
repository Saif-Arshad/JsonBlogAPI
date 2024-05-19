import mongoose from "mongoose";

let isConnected = false;

const connectDb = async () => {
    if (isConnected) {
        console.log("Using existing database connection");
        return;
    }

    const mongoUrl = process.env.MONGODB_URL;

    if (!mongoUrl) {
        console.error("MongoDB URL is not defined");
        return;
    }

    try {
        await mongoose.connect(mongoUrl);
        console.log("Database connected successfully");
        isConnected = true;
    } catch (error) {
        console.error("Error while connecting with the database", error);
    }
}

export default connectDb;
