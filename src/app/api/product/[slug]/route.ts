import connectDb from "@/lib/dbConnect";
import Product from "@/models/Product";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    await connectDb();
    const { slug } = params;
    
    console.log("🔍 Fetching product with slug:", slug);
    
    const product = await Product.findOne({ slug });
    
    if (!product) {
      console.log("❌ Product not found for slug:", slug);
      return Response.json(
        { error: "Product not found" },
        { status: 404 }
      );
    }
    
    console.log("✅ Product found:", product.title);
    return Response.json(product);
    
  } catch (error) {
    console.error("❌ Error fetching product:", error);
    return Response.json(
      { error: "Failed to fetch product" },
      { status: 500 }
    );
  }
}
