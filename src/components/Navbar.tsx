"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Zap, Menu, X, Calculator, Home } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks =
    pathname === "/"
      ? [
          {
            name: "Özellikler",
            href: "#features",
            icon: <Zap className="w-4 h-4" />,
          },
          {
            name: "Puan Hesapla",
            href: "/puan-hesaplama",
            icon: <Calculator className="w-4 h-4" />,
          },
          { name: "Nasıl Çalışır", href: "#how-it-works", icon: null },
        ]
      : [
          {
            name: "Hesaplama",
            href: "/puan-hesaplama",
            icon: <Calculator className="w-4 h-4" />,
          },
        ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-gray-100 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 flex items-center justify-center bg-[#3a6ff7] rounded-xl shadow-lg shadow-[#3a6ff7]/20 group-hover:scale-105 transition-all duration-300">
              <Image
                src="/logo-square.svg"
                alt="netle logo"
                width={24}
                height={24}
                className="brightness-200"
              />
            </div>
            <span className="text-3xl  font-extrabold  tracking-tighter text-[#3a6ff7] group-hover:opacity-80 transition-opacity">
              Netle
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-bold transition-all hover:text-[#3a6ff7] ${
                  pathname === link.href ? "text-[#3a6ff7]" : "text-gray-500"
                } flex items-center gap-2`}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}

            <Link
              href="https://apps.apple.com/tr/app/netle-yks-asistan%C4%B1/id6751005976?l=tr"
              className="flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-black text-white hover:bg-black/90 transition-all shadow-xl group border border-white/5"
            >
              <Zap className="w-4 h-4 text-[#3a6ff7] group-hover:animate-pulse" />
              <div className="text-left font-black">
                <p className="text-[8px] uppercase leading-none opacity-60 font-sans tracking-widest">
                  App Store
                </p>
                <p className="text-xs leading-none mt-0.5 italic tracking-tighter">
                  İNDİR
                </p>
              </div>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-2xl bg-gray-50 text-gray-400 hover:text-[#3a6ff7] transition-all"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 top-[80px] bg-white/95 backdrop-blur-2xl z-40 transition-all duration-500 md:hidden ${
          isMobileMenuOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8 px-6 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-3xl font-black italic tracking-tighter transition-all ${
                pathname === link.href ? "text-[#3a6ff7]" : "text-gray-400"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="https://apps.apple.com/tr/app/netle-yks-asistan%C4%B1/id6751005976?l=tr"
            className="w-full max-w-xs flex items-center justify-center gap-4 px-8 py-5 rounded-[2rem] bg-black text-white shadow-2xl"
          >
            <Zap className="w-6 h-6 text-[#3a6ff7]" />
            <span className="text-xl font-black italic tracking-tighter">
              APP STORE İNDİR
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
