import Card from "./Card";

interface AIInterviewerPanelProps {
  company: string;
  interviewType: string;
  difficulty: string;
}

export default function AIInterviewerPanel({ company, interviewType, difficulty }: AIInterviewerPanelProps) {
  return (
    <Card className="h-full">
      <div className="text-center mb-6">
        {/* Avatar */}
        <div className="relative inline-block mb-4">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto">
            <span className="text-4xl">🤖</span>
          </div>
          {/* Online indicator */}
          <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-3 border-slate-900 animate-pulse"></div>
        </div>

        <h3 className="text-xl font-bold text-white mb-1">InterviewPilot AI</h3>
        <p className="text-green-400 text-sm font-medium mb-4">Online</p>

        {/* Current Status */}
        <div className="bg-white/5 rounded-xl p-3 mb-6">
          <p className="text-slate-400 text-sm mb-1">Current Status</p>
          <p className="text-white font-medium">Listening...</p>
        </div>
      </div>

      {/* Interview Details */}
      <div className="space-y-3">
        <div className="flex justify-between items-center py-2 border-b border-white/5">
          <span className="text-slate-400 text-sm">Company</span>
          <span className="text-white font-medium">{company}</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-white/5">
          <span className="text-slate-400 text-sm">Interview Type</span>
          <span className="text-white font-medium">{interviewType}</span>
        </div>
        <div className="flex justify-between items-center py-2">
          <span className="text-slate-400 text-sm">Difficulty</span>
          <span className="text-white font-medium">{difficulty}</span>
        </div>
      </div>
    </Card>
  );
}
