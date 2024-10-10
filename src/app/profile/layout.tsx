import type { Metadata } from "next";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "FTAnails | ",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
    </div>
  );
}
