import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google'
import { SpeedInsights } from '@vercel/speed-insights/next';
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

import "@/styles/globals.css";
import { AntdRegistry } from '@ant-design/nextjs-registry';

import FreeShipping from "@/components/Common/free/shipping";
import { ConfigProvider } from "antd";
import { ecomTheme } from "@/themes";
import ScrollToTopOnMount from "@/components/Common/top/ScrollToTopOnMount";
import { SEO_index_description, SEO_KEYWORDS, SEO_index_title } from "@/utils/seo_keywords";

export const metadata: Metadata = {
  keywords: SEO_KEYWORDS.join(", "),
  title: SEO_index_title,
  description: SEO_index_description
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

      <body suppressHydrationWarning={true} className="min-h-screen flex flex-col">
        <ScrollToTopOnMount />
        <FreeShipping />
        <Header />
        <div className="flex-grow bg-white">
          <ConfigProvider theme={ecomTheme}>
            <AntdRegistry>{children}</AntdRegistry>
          </ConfigProvider>
        </div>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
