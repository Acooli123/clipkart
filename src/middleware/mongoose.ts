import mongoose from "mongoose";    

const connectDb = async (handler) => {
    if (mongoose.connection.readyState === 0) {
        if(mongoose.connection.[0].readyState) {
            return handler(req,res);
        console.log("Connected to MongoDB");
    }
    await mongoose.connect(process.env.MONGODB_URI, {
        dbName: "clipkart",
        useNewUrlParser: true,
        useUnifiedTopology: true,});
    console.log("Connected to MongoDB");
}

export default connectDb;