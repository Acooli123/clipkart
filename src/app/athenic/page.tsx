import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function page() {
  return (
    <div className="flex flex-col -mt-5 min-h-screen w-full">
      {/* Navbar fixed at the top, full width */}
      <div className="sticky top-0 z-50 w-full">
        <Navbar />
      </div>

      {/* Page content */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap m-1">
            <Link href="/product/wear-the-code" className="block">
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-4 flex flex-col">
                {/* Product Image */}
                <div className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    src="https://m.media-amazon.com/images/I/61oi8x7+diL._AC_UL480_FMwebp_QL65_.jpg"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Product Details */}
                <div className="mt-4 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    ETHNICS
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    Silk Kurti with Palazo
                  </h2>
                  <p className="text-sm text-gray-700">Sizes: S M L XL XXL</p>
                  <p className="mt-2 text-lg font-semibold text-gray-900">
                    ₹2899.00
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="mt-4 space-y-2">
                  <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-4 rounded">
                    Add to Cart
                  </button>
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded">
                    Buy Now
                  </button>
                </div>
              </div>
            </Link>
            <Link href="/product/wear-the-code" className="block">
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-4 flex flex-col">
                {/* Product Image */}
                <div className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    src="https://m.media-amazon.com/images/I/81g0RBf8ZoL._AC_UL480_FMwebp_QL65_.jpg
"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Product Details */}
                <div className="mt-4 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    ETHNICS
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    Pure Kanjibharam
                  </h2>
                  
                  <p className="mt-2 text-lg font-semibold text-gray-900">
                    ₹496.00
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="mt-4 space-y-2">
                  <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-4 rounded">
                    Add to Cart
                  </button>
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded">
                    Buy Now
                  </button>
                </div>
              </div>
            </Link>
            <Link href="/product/wear-the-code" className="block">
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-4 flex flex-col">
                {/* Product Image */}
                <div className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    src="https://m.media-amazon.com/images/I/81gvI0fye+L._AC_UL480_FMwebp_QL65_.jpg"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Product Details */}
                <div className="mt-4 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    ETHNICS
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    Benarashi Silk
                  </h2>
                  
                  <p className="mt-2 text-lg font-semibold text-gray-900">
                    ₹3199.00
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="mt-4 space-y-2">
                  <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-4 rounded">
                    Add to Cart
                  </button>
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded">
                    Buy Now
                  </button>
                </div>
              </div>
            </Link>
            <Link href="/product/wear-the-code" className="block">
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-4 flex flex-col">
                {/* Product Image */}
                <div className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    src="https://m.media-amazon.com/images/I/71IVCDIGDnL._AC_UL480_FMwebp_QL65_.jpg"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Product Details */}
                <div className="mt-4 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    ETHNICS
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    Silk Blend Saree
                  </h2>
                  
                  <p className="mt-2 text-lg font-semibold text-gray-900">
                    ₹1299.00
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="mt-4 space-y-2">
                  <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-4 rounded">
                    Add to Cart
                  </button>
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded">
                    Buy Now
                  </button>
                </div>
              </div>
            </Link>
            <Link href="/product/wear-the-code" className="block">
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-4 flex flex-col">
                {/* Product Image */}
                <div className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    src="https://m.media-amazon.com/images/I/71oecMSXo1L._AC_UL480_FMwebp_QL65_.jpg"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Product Details */}
                <div className="mt-4 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    ETHNICS
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    Cotton Kurta with Silk Dhoti
                  </h2>
                  <p className="text-sm text-gray-700">Sizes: S M L XL XXL</p>
                  <p className="mt-2 text-lg font-semibold text-gray-900">
                    ₹1600.00
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="mt-4 space-y-2">
                  <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-4 rounded">
                    Add to Cart
                  </button>
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded">
                    Buy Now
                  </button>
                </div>
              </div>
            </Link>
            <Link href="/product/wear-the-code" className="block">
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-4 flex flex-col">
                {/* Product Image */}
                <div className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    src="https://m.media-amazon.com/images/I/61c-X2Mo-5L._AC_UL480_FMwebp_QL65_.jpg"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Product Details */}
                <div className="mt-4 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    ETHNICS
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    Cotton Sherwani
                  </h2>
                  <p className="text-sm text-gray-700">Sizes: S M L XL XXL</p>
                  <p className="mt-2 text-lg font-semibold text-gray-900">
                    ₹2099.00
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="mt-4 space-y-2">
                  <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-4 rounded">
                    Add to Cart
                  </button>
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded">
                    Buy Now
                  </button>
                </div>
              </div>
            </Link>
            <Link href="/product/wear-the-code" className="block">
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-4 flex flex-col">
                {/* Product Image */}
                <div className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    src="https://m.media-amazon.com/images/I/61tfBgHdX4L._AC_UL480_FMwebp_QL65_.jpg"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Product Details */}
                <div className="mt-4 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    ETHNICS
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    Cotton Sherwani (only top)
                  </h2>
                  <p className="text-sm text-gray-700">Sizes: S M L XL XXL</p>
                  <p className="mt-2 text-lg font-semibold text-gray-900">
                    ₹2519.00
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="mt-4 space-y-2">
                  <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-4 rounded">
                    Add to Cart
                  </button>
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded">
                    Buy Now
                  </button>
                </div>
              </div>
            </Link>
            <Link href="/product/wear-the-code" className="block">
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-4 flex flex-col">
                {/* Product Image */}
                <div className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    src="https://m.media-amazon.com/images/I/71V1vzwFUbL._AC_UL480_FMwebp_QL65_.jpg"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Product Details */}
                <div className="mt-4 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    ETHNICS
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    Silk Cotton Modi Court
                  </h2>
                  <p className="text-sm text-gray-700">Sizes: S M L XL XXL</p>
                  <p className="mt-2 text-lg font-semibold text-gray-900">
                    ₹777.00
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="mt-4 space-y-2">
                  <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-4 rounded">
                    Add to Cart
                  </button>
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded">
                    Buy Now
                  </button>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
