import { NextRequest, NextResponse } from 'next/server';
import mongoose, { Schema, model, models } from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/clipkart';

if (mongoose.connection.readyState === 0) {
  mongoose.connect(MONGODB_URI, {
    dbName: 'clipkart',
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as any);
}

const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  image: { type: String },
  category: { type: String },
  stock: { type: Number, default: 0 },
}, { timestamps: true });

const Product = models.Product || model('Product', productSchema);

// GET: Get all products
export async function GET() {
  try {
    const products = await Product.find();
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}

// POST: Add a new product
export async function POST(req: NextRequest) {
  try {
    const { name, description, price, image, category, stock } = await req.json();
    if (!name || !price) {
      return NextResponse.json({ error: 'Name and price are required.' }, { status: 400 });
    }
    const product = new Product({ name, description, price, image, category, stock });
    await product.save();
    return NextResponse.json({ message: 'Product created successfully.' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}