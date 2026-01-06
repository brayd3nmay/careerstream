"use client";

import { useMemo, memo } from "react";
import Link from "next/link";
import { PersonalityTrait } from "@/lib/personality/questions";
import { TraitScore } from "@/lib/personality/scoring";

interface ResultsPreviewProps {
  traitScores: TraitScore[];
  topTraits: PersonalityTrait[];
  email: string;
}

function ResultsPreview({
  traitScores,
  topTraits,
  email,
}: ResultsPreviewProps) {
  const { sortedTraits, traitMap } = useMemo(() => {
    const map = new Map<PersonalityTrait, TraitScore>();
    for (const score of traitScores) {
      map.set(score.trait, score);
    }
    const sorted = traitScores.slice().sort((a, b) => b.percentage - a.percentage);
    return { sortedTraits: sorted, traitMap: map };
  }, [traitScores]);

  return (
    <div className="animate-fade-in-up">
      {/* Success message */}
      <div className="text-center mb-12">
        <div className="w-20 h-20 bg-cs-blue-600 flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="text-3xl md:text-4xl text-white font-serif italic mb-4">
          Your Results Are Ready!
        </h2>
        <p className="text-cs-charcoal-400 text-lg">
          We&apos;ve sent your detailed personality profile to{" "}
          <span className="text-white">{email}</span>
        </p>
      </div>

      {/* Results preview */}
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Top traits */}
        <div className="bg-cs-charcoal-900 border border-white/10 p-8">
          <h3 className="text-xs uppercase tracking-[0.2em] text-cs-charcoal-400 mb-6">
            Your Top Traits
          </h3>
          <div className="grid grid-cols-3 gap-4">
            {topTraits.map((trait, index) => {
              const traitData = traitMap.get(trait);
              return (
                <div
                  key={trait}
                  className="bg-cs-blue-600/20 border border-cs-blue-500/30 p-4 text-center"
                >
                  <div className="text-cs-blue-400 font-serif italic text-2xl mb-1">
                    #{index + 1}
                  </div>
                  <div className="text-white font-medium">{trait}</div>
                  <div className="text-cs-charcoal-400 text-sm mt-1">
                    {traitData?.percentage}%
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Full breakdown */}
        <div className="bg-cs-charcoal-900 border border-white/10 p-8">
          <h3 className="text-xs uppercase tracking-[0.2em] text-cs-charcoal-400 mb-6">
            Full Trait Breakdown
          </h3>
          <div className="space-y-4">
            {sortedTraits.map(({ trait, percentage }) => (
              <div key={trait}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-cs-charcoal-300">{trait}</span>
                  <span className="text-white font-serif italic">{percentage}%</span>
                </div>
                <div className="h-2 bg-white/10 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cs-blue-600 to-cs-blue-400 transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-4">
          <p className="text-cs-charcoal-400 mb-6">
            Want to find roles that match your personality?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup/candidate"
              className="bg-cs-blue-600 hover:bg-cs-blue-500 text-white px-8 py-4 text-lg font-medium transition-colors inline-flex items-center justify-center gap-3"
            >
              Create Your Profile
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
            <Link
              href="/"
              className="bg-transparent hover:bg-white/5 text-white border border-white/30 hover:border-white/50 px-8 py-4 text-lg font-medium transition-all inline-flex items-center justify-center"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(ResultsPreview);

