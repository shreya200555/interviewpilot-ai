import InterviewHeader from "@/components/InterviewHeader";
import QuestionCard from "@/components/QuestionCard";
import AIInterviewerPanel from "@/components/AIInterviewerPanel";
import TranscriptPanel from "@/components/TranscriptPanel";
import InterviewControls from "@/components/InterviewControls";
import InterviewProgressSidebar from "@/components/InterviewProgressSidebar";

export default function Interview() {
  // Dummy data
  const interviewData = {
    company: "Google",
    role: "Software Engineer Intern",
    currentQuestion: 3,
    totalQuestions: 10,
    difficulty: "Medium",
    time: "18:42",
    question: "Explain the difference between a HashMap and a HashSet. When would you use each?",
    interviewType: "DSA",
    progressItems: [
      { label: "Resume Loaded", completed: true },
      { label: "Company Selected", completed: true },
      { label: "Interview Started", completed: true },
      { label: "Answering Question", completed: false, current: true },
      { label: "Interview Completed", completed: false },
    ],
    transcript: [
      {
        role: "candidate" as const,
        content: "I would use a HashMap when I need key-value pairs, like storing user information with their IDs. A HashSet is better when I only need to store unique values without any associated data.",
        timestamp: "10:32 AM",
      },
      {
        role: "ai" as const,
        content: "Can you explain the time complexity of basic operations in both HashMap and HashSet?",
        timestamp: "10:33 AM",
      },
      {
        role: "candidate" as const,
        content: "Both HashMap and HashSet have O(1) average time complexity for insert, delete, and search operations. However, in the worst case with hash collisions, it can degrade to O(n). Using a good hash function helps maintain the average case.",
        timestamp: "10:34 AM",
      },
      {
        role: "ai" as const,
        content: "That's correct. Can you give me a real-world scenario where you'd prefer a HashSet over a HashMap?",
        timestamp: "10:35 AM",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 flex flex-col">
      {/* Left Sidebar - Progress */}
      <InterviewProgressSidebar
        currentQuestion={interviewData.currentQuestion}
        totalQuestions={interviewData.totalQuestions}
        progressItems={interviewData.progressItems}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col ml-64">
        {/* Header */}
        <InterviewHeader
          company={interviewData.company}
          role={interviewData.role}
          currentQuestion={interviewData.currentQuestion}
          totalQuestions={interviewData.totalQuestions}
          difficulty={interviewData.difficulty}
          time={interviewData.time}
        />

        {/* Main Content */}
        <main className="flex-1 flex p-6 gap-6 overflow-hidden">
          {/* Center - Question and Transcript */}
          <div className="flex-1 flex flex-col gap-6 overflow-hidden">
            <QuestionCard
              question={interviewData.question}
              currentQuestion={interviewData.currentQuestion}
              totalQuestions={interviewData.totalQuestions}
            />
            <TranscriptPanel messages={interviewData.transcript} />
          </div>

          {/* Right - AI Interviewer Panel */}
          <div className="w-80">
            <AIInterviewerPanel
              company={interviewData.company}
              interviewType={interviewData.interviewType}
              difficulty={interviewData.difficulty}
            />
          </div>
        </main>

        {/* Bottom Controls */}
        <InterviewControls />
      </div>
    </div>
  );
}
