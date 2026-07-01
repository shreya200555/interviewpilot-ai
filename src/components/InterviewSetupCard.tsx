"use client";

import Card from "./Card";
import CompanySelector from "./CompanySelector";
import InterviewTypeSelector from "./InterviewTypeSelector";
import DifficultySelector from "./DifficultySelector";
import TimeSelector from "./TimeSelector";

export default function InterviewSetupCard() {
  return (
    <Card className="lg:col-span-2">
      <h2 className="text-2xl font-bold text-white mb-8">Start Your Next Mock Interview</h2>

      {/* Resume Section */}
      <div className="mb-8 p-4 bg-white/5 rounded-xl border border-white/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
              <span className="text-green-400">✓</span>
            </div>
            <div>
              <p className="text-white font-medium">Resume Uploaded</p>
              <p className="text-slate-400 text-sm">resume_shreya.pdf</p>
            </div>
          </div>
          <button className="px-4 py-2 bg-white/10 text-white text-sm font-medium rounded-lg hover:bg-white/20 transition-colors">
            Change Resume
          </button>
        </div>
      </div>

      {/* Selectors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <CompanySelector />
        <InterviewTypeSelector />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <DifficultySelector />
        <TimeSelector />
      </div>

      {/* CTA Button */}
      <button className="w-full py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-purple-500/25 text-lg">
        Start AI Interview
      </button>
    </Card>
  );
}
