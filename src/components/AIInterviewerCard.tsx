import Card from "./Card";

export default function AIInterviewerCard() {
  return (
    <Card gradient className="flex flex-col">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-white mb-6">AI Interviewer</h3>
        
        {/* Avatar */}
        <div className="relative inline-block mb-4">
          <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto">
            <span className="text-4xl">🤖</span>
          </div>
          {/* Online indicator */}
          <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 rounded-full border-4 border-slate-900 animate-pulse"></div>
        </div>

        <p className="text-green-400 text-sm font-medium mb-2">Online</p>
        <p className="text-slate-300">Waiting for you...</p>
      </div>

      {/* Interview Details */}
      <div className="bg-white/5 rounded-xl p-4 space-y-3 mb-6">
        <div className="flex justify-between">
          <span className="text-slate-400 text-sm">Company:</span>
          <span className="text-white font-medium">Google</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-400 text-sm">Interview:</span>
          <span className="text-white font-medium">DSA</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-400 text-sm">Difficulty:</span>
          <span className="text-white font-medium">Medium</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-400 text-sm">Expected Questions:</span>
          <span className="text-white font-medium">10</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-400 text-sm">Estimated Time:</span>
          <span className="text-white font-medium">30 mins</span>
        </div>
      </div>

      {/* Begin Button */}
      <button className="w-full py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-purple-500/25 animate-pulse">
        Begin Interview
      </button>
    </Card>
  );
}
