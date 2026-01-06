export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Take the Assessment",
      description:
        "Candidates complete a comprehensive personality assessment that evaluates traits across creativity, analytical thinking, collaboration, leadership, and more.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Define Role Requirements",
      description:
        "Employers specify the personality traits and skills most important for each position, creating a weighted profile for the ideal candidate.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Match & Score",
      description:
        "Our algorithm calculates a compatibility score by comparing candidate profiles against role requirements, highlighting the best matches.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Hire with Confidence",
      description:
        "Review detailed compatibility breakdowns, understand candidate strengths, and make data-driven hiring decisions that reduce turnover.",
      icon: (
        <svg
          className="w-8 h-8"
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
      ),
    },
  ];

  return (
    <section id="how-it-works" className="py-24 section-grid-alt relative">
      {/* Accent lines */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-white/5" />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-white/5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-cs-blue-400 text-sm uppercase tracking-[0.2em]">
            How It Works
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl text-white font-serif italic">
            From Assessment to Perfect Hire
          </h2>
          <p className="mt-6 text-lg text-cs-charcoal-400 max-w-2xl mx-auto">
            A simple, science-backed process that transforms how you find and
            evaluate talent.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="relative group">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[60%] w-full h-px bg-white/10" />
              )}

              <div className="relative bg-cs-charcoal-900 border border-white/10 p-8 card-hover h-full">
                {/* Step number */}
                <div className="absolute -top-4 left-8 bg-cs-blue-600 text-white px-3 py-1">
                  <span className="font-serif italic text-sm">{step.number}</span>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 border border-white/10 text-cs-blue-400 flex items-center justify-center mb-6 mt-4">
                  {step.icon}
                </div>

                <h3 className="text-xl font-serif italic text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-cs-charcoal-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
