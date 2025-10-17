import '../../styles/globals.css'; // পাথ পরিবর্তন করা হয়েছে
import type { AppProps } from 'next/app';
import React from 'react';

// Next.js এর সমস্ত পেইজ এই কম্পোনেন্টের মধ্যে রেন্ডার হয়
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;