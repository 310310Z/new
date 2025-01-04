// pages/_app.tsx
import React from "react";
import '../styles/globals.css'; // Tailwind CSSをグローバルに適用
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen">
      <Component {...pageProps} />
    </div>
  );
}
