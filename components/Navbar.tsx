"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  const handleLogoClick = (e: React.MouseEvent) => {
    if (isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`flex justify-between items-center px-8 py-4 rounded-full transition-all duration-500 ${
            (isScrolled || !isHome)
              ? "bg-white/90 backdrop-blur-2xl shadow-2xl border border-white/20" 
              : "bg-transparent border border-transparent"
          }`}
        >
          <Link 
            href="/" 
            className="flex items-center gap-3 group"
            onClick={handleLogoClick}
          >
            <div className="relative w-15 h-15 transition-transform duration-500 group-hover:scale-110">
              <Image
                src="/IMG_0141.png"
                alt="DGS Landscaping Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col -space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-dark-green/40 leading-none">
                Est. 2023
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[11px] uppercase tracking-[0.3em] font-black transition-all duration-300 relative group ${
                    isActive ? "text-primary-green" : "text-dark-green/60 hover:text-dark-green"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.name}
                  <span className={`absolute -bottom-1.5 left-0 h-0.5 bg-primary-green transition-all duration-500 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="bg-dark-green text-cream px-8 py-3.5 rounded-full font-black text-[11px] uppercase tracking-[0.2em] hover:bg-primary-green transition-all shadow-xl hover:shadow-primary-green/20 hover:-translate-y-0.5 active:translate-y-0"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-dark-green p-3 hover:bg-primary-green/10 rounded-full transition-colors relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between overflow-hidden">
               <span className={`w-full h-0.5 bg-current transition-all duration-300 transform ${isMobileMenuOpen ? "rotate-45 translate-y-2.5" : ""}`} />
               <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "opacity-0 translate-x-10" : ""}`} />
               <span className={`w-full h-0.5 bg-current transition-all duration-300 transform ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 z-40 transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-dark-green/40 backdrop-blur-md" onClick={() => setIsMobileMenuOpen(false)} />
        <div 
          className={`absolute top-6 right-6 left-6 bg-white rounded-[3rem] shadow-2xl border border-white/20 transition-all duration-500 transform origin-top-right ${
            isMobileMenuOpen ? "translate-y-0 scale-100 rotate-0" : "-translate-y-12 scale-95 -rotate-2"
          }`}
        >
          <div className="p-12 pt-24 space-y-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block font-black text-5xl transition-colors tracking-tighter ${
                    isActive ? "text-primary-green" : "text-dark-green hover:text-primary-green"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-10 border-t border-cream-darker">
              <Link
                href="/contact"
                className="block bg-primary-green text-cream text-center px-6 py-7 rounded-[2rem] font-black text-2xl shadow-2xl shadow-primary-green/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
