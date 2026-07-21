import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Smart Games & Academy | Discipline • Dedication • Excellence",
  description:
    "Smart Games & Academy — premier sports training in Adimurai, Taekwondo, Wushu, Archery, Sepak Takraw, and Soft Tennis with certified coaches.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
