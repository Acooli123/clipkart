// // import * as mongoose from "mongoose";

// // let isConnected = false; // Track the connection status

// // export const connectDb = async () => {
// //   if (isConnected) {
// //     return;
// //   }

// //   try {
// //     await mongoose.connect(process.env.MONGODB_URI as string, {
// //       dbName: "clipkart", // 👈 change if you want another db name
// //     });

// //     isConnected = true;
// //     console.log("✅ MongoDB connected");
// //   } catch (error) {
// //     console.error("❌ MongoDB connection error:", error);
// //     throw error;
// //   }
// // };

// // export function connect(arg0: string, arg1: { dbName: string; }) {
// //   throw new Error("Function not implemented.");
// // }
// // src/mongoose.ts
// import mongoose from "mongoose";

// const connectDb = async () => {
//     try {
//         if (mongoose.connection.readyState) {
//             console.log("Already connected.");
//             return;
//         }
//         await mongoose.connect(process.env.MONGO_URI);
//         console.log("Database connected successfully.");
//     } catch (error) {
//         console.error("Database connection failed:", error);
//     }
// };

// export { connectDb }; // <-- Add this export statement


// src/mongoose.ts
// src/mongoose.ts
// src/mongoose.ts
import * as mongoose from "mongoose";


let isConnected = false; // Tracks the connection status

export const connectDb = async () => {
  // If we're already connected, just return.
  if (isConnected) {
    console.log("✅ MongoDB is already connected.");
    return;
  }

  // Use the new connection logic with try-catch
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    isConnected = true;
    console.log("✅ MongoDB connected successfully.");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    // You might want to throw the error to be caught by the calling function.
    throw error;
  }
};
export default connectDb; // <-- Add this export statement