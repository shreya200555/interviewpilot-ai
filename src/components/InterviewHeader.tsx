interface InterviewHeaderProps {
  company: string;
  role: string;
  currentQuestion: number;
  totalQuestions: number;
  difficulty: string;
  time: string;
}

export default function InterviewHeader({
  company,
  role,
  currentQuestion,
  totalQuestions,
  difficulty,
  time,
}: InterviewHeaderProps) {
  return (
    <header className="bg-slate-900/50 backdrop-blur-xl border-b border-white/10 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left: Company and Question Info */}
        <div className="flex items-center gap-6">
          <div>
            <h2 className="text-white font-semibold text-lg">
              {company} {role}
            </h2>
            <p className="text-slate-400 text-sm">
              Question {currentQuestion} of {totalQuestions}
            </p>
          </div>
          <div className="h-8 w-px bg-white/10"></div>
          <div className="flex items-center gap-2">
            <span className="text-slate-400 text-sm">Difficulty:</span>
            <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">
              {difficulty}
            </span>
          </div>
        </div>

        {/* Right: Timer and Status */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-slate-400 text-sm">Timer</span>
            <span className="text-white font-mono text-xl font-semibold">{time}</span>
          </div>
          <div className="h-8 w-px bg-white/10"></div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-400 text-sm font-medium">● Live</span>
          </div>
        </div>
      </div>
    </header>
  );
}
