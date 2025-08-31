import connectDb from "@/lib/dbConnect";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    console.log("🔐 Login request received");
    await connectDb();
    console.log("✅ Database connected");
    
    const { email, password } = await req.json();
    console.log("📝 Login attempt for:", email);
    
    // Validate input
    if (!email || !password) {
      console.log("❌ Validation failed - missing fields");
      return Response.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }
    
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      console.log("❌ User not found:", email);
      return Response.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }
    console.log("✅ User found:", user.email);
    
    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.log("❌ Invalid password for user:", email);
      return Response.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }
    console.log("✅ Password validated for user:", email);
    
    // Return user data without password
    const { password: _, ...userWithoutPassword } = user.toObject();
    
    return Response.json({
      message: "Login successful",
      user: userWithoutPassword
    });
    
  } catch (error) {
    console.error("❌ Login error:", error);
    return Response.json(
      { error: "Failed to authenticate user" },
      { status: 500 }
    );
  }
}
