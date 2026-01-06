"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase/client";
import type { User } from "@supabase/supabase-js";

export default function EmployerDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login");
        return;
      }

      if (user.user_metadata?.role !== "employer") {
        router.push("/candidate/dashboard");
        return;
      }

      setUser(user);
      setLoading(false);
    };

    checkUser();
  }, [router]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-cs-slate-50 flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-cs-blue-600 border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cs-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-cs-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cs-blue-600 to-cs-cyan-500 flex items-center justify-center">
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
              <span className="text-xl font-semibold text-cs-slate-900">
                Career<span className="text-cs-blue-600">stream</span>
              </span>
            </Link>

            <div className="flex items-center gap-4">
              <span className="text-sm text-cs-slate-600">
                {user?.user_metadata?.company_name || "Employer"}
              </span>
              <button
                onClick={handleSignOut}
                className="text-sm text-cs-slate-600 hover:text-cs-blue-600 font-medium"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-cs-slate-900">
            Welcome, {user?.user_metadata?.full_name || "Employer"}!
          </h1>
          <p className="text-cs-slate-600 mt-2">
            Manage your job postings and find the perfect candidates.
          </p>
        </div>

        {/* Quick stats placeholder */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 border border-cs-slate-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-cs-blue-100 text-cs-blue-600 flex items-center justify-center">
                <svg
                  className="w-6 h-6"
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
              </div>
              <div>
                <div className="text-2xl font-bold text-cs-slate-900">0</div>
                <div className="text-sm text-cs-slate-600">Active Jobs</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-cs-slate-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-cs-cyan-100 text-cs-cyan-600 flex items-center justify-center">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold text-cs-slate-900">0</div>
                <div className="text-sm text-cs-slate-600">Applicants</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-cs-slate-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center">
                <svg
                  className="w-6 h-6"
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
              <div>
                <div className="text-2xl font-bold text-cs-slate-900">0</div>
                <div className="text-sm text-cs-slate-600">Matches</div>
              </div>
            </div>
          </div>
        </div>

        {/* Empty state */}
        <div className="bg-white rounded-2xl border border-cs-slate-200 p-12 text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-cs-blue-100 text-cs-blue-600 flex items-center justify-center">
            <svg
              className="w-10 h-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-cs-slate-900 mb-2">
            Post Your First Job
          </h2>
          <p className="text-cs-slate-600 mb-6 max-w-md mx-auto">
            Start finding candidates who are truly compatible with your roles.
            Define the personality traits that matter most for each position.
          </p>
          <button className="bg-cs-blue-600 hover:bg-cs-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
            Create Job Posting
          </button>
        </div>
      </main>
    </div>
  );
}

