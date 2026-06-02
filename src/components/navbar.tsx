"use client";

import Link from "next/link";
import { navLinks } from "../utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200">

      <div className="flex items-center justify-between px-5 sm:px-8 lg:px-12 py-4">

        {/* Logo */}
        <Link href="/">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
            FindMyRecipe
          </h1>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">

          {navLinks.map((link, key) => (
            <Link
              href={link.href}
              key={key}
              className="flex items-center gap-2 text-gray-600 hover:text-black transition duration-300 font-medium"
            >
              <link.icon size={20} />
              <span>{link.title}</span>
            </Link>
          ))}

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
        >
          {menuOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300
        
        ${
          menuOpen
            ? "max-h-96 border-t border-gray-200"
            : "max-h-0"
        }
        
        `}
      >

        <div className="flex flex-col px-5 py-4 bg-white/95 backdrop-blur-xl">

          {navLinks.map((link, key) => (
            <Link
              href={link.href}
              key={key}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 py-4 text-gray-700 hover:text-black transition duration-300 border-b border-gray-100 last:border-none"
            >
              <link.icon size={20} />

              <span className="font-medium">
                {link.title}
              </span>
            </Link>
          ))}

        </div>

      </div>

    </nav>
  );
};

export default Navbar;