import Sidebar from "@/components/Sidebar";
import DashboardHeader from "@/components/DashboardHeader";
import StatCard from "@/components/StatCard";
import InterviewSetupCard from "@/components/InterviewSetupCard";
import AIInterviewerCard from "@/components/AIInterviewerCard";
import RecentInterviews from "@/components/RecentInterviews";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 flex">
      {/* Sidebar */}
      <Sidebar activeItem="Dashboard" />

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        {/* Header */}
        <DashboardHeader />

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard label="Resume Status" value="Complete" icon="📄" progress={100} />
          <StatCard label="Interview Streak" value="7 Days" icon="🔥" change="Keep it going!" gradient />
          <StatCard label="Total Interviews" value="24" icon="🎯" change="+3 this week" />
          <StatCard label="Average Score" value="85%" icon="⭐" change="+5% improvement" />
        </div>

        {/* Interview Setup Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <InterviewSetupCard />
          <AIInterviewerCard />
        </div>

        {/* Recent Interviews */}
        <RecentInterviews />
      </main>
    </div>
  );
}
