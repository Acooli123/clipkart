"use client";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";

type ProductType = {
  _id: string;
  title: string;
  category: string;
  price: number;
  size: string;
  image: string;
  slug: string;
};

export default function Page() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/getproducts?category=t-shirts');
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          console.error('Failed to fetch products');
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen w-full">
        <Navbar />
        <div className="flex items-center justify-center flex-1">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-500"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col -mt-5 min-h-screen w-full">
      {/* Navbar fixed at the top, full width */}
      <div className="sticky top-0 z-50 w-full">
        {/* <Navbar /> */}
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
                      <span className="border border-gray-300 px-2 py-1 rounded text-sm">
                        {product.size}
                      </span>
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
