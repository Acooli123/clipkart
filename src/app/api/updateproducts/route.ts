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

// POST method → add or update products
export async function POST(req: Request) {
  try {
    await connectDb();

    const body = await req.json();

    if (Array.isArray(body)) {
      // Upsert each product
      for (let i = 0; i < body.length; i++) {
        await Product.findByIdAndUpdate(body[i]._id, body[i], {
          new: true,
          upsert: true, // insert if not found
        });
      }
    } else {
      // Single product
      await Product.findByIdAndUpdate(body._id, body, {
        new: true,
        upsert: true,
      });
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
