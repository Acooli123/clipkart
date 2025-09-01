import mongoose, { Schema, model, models } from 'mongoose';

const productSchema = new Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
  color: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  size: { type: String },
  image: { type: String },
  category: { type: String, required: true },
  availableQty: { type: Number, required: true },
}, { timestamps: true });

// Check if the model already exists to prevent overwriting
export default models.Product || model("Product", productSchema);
