"use client";
import React from 'react';
import { useCart } from "@/components/CartContext";
import Link from 'next/link';
import Image from 'next/image';

export default function CartPage() {
  const { cartItems, increaseQuantity, decreaseQuantity, clearCart } = useCart();

  const subtotal = Object.entries(cartItems).reduce(
    (sum, [_, item]) => sum + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 499 ? 0 : 40;
  const total = subtotal + shipping;

  if (Object.keys(cartItems).length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <div className="text-center">
          <div className="w-24 h-24 mb-6 mx-auto">
            <Image src="/cart.jpg" alt="Empty Cart" width={96} height={96} className="opacity-50" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
          <Link 
            href="/product" 
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-200"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Shopping Cart</h1>
        
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  {Object.entries(cartItems).map(([itemCode, item]) => (
                    <div key={itemCode} className="flex items-center py-5 border-b border-gray-200 last:border-b-0">
                      {/* Product Image */}
                      <div className="w-24 h-24 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                        <Image
                          src={item.name.toLowerCase().includes('t-shirt') ? '/white t-shirt.png' : '/cart.jpg'}
                          alt={item.name}
                          width={96}
                          height={96}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 ml-6">
                        <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Size: {item.size} | Color: {item.variant}
                        </p>
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center border rounded-lg">
                            <button
                              onClick={() => decreaseQuantity(itemCode)}
                              className="px-3 py-1 text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                            >
                              -
                            </button>
                            <span className="px-4 py-1 text-gray-800 border-x">{item.quantity}</span>
                            <button
                              onClick={() => increaseQuantity(itemCode)}
                              className="px-3 py-1 text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                            >
                              +
                            </button>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-semibold text-gray-800">₹{item.price * item.quantity}</p>
                            <p className="text-sm text-gray-500">₹{item.price} each</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Delivary</span>
                    <span>₹{shipping}</span>
                  </div>
                  {subtotal > 499 && (
                    <div className="flex justify-between text-green-600 text-sm">
                      <span>Free Delivery Applied!</span>
                      <span>-₹40</span>
                    </div>
                  )}
                  <div className="border-t pt-4">
                    <div className="flex justify-between text-lg font-semibold text-gray-800">
                      <span>Total</span>
                      <span>₹{total}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <Link
                    href="/checkout"
                    className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition duration-200 flex items-center justify-center font-medium"
                  >
                    Proceed to Checkout
                  </Link>
                  <button
                    onClick={clearCart}
                    className="w-full bg-red-500 text-white py-3 px-4 rounded-lg hover:bg-red-600 transition duration-200 flex items-center justify-center font-medium"
                  >
                    Clear Cart
                  </button>
                </div>

                {subtotal > 0 && subtotal < 499 && (
                  <p className="text-sm text-gray-600 mt-4 text-center">
                    Add items worth ₹{499 - subtotal} more for free delivery!
                  </p>
                )}

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Link
                    href="/product"
                    className="text-indigo-600 hover:text-indigo-800 flex items-center justify-center"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
