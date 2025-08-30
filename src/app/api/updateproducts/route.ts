import connectDb from "@/lib/dbConnect";
import Product from "@/models/Product";

// GET method → fetch all products
export async function GET() {
  try {
    await connectDb();

    const products = await Product.find({});
    return Response.json(products);
  } catch (error) {
    console.error("❌ Error fetching products:", error);
    return Response.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}

// POST method → add products using loop
export async function POST(req: Request) {
  try {
    await connectDb();

    const body = await req.json();

    // If body is an array, loop and save one by one
    if (Array.isArray(body)) {
      for (let i = 0; i < body.length; i++) {
        let p = new Product.findByAndUpdate(body[i]._id, body[i], { new: true, upsert: true });
        await p.save();
      }
    } else {
      // Single product
      let p = new Product(body);
      await p.save();
    }

    return Response.json(
      { message: "✅ Product(s) added successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("❌ Error adding product:", error);
    return Response.json({ error: "Failed to add product" }, { status: 500 });
  }
}
