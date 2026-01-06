import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Careerstream",
  description: "Learn how Careerstream collects, uses, and protects your personal data.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-cs-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <Link
              href="/"
              className="text-sm text-cs-slate-600 hover:text-cs-blue-600"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-cs-slate-900 mb-4">
          Privacy Policy
        </h1>
        <p className="text-cs-slate-600 mb-12">Last updated: January 1, 2025</p>

        <div className="prose prose-slate max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-cs-slate-900 mb-4">
              1. Introduction
            </h2>
            <p className="text-cs-slate-600 mb-4">
              Careerstream (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you use our website
              and services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-cs-slate-900 mb-4">
              2. Information We Collect
            </h2>
            <h3 className="text-lg font-medium text-cs-slate-800 mb-2">
              Personal Information
            </h3>
            <p className="text-cs-slate-600 mb-4">
              When you create an account, we collect information such as your
              name, email address, and for employers, company name. We also
              collect information you provide when completing our personality
              assessments.
            </p>
            <h3 className="text-lg font-medium text-cs-slate-800 mb-2">
              Assessment Data
            </h3>
            <p className="text-cs-slate-600 mb-4">
              We collect your responses to personality assessment questions.
              This data is used to generate your personality profile and
              calculate compatibility scores with job opportunities.
            </p>
            <h3 className="text-lg font-medium text-cs-slate-800 mb-2">
              Usage Information
            </h3>
            <p className="text-cs-slate-600 mb-4">
              We automatically collect certain information about your device and
              usage of our services, including IP address, browser type, and
              pages visited.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-cs-slate-900 mb-4">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 text-cs-slate-600 space-y-2">
              <li>To provide and maintain our services</li>
              <li>To generate personality profiles and compatibility scores</li>
              <li>To match candidates with relevant job opportunities</li>
              <li>To communicate with you about your account and our services</li>
              <li>To improve our services and develop new features</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-cs-slate-900 mb-4">
              4. Information Sharing
            </h2>
            <p className="text-cs-slate-600 mb-4">
              We share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-cs-slate-600 space-y-2">
              <li>
                <strong>With Employers:</strong> When you apply to a job,
                employers see your compatibility score and high-level trait
                summary, not raw assessment answers.
              </li>
              <li>
                <strong>Service Providers:</strong> We work with third-party
                companies that help us operate our services (e.g., hosting,
                analytics).
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law or to
                protect our rights.
              </li>
            </ul>
            <p className="text-cs-slate-600 mt-4 font-medium">
              We never sell your personal data to third parties.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-cs-slate-900 mb-4">
              5. Data Security
            </h2>
            <p className="text-cs-slate-600 mb-4">
              We implement industry-standard security measures to protect your
              data, including encryption in transit and at rest, regular
              security audits, and access controls.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-cs-slate-900 mb-4">
              6. Your Rights
            </h2>
            <p className="text-cs-slate-600 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-cs-slate-600 space-y-2">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Request data portability</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-cs-slate-900 mb-4">
              7. Contact Us
            </h2>
            <p className="text-cs-slate-600">
              If you have any questions about this Privacy Policy, please
              contact us at{" "}
              <a
                href="mailto:privacy@careerstream.com"
                className="text-cs-blue-600 hover:underline"
              >
                privacy@careerstream.com
              </a>
              .
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}

