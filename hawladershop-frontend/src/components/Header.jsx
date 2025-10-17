import React from 'react';

// Heroicons থেকে SVG আইকন - কোনো অতিরিক্ত লাইব্রেরি ইনস্টল করার প্রয়োজন নেই
const SearchIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
  </svg>
);

const UserIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
  </svg>
);

const CartIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.023.824l.72 4.341c.083.5.474.87.924.97l.006.002h14.922c.45 0 .841-.37.924-.928l.72-4.34a.998.998 0 0 0-1.023-.824H18.75m-14.4 0-.47 2.825M3.75 16.5h16.5m-8.25-6v6m0 0-3-3m3 3 3-3" />
  </svg>
);

const Header = () => {
  return (
    <header className="sticky top-0 z-50 shadow-md bg-white">
      {/* Top Bar: যোগাযোগ তথ্য, অফার ইত্যাদি */}
      <div className="bg-gray-800 text-white text-center py-1 text-sm hidden md:block">
        🎁 সীমিত সময়ের জন্য বিশেষ অফার!
      </div>

      {/* প্রধান নেভিগেশন বার */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        
        {/* ১. লোগো */}
        <div className="flex items-center space-x-2">
          <a href="#" className="text-2xl font-extrabold tracking-tight text-red-600">
            Hawlader<span className="text-gray-800">Shop</span>
          </a>
        </div>

        {/* ২. সার্চ বার (মাঝের অংশ) */}
        <div className="flex-1 max-w-lg mx-4 hidden md:block">
          <div className="relative">
            <input
              type="text"
              placeholder="আপনি কি খুঁজছেন? যেমন: হেডসেট, শার্ট, ইত্যাদি..."
              className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-150"
            />
            <SearchIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* ৩. আইকনস (কার্ট, ইউজার) */}
        <div className="flex items-center space-x-6">
          
          {/* কার্ট আইকন */}
          <a href="#" className="relative p-2 rounded-full hover:bg-gray-100 transition duration-150 group">
            <CartIcon className="w-6 h-6 text-gray-700 group-hover:text-red-600" />
            {/* কার্ট আইটেম কাউন্টার */}
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
              3
            </span>
            <span className="hidden md:inline text-sm ml-2 text-gray-700">কার্ট</span>
          </a>
          
          {/* ইউজার আইকন (লগইন/অ্যাকাউন্ট) */}
          <a href="#" className="p-2 rounded-full hover:bg-gray-100 transition duration-150 group">
            <UserIcon className="w-6 h-6 text-gray-700 group-hover:text-red-600" />
            <span className="hidden md:inline text-sm ml-2 text-gray-700">অ্যাকাউন্ট</span>
          </a>

          {/* মোবাইল ডিভাইসের জন্য সার্চ আইকন */}
          <button className="md:hidden p-2 rounded-full hover:bg-gray-100 transition duration-150">
             <SearchIcon className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>

      {/* ক্যাটাগরি মেনু (মোবাইল ডিভাইসে লুকানো) */}
      <nav className="bg-red-600 shadow-inner hidden md:block">
        <ul className="container mx-auto px-4 sm:px-6 lg:px-8 flex space-x-8 text-white">
          {['হোম', 'ক্যাটাগরি', 'সেরা ডিল', 'যোগাযোগ'].map((item) => (
            <li key={item}>
              <a 
                href="#" 
                className={`py-2 block font-medium hover:text-red-200 transition duration-150 ${item === 'হোম' ? 'text-white border-b-2 border-white' : 'text-red-100'}`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
