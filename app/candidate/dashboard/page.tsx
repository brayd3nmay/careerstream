"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase/client";
import type { User } from "@supabase/supabase-js";

export default function CandidateDashboard() {
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

      if (user.user_metadata?.role !== "candidate") {
        router.push("/employer/dashboard");
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
                {user?.email}
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
            Welcome, {user?.user_metadata?.full_name || "Candidate"}!
          </h1>
          <p className="text-cs-slate-600 mt-2">
            Discover roles that match your personality and skills.
          </p>
        </div>

        {/* Assessment status card */}
        <div className="bg-gradient-to-br from-cs-blue-600 to-cs-blue-800 rounded-2xl p-8 text-white mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-1.5 text-sm mb-4">
                <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                Assessment Pending
              </div>
              <h2 className="text-2xl font-bold mb-2">
                Complete Your Personality Assessment
              </h2>
              <p className="text-cs-blue-100 max-w-xl">
                Take the assessment to unlock your compatibility scores and get
                matched with roles that fit your personality. It only takes
                15-20 minutes.
              </p>
            </div>
            <button className="bg-white text-cs-blue-700 hover:bg-cs-blue-50 px-6 py-3 rounded-xl font-semibold transition-colors flex-shrink-0">
              Start Assessment
            </button>
          </div>
        </div>

        {/* Quick stats */}
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
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold text-cs-slate-900">0</div>
                <div className="text-sm text-cs-slate-600">Applications</div>
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
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold text-cs-slate-900">0</div>
                <div className="text-sm text-cs-slate-600">Saved Jobs</div>
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
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold text-cs-slate-900">0</div>
                <div className="text-sm text-cs-slate-600">Top Matches</div>
              </div>
            </div>
          </div>
        </div>

        {/* Empty job listings */}
        <div className="bg-white rounded-2xl border border-cs-slate-200 p-12 text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-cs-slate-100 text-cs-slate-400 flex items-center justify-center">
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-cs-slate-900 mb-2">
            No Job Matches Yet
          </h2>
          <p className="text-cs-slate-600 mb-6 max-w-md mx-auto">
            Complete your personality assessment to start seeing jobs that match
            your unique profile and preferences.
          </p>
          <button className="bg-cs-blue-600 hover:bg-cs-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
            Browse All Jobs
          </button>
        </div>
      </main>
    </div>
  );
}

