import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MySkin AI | Clinical Skin Analysis",
  description: "Hyper-modern, light-themed AI Skin Analysis landing page.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-myskin-bg text-myskin-slate selection:bg-myskin-slate/10 selection:text-myskin-slate`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
