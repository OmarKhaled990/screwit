"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur">
      <div className="w-full h-16 px-6 md:px-8 xl:px-10 flex items-center justify-between">
        <h1 className="text-[18px] md:text-[20px] font-semibold tracking-tight">
          Welcome Back, Ahmed
        </h1>

        <div className="flex items-center gap-3 md:gap-4">
          <button aria-label="Search" className="p-1">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

          <button aria-label="Notifications" className="p-1">
            <Image src="/icons/bell.svg" alt="" width={18} height={18} />
          </button>

          <span className="inline-flex items-center rounded-full bg-slate-900 text-white text-[11px] font-semibold px-2 py-1 leading-none">
            + 360
          </span>

          <div className="flex items-center gap-2">
            <Image className="rounded-full" src="/images/avatar.svg" alt="Ahmed" width={28} height={28} />
            <span className="hidden sm:inline text-sm text-slate-700">Ahmed</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}
