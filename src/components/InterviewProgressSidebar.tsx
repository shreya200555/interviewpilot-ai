import Card from "./Card";

interface ProgressItem {
  label: string;
  completed: boolean;
  current?: boolean;
}

interface InterviewProgressSidebarProps {
  currentQuestion: number;
  totalQuestions: number;
  progressItems: ProgressItem[];
}

export default function InterviewProgressSidebar({
  currentQuestion,
  totalQuestions,
  progressItems,
}: InterviewProgressSidebarProps) {
  const progressPercentage = (currentQuestion / totalQuestions) * 100;

  return (
    <aside className="w-64 bg-slate-900/50 backdrop-blur-xl border-r border-white/10 p-6">
      <h3 className="text-lg font-semibold text-white mb-6">Interview Progress</h3>

      {/* Question Progress */}
      <Card className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-slate-400 text-sm">Questions</span>
          <span className="text-white font-medium">{currentQuestion} / {totalQuestions}</span>
        </div>
        <div className="w-full bg-slate-700 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-500" 
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </Card>

      {/* Checklist */}
      <div className="space-y-3">
        <h4 className="text-slate-400 text-sm font-medium mb-4">Checklist</h4>
        {progressItems.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
              item.completed 
                ? "bg-green-500" 
                : item.current 
                  ? "bg-purple-500 animate-pulse" 
                  : "bg-slate-700"
            }`}>
              {item.completed && <span className="text-white text-xs">✓</span>}
            </div>
            <span className={`text-sm ${
              item.current 
                ? "text-white font-medium" 
                : item.completed 
                  ? "text-slate-300" 
                  : "text-slate-500"
            }`}>
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </aside>
  );
}
