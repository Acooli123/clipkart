//const mongoose = require("mongoose");
// const { Schema, model, models } = mongoose;
import mongoose from "mongoose";

let isConnected = false; // Global connection flag

/**
 * Connect to MongoDB (singleton style)
 */
export const connectDb = async () => {
  if (isConnected) {
    console.log("MONGODB_URI =", process.env.MONGODB_URI);

    // Already connected
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI as string, {
      dbName: "clipkart",
    });
    isConnected = true;
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    throw error;
  }
};

/**
 * Middleware wrapper (for Pages Router only)
 */
export const withDb =
  (handler: Function) => async (req: any, res: any) => {
    await connectDb();
    return handler(req, res);
  };
