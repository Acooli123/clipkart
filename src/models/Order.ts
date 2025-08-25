const mongoose = require('mongoose');
const { Schema, model, models } = mongoose;

const orderSchema = new Schema({
  user: { type: String, required: true },
  items: [
    {
      productId: { type: String },
      quantity: { type: Number, default: 1 },
    }
  ],
  address: { type: String, required: true },
  totalAmount: { type: Number, required: true },
  status: { type: String, required: true, default: 'Pending' },
}, { timestamps: true });

export default mongoose.model("Order", orderSchema);