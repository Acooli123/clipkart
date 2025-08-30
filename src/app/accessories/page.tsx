import Link from "next/link";
import Footer from "@/components/Footer";
import Product from "@/models/Product";
import connectDb from "@/lib/dbConnect";

type ProductType = {
  _id: string;
  title: string;
  category: string;
  price: number;
  size: string[];
  image: string;
};

export default async function page() {
  await connectDb();

  // ✅ Only fetch products with category = "accessories"
  const products = await Product.find({ category: "accessories" }).lean();

  return (
    <div className="flex flex-col -mt-5 min-h-screen w-full">
      {/* Navbar fixed at the top, full width */}
      <div className="sticky top-0 z-50 w-full"></div>

      {/* Page content */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap m-1 gap-3 justify-center">
            {products.map((product: ProductType) => (
              <Link
                href={`/product/${product._id}`}
                key={product._id}
                className="block"
              >
                <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-4 flex flex-col">
                  {/* Product Image */}
                  <div className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt={product.title}
                      src={product.image}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="mt-4 text-center">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      {product.category}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {product.title}
                    </h2>

                    <p className="mt-2 text-lg font-semibold text-gray-900">
                      ₹{product.price}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
}
