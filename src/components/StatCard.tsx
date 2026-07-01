import Card from "./Card";

interface StatCardProps {
  label: string;
  value: string;
  change?: string;
  icon?: string;
  progress?: number;
  gradient?: boolean;
}

export default function StatCard({ label, value, change, icon, progress, gradient }: StatCardProps) {
  return (
    <Card gradient={gradient}>
      <div className="flex items-center justify-between mb-4">
        <span className="text-slate-400 text-sm">{label}</span>
        {icon && <span className="text-2xl">{icon}</span>}
      </div>
      <div className="text-2xl font-bold text-white mb-2">{value}</div>
      {progress !== undefined && (
        <div className="flex items-center gap-2">
          <div className="w-full bg-slate-700 rounded-full h-2">
            <div className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full" style={{ width: `${progress}%` }}></div>
          </div>
          <span className="text-green-400 text-sm">{progress}%</span>
        </div>
      )}
      {change && <p className={change.startsWith("+") ? "text-green-400" : "text-slate-400"} text-sm>{change}</p>}
    </Card>
  );
}
