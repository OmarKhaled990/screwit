"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur">
      <div className="w-full h-14 sm:h-16 px-4 sm:px-6 md:px-8 xl:px-10 flex items-center justify-between">
        {/* Mobile menu button */}
        <div className="flex items-center gap-3">
          <button
            className="md:hidden p-2 -ml-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
          
          <h1 className="text-base sm:text-[18px] md:text-[20px] font-semibold tracking-tight">
            <span className="hidden sm:inline">Welcome Back, Ahmed</span>
            <span className="sm:hidden">Dashboard</span>
          </h1>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          {/* Search - hidden on mobile */}
          <button aria-label="Search" className="p-1 hidden sm:block">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

          {/* Notifications */}
          <button aria-label="Notifications" className="p-1">
            <Image src="/icons/bell.svg" alt="" width={16} height={16} className="sm:w-[18px] sm:h-[18px]" />
          </button>

          {/* Badge - responsive size */}
          <span className="inline-flex items-center rounded-full bg-slate-900 text-white text-[10px] sm:text-[11px] font-semibold px-1.5 sm:px-2 py-0.5 sm:py-1 leading-none">
            + 360
          </span>

          {/* User menu */}
          <div className="flex items-center gap-1 sm:gap-2">
            <Image className="rounded-full sm:w-[28px] sm:h-[28px]" src="/images/avatar.svg" alt="Ahmed" width={24} height={24} />
            <span className="hidden lg:inline text-sm text-slate-700">Ahmed</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="hidden sm:block">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}
