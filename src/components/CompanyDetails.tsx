"use client";

import Card from "./Card";

interface CompanyDetailsProps {
  company: {
    name: string;
    interviewStyle: string[];
    typicalRounds: string[];
    mostAskedTopics: string[];
    estimatedDifficulty: string;
    exampleQuestions: string[];
  } | null;
}

export default function CompanyDetails({ company }: CompanyDetailsProps) {
  if (!company) {
    return (
      <Card className="flex items-center justify-center min-h-[400px]">
        <p className="text-slate-400 text-lg">Select a company to view details</p>
      </Card>
    );
  }

  return (
    <Card>
      <h3 className="text-2xl font-bold text-white mb-6">{company.name} Interview Details</h3>

      <div className="space-y-6">
        {/* Interview Style */}
        <div>
          <h4 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wider">Interview Style</h4>
          <div className="flex flex-wrap gap-2">
            {company.interviewStyle.map((style, index) => (
              <span key={index} className="px-3 py-2 bg-purple-500/20 text-purple-400 rounded-lg text-sm">
                {style}
              </span>
            ))}
          </div>
        </div>

        {/* Typical Rounds */}
        <div>
          <h4 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wider">Typical Rounds</h4>
          <div className="space-y-2">
            {company.typicalRounds.map((round, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-white">{round}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Most Asked Topics */}
        <div>
          <h4 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wider">Most Asked Topics</h4>
          <div className="flex flex-wrap gap-2">
            {company.mostAskedTopics.map((topic, index) => (
              <span key={index} className="px-3 py-2 bg-blue-500/20 text-blue-400 rounded-lg text-sm">
                {topic}
              </span>
            ))}
          </div>
        </div>

        {/* Estimated Difficulty */}
        <div>
          <h4 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wider">Estimated Difficulty</h4>
          <div className="flex items-center gap-3">
            <div className="flex-1 bg-slate-700 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded-full"
                style={{
                  width:
                    company.estimatedDifficulty === "Easy"
                      ? "33%"
                      : company.estimatedDifficulty === "Medium"
                      ? "66%"
                      : "100%",
                }}
              ></div>
            </div>
            <span className="text-white font-medium">{company.estimatedDifficulty}</span>
          </div>
        </div>

        {/* Example Questions */}
        <div>
          <h4 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wider">Example Questions</h4>
          <div className="space-y-3">
            {company.exampleQuestions.map((question, index) => (
              <div key={index} className="p-3 bg-white/5 rounded-lg">
                <p className="text-slate-300 text-sm">{question}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
