import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24 bg-cs-blue-600 relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute left-[20%] top-0 bottom-0 w-px bg-white/10" />
        <div className="absolute left-[40%] top-0 bottom-0 w-px bg-white/10" />
        <div className="absolute left-[60%] top-0 bottom-0 w-px bg-white/10" />
        <div className="absolute left-[80%] top-0 bottom-0 w-px bg-white/10" />
        <div className="absolute top-[33%] left-0 right-0 h-px bg-white/10" />
        <div className="absolute top-[66%] left-0 right-0 h-px bg-white/10" />
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-r border-b border-white/20" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-l border-t border-white/20" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-serif italic mb-6">
          Ready to Transform Your Hiring?
        </h2>
        <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
          Join thousands of companies and candidates who are already using
          personality science to find the perfect match.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/signup/employer"
            className="bg-white text-cs-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-medium transition-all inline-flex items-center justify-center gap-3"
          >
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
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            I&apos;m an Employer
          </Link>
          <Link
            href="/signup/candidate"
            className="bg-transparent hover:bg-white/10 text-white border border-white/50 hover:border-white px-8 py-4 text-lg font-medium transition-all inline-flex items-center justify-center gap-3"
          >
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
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            I&apos;m a Candidate
          </Link>
        </div>

        <p className="mt-10 text-blue-200 text-sm tracking-wide">
          No credit card required · Free for candidates · Setup in minutes
        </p>
      </div>
    </section>
  );
}
