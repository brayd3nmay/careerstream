import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Careerstream",
  description: "Read the terms and conditions for using Careerstream services.",
};

export default function TermsOfService() {
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
          Terms of Service
        </h1>
        <p className="text-cs-slate-600 mb-12">Last updated: January 1, 2025</p>

        <div className="prose prose-slate max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-cs-slate-900 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-cs-slate-600 mb-4">
              By accessing or using Careerstream&apos;s website and services, you
              agree to be bound by these Terms of Service. If you do not agree
              to these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-cs-slate-900 mb-4">
              2. Description of Services
            </h2>
            <p className="text-cs-slate-600 mb-4">
              Careerstream provides a platform that connects job seekers with
              employers using personality-based compatibility scoring. Our
              services include:
            </p>
            <ul className="list-disc pl-6 text-cs-slate-600 space-y-2">
              <li>Personality assessments for job seekers</li>
              <li>Job posting and candidate matching for employers</li>
              <li>Compatibility score generation and analysis</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-cs-slate-900 mb-4">
              3. User Accounts
            </h2>
            <p className="text-cs-slate-600 mb-4">
              To access certain features, you must create an account. You are
              responsible for:
            </p>
            <ul className="list-disc pl-6 text-cs-slate-600 space-y-2">
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Providing accurate and complete information</li>
              <li>Notifying us immediately of any unauthorized use</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-cs-slate-900 mb-4">
              4. User Conduct
            </h2>
            <p className="text-cs-slate-600 mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 text-cs-slate-600 space-y-2">
              <li>Provide false or misleading information</li>
              <li>Use the service for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt the service</li>
              <li>Scrape, collect, or harvest user data without permission</li>
              <li>
                Discriminate against candidates based on protected
                characteristics
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-cs-slate-900 mb-4">
              5. Assessment Accuracy
            </h2>
            <p className="text-cs-slate-600 mb-4">
              While our personality assessments and compatibility scores are
              designed to be helpful tools in the hiring process, they are not
              guarantees of job performance or success. Employers should use
              compatibility scores as one of multiple factors in their hiring
              decisions.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-cs-slate-900 mb-4">
              6. Intellectual Property
            </h2>
            <p className="text-cs-slate-600 mb-4">
              All content, features, and functionality of our service—including
              but not limited to our assessment questions, algorithms, scoring
              methodology, text, graphics, and software—are owned by
              Careerstream and protected by intellectual property laws.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-cs-slate-900 mb-4">
              7. Limitation of Liability
            </h2>
            <p className="text-cs-slate-600 mb-4">
              To the maximum extent permitted by law, Careerstream shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages arising from your use of our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-cs-slate-900 mb-4">
              8. Termination
            </h2>
            <p className="text-cs-slate-600 mb-4">
              We may terminate or suspend your account at any time for violation
              of these terms or for any other reason at our discretion. You may
              also delete your account at any time.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-cs-slate-900 mb-4">
              9. Changes to Terms
            </h2>
            <p className="text-cs-slate-600 mb-4">
              We may modify these Terms of Service at any time. We will notify
              users of material changes via email or through the service.
              Continued use of our services after changes constitutes acceptance
              of the new terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-cs-slate-900 mb-4">
              10. Contact Us
            </h2>
            <p className="text-cs-slate-600">
              If you have any questions about these Terms of Service, please
              contact us at{" "}
              <a
                href="mailto:legal@careerstream.com"
                className="text-cs-blue-600 hover:underline"
              >
                legal@careerstream.com
              </a>
              .
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}

