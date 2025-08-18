"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <nav className=" p-4 shadow-xl bg-white flex flex-col  ">
      <div className="flex items-center justify-between">
        {/* Left - App Name */}
        <div className="font-bold text-xl">Clipkart</div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 font-bold">
          <Link href="/home">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/accessories">Accessories</Link>
          <Link href="/t-shirt">T-Shirt</Link>
          <Link href="/athenic">Athenic</Link>
          <Link href="/mugs">Mugs</Link>
          <Link href="/product">Product</Link>
          <Link href="/order">Order</Link>
          <Link href="/checkout">Checkout</Link>
          <Link href="/login">Login</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Right - Cart Icon (Responsive) */}
        <div className="relative flex items-center">
          <button
            onClick={() => setCartOpen(!cartOpen)}
            className="flex items-center justify-center"
          >
            <img
              src="cart.jpg"
              alt="cart"
              className="w-7 h-7 object-contain"
            />
          </button>

          {/* Dropdown Cart (mobile + desktop) */}
          {cartOpen && (
            <div className="absolute right-0 top-10 w-56 bg-white shadow-lg rounded-xl p-4 z-50">
              <h3 className="font-semibold text-gray-800">Your Cart</h3>
              <ul className="mt-2 space-y-2 text-sm text-gray-600">
                <li>🛒 Item 1</li>
                <li>🛒 Item 2</li>
                <li>🛒 Item 3</li>
              </ul>
              <Link
                href="/cart"
                className="block mt-3 text-center bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 transition"
              >
                View Cart
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col mt-4 gap-4 md:hidden">
          <Link href="/home">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/accessories">Accessories</Link>
          <Link href="/t-shirt">T-Shirt</Link>
          <Link href="/athenic">Athenic</Link>
          <Link href="/mugs">Mugs</Link>
          <Link href="/product">Product</Link>
          <Link href="/order">Order</Link>
          <Link href="/checkout">Checkout</Link>
          <Link href="/login">Login</Link>
          <Link href="/contact">Contact</Link>
        </div>
      )}
    </nav>
  );
}
