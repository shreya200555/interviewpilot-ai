interface InterviewControlsProps {
  isMuted?: boolean;
  isCameraOn?: boolean;
}

export default function InterviewControls({ isMuted = false, isCameraOn = true }: InterviewControlsProps) {
  return (
    <div className="bg-slate-900/50 backdrop-blur-xl border-t border-white/10 px-6 py-4">
      <div className="flex items-center justify-center gap-4">
        {/* Microphone */}
        <button className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${
          isMuted 
            ? "bg-red-500/20 text-red-400 hover:bg-red-500/30" 
            : "bg-white/10 text-white hover:bg-white/20"
        }`}>
          <span className="text-2xl">{isMuted ? "🔇" : "🎤"}</span>
        </button>

        {/* Mute Toggle */}
        <button className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
          isMuted 
            ? "bg-red-500/20 text-red-400 hover:bg-red-500/30" 
            : "bg-white/10 text-white hover:bg-white/20"
        }`}>
          <span className="text-xl">🔊</span>
        </button>

        {/* Camera */}
        <button className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
          isCameraOn 
            ? "bg-white/10 text-white hover:bg-white/20" 
            : "bg-red-500/20 text-red-400 hover:bg-red-500/30"
        }`}>
          <span className="text-xl">{isCameraOn ? "📷" : "📷"}</span>
        </button>

        {/* Share Screen */}
        <button className="w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all flex items-center justify-center">
          <span className="text-xl">🖥️</span>
        </button>

        {/* End Interview */}
        <button className="ml-4 px-6 py-3 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-all font-medium flex items-center gap-2">
          <span>📞</span>
          <span>End Interview</span>
        </button>
      </div>
    </div>
  );
}
