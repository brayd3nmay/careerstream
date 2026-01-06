import Link from "next/link";

export default function ForEmployers() {
  const benefits = [
    {
      title: "Reduce Bad Hires by 60%",
      description:
        "Personality-matched candidates stay longer and perform better. Stop wasting resources on candidates who won't fit.",
      icon: (
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
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
    },
    {
      title: "Save Time on Screening",
      description:
        "Let compatibility scores filter your applicant pool automatically. Focus interviews on high-potential matches.",
      icon: (
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
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Build Stronger Teams",
      description:
        "Understand how candidates complement your existing team dynamics. Create balanced, high-performing groups.",
      icon: (
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
      ),
    },
    {
      title: "Data-Driven Decisions",
      description:
        "Move beyond gut feelings. Get objective, quantifiable insights on candidate-role alignment.",
      icon: (
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
            d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="employers" className="py-24 section-grid relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left - Content */}
          <div>
            <span className="text-cs-blue-400 text-sm uppercase tracking-[0.2em]">
              For Employers
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl text-white font-serif italic">
              Hire Smarter, Not Harder
            </h2>
            <p className="mt-6 text-lg text-cs-charcoal-400 leading-relaxed">
              Traditional hiring relies on resumes and interviews—both poor
              predictors of job success. Careerstream gives you the data to
              truly understand candidates before you hire.
            </p>

            <div className="mt-12 space-y-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-5 border-l-2 border-cs-blue-500/30 pl-6">
                  <div className="flex-shrink-0 w-12 h-12 border border-white/10 text-cs-blue-400 flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-serif italic text-white text-lg">
                      {benefit.title}
                    </h3>
                    <p className="text-cs-charcoal-400 text-sm mt-1 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/signup/employer"
              className="inline-flex items-center gap-3 mt-12 bg-cs-blue-600 hover:bg-cs-blue-500 text-white px-8 py-4 text-lg font-medium transition-colors"
            >
              Start Hiring Smarter
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          {/* Right - Visual */}
          <div className="relative">
            <div className="bg-cs-charcoal-900 border border-white/10 p-8">
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
                <h3 className="font-serif italic text-white text-lg">
                  Role: Senior Developer
                </h3>
                <span className="text-xs bg-white/10 text-cs-charcoal-300 px-3 py-1">
                  12 Applicants
                </span>
              </div>

              <div className="space-y-4">
                {[
                  { name: "Alex Johnson", score: 96, avatar: "AJ" },
                  { name: "Maria Garcia", score: 89, avatar: "MG" },
                  { name: "Sam Williams", score: 82, avatar: "SW" },
                  { name: "Chris Brown", score: 75, avatar: "CB" },
                ].map((candidate, i) => (
                  <div
                    key={candidate.name}
                    className={`flex items-center gap-4 p-4 border ${
                      i === 0 ? "border-cs-blue-500 bg-cs-blue-500/10" : "border-white/10"
                    }`}
                  >
                    <div className="w-10 h-10 bg-cs-blue-600 flex items-center justify-center text-white text-sm font-serif italic">
                      {candidate.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-white">
                        {candidate.name}
                      </div>
                      <div className="h-1 bg-white/10 mt-2 overflow-hidden">
                        <div
                          className={`h-full ${i === 0 ? "bg-cs-blue-500" : "bg-cs-charcoal-500"}`}
                          style={{ width: `${candidate.score}%` }}
                        />
                      </div>
                    </div>
                    <div
                      className={`text-sm font-serif italic ${
                        candidate.score >= 90
                          ? "text-cs-blue-400"
                          : candidate.score >= 80
                          ? "text-cs-charcoal-300"
                          : "text-cs-charcoal-500"
                      }`}
                    >
                      {candidate.score}%
                    </div>
                    {i === 0 && (
                      <span className="text-xs bg-cs-blue-600 text-white px-2 py-1">
                        Top Match
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Grid decorations */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-white/10 -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 border border-white/10 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
