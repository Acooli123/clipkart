"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { useCart } from "@/components/CartContext";

interface Product {
  _id: string;
  title: string;
  slug: string;
  color: string;
  description: string;
  price: number;
  size: string;
  image: string;
  category: string;
  availableQty: number;
}

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const { addToCart } = useCart();
  const [pincode, setPincode] = useState("");
  const [service, setService] = useState("");
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  // State to track if an item has been added to the cart
  const [itemAdded, setItemAdded] = useState(false);

  // Fetch product data
  useEffect(() => {
  const fetchProduct = async () => {
    try {
      const response = await fetch(`/api/product/${slug}`);
      
      if (response.ok) {
        const productData = await response.json();
        setProduct(productData);
        setSelectedSize(productData.size || "");
        setSelectedColor(productData.color || "");
      } else {
        // Log the response status and text for debugging
        const errorText = await response.text();
        console.error("Failed to fetch product:", response.status, errorText);
        
        if (response.status === 404) {
          console.error("Product not found for slug:", slug);
        }
      }
    } catch (error) {
      console.error("Error fetching product:", error);
      // You might want to set an error state here
    } finally {
      setLoading(false);
    }
  };

  fetchProduct();
}, [slug]);

  const checkServiceability = async () => {
    const pins = await fetch("/api/pincode");
    const pinJson = await pins.json();

    console.log("📦 API Response:", pinJson, "Entered Pincode:", pincode);

    // The API returns an array directly, not wrapped in an object
    const pincodes = Array.isArray(pinJson) ? pinJson : pinJson.pincodes || [];
    
    // Check if the entered pincode exists in the array
    if (pincodes.includes(pincode) || pincodes.includes(parseInt(pincode))) {
      setService("Yes");
    } else {
      setService("No");
    }
  };

  useEffect(() => {
    if (pincode) {
      checkServiceability();
    }
  }, [pincode]);

  const onChangePincode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPincode(e.target.value);
  };

  // New function to handle adding to cart and updating state
  const handleAddToCart = () => {
    if (product) {
      // For t-shirts, require size selection; for other products, use default size
      const sizeToUse = product.category === "t-shirts" ? selectedSize : product.size;
      
      addToCart(
        product.slug, // itemCode
        product.price, // price
        product.title, // name
        sizeToUse, // size
        selectedColor || product.color // variant
      );
      setItemAdded(true);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen w-full">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading product...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen w-full">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
            <p className="text-gray-600 mb-4">The product you're looking for doesn't exist.</p>
            <Link href="/" className="text-indigo-600 hover:text-indigo-800">
              Go back to home
            </Link>
          </div>
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
      <section className="text-gray-700 bg-white body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt={product.title}
              className="lg:w-1/2 w-full h-120 object-contain object-center rounded"
              src={product.image || "https://m.media-amazon.com/images/I/81g0RBf8ZoL._AC_UL480_FMwebp_QL65_.jpg"}
            />

            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {product.category}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product.title}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-indigo-400"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                  ))}
                  <span className="ml-3">4 Reviews</span>
                </span>
              </div>

              <p className="leading-relaxed">
                {product.description || "No description available for this product."}
              </p>

              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  <button 
                    className={`border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-currentColor ${
                      selectedColor === product.color ? 'ring-2 ring-indigo-500' : ''
                    }`}
                    style={{ backgroundColor: product.color }}
                    onClick={() => setSelectedColor(product.color)}
                  ></button>
                </div>
                {product.category === "t-shirts" && (
                  <div className="flex ml-6 items-center">
                    <span className="mr-3">Size</span>
                    <div className="relative">
                      <select
                        value={selectedSize}
                        onChange={(e) => setSelectedSize(e.target.value)}
                        className="rounded border border-gray-300 focus:ring-2 focus:ring-indigo-400 
  bg-white text-gray-700 py-2 pl-3 pr-10 appearance-currentColor focus:outline-currentColor focus:border-indigo-500"
                      >
                        <option value="">Select Size</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                      </select>

                      <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-500 pointer-events-currentColor flex items-center justify-center">
                        <svg
                          fill="currentColor"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flow-row">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ₹{product.price.toFixed(2)}
                </span>
                <button className="flex ml-4 text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-currentColor hover:bg-indigo-600 rounded-lg">
                  Buy now
                </button>
                <button
                  onClick={handleAddToCart}
                  disabled={product.category === "t-shirts" && !selectedSize}
                  className={`flex ml-2 text-white border-0 py-2 px-6 rounded-lg ${
                    (product.category === "t-shirts" && selectedSize) || product.category !== "t-shirts"
                      ? 'bg-indigo-500 hover:bg-indigo-600' 
                      : 'bg-gray-400 cursor-not-allowed'
                  }`}
                >
                  Add to Cart
                </button>
                
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>

              {product.category === "t-shirts" && !selectedSize && (
                <p className="text-red-500 text-sm mt-2">Please select a size to add to cart</p>
              )}

              <div className="pin flex gap-4 mt-4">
                <input
                  type="text"
                  placeholder="Enter pincode"
                  onChange={onChangePincode}
                  value={pincode}
                  className="border border-gray-400 mt-3 h-8 rounded-md p-1 w-40 bg-white text-black"
                />

                <button
                  onClick={checkServiceability}
                  className="mt-2 justify-center items-center text-white bg-yellow-600 border-0 py-1 px-6 focus:outline-currentColor hover:bg-orange-400 rounded-lg"
                >
                  check
                </button>
              </div>
              {service === "Yes" && (
                <div className="text-green-700 text-sm mt-3">
                  Yeah! this pincode is serviceable
                </div>
              )}
              {service === "No" && (
                <div className="text-red-700 text-sm mt-3">
                  Sorry! We don't deliver to this pincode yet
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </div>
  );
}