// src/app/api/product/[slug]/route.ts
import connectDb from "@/lib/dbConnect";
import Product from "@/models/Product";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    console.log("🚀 API route called for slug:", params.slug);
    
    await connectDb();
    console.log("✅ Database connected successfully");
    
    const { slug } = params;
    
    console.log("🔍 Fetching product with slug:", slug);
    
    // Add this to see what's in your database
    const allProducts = await Product.find({}).limit(5);
    console.log("📦 Sample products in DB:", allProducts.map(p => ({ slug: p.slug, title: p.title })));
    
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