import { connectDb } from "@/lib/dbConnect";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDb();   // ✅ should now work
  const users = await User.find({});
  return NextResponse.json(users);
}
