"use client";

import { useState } from "react";

interface EmailFormProps {
  onSubmit: (email: string) => void;
  isLoading?: boolean;
}

export default function EmailForm({ onSubmit, isLoading }: EmailFormProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    onSubmit(email);
  };

  return (
    <div className="bg-cs-charcoal-900 border border-white/10 p-8 md:p-12 animate-fade-in-up max-w-xl mx-auto">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-cs-blue-600 flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h2 className="text-2xl md:text-3xl text-white font-serif italic mb-4">
          Assessment Complete!
        </h2>
        <p className="text-cs-charcoal-400 leading-relaxed">
          Enter your email address to receive your personality profile results. We&apos;ll send you a detailed breakdown of your traits.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm text-cs-charcoal-300 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            disabled={isLoading}
            className="w-full bg-cs-charcoal-950 border border-white/10 text-white px-4 py-4 focus:border-cs-blue-500 focus:outline-none transition-colors placeholder:text-cs-charcoal-600 disabled:opacity-50"
          />
          {error && (
            <p className="mt-2 text-red-400 text-sm">{error}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-cs-blue-600 hover:bg-cs-blue-500 disabled:bg-cs-charcoal-700 disabled:cursor-not-allowed text-white px-8 py-4 text-lg font-medium transition-colors flex items-center justify-center gap-3"
        >
          {isLoading ? (
            <>
              <svg
                className="w-5 h-5 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Processing...
            </>
          ) : (
            <>
              Get My Results
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </>
          )}
        </button>
      </form>

      <p className="mt-6 text-cs-charcoal-500 text-sm text-center">
        We&apos;ll never share your email or send spam.
      </p>
    </div>
  );
}

