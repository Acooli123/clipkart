import connectDb from "@/lib/dbConnect";
import Product from "@/models/Product";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    await connectDb();
    
    const { slug } = params;
    
    // Find product by slug
    const product = await Product.findOne({ slug });
    
    if (!product) {
      return Response.json(
        { error: "Product not found" },
        { status: 404 }
      );
    }
    
    return Response.json(product);
  } catch (error) {
    console.error("❌ Error fetching product:", error);
    return Response.json(
      { error: "Failed to fetch product" },
      { status: 500 }
    );
  }
}
