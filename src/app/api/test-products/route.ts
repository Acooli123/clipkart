import connectDb from "@/lib/dbConnect";
import Product from "@/models/Product";

export async function GET() {
  try {
    await connectDb();
    
    // Check if products already exist
    const existingProducts = await Product.find({});
    
    if (existingProducts.length > 0) {
      return Response.json({ 
        message: "Products already exist", 
        count: existingProducts.length,
        products: existingProducts.map(p => ({ title: p.title, slug: p.slug, category: p.category }))
      });
    }
    
    // Sample products
    const sampleProducts = [
      {
        title: "Most Stylish t-shirts",
        slug: "most-stylish-t-shirts",
        color: "Blue",
        description: "A comfortable and stylish t-shirt for everyday wear",
        price: 499,
        size: "M",
        image: "/white t-shirt.png",
        category: "t-shirts",
        availableQty: 10
      },
      {
        title: "Gillette top level trimmer",
        slug: "gillette-top-level-trimmer",
        color: "Black",
        description: "Professional grade trimmer for precise grooming",
        price: 1299,
        size: "One Size",
        image: "/file.svg",
        category: "accessories",
        availableQty: 5
      },
      {
        title: "Lather Bag",
        slug: "lather-bag",
        color: "Brown",
        description: "Classic leather bag for daily use",
        price: 899,
        size: "One Size",
        image: "/window.svg",
        category: "accessories",
        availableQty: 8
      },
      {
        title: "Coffee Mug",
        slug: "coffee-mug",
        color: "White",
        description: "Beautiful ceramic coffee mug",
        price: 299,
        size: "One Size",
        image: "/vercel.svg",
        category: "mugs",
        availableQty: 15
      }
    ];
    
    // Insert products
    const insertedProducts = await Product.insertMany(sampleProducts);
    
    return Response.json({ 
      message: "Sample products added successfully", 
      count: insertedProducts.length,
      products: insertedProducts.map(p => ({ title: p.title, slug: p.slug, category: p.category }))
    });
    
  } catch (error) {
    console.error("❌ Error adding sample products:", error);
    return Response.json(
      { error: "Failed to add sample products" },
      { status: 500 }
    );
  }
}
