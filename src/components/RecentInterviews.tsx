import Card from "./Card";

const recentInterviews = [
  { company: "Google", type: "HR", score: "91%", date: "Yesterday" },
  { company: "Amazon", type: "DSA", score: "82%", date: "2 days ago" },
  { company: "Microsoft", type: "HR", score: "88%", date: "Last week" },
];

export default function RecentInterviews() {
  return (
    <Card>
      <h3 className="text-lg font-semibold text-white mb-6">Recent Interviews</h3>
      <div className="space-y-4">
        {recentInterviews.map((interview, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                <span className="text-lg">📋</span>
              </div>
              <div>
                <p className="text-white font-medium">{interview.company} {interview.type}</p>
                <p className="text-slate-400 text-sm">{interview.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-right">
                <p className="text-white font-semibold">{interview.score}</p>
              </div>
              <button className="px-4 py-2 bg-purple-500/20 text-purple-400 text-sm font-medium rounded-lg hover:bg-purple-500/30 transition-colors">
                View Report
              </button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
