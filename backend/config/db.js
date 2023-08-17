import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {})

        console.log(`Yo, Bro....MongoDB Connected: ${conn.connection.host}`)
    } 
    catch (error) {
        console.log(`Istak, there is an Error: ${error.message}`)
        process.exit(1)
    }
}

export default connectDB