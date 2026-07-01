import Card from "./Card";

interface TranscriptMessage {
  role: "candidate" | "ai";
  content: string;
  timestamp: string;
}

interface TranscriptPanelProps {
  messages: TranscriptMessage[];
}

export default function TranscriptPanel({ messages }: TranscriptPanelProps) {
  return (
    <Card className="flex-1">
      <h3 className="text-lg font-semibold text-white mb-4">Live Transcript</h3>
      <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
        {messages.map((message, index) => (
          <div key={index} className={`flex gap-3 ${message.role === "candidate" ? "flex-row" : "flex-row-reverse"}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
              message.role === "candidate" 
                ? "bg-gradient-to-br from-purple-500 to-blue-500" 
                : "bg-gradient-to-br from-green-500 to-emerald-500"
            }`}>
              <span className="text-sm">{message.role === "candidate" ? "👤" : "🤖"}</span>
            </div>
            <div className={`flex-1 ${message.role === "candidate" ? "text-left" : "text-right"}`}>
              <div className={`inline-block max-w-md p-3 rounded-xl ${
                message.role === "candidate"
                  ? "bg-white/10 text-white"
                  : "bg-purple-500/20 text-white"
              }`}>
                <p className="text-sm">{message.content}</p>
              </div>
              <p className="text-slate-500 text-xs mt-1">{message.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
