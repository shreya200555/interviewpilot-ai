import Card from "./Card";

interface QuestionCardProps {
  question: string;
  currentQuestion: number;
  totalQuestions: number;
}

export default function QuestionCard({ question, currentQuestion, totalQuestions }: QuestionCardProps) {
  return (
    <Card className="mb-6">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-purple-400 font-semibold">Question {currentQuestion}</span>
          <span className="text-slate-500">/ {totalQuestions}</span>
        </div>
        <h3 className="text-2xl font-semibold text-white leading-relaxed">{question}</h3>
      </div>

      <div className="flex gap-3">
        <button className="px-6 py-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-colors font-medium">
          Previous
        </button>
        <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all font-medium">
          Next
        </button>
        <button className="px-6 py-3 border border-white/20 text-slate-400 rounded-xl hover:bg-white/5 hover:text-white transition-colors font-medium">
          Skip Question
        </button>
      </div>
    </Card>
  );
}
