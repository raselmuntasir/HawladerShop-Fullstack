import React from 'react';

// Heroicons থেকে SVG আইকন (Flash)
const FlashIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
  </svg>
);

// Hero Section কম্পোনেন্ট
const HeroSection = () => {
  return (
    <section className="mt-4">
      {/* গ্রিড কন্টেইনার: বড় স্ক্রিনে 3 কলাম (3/4 + 1/4), ছোট স্ক্রিনে 1 কলাম */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        
        {/* বাম অংশ: প্রধান ব্যানার/স্লাইডার (LG স্ক্রিনে 3 কলাম নেয়) */}
        <div className="lg:col-span-3 bg-red-100 rounded-xl overflow-hidden shadow-lg h-80 relative">
          {/* স্লাইডারের প্লেসহোল্ডার ইমেজ */}
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://via.placeholder.com/1200x500/A00000/FFFFFF?text=Biggest+Sale+Starts+Today')" }}></div>
          
          <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center p-12 text-white">
            <p className="text-xl font-semibold uppercase tracking-widest text-red-300">অবিশ্বাস্য ডিল</p>
            <h1 className="text-5xl md:text-6xl font-extrabold mt-2 leading-tight">
              ৫০% পর্যন্ত ছাড় <br/> সকল পণ্যে
            </h1>
            <button className="mt-6 w-fit px-6 py-3 bg-white text-red-600 font-bold text-lg rounded-full shadow-xl hover:bg-gray-100 transition duration-300 transform hover:scale-105">
              এখনই কিনুন
            </button>
          </div>
        </div>

        {/* ডান অংশ: প্রোমোশনাল কার্ডস (LG স্ক্রিনে 1 কলাম নেয়) */}
        <div className="lg:col-span-1 space-y-4">
          
          {/* প্রোমো কার্ড ১: ফ্ল্যাশ সেল */}
          <div className="bg-red-600 h-40 rounded-xl p-6 shadow-lg text-white flex flex-col justify-between transition duration-300 hover:bg-red-700">
            <div className="flex items-center space-x-2">
                <FlashIcon className="w-6 h-6 text-yellow-300"/>
                <span className="text-lg font-bold">ফ্ল্যাশ সেল</span>
            </div>
            <h3 className="text-2xl font-extrabold">এই সপ্তাহে</h3>
            <p className="text-sm">দ্রুত কিনুন, স্টক সীমিত!</p>
          </div>
          
          {/* প্রোমো কার্ড ২: নতুন আগমন */}
          <div className="bg-white border border-gray-200 h-40 rounded-xl p-6 shadow-lg flex flex-col justify-between transition duration-300 hover:shadow-xl">
            <h3 className="text-xl font-bold text-gray-800">নতুন আগমন</h3>
            <p className="text-4xl font-extrabold text-red-600">২০২৪</p>
            <p className="text-sm text-gray-600">সবচেয়ে জনপ্রিয় পণ্যগুলো দেখুন</p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;