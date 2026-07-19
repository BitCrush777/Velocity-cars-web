import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "VELOCITY | Precision Engineering",
  description: "Redefining digital luxury and high-performance automotive configurators.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${jetbrains.variable} bg-[#131313] text-[#e5e2e1] antialiased min-h-screen flex flex-col`}>
        <TopNavBar />
        <main className="flex-grow pt-20 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
