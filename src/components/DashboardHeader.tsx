interface DashboardHeaderProps {
  userName?: string;
}

export default function DashboardHeader({ userName = "Alex" }: DashboardHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-white mb-2">Welcome back, {userName}!</h1>
      <p className="text-slate-400">Set up your next AI-powered mock interview</p>
    </div>
  );
}
