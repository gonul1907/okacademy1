"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/over-ons", label: "Over ons" },
  { href: "/trainers", label: "Trainers" },
  { href: "/trainingen", label: "Trainingen" },
  { href: "/tarieven", label: "Tarieven" },
  { href: "/kleding", label: "Kleding" },
  { href: "/contact", label: "Contact" },
  { href: "/fotoalbum", label: "Fotoalbum" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0f0f0f]/97 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-[#0f0f0f]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Image
              src="https://primary.jwwb.nl/public/m/z/t/temp-padguskjejeujijcvqit/scherm-afbeelding-2026-03-17-om-11-10-19-high.png"
              alt="OKAcademy"
              width={130}
              height={52}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Hoofdnavigatie">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-150 ${
                  pathname === link.href
                    ? "text-[#D62626]"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/aanmelden"
              className="hidden sm:inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-[#D62626] rounded-lg hover:bg-[#B71C1C] transition-colors"
            >
              Aanmelden
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors rounded-md hover:bg-white/5"
              aria-label={isOpen ? "Menu sluiten" : "Menu openen"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#0f0f0f] border-t border-gray-800 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                pathname === link.href
                  ? "text-[#D62626] bg-gray-900"
                  : "text-gray-300 hover:text-white hover:bg-gray-900"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/aanmelden"
            className="block mt-3 text-center px-4 py-3 text-base font-semibold text-white bg-[#D62626] rounded-lg hover:bg-[#B71C1C] transition-colors"
          >
            Aanmelden
          </Link>
        </div>
      </div>
    </header>
  );
}
