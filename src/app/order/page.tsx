"use client";
import React from 'react';
import Link from 'next/link';

interface OrderItem {
  name: string;
  quantity: number;
  price: number;
  size: string;
  variant: string;
}

interface OrderDetails {
  orderId: string;
  orderDate: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  orderNotes?: string;
  items: { [key: string]: OrderItem };
  total: number;
}

export default function OrderPage() {
  const [orderDetails, setOrderDetails] = React.useState<OrderDetails | null>(null);

  React.useEffect(() => {
    // Fetch order details from localStorage
    const storedOrder = localStorage.getItem('lastOrder');
    if (storedOrder) {
      setOrderDetails(JSON.parse(storedOrder));
    }
  }, []);

  // Function to generate a random delivery date between 3-30 days
  const getDeliveryDate = (itemName: string) => {
    const orderDate = orderDetails ? new Date(orderDetails.orderDate) : new Date();
    let daysToAdd;
    
    // Determine delivery time based on product type
    if (itemName.toLowerCase().includes('t-shirt')) {
      daysToAdd = Math.floor(Math.random() * (7 - 3 + 1) + 3); // 3-7 days
    } else if (itemName.toLowerCase().includes('mug')) {
      daysToAdd = Math.floor(Math.random() * (5 - 2 + 1) + 2); // 2-5 days
    } else if (itemName.toLowerCase().includes('accessories')) {
      daysToAdd = Math.floor(Math.random() * (10 - 5 + 1) + 5); // 5-10 days
    } else {
      daysToAdd = Math.floor(Math.random() * (30 - 7 + 1) + 7); // 7-30 days
    }
    
    const deliveryDate = new Date(orderDate);
    deliveryDate.setDate(deliveryDate.getDate() + daysToAdd);
    return deliveryDate.toLocaleDateString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (!orderDetails) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">No Order Found</h1>
        <Link href="/"
          className="text-indigo-600 hover:text-indigo-800 font-medium"
        >
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 print:bg-white print:py-0">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Print and Back buttons - Will not show when printing */}
        <div className="flex justify-between mb-6 print:hidden">
          <button
            onClick={() => window.history.back()}
            className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back
          </button>
          <button
            onClick={() => window.print()}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            Print Order
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 print:shadow-none print:p-0">
          {/* Order Success Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 print:hidden">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            {/* Show only when printing */}
            <div className="hidden print:block mb-4">
              <img src="/logo.jpg" alt="Clipkart Logo" className="h-12 mx-auto" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
            <p className="text-gray-600">Thank you for your purchase, {orderDetails.name}</p>
          </div>

          {/* Print-specific information */}
          <div className="hidden print:block text-center text-sm text-gray-500 mb-6">
            <p>This is a computer-generated document. No signature is required.</p>
            <p>Generated on: {new Date().toLocaleString('en-IN')}</p>
          </div>

          {/* Order Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 rounded-lg p-4">
              <h2 className="font-semibold text-gray-800 mb-2">Order Information</h2>
              <p className="text-sm text-gray-600">Order ID: {orderDetails.orderId}</p>
              <p className="text-sm text-gray-600">Order Date: {new Date(orderDetails.orderDate).toLocaleDateString('en-IN')}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h2 className="font-semibold text-gray-800 mb-2">Delivery Address</h2>
              <div className="space-y-1">
                <p className="text-sm text-gray-800 font-medium">{orderDetails.name}</p>
                <p className="text-sm text-gray-600">{orderDetails.address}</p>
                <p className="text-sm text-gray-600">{orderDetails.city}, {orderDetails.state}</p>
                <p className="text-sm text-gray-600">PIN: {orderDetails.pincode}</p>
                <p className="text-sm text-gray-600">Phone: {orderDetails.phone}</p>
                <p className="text-sm text-gray-600">Email: {orderDetails.email}</p>
                {orderDetails.orderNotes && (
                  <div className="mt-2 pt-2 border-t border-gray-200">
                    <p className="text-sm text-gray-600 font-medium">Additional Notes:</p>
                    <p className="text-sm text-gray-600">{orderDetails.orderNotes}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Order Items */}
          <div className="border rounded-lg overflow-hidden mb-8">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Product</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Quantity</th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-600">Price</th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-600">Expected Delivery</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {Object.entries(orderDetails.items).map(([key, item]) => (
                  <tr key={key}>
                    <td className="px-4 py-3">
                      <div>
                        <p className="font-medium text-gray-800">{item.name}</p>
                        <p className="text-sm text-gray-500">Size: {item.size}, Color: {item.variant}</p>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {item.quantity}
                    </td>
                    <td className="px-4 py-3 text-right text-gray-800">
                      ₹{item.price * item.quantity}
                    </td>
                    <td className="px-4 py-3 text-right text-green-600 text-sm">
                      {getDeliveryDate(item.name)}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-gray-50">
                <tr>
                  <td colSpan={2} className="px-4 py-3 text-sm font-semibold text-gray-600">Total</td>
                  <td colSpan={2} className="px-4 py-3 text-right text-lg font-semibold text-gray-800">
                    ₹{orderDetails.total}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* Actions */}
          <div className="flex justify-center space-x-4">
            <Link 
              href="/"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Continue Shopping
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
}
