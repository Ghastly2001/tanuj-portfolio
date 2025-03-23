import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import BlackBar from "@/components/black-bar";
import CopyrightSection from "@/components/copyright-section";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Tanuj Portfolio",
  description: "Tanuj Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased `}>
        <Navbar />
        <main className="mt-[80px]">{children}</main>
        <BlackBar />
        <CopyrightSection />
      </body>
    </html>
  );
}
