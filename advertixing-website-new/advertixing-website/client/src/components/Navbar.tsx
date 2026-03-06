/*
 * ADVERTIXING.COM — Navbar
 * All-white logo, minimal nav, single cyan CTA button
 */

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navLinks = [
    { label: "What You Get", href: "#deliverables" },
    { label: "How It Works", href: "#process" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(0,0,0,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo — all white, no styled X */}
          <a href="/" className="flex items-center">
            <span className="text-white font-bold text-xl tracking-tight">
              Advertixing
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium transition-colors"
                style={{ color: "rgba(255,255,255,0.6)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <a href="#apply" className="btn-cyan text-sm px-5 py-2.5">
              Book a Call
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden py-6 border-t border-white/10 space-y-4">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-white/60 hover:text-white transition-colors py-2 text-sm font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#apply"
              className="btn-cyan inline-flex text-sm px-5 py-2.5 mt-2"
              onClick={() => setMobileOpen(false)}
            >
              Book a Call
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
