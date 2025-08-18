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
            <Link href="/product/choose-your-mugs" className="block">
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-4 flex flex-col">
                {/* Product Image */}
                <div className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    src="https://m.media-amazon.com/images/I/91CVVaGV14L._AC_UL480_FMwebp_QL65_.jpg"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Product Details */}
                <div className="mt-4 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    MUGS
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    Ceramic Mugs 
                  </h2>
                  
                  <p className="mt-2 text-lg font-semibold text-gray-900">
                    ₹275.00
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
            <Link href="/product/choose-your-mugs" className="block">
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-4 flex flex-col">
                {/* Product Image */}
                <div className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    src="https://m.media-amazon.com/images/I/81KNuvhs-aL._AC_UL480_FMwebp_QL65_.jpg
"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Product Details */}
                <div className="mt-4 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    MUGS
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    Coffie Mugs
                  </h2>
                  
                  <p className="mt-2 text-lg font-semibold text-gray-900">
                    ₹475.00
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
            <Link href="/product/choose-your-mugs" className="block">
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-4 flex flex-col">
                {/* Product Image */}
                <div className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    src="https://m.media-amazon.com/images/I/51I11Ks0SZL._AC_UL480_FMwebp_QL65_.jpg"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Product Details */}
                <div className="mt-4 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    MUGS
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    Clay Coffie Mug
                  </h2>
                  
                  <p className="mt-2 text-lg font-semibold text-gray-900">
                    ₹179.00
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
            <Link href="/product/choose-your-mugs" className="block">
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-4 flex flex-col">
                {/* Product Image */}
                <div className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    src="https://m.media-amazon.com/images/I/61InycGBJoL._AC_UL480_FMwebp_QL65_.jpg"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Product Details */}
                <div className="mt-4 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    MUGS
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    Steel Mugs
                  </h2>
                  
                  <p className="mt-2 text-lg font-semibold text-gray-900">
                    ₹153.00
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
            <Link href="/product/choose-your-mugs" className="block">
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-4 flex flex-col">
                {/* Product Image */}
                <div className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    src="https://m.media-amazon.com/images/I/514ncEcSjwL._AC_UL480_FMwebp_QL65_.jpg"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Product Details */}
                <div className="mt-4 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    MUGS
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    Vasukie Panda Coffie Mug
                  </h2>
                  
                  <p className="mt-2 text-lg font-semibold text-gray-900">
                    ₹611.00
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
            <Link href="/product/choose-your-mugs" className="block">
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-4 flex flex-col">
                {/* Product Image */}
                <div className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    src="https://m.media-amazon.com/images/I/61WsnyUdmqL._AC_UL480_FMwebp_QL65_.jpg"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Product Details */}
                <div className="mt-4 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    MUGS
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    Nirwana Coffie Mugs
                  </h2>
                  
                  <p className="mt-2 text-lg font-semibold text-gray-900">
                    ₹749.00
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
            <Link href="/product/choose-your-mugs" className="block">
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-4 flex flex-col">
                {/* Product Image */}
                <div className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    src="https://m.media-amazon.com/images/I/61xpYAu9RaL._AC_UL480_FMwebp_QL65_.jpg"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Product Details */}
                <div className="mt-4 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    MUGS
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    Kililuxxa Class Coffie Mug
                  </h2>
                  
                  <p className="mt-2 text-lg font-semibold text-gray-900">
                    ₹270.00
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
            <Link href="/product/choose-your-mugs" className="block">
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-4 flex flex-col">
                {/* Product Image */}
                <div className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    src="https://m.media-amazon.com/images/I/61NgSfeRWFL._AC_UL480_FMwebp_QL65_.jpg"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Product Details */}
                <div className="mt-4 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    MUGS
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    Cinical Prism Coffie Mugs
                  </h2>
                  
                  <p className="mt-2 text-lg font-semibold text-gray-900">
                    ₹599.00
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
