"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

export default function Home() {
  const [cart, setCart] = useState<{ [key: string]: any }>({});
  const [subTotal, setSubtotal] = useState(0);

  // Helper to calculate subtotal
  const calculateSubTotal = (myCart: { [key: string]: any }) => {
    let newSubTotal = 0;
    Object.keys(myCart).forEach((key) => {
      newSubTotal += myCart[key].price * myCart[key].quantity;
    });
    setSubtotal(newSubTotal);
  };

  // Load cart from localStorage
  useEffect(() => {
    console.log("Cart loaded from localStorage in app/page.tsx");
    try {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        const savedCart = JSON.parse(storedCart);
        setCart(savedCart);
        calculateSubTotal(savedCart);
      }
    } catch (error) {
      console.error("Error parsing cart from localStorage:", error);
      localStorage.clear();
    }
  }, []);

  // Save cart to localStorage
  const saveCart = (myCart: { [key: string]: any }) => {
    localStorage.setItem("cart", JSON.stringify(myCart));
    calculateSubTotal(myCart);
  };

  // Add to cart
  const addToCart = (
    itemCode: string,
    quantity: number,
    price: number,
    name: string,
    size: string,
    variant: string
  ) => {
    let newCart = { ...cart };
    if (itemCode in newCart) {
      newCart[itemCode].quantity += quantity;
    } else {
      newCart[itemCode] = { quantity, price, name, size, variant };
    }
    setCart(newCart);
    saveCart(newCart);
  };

  // Remove from cart
  const removeFromCart = (itemCode: string, quantity: number) => {
    let newCart = { ...cart };
    if (itemCode in newCart) {
      newCart[itemCode].quantity -= quantity;
      if (newCart[itemCode].quantity <= 0) {
        delete newCart[itemCode];
      }
    }
    setCart(newCart);
    saveCart(newCart);
  };

  // Clear cart
  const clearCart = () => {
    setCart({});
    saveCart({});
  };

  return (
    <div className="flex flex-col -mt-5 min-h-screen w-full bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <div className="flex-grow p-6 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-800">Welcome to Clipkart 🛍️</h1>
        <p className="mt-2 text-gray-600">Your nearest shopping store!</p>

        {/* Buttons */}
        {/* <div className="flex gap-4 mt-6">
          <button
            onClick={() => addToCart("item123", 1, 499, "T-shirt", "M", "Blue")}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Add T-Shirt
          </button>

          <button
            onClick={() => removeFromCart("item123", 1)}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Remove T-Shirt
          </button>

        </div> */}

        {/* Subtotal */}
        {/* <p className="mt-6 text-lg font-semibold text-gray-800">
          Subtotal: ₹{subTotal}
        </p> */}
      </div>

      {/* Footer */}
      
    </div>
  );
}
