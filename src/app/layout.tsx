import type { Metadata } from "next";
import "./globals.css";
import localfont from "next/font/local";
import Navbar from "@/components/navbar";
import BlackBar from "@/components/black-bar";
import CopyrightSection from "@/components/copyright-section";
import DownloadResume from "@/components/download-resume";
const avenirNextLTPro = localfont({
  src: [
    {
      path: "/fonts/AvenirNextLTPro-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/AvenirNextLTPro-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "/fonts/AvenirNextLTPro-Demi.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "/fonts/AvenirNextLTPro-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});
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
      <body className={`${avenirNextLTPro.className} antialiased `}>
        <Navbar />
        <main className="mt-[80px] text-[#333333]">
          <div className="absolute w-[52px] h-[165px] right-0 top-32 ">
            <DownloadResume />
          </div>

          {children}
        </main>
        <BlackBar />
        <CopyrightSection />
      </body>
    </html>
  );
}
