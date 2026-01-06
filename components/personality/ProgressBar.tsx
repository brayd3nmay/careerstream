"use client";

interface ProgressBarProps {
  current: number;
  total: number;
  categoryName?: string;
}

export default function ProgressBar({ current, total, categoryName }: ProgressBarProps) {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-4">
          <span className="text-cs-charcoal-400 text-sm">
            Question <span className="text-white font-serif italic">{current}</span> of{" "}
            <span className="text-white font-serif italic">{total}</span>
          </span>
          {categoryName && (
            <>
              <span className="text-cs-charcoal-600">•</span>
              <span className="text-cs-blue-400 text-sm">{categoryName}</span>
            </>
          )}
        </div>
        <span className="text-cs-charcoal-400 text-sm font-serif italic">{percentage}%</span>
      </div>
      <div className="h-1 bg-white/10 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-cs-blue-600 to-cs-blue-400 transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

