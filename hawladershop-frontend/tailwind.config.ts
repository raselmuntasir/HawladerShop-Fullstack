// hawladershop-frontend/tailwind.config.ts

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    // নিশ্চিত করুন যে Tailwind src ফোল্ডারকে ট্র্যাক করছে
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // Dark/Light Mode টগলের জন্য 'class' মোড ব্যবহার করা
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        // HawladerShop-এর প্রাইমারি রঙ সেট করা
        'primary': '#FF4500', 
        'secondary-primary': '#FF6A00', // গ্রেডিয়েন্টের শেষ রঙ
        'dark-bg': '#121212', // ডার্ক মোডের জন্য প্রাথমিক ব্যাকগ্রাউন্ড
      },
      borderRadius: {
        // আপনার স্পেসিফিকেশন অনুযায়ী রাউন্ডেড এজ (12px)
        'xl': '12px', 
      },
      fontFamily: {
        // Poppins বা Inter ফন্ট সেটআপের জন্য ডিফল্ট ফন্টের সাথে যোগ করা হলো
        sans: ['Inter', 'Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config