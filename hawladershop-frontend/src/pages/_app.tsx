import '../../styles/globals.css'; // দু'ধাপ পেছনে গিয়ে styles ফোল্ডার অ্যাক্সেস করা হচ্ছে
import type { AppProps } from 'next/app';
import React from 'react';

// Next.js এর সমস্ত পেইজ এই কম্পোনেন্টের মধ্যে রেন্ডার হয়
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
