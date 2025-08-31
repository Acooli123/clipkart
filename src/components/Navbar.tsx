"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/components/CartContext";
import { useUser } from "@/context/UserContext";


export default function Navbar() {
  const router = useRouter();
  const { 
    cartCount,
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    clearCart 
  } = useCart();
  const { user, isAuthenticated, logout } = useUser();
  const [isOpen, setIsOpen] = React.useState(false);
  const [cartOpen, setCartOpen] = React.useState(false);

  return (
    <nav className="p-4 shadow-xl bg-white flex flex-col">
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
          
          <Link href="/contact">Contact</Link>
        </div>

        {/* Right - Login and Cart Icons */}
        <div className="relative flex items-center gap-4">
          {/* Login/Logout Button */}
          {isAuthenticated ? (
            <button
              onClick={logout}
              className="flex items-center gap-2 hover:text-indigo-600 transition-colors"
            >
              <img
                src="/login.jpg"
                alt="logout"
                className="w-7 h-7 object-contain"
              />
              <span className="text-sm">Logout</span>
            </button>
          ) : (
            <Link href="/login" className="flex items-center gap-2 hover:text-indigo-600 transition-colors">
              <img
                src="/login.jpg"
                alt="login"
                className="w-7 h-7 object-contain"
              />
              <span className="text-sm">Login</span>
            </Link>
          )}

          {/* Cart Button */}
          <button
            onClick={() => isAuthenticated ? setCartOpen(!cartOpen) : router.push('/login')}
            className={`flex items-center justify-center relative ${!isAuthenticated ? 'opacity-50 cursor-not-allowed' : ''}`}
            title={!isAuthenticated ? 'Please login to use cart' : 'View cart'}
          >
            <svg
              className="w-7 h-7 text-gray-700 hover:text-indigo-600 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
              />
            </svg>

            {/* 🔴 Badge for total items */}
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>

          {/* Dropdown Cart */}
          {cartOpen && (
            <div className="absolute right-0 top-10 w-72 bg-white shadow-lg rounded-xl p-4 z-50">
              <h3 className="font-semibold text-gray-800">Your Cart</h3>

              <ul className="mt-2 space-y-3 text-sm text-gray-600">
                {Object.keys(cartItems).length === 0 && (
                  <li className="text-gray-500 text-center">Cart is empty</li>
                )}

                {Object.entries(cartItems).map(([itemCode, item]) => (
                  <li
                    key={itemCode}
                    className="flex justify-between items-center border-b pb-2"
                  >
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-xs text-gray-500">
                        ₹{item.price} × {item.quantity}
                      </p>
                    </div>

                    {/* Quantity Buttons */}
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => decreaseQuantity(itemCode)}
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => increaseQuantity(itemCode)}
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              {Object.keys(cartItems).length > 0 && (
                <>
                  <div className="mt-3 text-right font-semibold">
                    Subtotal: ₹
                    {Object.entries(cartItems).reduce(
                      (sum, [_, item]) => sum + item.price * item.quantity,
                      0
                    )}
                  </div>

                  <div className="flex gap-2 mt-4 justify-center">
                    <Link
                      href="/cart"
                      className="flex-1 text-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
                    >
                      View Cart
                    </Link>
                    <button
                      onClick={clearCart}
                      className="flex-1 text-center bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
                    >
                      Clear Cart
                    </button>
                  </div>
                </>
              )}
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
          <Link href="/contact">Contact</Link>
        </div>
      )}
    </nav>
  );
}
