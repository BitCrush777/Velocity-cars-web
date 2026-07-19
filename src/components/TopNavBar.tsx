"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, User } from "lucide-react";

export default function TopNavBar() {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Inventory", href: "/inventory" },
    { label: "Configure", href: "/configure/lamborghini-revuelto-2024" },
    { label: "Finance", href: "#" },
    { label: "About", href: "#" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#131313]/80 backdrop-blur-[30px] border-b border-white/10">
      <div className="flex justify-between items-center px-8 md:px-16 h-20 w-full max-w-[1440px] mx-auto">
        <div className="flex items-center gap-12">
          <Link href="/" className="font-sans text-[24px] lg:text-[28px] tracking-tighter text-white font-extrabold">
            VELOCITY
          </Link>
          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`font-mono text-xs uppercase tracking-widest transition-colors pb-1 ${
                    isActive
                      ? "text-[#c9c6c5] font-bold border-b-2 border-[#c9c6c5]"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-4 text-white/70">
            <button className="p-2 hover:bg-white/5 transition-all duration-300 rounded-full active:scale-95">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-white/5 transition-all duration-300 rounded-full active:scale-95">
              <User className="w-5 h-5" />
            </button>
          </div>
          <button className="bg-[#c9c6c5] text-[#313030] font-mono text-xs px-6 py-3 hover:bg-[#adc6ff] transition-all duration-300 active:scale-95 uppercase tracking-widest font-bold">
            Test Drive
          </button>
        </div>
      </div>
    </header>
  );
}
