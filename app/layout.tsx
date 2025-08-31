"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { useState } from "react";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body className={inter.className + " bg-canvas min-h-screen overflow-x-hidden"}>
        <div className="flex min-h-screen relative">
          {/* Sidebar - with mobile state */}
          <Sidebar 
            mobileOpen={mobileMenuOpen} 
            onClose={() => setMobileMenuOpen(false)} 
          />

          {/* Main content area */}
          <div className="flex-1 flex flex-col min-w-0">
            {/* Pass mobile menu handler to header */}
            <Header onMobileMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)} />
            <div className="flex-1">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}