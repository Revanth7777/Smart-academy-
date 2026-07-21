"use client";

import { useState } from "react";
import { Menu, X, Trophy } from "lucide-react";

const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#sports", label: "Sports" },
  { href: "/#coaches", label: "Coaches" },
  { href: "/#events", label: "Events" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="/#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
              <Trophy className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg text-gray-900 group-hover:text-emerald-600 transition-colors">
              Smart Games & Academy
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="/#contact"
              className="px-5 py-2.5 text-sm font-semibold text-emerald-600 border-2 border-emerald-600 rounded-full hover:bg-emerald-50 transition-colors"
            >
              Join Now
            </a>
            <a
              href="/#contact"
              className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-500 rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-emerald-500/25"
            >
              Book Trial
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-gray-600"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-4 border-t border-gray-100">
            <div className="flex flex-col gap-2 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 px-4 pt-2">
                <a
                  href="/#contact"
                  onClick={() => setOpen(false)}
                  className="text-center py-2.5 font-semibold text-emerald-600 border-2 border-emerald-600 rounded-full"
                >
                  Join Now
                </a>
                <a
                  href="/#contact"
                  onClick={() => setOpen(false)}
                  className="text-center py-2.5 font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-500 rounded-full"
                >
                  Book Trial
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
