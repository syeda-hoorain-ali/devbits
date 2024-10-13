import mongoose from "mongoose"

let connection: number

export const dbConnect = async (): Promise<void> => {
    
    if(connection) {
        console.log('Already connected to database');
        return;        
    }

    const URI = process.env.MONGODB_URI
    if(!URI) {
        console.log("Please enter your mongo uri in .env.local");
        return
    }

    try {
        const db = await mongoose.connect(URI);
        connection = db.connections[0].readyState
        console.log("Database connect successfully")

    } catch (error) {
        console.log("Database connection failed")
        console.log(error);
        process.exit(0);
    }
}