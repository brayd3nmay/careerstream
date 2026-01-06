"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase/client";

export default function CandidateSignup() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            role: "candidate",
            full_name: formData.fullName,
          },
        },
      });

      if (signUpError) {
        setError(signUpError.message);
        return;
      }

      if (data.user) {
        router.push("/candidate/dashboard");
      }
    } catch {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cs-cyan-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-2 mb-8">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cs-blue-600 to-cs-cyan-500 flex items-center justify-center">
            <svg
              className="w-6 h-6 text-white"
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
          <span className="text-2xl font-semibold text-cs-slate-900">
            Career<span className="text-cs-blue-600">stream</span>
          </span>
        </Link>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-cs-slate-200">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-cs-cyan-100 text-cs-cyan-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              Candidate Account
            </div>
            <h1 className="text-2xl font-bold text-cs-slate-900">
              Find Your Perfect Role
            </h1>
            <p className="text-cs-slate-600 mt-2">
              Create your account and take the personality assessment
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-cs-slate-700 mb-1.5"
              >
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border border-cs-slate-300 focus:border-cs-cyan-500 focus:ring-2 focus:ring-cs-cyan-500/20 outline-none transition-all"
                placeholder="Jane Doe"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-cs-slate-700 mb-1.5"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border border-cs-slate-300 focus:border-cs-cyan-500 focus:ring-2 focus:ring-cs-cyan-500/20 outline-none transition-all"
                placeholder="you@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-cs-slate-700 mb-1.5"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                minLength={8}
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border border-cs-slate-300 focus:border-cs-cyan-500 focus:ring-2 focus:ring-cs-cyan-500/20 outline-none transition-all"
                placeholder="Min. 8 characters"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-cs-blue-600 to-cs-cyan-500 hover:from-cs-blue-700 hover:to-cs-cyan-600 disabled:opacity-50 text-white py-3 rounded-xl font-semibold transition-all"
            >
              {loading ? "Creating Account..." : "Create Account & Start Assessment"}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-cs-slate-600">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-cs-blue-600 hover:text-cs-blue-700 font-medium"
            >
              Sign in
            </Link>
          </div>

          <div className="mt-4 text-center text-sm text-cs-slate-500">
            Looking to hire?{" "}
            <Link
              href="/signup/employer"
              className="text-cs-blue-600 hover:text-cs-blue-700 font-medium"
            >
              Create an employer account
            </Link>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-cs-slate-500">
          By signing up, you agree to our{" "}
          <Link href="/terms" className="underline hover:text-cs-blue-600">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="underline hover:text-cs-blue-600">
            Privacy Policy
          </Link>
        </p>

        {/* Free badge */}
        <div className="mt-6 text-center">
          <span className="inline-flex items-center gap-1 text-cs-slate-600 text-sm">
            <svg
              className="w-4 h-4 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Free for candidates - no credit card required
          </span>
        </div>
      </div>
    </div>
  );
}

