import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rbac UI",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div
          className="flex flex-col min-h-screen dark:bg-surface-a10 transition-colors 
        duration-300"
        >
          <Navbar />
          <main className="flex-1 flex flex-col min-h-0 overflow-auto items-stretch">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
