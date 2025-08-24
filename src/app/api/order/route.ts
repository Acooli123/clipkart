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

const orderSchema = new Schema({
	user: { type: String, required: true }, // user id or email
	items: [
		{
			productId: { type: String, required: true },
			name: String,
			price: Number,
			quantity: Number,
		}
	],
	total: { type: Number, required: true },
	address: { type: String, required: true },
	status: { type: String, default: 'pending' },
}, { timestamps: true });

const Order = models.Order || model('Order', orderSchema);

// GET: Get all orders
export async function GET() {
	try {
		const orders = await Order.find();
		return NextResponse.json(orders);
	} catch (error) {
		return NextResponse.json({ error: 'Server error.' }, { status: 500 });
	}
}

// POST: Create a new order
export async function POST(req: NextRequest) {
	try {
		const { user, items, total, address } = await req.json();
		if (!user || !items || !total || !address) {
			return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
		}
		const order = new Order({ user, items, total, address });
		await order.save();
		return NextResponse.json({ message: 'Order placed successfully.' }, { status: 201 });
	} catch (error) {
		return NextResponse.json({ error: 'Server error.' }, { status: 500 });
	}
}
