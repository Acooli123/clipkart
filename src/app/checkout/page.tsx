"use client";
import React from "react";
import { useCart } from "@/components/CartContext";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const router = useRouter();
  const { cartItems, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    orderNotes: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (Object.entries(cartItems).length === 0) {
      return;
    }

    setIsSubmitting(true);
    try {
      // Here you would typically send the order data to your backend
      // For now, we'll just simulate a delay and redirect
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Store order details in localStorage or state management
      const orderDetails = {
        ...formData,
        items: cartItems,
        total: total > 499 ? total : total + 40,
        orderId: 'ORD' + Math.random().toString(36).substr(2, 9).toUpperCase(),
        orderDate: new Date().toISOString()
      };
      localStorage.setItem('lastOrder', JSON.stringify(orderDetails));
      
      // Clear the cart
      clearCart();
      
      // Redirect to order success page
      router.push('/order');
    } catch (error) {
      console.error('Error placing order:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Calculate total
  const total = Object.entries(cartItems).reduce(
    (sum, [_, item]) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Checkout
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-6">Delivery Details</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="john@example.com"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>

                    {/* Pincode */}
                    <div>
                      <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-1">
                        Pincode *
                      </label>
                      <input
                        type="text"
                        id="pincode"
                        name="pincode"
                        required
                        value={formData.pincode}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="123456"
                      />
                    </div>

                    {/* City */}
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                        City *
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Your City"
                      />
                    </div>

                    {/* State */}
                    <div>
                      <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                        State *
                      </label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        required
                        value={formData.state}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Your State"
                      />
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      Street Address *
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="1234 Main St"
                    />
                  </div>

                  {/* Order Notes */}
                  <div>
                    <label htmlFor="orderNotes" className="block text-sm font-medium text-gray-700 mb-1">
                      Locality
                    </label>
                    <textarea
                      id="orderNotes"
                      name="orderNotes"
                      rows={4}
                      value={formData.orderNotes}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="add nearby locations of your address"
                    />
                  </div>
                </form>
              </div>
            </div>

            {/* Order Summary */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
                
                <div className="space-y-4">
                  {Object.entries(cartItems).length === 0 ? (
                    <p className="text-gray-500 text-center py-4">Your cart is empty</p>
                  ) : (
                    Object.entries(cartItems).map(([itemCode, item]) => (
                      <div key={itemCode} className="flex flex-col p-4 border border-gray-100 rounded-lg shadow-sm">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex-grow">
                            <p className="font-medium text-gray-800">{item.name}</p>
                            <p className="text-sm text-gray-600">Size: {item.size}</p>
                            <p className="text-sm text-gray-600">Color: {item.variant}</p>
                          </div>
                          <p className="font-medium text-gray-800">₹{item.price}</p>
                        </div>
                        <div className="flex justify-between items-center text-sm text-gray-600">
                          <p>Quantity: {item.quantity}</p>
                          <p className="font-medium text-gray-800">₹{item.price * item.quantity}</p>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                <div className="border-t border-gray-200 mt-6 pt-6 space-y-3">
                  <div className="flex justify-between text-gray-600">
                    <p>Subtotal ({Object.values(cartItems).reduce((sum, item) => sum + item.quantity, 0)} items)</p>
                    <p className="font-medium text-gray-800">₹{total}</p>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <p>Shipping</p>
                    <p className="font-medium text-gray-800">₹40</p>
                  </div>
                  {total > 499 && (
                    <div className="flex justify-between text-green-600 text-sm">
                      <p>Free Delivery on orders above ₹499!</p>
                      <p>-₹40</p>
                    </div>
                  )}
                  <div className="border-t border-gray-200 pt-3 flex justify-between font-semibold text-lg">
                    <p>Total</p>
                    <p>₹{total > 499 ? total : total + 40}</p>
                  </div>
                </div>

                <button 
                  onClick={handleSubmit}
                  disabled={Object.entries(cartItems).length === 0 || isSubmitting}
                  className={`w-full mt-6 py-3 px-4 rounded-md transition-colors duration-200 ${
                    Object.entries(cartItems).length === 0
                      ? 'bg-gray-300 cursor-not-allowed'
                      : isSubmitting
                      ? 'bg-indigo-400 cursor-wait'
                      : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                  }`}
                >
                  {isSubmitting 
                    ? 'Processing...' 
                    : Object.entries(cartItems).length === 0 
                    ? 'Cart is Empty' 
                    : 'Place Order'}
                </button>

                {total > 0 && total < 499 && (
                  <p className="text-sm text-gray-600 mt-4 text-center">
                    Add items worth ₹{499 - total} more for free delivery!
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
