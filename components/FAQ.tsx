"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How does the personality assessment work?",
    answer:
      "Our assessment consists of carefully designed questions that measure traits across multiple dimensions including creativity, analytical thinking, collaboration, leadership, and adaptability. Candidates rate statements on a scale, and our algorithm builds a comprehensive personality profile from their responses.",
  },
  {
    question: "How long does the assessment take?",
    answer:
      "The assessment typically takes 15-20 minutes to complete. We recommend candidates take it in one sitting in a quiet environment for the most accurate results.",
  },
  {
    question: "Can candidates retake the assessment?",
    answer:
      "Candidates can update their assessment once every 6 months. Personality traits are relatively stable, so frequent retakes aren't necessary. However, we understand people grow and change over time.",
  },
  {
    question: "How accurate is the compatibility score?",
    answer:
      "Our matching algorithm has been validated against job performance data and shows a 94% correlation with successful hires. Candidates with high compatibility scores are significantly more likely to succeed in their roles and stay longer.",
  },
  {
    question: "What data do employers see?",
    answer:
      "Employers see the compatibility score, a high-level trait summary, and how the candidate aligns with their specific role requirements. They don't see raw assessment answers or detailed psychological profiles—just what's relevant for hiring decisions.",
  },
  {
    question: "Is Careerstream free for job seekers?",
    answer:
      "Yes! Candidates can create an account, take the assessment, and apply to jobs completely free. We believe everyone deserves access to better job matching.",
  },
  {
    question: "How do employers define role requirements?",
    answer:
      "Employers use our intuitive role builder to specify which traits matter most for each position. They can weight traits differently (e.g., a leadership role might prioritize communication and decision-making) and even use templates for common roles.",
  },
  {
    question: "Can I integrate Careerstream with my existing ATS?",
    answer:
      "Yes, we offer integrations with popular applicant tracking systems including Greenhouse, Lever, and Workday. Contact our sales team for enterprise integration options.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 section-grid relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-cs-blue-400 text-sm uppercase tracking-[0.2em]">
            FAQ
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl text-white font-serif italic">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 text-lg text-cs-charcoal-400">
            Everything you need to know about Careerstream.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-white/10 overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-6 text-left bg-cs-charcoal-900 hover:bg-cs-charcoal-800 transition-colors"
              >
                <span className="font-serif italic text-white pr-4">
                  {faq.question}
                </span>
                <div className={`w-8 h-8 border border-white/10 flex items-center justify-center flex-shrink-0 transition-colors ${openIndex === index ? 'bg-cs-blue-600 border-cs-blue-600' : ''}`}>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      openIndex === index ? "rotate-180 text-white" : "text-cs-charcoal-400"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-cs-charcoal-400 leading-relaxed border-t border-white/10 pt-4 bg-cs-charcoal-900">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
