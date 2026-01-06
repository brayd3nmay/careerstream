"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase/client";

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (signInError) {
        setError(signInError.message);
        return;
      }

      if (data.user) {
        const role = data.user.user_metadata?.role;
        if (role === "employer") {
          router.push("/employer/dashboard");
        } else if (role === "candidate") {
          router.push("/candidate/dashboard");
        } else {
          router.push("/");
        }
      }
    } catch {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cs-slate-50 to-white flex items-center justify-center p-4">
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
            <h1 className="text-2xl font-bold text-cs-slate-900">Welcome Back</h1>
            <p className="text-cs-slate-600 mt-2">
              Sign in to your Careerstream account
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
                className="w-full px-4 py-3 rounded-xl border border-cs-slate-300 focus:border-cs-blue-500 focus:ring-2 focus:ring-cs-blue-500/20 outline-none transition-all"
                placeholder="you@email.com"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-cs-slate-700"
                >
                  Password
                </label>
                <a
                  href="#"
                  className="text-sm text-cs-blue-600 hover:text-cs-blue-700"
                >
                  Forgot password?
                </a>
              </div>
              <input
                id="password"
                type="password"
                required
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border border-cs-slate-300 focus:border-cs-blue-500 focus:ring-2 focus:ring-cs-blue-500/20 outline-none transition-all"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-cs-blue-600 hover:bg-cs-blue-700 disabled:bg-cs-blue-400 text-white py-3 rounded-xl font-semibold transition-colors"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-cs-slate-200">
            <p className="text-center text-sm text-cs-slate-600 mb-4">
              Don&apos;t have an account?
            </p>
            <div className="grid grid-cols-2 gap-3">
              <Link
                href="/signup/employer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-cs-slate-300 hover:border-cs-blue-500 hover:bg-cs-blue-50 text-cs-slate-700 text-sm font-medium transition-all"
              >
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
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Employer
              </Link>
              <Link
                href="/signup/candidate"
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-cs-slate-300 hover:border-cs-cyan-500 hover:bg-cs-cyan-50 text-cs-slate-700 text-sm font-medium transition-all"
              >
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
                Candidate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

