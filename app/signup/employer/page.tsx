"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase/client";

export default function EmployerSignup() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    companyName: "",
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
            role: "employer",
            full_name: formData.fullName,
            company_name: formData.companyName,
          },
        },
      });

      if (signUpError) {
        setError(signUpError.message);
        return;
      }

      if (data.user) {
        router.push("/employer/dashboard");
      }
    } catch {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cs-blue-50 to-white flex items-center justify-center p-4">
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
            <div className="inline-flex items-center gap-2 bg-cs-blue-100 text-cs-blue-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
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
              Employer Account
            </div>
            <h1 className="text-2xl font-bold text-cs-slate-900">
              Start Hiring Smarter
            </h1>
            <p className="text-cs-slate-600 mt-2">
              Create your employer account to find the perfect candidates
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
                className="w-full px-4 py-3 rounded-xl border border-cs-slate-300 focus:border-cs-blue-500 focus:ring-2 focus:ring-cs-blue-500/20 outline-none transition-all"
                placeholder="John Smith"
              />
            </div>

            <div>
              <label
                htmlFor="companyName"
                className="block text-sm font-medium text-cs-slate-700 mb-1.5"
              >
                Company Name
              </label>
              <input
                id="companyName"
                type="text"
                required
                value={formData.companyName}
                onChange={(e) =>
                  setFormData({ ...formData, companyName: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border border-cs-slate-300 focus:border-cs-blue-500 focus:ring-2 focus:ring-cs-blue-500/20 outline-none transition-all"
                placeholder="Acme Inc."
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-cs-slate-700 mb-1.5"
              >
                Work Email
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
                placeholder="you@company.com"
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
                className="w-full px-4 py-3 rounded-xl border border-cs-slate-300 focus:border-cs-blue-500 focus:ring-2 focus:ring-cs-blue-500/20 outline-none transition-all"
                placeholder="Min. 8 characters"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-cs-blue-600 hover:bg-cs-blue-700 disabled:bg-cs-blue-400 text-white py-3 rounded-xl font-semibold transition-colors"
            >
              {loading ? "Creating Account..." : "Create Employer Account"}
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
            Looking for work?{" "}
            <Link
              href="/signup/candidate"
              className="text-cs-blue-600 hover:text-cs-blue-700 font-medium"
            >
              Create a candidate account
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
      </div>
    </div>
  );
}

