import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function page() {
  return (
    <div className="flex flex-col -mt-5 min-h-screen w-full">
      {/* Navbar fixed at the top, full width */}
      <div className="sticky top-0 z-50 w-full">
      </div>

      {/* Page content */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap m-1 gap-2">
            <Link href="/product/wear-the-code" className="block">
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-4 flex flex-col">
                {/* Product Image */}
                <div className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    src="https://m.media-amazon.com/images/I/61Wfuh9LXsL._AC_UL480_FMwebp_QL65_.jpg"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Product Details */}
                <div className="mt-4 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    ACCESSORIES
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    Battery Powered Body Saver
                  </h2>
                
                  <p className="mt-2 text-lg font-semibold text-gray-900">
                    ₹1399.00
                  </p>
                </div>

                {/* Action Buttons */}
                
              </div>
            </Link>
            <Link href="/product/wear-the-code" className="block">
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-4 flex flex-col">
                {/* Product Image */}
                <div className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    src="https://m.media-amazon.com/images/I/71BbEtjHWrL._AC_UL480_FMwebp_QL65_.jpg
"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Product Details */}
                <div className="mt-4 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    ACCESSORIES
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    Steel Black Locket
                  </h2>
                
                  <p className="mt-2 text-lg font-semibold text-gray-900">
                    ₹425.00
                  </p>
                </div>

                {/* Action Buttons */}
                
              </div>
            </Link>
            <Link href="/product/wear-the-code" className="block">
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-4 flex flex-col">
                {/* Product Image */}
                <div className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    src="https://m.media-amazon.com/images/I/61oHv5zg5xL._AC_UL960_FMwebp_QL65_.jpg"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Product Details */}
                <div className="mt-4 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    ACCESSORIES
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    Lather Bag
                  </h2>
                
                  <p className="mt-2 text-lg font-semibold text-gray-900">
                    ₹699.00
                  </p>
                </div>

                {/* Action Buttons */}
                
              </div>
            </Link>
            <Link href="/product/wear-the-code" className="block">
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-4 flex flex-col">
                {/* Product Image */}
                <div className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    src="https://m.media-amazon.com/images/I/61UeAyVYyHL._AC_CR0%2C0%2C0%2C0_SX615_SY462_.jpg"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Product Details */}
                <div className="mt-4 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    ACCESSORIES
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    Company Premium Perfume Gift Set
                  </h2>
                
                  <p className="mt-2 text-lg font-semibold text-gray-900">
                    ₹1299.00
                  </p>
                </div>

                {/* Action Buttons */}
                
              </div>
            </Link>
            <Link href="/product/wear-the-code" className="block">
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-4 flex flex-col">
                {/* Product Image */}
                <div className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    src="https://m.media-amazon.com/images/I/61opqQEBUxL._AC_UY327_FMwebp_QL65_.jpg"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Product Details */}
                <div className="mt-4 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    ACCESSORIES
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    Apple Macbook Pro M4
                  </h2>
                
                  <p className="mt-2 text-lg font-semibold text-gray-900">
                    ₹2,39,990.00
                  </p>
                </div>

                {/* Action Buttons */}
                
              </div>
            </Link>
            <Link href="/product/wear-the-code" className="block">
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-4 flex flex-col">
                {/* Product Image */}
                <div className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    src="https://m.media-amazon.com/images/I/712Y+xrw9SL._AC_UY327_FMwebp_QL65_.jpg"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Product Details */}
                <div className="mt-4 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    ACCESSORIES
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    HP 14 AI Laptop
                  </h2>
                
                  <p className="mt-2 text-lg font-semibold text-gray-900">
                    ₹83,999.00
                  </p>
                </div>

                {/* Action Buttons */}
                
              </div>
            </Link>
            <Link href="/product/wear-the-code" className="block">
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-4 flex flex-col">
                {/* Product Image */}
                <div className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    src="https://m.media-amazon.com/images/I/61giwQtR1qL._AC_UY327_FMwebp_QL65_.jpg"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Product Details */}
                <div className="mt-4 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    ACCESSORIES
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    IPhone 16 Pro Max
                  </h2>
                
                  <p className="mt-2 text-lg font-semibold text-gray-900">
                    ₹1,54,900.00
                  </p>
                </div>

                {/* Action Buttons */}
                
              </div>
            </Link>
            <Link href="/product/wear-the-code" className="block">
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-4 flex flex-col">
                {/* Product Image */}
                <div className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    src="https://m.media-amazon.com/images/I/71K84j2O8wL._AC_UY327_FMwebp_QL65_.jpg"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Product Details */}
                <div className="mt-4 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    ACCESSORIES
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    OnePlus 11 5G
                  </h2>
                
                  <p className="mt-2 text-lg font-semibold text-gray-900">
                    ₹56,999.00
                  </p>
                </div>

                {/* Action Buttons */}
                
              </div>
            </Link>
            <Link href="/product/wear-the-code" className="block">
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-4 flex flex-col">
                {/* Product Image */}
                <div className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    src="https://m.media-amazon.com/images/I/71Ytv8ec8qL._AC_UY327_FMwebp_QL65_.jpg"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Product Details */}
                <div className="mt-4 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    ACCESSORIES
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    Apple watch series 10
                  </h2>
                
                  <p className="mt-2 text-lg font-semibold text-gray-900">
                    ₹84,900.00
                  </p>
                </div>

                {/* Action Buttons */}
                
              </div>
            </Link>
            <Link href="/product/wear-the-code" className="block">
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-4 flex flex-col">
                {/* Product Image */}
                <div className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    src="https://m.media-amazon.com/images/I/71tQv2EIRDL._SX522_.jpg"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Product Details */}
                <div className="mt-4 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    ACCESSORIES
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    Fire-Boltt Smart Watch
                  </h2>
                
                  <p className="mt-2 text-lg font-semibold text-gray-900">
                    ₹1399.00
                  </p>
                </div>

                {/* Action Buttons */}
                
              </div>
            </Link>
            <Link href="/product/wear-the-code" className="block">
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-4 flex flex-col">
                {/* Product Image */}
                <div className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    src="https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_UY327_FMwebp_QL65_.jpg"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Product Details */}
                <div className="mt-4 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    ACCESSORIES
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    Apple AirPods Pro
                  </h2>
                
                  <p className="mt-2 text-lg font-semibold text-gray-900">
                    ₹22,990.00
                  </p>
                </div>

                {/* Action Buttons */}
                
              </div>
            </Link>
            <Link href="/product/wear-the-code" className="block">
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-4 flex flex-col">
                {/* Product Image */}
                <div className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    src="https://m.media-amazon.com/images/I/71rbNPgK-RL._AC_UL480_FMwebp_QL65_.jpg"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Product Details */}
                <div className="mt-4 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    ACCESSORIES
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    GOBOULT Mustang Earbuds
                  </h2>
                
                  <p className="mt-2 text-lg font-semibold text-gray-900">
                    ₹1799.00
                  </p>
                </div>

                {/* Action Buttons */}
                
              </div>
            </Link>
            <Link href="/product/wear-the-code" className="block">
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-4 flex flex-col">
                {/* Product Image */}
                <div className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    src="https://m.media-amazon.com/images/I/51h7CQTRJ1L._AC_UY327_FMwebp_QL65_.jpg"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Product Details */}
                <div className="mt-4 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    ACCESSORIES
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    OnePlus Buds 3 Earbuds
                  </h2>
                
                  <p className="mt-2 text-lg font-semibold text-gray-900">
                    ₹4799.00
                  </p>
                </div>

                {/* Action Buttons */}
                
              </div>
            </Link>
            <Link href="/product/wear-the-code" className="block">
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-4 flex flex-col">
                {/* Product Image */}
                <div className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    src="https://m.media-amazon.com/images/I/51DXoXxR9aL._AC_UL480_FMwebp_QL65_.jpg"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Product Details */}
                <div className="mt-4 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    ACCESSORIES
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    Titan Black Dial Watch
                  </h2>
                
                  <p className="mt-2 text-lg font-semibold text-gray-900">
                    ₹5806.00
                  </p>
                </div>

                {/* Action Buttons */}
                
              </div>
            </Link>
            <Link href="/product/wear-the-code" className="block">
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-4 flex flex-col">
                {/* Product Image */}
                <div className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    src="https://m.media-amazon.com/images/I/51vT4GzBObL._AC_UY327_FMwebp_QL65_.jpg"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Product Details */}
                <div className="mt-4 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    ACCESSORIES
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    OnePlus Wireless Z3 Neckband
                  </h2>
                
                  <p className="mt-2 text-lg font-semibold text-gray-900">
                    ₹1599.00
                  </p>
                </div>

                {/* Action Buttons */}
                
              </div>
            </Link>
             <Link href="/product/wear-the-code" className="block">
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-4 flex flex-col">
                {/* Product Image */}
                <div className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    src="https://m.media-amazon.com/images/I/81lGxS2ZisL._AC_UY327_FMwebp_QL65_.jpg"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Product Details */}
                <div className="mt-4 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    ACCESSORIES
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    Amazon Echo Dot
                  </h2>
                
                  <p className="mt-2 text-lg font-semibold text-gray-900">
                    ₹5499.00
                  </p>
                </div>

                {/* Action Buttons */}
                
              </div>
            </Link>
            <Link href="/product/wear-the-code" className="block">
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-4 flex flex-col">
                {/* Product Image */}
                <div className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    src="https://m.media-amazon.com/images/I/71dV1Nr821L._AC_UY327_FMwebp_QL65_.jpg"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Product Details */}
                <div className="mt-4 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    ACCESSORIES
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    JBL Go 3 Wireless Speakers
                  </h2>
                
                  <p className="mt-2 text-lg font-semibold text-gray-900">
                    ₹2799.00
                  </p>
                </div>

                {/* Action Buttons */}
                
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
}
