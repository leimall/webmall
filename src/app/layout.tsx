import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google'
import { SpeedInsights } from '@vercel/speed-insights/next';
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "FTAnails",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
			<GoogleAnalytics gaId="G-WNPBNMJSN8" />
      <body>
        <Header />
				<div className="bg-white">
          {children}
				</div>
        <Footer />
				<SpeedInsights />
      </body>
    </html>
  );
}
