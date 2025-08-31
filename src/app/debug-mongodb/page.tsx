"use client";
import { useState } from "react";
import { sampleProducts } from "@/data/products";

export default function DebugMongoDB() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const addSampleProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/addproduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sampleProducts),
      });

      const result = await response.json();
      setMessage(result.message || "Products added successfully!");
    } catch (error) {
      setMessage("Error adding products: " + error);
    } finally {
      setLoading(false);
    }
  };

  const clearProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/addproduct", {
        method: "DELETE",
      });

      const result = await response.json();
      setMessage(result.message || "Products cleared successfully!");
    } catch (error) {
      setMessage("Error clearing products: " + error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">MongoDB Debug Page</h1>
      
      <div className="space-y-4">
        <button
          onClick={addSampleProducts}
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
        >
          {loading ? "Adding..." : "Add Sample Products"}
        </button>
        
        <button
          onClick={clearProducts}
          disabled={loading}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 ml-4"
        >
          {loading ? "Clearing..." : "Clear All Products"}
        </button>
      </div>

      {message && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <p>{message}</p>
        </div>
      )}

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Sample Products to Add:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sampleProducts.map((product, index) => (
            <div key={index} className="border p-4 rounded">
              <h3 className="font-semibold">{product.title}</h3>
              <p className="text-sm text-gray-600">{product.category}</p>
              <p className="text-sm text-gray-600">₹{product.price}</p>
              <p className="text-xs text-gray-500">Slug: {product.slug}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
