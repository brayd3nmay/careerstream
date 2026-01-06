import Link from "next/link";

export default function Security() {
  const features = [
    {
      title: "SOC 2 Compliant",
      description:
        "Our infrastructure meets rigorous security standards for handling sensitive data.",
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
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "End-to-End Encryption",
      description:
        "All assessment data and personal information is encrypted in transit and at rest.",
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
            strokeWidth={1.5}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
    },
    {
      title: "GDPR Compliant",
      description:
        "We respect privacy laws worldwide and give users full control over their data.",
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
            strokeWidth={1.5}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "No Data Selling",
      description:
        "Your assessment data is never sold to third parties. Ever. We make money from subscriptions, not data.",
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
            strokeWidth={1.5}
            d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 section-grid-alt relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-cs-blue-400 text-sm uppercase tracking-[0.2em]">
            Security & Privacy
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl text-white font-serif italic">
            Your Data, Protected
          </h2>
          <p className="mt-6 text-lg text-cs-charcoal-400 max-w-2xl mx-auto">
            We take security seriously. Your personality data and hiring
            information are protected by enterprise-grade security measures.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-cs-charcoal-900 border border-white/10 p-6 card-hover relative"
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 border-l border-b border-cs-blue-500/30" />
              
              <div className="w-12 h-12 border border-white/10 text-cs-blue-400 flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="font-serif italic text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-cs-charcoal-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/privacy"
            className="text-cs-charcoal-300 hover:text-white text-sm inline-flex items-center gap-2 link-underline"
          >
            Read our Privacy Policy
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
