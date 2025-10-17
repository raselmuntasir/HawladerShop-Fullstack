import React from 'react';
import type { NextPage } from 'next';
// Header এবং HeroSection কম্পোনেন্ট সঠিক রিলেটিভ পাথে ইমপোর্ট করা হয়েছে
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';

// TypeScript এর জন্য NextPage টাইপ ব্যবহার করা হয়েছে
const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      
      {/* ১. Header কম্পোনেন্ট */}
      <Header /> 

      {/* ২. মূল কন্টেন্ট সেকশন */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        
        {/* Hero Section যুক্ত করা হয়েছে */}
        <HeroSection />

        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12 text-center border-b pb-2">সেরা পণ্যসমূহ</h2>
        
        {/* পরবর্তীতে Product List, Footer ইত্যাদি এখানে যোগ করা হবে */}
        <div className="text-center py-10 text-gray-600">
            <p>প্রোডাক্ট লিস্টের জন্য এখানে জায়গা রাখা হলো।</p>
        </div>
      </main>

      {/* ফুটার পরবর্তীতে যোগ করা হবে */}
    </div>
  );
};

export default Home;
