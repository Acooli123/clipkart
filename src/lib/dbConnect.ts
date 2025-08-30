import mongoose from "mongoose";

let isConnected = false;

export default async function connectDb() {
  if (isConnected) {
    return;
  }

  if (!process.env.MONGODB_URI) {
    throw new Error("❌ MONGODB_URI is not defined.");
  }

  await mongoose.connect(process.env.MONGODB_URI, {
    dbName: "clipkart",
  });

  isConnected = true;
  console.log("✅ MongoDB connected");
}
