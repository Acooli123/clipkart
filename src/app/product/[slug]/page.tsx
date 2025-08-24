"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { useCart } from "@/components/CartContext";

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const { addToCart } = useCart();
  const [pincode, setPincode] = useState("");
  const [service, setService] = useState("");

  // State to track if an item has been added to the cart
  const [itemAdded, setItemAdded] = useState(false);

  useEffect(() => {
    const checkServiceability = async () => {
      if (pincode.length === 6) {
        // only check if pincode is 6 digits
        let pins = await fetch("http://localhost:3000/api/pincode");
        let pinJson = await pins.json();

        if (pinJson.includes(parseInt(pincode))) {
          setService("Yes");
        } else {
          setService("No");
        }
      } else {
        setService(""); // reset if pincode not valid
      }
    };
    checkServiceability();
  }, [pincode]); // runs every time pincode changes

  const onChangePincode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPincode(e.target.value);
  };

  // New function to handle adding to cart and updating state
  const handleAddToCart = () => {
    addToCart(
      slug, // itemCode
      1399, // price
      "T-shirt", // name
      "M", // size
      "Blue" // variant
    );
    setItemAdded(true);
  };

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
              alt="ecommerce"
              className="lg:w-1/2 w-full h-120 object-contain object-center rounded"
              src="https://m.media-amazon.com/images/I/81g0RBf8ZoL._AC_UL480_FMwebp_QL65_.jpg"
            />

            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                Clipkart
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                Your nearest shopping store (Slug: {slug})
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
                Clipkart is your one-stop shopping destination for all your
                everyday needs. From trendy fashion and latest gadgets to home
                essentials and groceries, Clipkart brings everything closer to
                you with fast delivery and trusted quality. Shop anytime,
                anywhere – because your nearest store is now just a click away!.
              </p>

              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-currentColor"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-gray-400 rounded-full w-6 h-6 focus:outline-currentColor"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-currentColor"></button>
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select
                      className="rounded border border-gray-300 focus:ring-2 focus:ring-indigo-400 
  bg-white text-gray-700 py-2 pl-3 pr-10 appearance-currentColor focus:outline-currentColor focus:border-indigo-500"
                    >
                      <option className="bg-white text-gray-700">S</option>
                      <option className="bg-white text-gray-700">M</option>
                      <option className="bg-white text-gray-700">L</option>
                      <option className="bg-white text-gray-700">XL</option>
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
              </div>

              <div className="flex flow-row">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ₹1399.00
                </span>
                <button className="flex ml-4 text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-currentColor hover:bg-indigo-600 rounded-lg">
                  Buy now
                </button>
                <button
                  onClick={handleAddToCart}
                  className="flex ml-2 text-white bg-indigo-500 border-0 py-2 px-6 hover:bg-indigo-600 rounded-lg"
                >
                  Add to Cart
                </button>
                {/* Conditionally render the View Cart button after an item is added */}
                
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
              <div className="pin flex gap-4 mt-4">
                <input
                  type="text"
                  placeholder="Enter pincode"
                  onChange={onChangePincode}
                  value={pincode}
                  className="border border-gray-400 mt-3 h-8 rounded-md p-1 w-40 bg-white text-black"
                />

                <button
                  // onClick={checkServiceability}
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
      <Footer />
    </div>
  );
}