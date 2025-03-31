import mongoose from "mongoose";

const connectDB = async () => {
    try{
        await mongoose.connect("mongodb+srv://Rijans:riju%404589@cluster0.y6x5z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("MongoDB Connected");
    }catch(error){
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;

