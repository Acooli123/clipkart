import { NextRequest, NextResponse } from 'next/server';

import mongoose from 'mongoose';
const { Schema, model, models } = mongoose;

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/clipkart';

// Connect to MongoDB
if (mongoose.connection.readyState === 0) {
  mongoose.connect(MONGODB_URI, {
    dbName: 'clipkart',
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as any);
}

// User Schema
const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, { timestamps: true });

const User = models.User || model('User', userSchema);

// POST: Register a new user
export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();
    if (!name || !email || !password) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: 'User already exists.' }, { status: 409 });
    }
    // Create new user
    const user = new User({ name, email, password });
    await user.save();
    return NextResponse.json({ message: 'User registered successfully.' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}

// GET: Get all users (for admin/testing)
export async function GET() {
  try {
    const users = await User.find({}, '-password'); // Exclude password
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}
