"use client";

import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cs-charcoal-950/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-cs-blue-600 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <span className="text-xl text-white">
              <span className="font-medium">Career</span>
              <span className="font-serif italic text-cs-blue-400">stream</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <a
              href="#how-it-works"
              className="text-cs-charcoal-300 hover:text-white transition-colors text-sm tracking-wide link-underline"
            >
              How It Works
            </a>
            <a
              href="#employers"
              className="text-cs-charcoal-300 hover:text-white transition-colors text-sm tracking-wide link-underline"
            >
              For Employers
            </a>
            <a
              href="#candidates"
              className="text-cs-charcoal-300 hover:text-white transition-colors text-sm tracking-wide link-underline"
            >
              For Candidates
            </a>
            <a
              href="#faq"
              className="text-cs-charcoal-300 hover:text-white transition-colors text-sm tracking-wide link-underline"
            >
              FAQ
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/login"
              className="text-cs-charcoal-300 hover:text-white transition-colors text-sm tracking-wide"
            >
              Sign In
            </Link>
            <Link
              href="/signup/employer"
              className="bg-cs-blue-600 hover:bg-cs-blue-500 text-white px-5 py-2.5 text-sm font-medium transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-cs-charcoal-300 hover:text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cs-charcoal-900 border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            <a
              href="#how-it-works"
              className="block text-cs-charcoal-300 hover:text-white transition-colors text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#employers"
              className="block text-cs-charcoal-300 hover:text-white transition-colors text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              For Employers
            </a>
            <a
              href="#candidates"
              className="block text-cs-charcoal-300 hover:text-white transition-colors text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              For Candidates
            </a>
            <a
              href="#faq"
              className="block text-cs-charcoal-300 hover:text-white transition-colors text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <hr className="border-white/10" />
            <Link
              href="/login"
              className="block text-cs-charcoal-300 hover:text-white transition-colors text-sm"
            >
              Sign In
            </Link>
            <Link
              href="/signup/employer"
              className="block bg-cs-blue-600 hover:bg-cs-blue-500 text-white px-4 py-2 text-sm font-medium transition-colors text-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
