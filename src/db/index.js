import mongoose from "mongoose";
import {projectDB} from "../constants.js";

const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(
            `mongodb+srv://nikhil_123:Nikhil%40123@cluster0.chkwyyh.mongodb.net/${projectDB}`,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        );
        console.log(`\n MongoDB connected !! DB HOST : ${connectionInstance.connection.host}`);
    }
    catch(error)
    {
        console.log("MONGODB connection error",error);
        process.exit(1)
    }
}

export default connectDB
