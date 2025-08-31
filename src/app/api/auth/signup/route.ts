import connectDb from "@/lib/dbConnect";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    console.log("🔐 Signup request received");
    await connectDb();
    console.log("✅ Database connected");
    
    const { name, email, password } = await req.json();
    console.log("📝 Signup data:", { name, email, password: password ? '[HIDDEN]' : 'undefined' });
    
    // Validate input
    if (!name || !email || !password) {
      console.log("❌ Validation failed - missing fields");
      return Response.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }
    
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("❌ User already exists:", email);
      return Response.json(
        { error: "User with this email already exists" },
        { status: 409 }
      );
    }
    
    // Hash password
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log("🔒 Password hashed successfully");
    
    // Create new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword
    });
    
    await newUser.save();
    console.log("✅ User saved to database");
    
    // Return success without password
    const { password: _, ...userWithoutPassword } = newUser.toObject();
    
    return Response.json(
      { 
        message: "User created successfully",
        user: userWithoutPassword
      },
      { status: 201 }
    );
    
  } catch (error) {
    console.error("❌ Signup error:", error);
    return Response.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}
