import connectDb from "@/lib/dbConnect";
import Product from "@/models/Product";

export async function GET(request: Request) {
  try {
    await connectDb();
    
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    
    console.log("🔍 Fetching products for category:", category);
    
    let query = {};
    if (category) {
      query = { category: category };
    }
    
    const products = await Product.find(query);
    console.log(`✅ Found ${products.length} products for category: ${category}`);
    
    return Response.json(products);
    
  } catch (error) {
    console.error("❌ Error fetching products:", error);
    return Response.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
