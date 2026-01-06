import Link from "next/link";

export default function ForCandidates() {
  const benefits = [
    {
      title: "Discover Your Strengths",
      description:
        "Understand your unique personality traits and how they translate into professional strengths.",
    },
    {
      title: "Find Roles That Fit",
      description:
        "Get matched to positions where you'll thrive, not just survive. Work where you belong.",
    },
    {
      title: "Stand Out from the Crowd",
      description:
        "Your compatibility score highlights what makes you special—beyond a traditional resume.",
    },
    {
      title: "Skip the Guesswork",
      description:
        "Know upfront how well you align with a company's culture and role expectations.",
    },
  ];

  return (
    <section id="candidates" className="py-24 section-grid-alt relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left - Visual */}
          <div className="order-2 lg:order-1 relative">
            <div className="bg-cs-charcoal-950 border border-white/10 p-8 text-white relative">
              {/* Grid overlay */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute left-1/3 top-0 bottom-0 w-px bg-white" />
                <div className="absolute left-2/3 top-0 bottom-0 w-px bg-white" />
                <div className="absolute top-1/3 left-0 right-0 h-px bg-white" />
                <div className="absolute top-2/3 left-0 right-0 h-px bg-white" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-10 pb-6 border-b border-white/10">
                  <div className="w-16 h-16 bg-cs-blue-600 flex items-center justify-center text-2xl font-serif italic">
                    YP
                  </div>
                  <div>
                    <div className="text-xl font-serif italic">Your Profile</div>
                    <div className="text-cs-charcoal-400 text-sm">Assessment Complete</div>
                  </div>
                </div>

                <h4 className="text-xs uppercase tracking-[0.2em] text-cs-charcoal-400 mb-4">
                  Your Top Traits
                </h4>
                <div className="grid grid-cols-3 gap-3 mb-10">
                  {[
                    { trait: "Visionary", score: 92 },
                    { trait: "Builder", score: 88 },
                    { trait: "Strategist", score: 85 },
                  ].map((item) => (
                    <div
                      key={item.trait}
                      className="bg-white/5 border border-white/10 p-4 text-center"
                    >
                      <div className="text-2xl font-serif italic text-cs-blue-400">
                        {item.score}%
                      </div>
                      <div className="text-xs text-cs-charcoal-400 mt-2 uppercase tracking-wide">
                        {item.trait}
                      </div>
                    </div>
                  ))}
                </div>

                <h4 className="text-xs uppercase tracking-[0.2em] text-cs-charcoal-400 mb-4">
                  Jobs That Match You
                </h4>
                <div className="space-y-3">
                  {[
                    { title: "Product Manager", company: "TechCorp", match: 94 },
                    { title: "UX Lead", company: "DesignCo", match: 91 },
                    { title: "Strategy Consultant", company: "ConsultFirm", match: 87 },
                  ].map((job) => (
                    <div
                      key={job.title}
                      className="flex items-center justify-between bg-white/5 border border-white/10 p-4"
                    >
                      <div>
                        <div className="font-medium">{job.title}</div>
                        <div className="text-cs-charcoal-400 text-sm">
                          {job.company}
                        </div>
                      </div>
                      <div className="text-cs-blue-400 font-serif italic text-lg">{job.match}%</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Grid decorations */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border border-white/10 -z-10" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-cs-blue-600 -z-10" />
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2">
            <span className="text-cs-blue-400 text-sm uppercase tracking-[0.2em]">
              For Candidates
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl text-white font-serif italic">
              Find Work That Fits Who You Are
            </h2>
            <p className="mt-6 text-lg text-cs-charcoal-400 leading-relaxed">
              Stop applying blindly. Take our assessment and get matched to
              opportunities where your personality is an asset, not an
              afterthought.
            </p>

            <div className="mt-12 grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, i) => (
                <div
                  key={benefit.title}
                  className="bg-cs-charcoal-900 border border-white/10 p-6"
                >
                  <div className="w-8 h-8 border border-cs-blue-500 text-cs-blue-400 flex items-center justify-center mb-4 text-sm font-serif italic">
                    {i + 1}
                  </div>
                  <h3 className="font-serif italic text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-cs-charcoal-400 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/signup/candidate"
              className="inline-flex items-center gap-3 mt-12 bg-cs-blue-600 hover:bg-cs-blue-500 text-white px-8 py-4 text-lg font-medium transition-colors"
            >
              Take the Assessment
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
        </div>
      </div>
    </section>
  );
}
