import Link from "next/link";
import Footer from "@/components/Footer";
import Product from "@/models/Product";
import connectDb from "@/lib/dbConnect";
import Navbar from "@/components/Navbar";

type ProductType = {
  _id: string;
  title: string;
  category: string;
  price: number;
  size: string[];
  image: string;
  slug: string;
};

export default async function Page() {
  await connectDb();

  const products = await Product.find({ category: "t-shirts" }).lean();

  return (
    <div className="flex flex-col -mt-5 min-h-screen w-full">
      {/* Navbar fixed at the top, full width */}
      <div className="sticky top-0 z-50 w-full">
        <Navbar />
      </div>

      {/* Page content */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap m-1 gap-3 justify-center">
            {products.map((product: ProductType) => (
              <Link
                href={`/product/${product.slug}`}
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
                    <div className="mt-1">
                      {product.size.includes("S") && (
                        <span className="border border-gray-300 px-1 mx-1">
                          S
                        </span>
                      )}
                      {product.size.includes("M") && (
                        <span className="border border-gray-300 px-1 mx-1">
                          M
                        </span>
                      )}
                      {product.size.includes("L") && (
                        <span className="border border-gray-300 px-1 mx-1">
                          L
                        </span>
                      )}
                      {product.size.includes("XL") && (
                        <span className="border border-gray-300 px-1 mx-1">
                          XL
                        </span>
                      )}
                      {product.size.includes("XXL") && (
                        <span className="border border-gray-300 px-1 mx-1">
                          XXL
                        </span>
                      )}
                    </div>

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
