import mongoose, { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, { timestamps: true });

// Check if the model already exists to prevent overwriting
export default models.User || model("User", userSchema);