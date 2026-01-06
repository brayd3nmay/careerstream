"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import { QUESTIONS, CATEGORY_NAMES } from "@/lib/personality/questions";
import { calculateScores, AssessmentResponses, AssessmentResults, serializeForStorage } from "@/lib/personality/scoring";
import ProgressBar from "@/components/personality/ProgressBar";
import QuestionCard from "@/components/personality/QuestionCard";
import EmailForm from "@/components/personality/EmailForm";
import ResultsPreview from "@/components/personality/ResultsPreview";
import { getSupabase, isSupabaseConfigured } from "@/lib/supabase/client";

type AssessmentStep = "welcome" | "questions" | "email" | "results";

const TOTAL_QUESTIONS = QUESTIONS.length;

export default function PersonalityAssessment() {
  const [step, setStep] = useState<AssessmentStep>("welcome");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState<AssessmentResponses>({});
  const [results, setResults] = useState<AssessmentResults | null>(null);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const currentQuestion = useMemo(
    () => QUESTIONS[currentQuestionIndex],
    [currentQuestionIndex]
  );

  const handleAnswer = useCallback((value: number) => {
    setResponses((prev) => ({
      ...prev,
      [currentQuestion.id]: value,
    }));

    // Auto-advance after a brief delay
    setTimeout(() => {
      if (currentQuestionIndex < TOTAL_QUESTIONS - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
      } else {
        // All questions answered, move to email step
        setStep("email");
      }
    }, 300);
  }, [currentQuestion.id, currentQuestionIndex]);

  // Handle keyboard navigation
  useEffect(() => {
    if (step !== "questions") return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const key = parseInt(e.key);
      if (key >= 1 && key <= 5) {
        handleAnswer(key);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [step, handleAnswer]);

  const handleEmailSubmit = async (submittedEmail: string) => {
    setIsLoading(true);
    setError(null);
    setEmail(submittedEmail);

    try {
      const calculatedResults = calculateScores(responses);
      setResults(calculatedResults);

      const asyncOperations: Promise<void>[] = [];

      if (isSupabaseConfigured()) {
        asyncOperations.push(
          (async () => {
            try {
              const supabase = getSupabase();
              const storageData = serializeForStorage(calculatedResults, submittedEmail);
              
              const { error: supabaseError } = await supabase
                .from("demo_assessments")
                .insert(storageData);

              if (supabaseError) {
                console.error("Supabase error:", supabaseError);
              }
            } catch (supabaseErr) {
              console.error("Supabase save error:", supabaseErr);
            }
          })()
        );
      }

      asyncOperations.push(
        (async () => {
          try {
            const response = await fetch("/api/send-results", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                email: submittedEmail,
                traitScores: calculatedResults.traitScores,
                topTraits: calculatedResults.topTraits,
              }),
            });

            if (!response.ok) {
              const errorData = await response.json();
              console.error("Email send error:", errorData);
            }
          } catch (emailErr) {
            console.error("Email API error:", emailErr);
          }
        })()
      );

      await Promise.allSettled(asyncOperations);
      setStep("results");
    } catch (err) {
      console.error("Processing error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Go back to previous question
  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  // Start the assessment
  const handleStart = () => {
    setStep("questions");
  };

  return (
    <div className="min-h-screen bg-cs-charcoal-950 industrial-grid">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-cs-charcoal-950/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-cs-blue-600 flex items-center justify-center">
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
              <span className="text-xl text-white">
                <span className="font-medium">Career</span>
                <span className="font-serif italic text-cs-blue-400">stream</span>
              </span>
            </Link>

            {step === "questions" && (
              <button
                onClick={handleBack}
                disabled={currentQuestionIndex === 0}
                className="text-cs-charcoal-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-sm flex items-center gap-2"
              >
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
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Previous
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Welcome step */}
          {step === "welcome" && (
            <div className="text-center animate-fade-in-up">
              <div className="inline-flex items-center gap-3 border border-white/20 px-5 py-2 mb-8">
                <span className="w-2 h-2 bg-cs-blue-500" />
                <span className="text-cs-charcoal-300 text-sm tracking-wide uppercase">
                  Demo Assessment
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl text-white font-serif italic mb-6">
                Discover Your <span className="text-cs-blue-400">Personality Profile</span>
              </h1>

              <p className="text-lg text-cs-charcoal-400 mb-12 max-w-xl mx-auto leading-relaxed">
                Answer 36 questions to uncover your unique personality traits. Takes about 10-15 minutes to complete.
              </p>

              <div className="bg-cs-charcoal-900 border border-white/10 p-8 mb-10">
                <h3 className="text-xs uppercase tracking-[0.2em] text-cs-charcoal-400 mb-6">
                  What You&apos;ll Discover
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {["Visionary", "Builder", "Strategist", "Analyst", "Collaborator", "Explorer"].map(
                    (trait) => (
                      <div
                        key={trait}
                        className="bg-white/5 border border-white/5 p-3 text-center"
                      >
                        <span className="text-cs-charcoal-300 text-sm">{trait}</span>
                      </div>
                    )
                  )}
                </div>
                <p className="text-cs-charcoal-500 text-sm mt-4">
                  ...and 6 more personality traits
                </p>
              </div>

              <button
                onClick={handleStart}
                className="bg-cs-blue-600 hover:bg-cs-blue-500 text-white px-10 py-4 text-lg font-medium transition-colors inline-flex items-center gap-3"
              >
                Start Assessment
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
              </button>

              <p className="mt-8 text-cs-charcoal-600 text-sm">
                Your responses are confidential and used only to generate your results.
              </p>
            </div>
          )}

          {/* Questions step */}
          {step === "questions" && currentQuestion && (
            <div>
              <div className="mb-8">
                <ProgressBar
                  current={currentQuestionIndex + 1}
                  total={TOTAL_QUESTIONS}
                  categoryName={CATEGORY_NAMES[currentQuestion.category]}
                />
              </div>

              <QuestionCard
                key={currentQuestion.id}
                question={currentQuestion}
                value={responses[currentQuestion.id] ?? null}
                onAnswer={handleAnswer}
                questionNumber={currentQuestionIndex + 1}
              />
            </div>
          )}

          {/* Email step */}
          {step === "email" && (
            <div>
              {error && (
                <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 mb-6 text-center">
                  {error}
                </div>
              )}
              <EmailForm onSubmit={handleEmailSubmit} isLoading={isLoading} />
            </div>
          )}

          {/* Results step */}
          {step === "results" && results && (
            <ResultsPreview
              traitScores={results.traitScores}
              topTraits={results.topTraits}
              email={email}
            />
          )}
        </div>
      </main>
    </div>
  );
}

