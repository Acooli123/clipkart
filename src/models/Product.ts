const mongoose = require('mongoose');
const { Schema, model, models } = mongoose;

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    color: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    size: { type: String },
    image: { type: String },
    category: { type: String, required: true },
    availableQty: { type: Number, required : true },
    }, { timestamps: true }
);

mongoose.models = {};

export default mongoose.model("Product", productSchema);
