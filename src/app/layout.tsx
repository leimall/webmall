import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google'
import { SpeedInsights } from '@vercel/speed-insights/next';
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

import "@/styles/globals.css";
import { Script } from "vm";

export const metadata: Metadata = {
  title: "FTAnails | ",
  description: "",
};
const HotjarScript = () => {
  return (
    <script
    dangerouslySetInnerHTML={{
      __html: `
      (function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:5173699,hjsv:6};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
      `,
    }}
  />
  )
}
const LLpayScript = () => {
  return (
    <script src="https://gacashier.lianlianpay-inc.com/sandbox2/llpay.min.js" />
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <HotjarScript />
        <LLpayScript />
        <GoogleAnalytics gaId="G-WNPBNMJSN8" />
      </head>

      <body className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow bg-white">
          {children}
        </div>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
