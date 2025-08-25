import { NextResponse } from "next/server";
import Product from "@/models/Product";
import { connectDb } from "@/middleware/dbConnect";  // <-- named import

export async function GET() {
  await connectDb();

  const products = await Product.find();
  return NextResponse.json({ products });
}
