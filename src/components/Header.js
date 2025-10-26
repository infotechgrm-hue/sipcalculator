"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between max-w-6xl mx-auto px-6 py-4">
        {/* Left logo/title */}
        <Link
          href="/"
          className="text-2xl font-extrabold text-emerald-600 tracking-wide hover:scale-105 transition-transform duration-300"
        >
          SIP<span className="text-blue-600">Calculator</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {["Home", "Blog", "About", "Contact"].map((item, i) => (
            <Link
              key={i}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="relative text-gray-700 dark:text-gray-200 font-medium transition-colors duration-300 hover:text-emerald-600"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-emerald-500 transition-all duration-300 hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 dark:text-gray-200 focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-4 bg-white dark:bg-gray-900 py-4 shadow-md border-t border-gray-200 dark:border-gray-700">
          {["Home", "Blog", "About", "Contact"].map((item, i) => (
            <Link
              key={i}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 dark:text-gray-200 text-lg font-medium hover:text-emerald-600 transition-colors duration-200"
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
