import connectDb from "@/lib/dbConnect";
import Product from "@/models/Product";

// GET method for fetching only t-shirts
export async function GET() {
  try {
    await connectDb();

    // ✅ Fetch only products with category "tshirt"
    const products = await Product.find({ category: "t-shirts" });
    let tshirts: Record<string, any> = {};

    for (let item of products) {
      if (tshirts[item.title]) {
        // If same title exists, push new color/size
        if (item.availableQty > 0) {
          if (!tshirts[item.title].color.includes(item.color)) {
            tshirts[item.title].color.push(item.color);
          }
          if (!tshirts[item.title].size.includes(item.size)) {
            tshirts[item.title].size.push(item.size);
          }
        }
      } else {
        // First time adding this product title
        tshirts[item.title] = JSON.parse(JSON.stringify(item));
        if (item.availableQty > 0) {
          tshirts[item.title].color = [item.color];
          tshirts[item.title].size = [item.size];
        } else {
          tshirts[item.title].color = [];
          tshirts[item.title].size = [];
        }
      }
    }

    // ✅ Return only t-shirts
    return Response.json(tshirts);
  } catch (error) {
    console.error("❌ Error fetching t-shirts:", error);
    return Response.json(
      { error: "Failed to fetch t-shirts" },
      { status: 500 }
    );
  }
}
