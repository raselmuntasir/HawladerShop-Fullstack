import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    // নিশ্চিত করুন যে এই পাথগুলো আছে:
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Next.js src ফোল্ডার ব্যবহার করলে এটি অপরিহার্য:
    "./src/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
  theme: {
    extend: {
      //... আপনার অন্যান্য থিম সেটিংস
    },
  },
  plugins: [],
};

export default config;
