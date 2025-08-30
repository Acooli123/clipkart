const mongoose = require('mongoose');
const { Schema, model, models } = mongoose;

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    
    }, { timestamps: true }
);

mongoose.models = {};
export default mongoose.model("User", userSchema);


//models/User.ts
// import { Schema, model, models } from 'mongoose';

// const userSchema = new Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
// }, { timestamps: true });

// // Check if the model already exists to prevent overwriting
// export default models.User || model("User", userSchema);