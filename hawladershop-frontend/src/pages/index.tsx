// hawladershop-frontend/src/pages/index.tsx

import Head from 'next/head';
import ProductList from '../components/ProductList';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Head>
        <title>HawladerShop - Next.js, Node.js, MySQL</title>
        <meta name="description" content="Next.js, Node.js, MySQL ভিত্তিক ই-কমার্স অ্যাপ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* হেডার */}
      <header className="bg-white shadow-md">
          <div className="container mx-auto p-4 flex justify-between items-center">
              <h1 className="text-2xl font-extrabold text-indigo-600">
                  HawladerShop
              </h1>
              <nav>
                  <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium">হোম</a>
                  {/* অন্যান্য নেভিগেশন লিংক পরে যোগ করা হবে */}
              </nav>
          </div>
      </header>

      <main className="container mx-auto py-10">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
          আমাদের সেরা পণ্যসমূহ
        </h1>
        
        {/* প্রোডাক্ট লিস্ট কম্পোনেন্ট যা API থেকে ডেটা আনবে */}
        <ProductList />

      </main>

      {/* ফুটার */}
      <footer className="text-center p-4 bg-white border-t mt-10">
        <p className="text-gray-600 text-sm">© 2025 HawladerShop. সকল স্বত্ব সংরক্ষিত।</p>
      </footer>
    </div>
  );
}
