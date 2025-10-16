// hawladershop-frontend/src/components/ProductList.tsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

// ডেটার টাইপ ডিফাইন করা
interface Product {
  id: number;
  name: string;
  slug: string; // প্রোডাক্টের URL-এর জন্য
  price: number;
  description: string;
  image_url: string; // ছবির URL
  stock: number;
}

// .env.local থেকে API বেস URL নেওয়া
// এটি ফ্রন্টএন্ডে অ্যাক্সেসযোগ্য কারণ এটি NEXT_PUBLIC_ দিয়ে শুরু হয়েছে।
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      // API বেস URL কনফিগার করা না থাকলে ত্রুটি দেখানো
      if (!API_BASE_URL) {
          setError("API Base URL not configured in .env.local");
          setLoading(false);
          return;
      }

      try {
        // API কল: http://localhost:5000/api/products
        const response = await axios.get(`${API_BASE_URL}/products`);
        setProducts(response.data);
      } catch (err) {
        console.error("API Fetch Error:", err);
        // ব্যবহারকারীকে বোঝানোর জন্য সহজ ত্রুটি বার্তা
        setError("সার্ভার থেকে পণ্য আনতে ব্যর্থ হয়েছে। ব্যাকএন্ড সার্ভার চলছে কিনা নিশ্চিত করুন।");
      } finally {
        setLoading(false);
      }
    };
    
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="p-8 text-center text-xl font-medium text-gray-700">
        পণ্য লোড হচ্ছে...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 text-center text-red-600 font-bold bg-red-100 border border-red-400 rounded-lg mx-auto max-w-lg">
        ত্রুটি: {error}
      </div>
    );
  }
  
  if (products.length === 0) {
    return (
      <div className="p-8 text-center text-xl text-gray-500">
        কোনো পণ্য পাওয়া যায়নি। ডেটাবেস পরীক্ষা করুন।
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="border border-gray-200 p-5 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white flex flex-col items-center"
          >
            {/* ছবির জন্য একটি প্লেসহোল্ডার ব্যবহার করা হলো */}
            <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded-lg mb-4 overflow-hidden">
                <img 
                    src={product.image_url || 'https://placehold.co/400x400/000000/FFFFFF/png?text=Product'} 
                    alt={product.name} 
                    className="object-cover w-full h-full"
                    // Tailwind-এ ইমেজ এর জন্য আরও স্টাইল যোগ করা যেতে পারে
                />
            </div>

            <h2 className="text-2xl font-bold text-gray-800 text-center">{product.name}</h2>
            
            <p className="text-xl font-extrabold text-indigo-600 mt-2">৳ {parseFloat(product.price as unknown as string).toFixed(2)}</p>
            
            <p className="text-gray-500 mt-2 text-sm text-center line-clamp-2">{product.description}</p>
            
            <button className="mt-4 w-full bg-indigo-500 text-white py-2 rounded-lg font-semibold hover:bg-indigo-600 transition duration-150 shadow-md">
                কার্টে যোগ করুন
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
