import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-pattern min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[20%] top-0 bottom-0 w-px bg-white/5" />
        <div className="absolute left-[40%] top-0 bottom-0 w-px bg-white/5" />
        <div className="absolute left-[60%] top-0 bottom-0 w-px bg-white/5" />
        <div className="absolute left-[80%] top-0 bottom-0 w-px bg-white/5" />
        <div className="absolute top-[25%] left-0 right-0 h-px bg-white/5" />
        <div className="absolute top-[50%] left-0 right-0 h-px bg-white/5" />
        <div className="absolute top-[75%] left-0 right-0 h-px bg-white/5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Text content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-3 border border-white/20 px-5 py-2 mb-8 animate-fade-in-up">
              <span className="w-2 h-2 bg-cs-blue-500" />
              <span className="text-cs-charcoal-300 text-sm tracking-wide uppercase">
                Hiring reimagined
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-8 animate-fade-in-up animation-delay-100">
              <span className="font-serif italic">Find the</span>{" "}
              <span className="text-cs-blue-400 font-serif italic">
                Perfect Match
              </span>{" "}
              <span className="font-serif italic">for Every Role</span>
            </h1>

            <p className="text-lg md:text-xl text-cs-charcoal-300 mb-10 max-w-xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-200 leading-relaxed">
              Careerstream calculates compatibility scores between candidates
              and job requirements using personality assessments that measure
              both soft and hard skills.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-300">
              <Link
                href="/signup/employer"
                className="bg-cs-blue-500 hover:bg-cs-blue-400 text-white px-8 py-4 text-lg font-medium transition-all"
              >
                I&apos;m Hiring
              </Link>
              <Link
                href="/signup/candidate"
                className="bg-transparent hover:bg-white/5 text-white border border-white/30 hover:border-white/50 px-8 py-4 text-lg font-medium transition-all"
              >
                I&apos;m Looking for Work
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0 animate-fade-in-up animation-delay-400">
              <div className="text-center lg:text-left border-l border-cs-blue-500/50 pl-4">
                <div className="text-2xl font-serif italic text-white">10,000+</div>
                <div className="text-cs-charcoal-400 text-sm mt-1">Assessments</div>
              </div>
              <div className="text-center lg:text-left border-l border-cs-blue-500/50 pl-4">
                <div className="text-2xl font-serif italic text-white">500+</div>
                <div className="text-cs-charcoal-400 text-sm mt-1">Companies</div>
              </div>
              <div className="text-center lg:text-left border-l border-cs-blue-500/50 pl-4">
                <div className="text-2xl font-serif italic text-white">94%</div>
                <div className="text-cs-charcoal-400 text-sm mt-1">Accuracy</div>
              </div>
            </div>
          </div>

          {/* Right column - Visual */}
          <div className="hidden lg:flex justify-center animate-fade-in-up animation-delay-300">
            <div className="relative">
              {/* Main card */}
              <div className="bg-cs-charcoal-900/80 backdrop-blur border border-white/10 p-8 w-[400px]">
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/10">
                  <div className="w-14 h-14 bg-cs-blue-600 flex items-center justify-center text-white text-xl font-serif italic">
                    JD
                  </div>
                  <div>
                    <div className="text-white font-medium">Jane Doe</div>
                    <div className="text-cs-charcoal-400 text-sm">
                      Senior Product Manager
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-cs-charcoal-400 uppercase tracking-wide text-xs">Compatibility Score</span>
                      <span className="text-cs-blue-400 font-serif italic text-lg">94%</span>
                    </div>
                    <div className="h-1 bg-white/10 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cs-blue-600 to-cs-blue-400"
                        style={{ width: "94%" }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: "Leadership", value: "High" },
                      { label: "Strategy", value: "High" },
                      { label: "Analysis", value: "Med" },
                      { label: "Communication", value: "High" },
                    ].map((item, i) => (
                      <div key={i} className="bg-white/5 border border-white/5 p-4">
                        <div className={`text-lg font-serif italic ${item.value === "High" ? "text-cs-blue-400" : "text-cs-charcoal-300"}`}>
                          {item.value}
                        </div>
                        <div className="text-cs-charcoal-500 text-xs uppercase tracking-wide mt-1">
                          {item.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-3 -right-3 bg-cs-blue-500 px-4 py-2">
                <div className="text-white text-sm font-medium">
                  ✓ Strong Match
                </div>
              </div>

              {/* Grid decoration */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-white/10 -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
