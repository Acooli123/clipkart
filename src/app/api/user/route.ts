import { NextResponse } from "next/server";
import { connectDb } from "@/middleware/dbConnect";
import User from "@/models/User";

export async function GET() {
  await connectDb();
  const users = await User.find({});
  return NextResponse.json(users);
}
