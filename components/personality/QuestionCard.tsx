"use client";

import { memo, useCallback } from "react";
import { Question } from "@/lib/personality/questions";

interface QuestionCardProps {
  question: Question;
  value: number | null;
  onAnswer: (value: number) => void;
  questionNumber: number;
}

const RATING_LABELS = [
  { value: 1, label: "Strongly Disagree" },
  { value: 2, label: "Disagree" },
  { value: 3, label: "Neutral" },
  { value: 4, label: "Agree" },
  { value: 5, label: "Strongly Agree" },
] as const;

function QuestionCard({
  question,
  value,
  onAnswer,
  questionNumber,
}: QuestionCardProps) {
  return (
    <div className="bg-cs-charcoal-900 border border-white/10 p-8 md:p-12 animate-fade-in-up">
      {/* Question number badge */}
      <div className="inline-flex items-center gap-2 mb-6">
        <div className="w-8 h-8 bg-cs-blue-600 flex items-center justify-center text-white text-sm font-serif italic">
          {questionNumber}
        </div>
      </div>

      {/* Question statement */}
      <h2 className="text-xl md:text-2xl text-white font-serif italic leading-relaxed mb-10">
        &ldquo;{question.statement}&rdquo;
      </h2>

      {/* Rating scale */}
      <div className="space-y-3">
        {RATING_LABELS.map(({ value: rating, label }) => (
          <button
            key={rating}
            onClick={() => onAnswer(rating)}
            className={`w-full flex items-center gap-4 p-4 border transition-all text-left ${
              value === rating
                ? "border-cs-blue-500 bg-cs-blue-500/10"
                : "border-white/10 hover:border-white/20 hover:bg-white/5"
            }`}
          >
            <div
              className={`w-10 h-10 border flex items-center justify-center flex-shrink-0 font-serif italic transition-colors ${
                value === rating
                  ? "border-cs-blue-500 bg-cs-blue-500 text-white"
                  : "border-white/20 text-cs-charcoal-400"
              }`}
            >
              {rating}
            </div>
            <span
              className={`text-sm md:text-base transition-colors ${
                value === rating ? "text-white" : "text-cs-charcoal-300"
              }`}
            >
              {label}
            </span>
          </button>
        ))}
      </div>

      {/* Keyboard hint */}
      <p className="mt-8 text-cs-charcoal-500 text-sm text-center">
        Press <span className="text-cs-charcoal-300">1-5</span> on your keyboard or click to select
      </p>
    </div>
  );
}

export default memo(QuestionCard);

