"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useEffect } from "react";

type Item = {
  href: string;
  label: string;
  icon: string;
  accent?: "red";
};

const NAV: Item[] = [
  { href: "/",           label: "Dashboard",  icon: "/icons/dashboard.svg", accent: "red" },
  { href: "/projects",   label: "Projects",   icon: "/icons/proj.svg" },
  { href: "/test-cases", label: "Test cases", icon: "/icons/Icons.svg" },
  { href: "/bugs",       label: "Bugs",       icon: "/icons/bugs.svg" },
];

/** Props are optional so <Sidebar /> can be used by layout without extra wiring */
type SidebarProps = {
  mobileOpen?: boolean;
  onClose?: () => void;
};

export default function Sidebar({ mobileOpen = false, onClose = () => {} }: SidebarProps) {
  const pathname = usePathname();

  // Close drawer after navigation (mobile)
  useEffect(() => { onClose(); /* eslint-disable-next-line */ }, [pathname]);

  return (
    <>
      {/* Overlay for mobile drawer */}
      <div
        className={clsx(
          "fixed inset-0 z-40 bg-black/40 backdrop-blur-[1px] transition-opacity md:hidden",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        className={clsx(
          // Mobile: off-canvas drawer
          "fixed inset-y-0 left-0 z-50 w-[304px] transition-transform duration-300 md:relative md:translate-x-0",
          // Transform based on mobile state
          mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
          // Desktop: normal flow
          "md:w-[304px] md:flex-shrink-0",
          // Visuals
          "bg-white ring-1 ring-black/10 shadow-soft rounded-r-[28px] overflow-visible",
          // Height
          "md:h-screen md:sticky md:top-0"
        )}
        role="dialog"
        aria-label="Sidebar"
        aria-modal={mobileOpen}
      >
        {/* Logo band */}
        <div className="relative bg-slate-50 rounded-tr-[28px]">
          <div className="h-16 flex items-center px-7">
            <Image src="/images/logo.svg" alt="Test Flair" width={172} height={28} priority />
          </div>

          {/* Visual pill (kept for design parity) */}
          <button
            type="button"
            title="Collapse"
            className="hidden md:flex absolute top-12 -right-3 h-7 w-7 rounded-full bg-white shadow-soft ring-1 ring-black/10 items-center justify-center"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 6 15 12 9 18"></polyline>
            </svg>
          </button>

          {/* Mobile close */}
          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="md:hidden absolute top-4 right-4 h-9 w-9 rounded-full bg-white ring-1 ring-black/10 shadow-soft grid place-items-center"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Section title */}
        <div className="px-7 pt-5 pb-2 text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
          Main
        </div>

        {/* Nav */}
        <nav className="px-4">
          {NAV.map((it) => {
            const active = pathname === it.href || (it.href !== "/" && pathname?.startsWith(it.href));
            return (
              <div key={it.href} className="mb-2">
                <Link
                  href={it.href}
                  className={clsx(
                    "group flex items-center rounded-2xl px-5 py-3",
                    active ? "bg-slate-100 text-slate-900" : "hover:bg-slate-50 text-slate-700"
                  )}
                >
                  <img src={it.icon} alt="" className="h-6 w-6 object-contain" />
                  <span className="ml-3 text-[17px] font-medium text-slate-800">
                    {it.label}
                  </span>

                  {it.href === "/projects" && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                      stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      className="ml-auto">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  )}
                </Link>
              </div>
            );
          })}
        </nav>
      </aside>
    </>
  );
}