export default function CompatibilityScore() {
  return (
    <section className="py-24 section-grid relative overflow-hidden">
      {/* Accent grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[10%] top-0 bottom-0 w-px bg-cs-blue-500/10" />
        <div className="absolute left-[90%] top-0 bottom-0 w-px bg-cs-blue-500/10" />
        <div className="absolute top-[20%] left-0 right-0 h-px bg-cs-blue-500/10" />
        <div className="absolute top-[80%] left-0 right-0 h-px bg-cs-blue-500/10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="text-cs-blue-400 text-sm uppercase tracking-[0.2em]">
            The Science Behind It
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl text-white font-serif italic">
            How the Compatibility Score Works
          </h2>
          <p className="mt-6 text-lg text-cs-charcoal-400 max-w-2xl mx-auto">
            Our proprietary algorithm evaluates candidates across multiple
            dimensions to produce a single, actionable compatibility score.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="bg-cs-charcoal-900 border border-white/10 p-8 relative">
            <div className="absolute top-0 left-0 w-12 h-12 border-r border-b border-cs-blue-500/30 flex items-center justify-center text-cs-blue-400 font-serif italic">
              01
            </div>
            <div className="pt-8">
              <div className="w-14 h-14 border border-white/20 flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-cs-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-serif italic text-white mb-4">
                Personality Profile
              </h3>
              <p className="text-cs-charcoal-400 leading-relaxed">
                Candidates answer questions that map to key personality traits
                like analytical thinking, creativity, collaboration, leadership,
                and adaptability. Each response contributes to a comprehensive
                profile.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-cs-charcoal-900 border border-white/10 p-8 relative">
            <div className="absolute top-0 left-0 w-12 h-12 border-r border-b border-cs-blue-500/30 flex items-center justify-center text-cs-blue-400 font-serif italic">
              02
            </div>
            <div className="pt-8">
              <div className="w-14 h-14 border border-white/20 flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-cs-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-serif italic text-white mb-4">
                Role Requirements
              </h3>
              <p className="text-cs-charcoal-400 leading-relaxed">
                Employers define what traits matter most for each position. A data
                analyst role might prioritize analytical thinking, while a sales
                role might weight communication and adaptability higher.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-cs-charcoal-900 border border-white/10 p-8 relative">
            <div className="absolute top-0 left-0 w-12 h-12 border-r border-b border-cs-blue-500/30 flex items-center justify-center text-cs-blue-400 font-serif italic">
              03
            </div>
            <div className="pt-8">
              <div className="w-14 h-14 border border-white/20 flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-cs-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-serif italic text-white mb-4">
                Weighted Matching
              </h3>
              <p className="text-cs-charcoal-400 leading-relaxed">
                Our algorithm compares the candidate's profile against the role's
                requirements using weighted signals. The result is a percentage
                score that reflects true compatibility—not just keyword matches.
              </p>
            </div>
          </div>
        </div>

        {/* Visual score example */}
        <div className="mt-16 bg-cs-charcoal-900 border border-white/10 p-8 max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-shrink-0">
              <div className="relative w-40 h-40">
                <svg className="w-40 h-40 transform -rotate-90">
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    className="text-white/10"
                  />
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    fill="none"
                    stroke="url(#scoreGradient)"
                    strokeWidth="8"
                    strokeLinecap="square"
                    strokeDasharray={`${87 * 4.4} 440`}
                  />
                  <defs>
                    <linearGradient
                      id="scoreGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#2563eb" />
                      <stop offset="100%" stopColor="#60a5fa" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-serif italic text-white">87%</span>
                  <span className="text-cs-charcoal-400 text-sm mt-1">Match</span>
                </div>
              </div>
            </div>

            <div className="flex-1 w-full">
              <h4 className="text-xs uppercase tracking-[0.2em] text-cs-charcoal-400 mb-6">
                Sample Breakdown
              </h4>
              <div className="space-y-4">
                {[
                  { trait: "Analytical Thinking", score: 92 },
                  { trait: "Communication", score: 85 },
                  { trait: "Adaptability", score: 88 },
                  { trait: "Leadership", score: 78 },
                ].map((item) => (
                  <div key={item.trait}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-cs-charcoal-300">{item.trait}</span>
                      <span className="text-white font-serif italic">
                        {item.score}%
                      </span>
                    </div>
                    <div className="h-1 bg-white/10 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cs-blue-600 to-cs-blue-400"
                        style={{ width: `${item.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
