"use client";

import { useState } from "react";
import CompanyGrid from "@/components/CompanyGrid";
import CompanyDetails from "@/components/CompanyDetails";
import ContinueButton from "@/components/ContinueButton";

export default function Company() {
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);

  // Dummy data for companies
  const companies = [
    {
      id: "google",
      name: "Google",
      logo: "🔍",
      difficulty: "Hard" as const,
      focus: ["Algorithms", "Problem Solving"],
      color: "from-blue-500 to-blue-600",
    },
    {
      id: "amazon",
      name: "Amazon",
      logo: "📦",
      difficulty: "Hard" as const,
      focus: ["Leadership Principles"],
      color: "from-orange-500 to-orange-600",
    },
    {
      id: "microsoft",
      name: "Microsoft",
      logo: "🪟",
      difficulty: "Medium" as const,
      focus: ["Communication", "Coding"],
      color: "from-cyan-500 to-cyan-600",
    },
    {
      id: "meta",
      name: "Meta",
      logo: "🔷",
      difficulty: "Hard" as const,
      focus: ["Coding", "Product Thinking"],
      color: "from-blue-600 to-purple-600",
    },
    {
      id: "apple",
      name: "Apple",
      logo: "🍎",
      difficulty: "Hard" as const,
      focus: ["Design", "Technical Excellence"],
      color: "from-gray-600 to-gray-700",
    },
    {
      id: "netflix",
      name: "Netflix",
      logo: "🎬",
      difficulty: "Medium" as const,
      focus: ["Culture Fit", "Technical"],
      color: "from-red-600 to-red-700",
    },
    {
      id: "adobe",
      name: "Adobe",
      logo: "🎨",
      difficulty: "Medium" as const,
      focus: ["Creativity", "Technical"],
      color: "from-red-500 to-orange-500",
    },
    {
      id: "atlassian",
      name: "Atlassian",
      logo: "🔷",
      difficulty: "Medium" as const,
      focus: ["Team Collaboration", "Agile"],
      color: "from-blue-500 to-blue-600",
    },
    {
      id: "nvidia",
      name: "NVIDIA",
      logo: "🟢",
      difficulty: "Hard" as const,
      focus: ["GPU Computing", "AI/ML"],
      color: "from-green-500 to-green-600",
    },
    {
      id: "uber",
      name: "Uber",
      logo: "🚗",
      difficulty: "Medium" as const,
      focus: ["Scalability", "System Design"],
      color: "from-gray-800 to-black",
    },
    {
      id: "goldman-sachs",
      name: "Goldman Sachs",
      logo: "💰",
      difficulty: "Hard" as const,
      focus: ["Quantitative", "Problem Solving"],
      color: "from-blue-700 to-blue-800",
    },
    {
      id: "jp-morgan",
      name: "JP Morgan",
      logo: "🏦",
      difficulty: "Hard" as const,
      focus: ["Finance", "Technology"],
      color: "from-blue-800 to-blue-900",
    },
  ];

  // Company details data
  const companyDetailsMap: Record<string, any> = {
    google: {
      name: "Google",
      interviewStyle: ["Technical", "Behavioral", "System Design"],
      typicalRounds: ["Phone Screen", "Technical Interview", "Onsite (4-5 interviews)", "Hiring Committee"],
      mostAskedTopics: ["Algorithms", "Data Structures", "System Design", "Coding", "Problem Solving"],
      estimatedDifficulty: "Hard",
      exampleQuestions: [
        "Design a URL shortening service like bit.ly",
        "Explain the difference between process and thread",
        "Implement a LRU cache",
        "How would you design Google Search?",
      ],
    },
    amazon: {
      name: "Amazon",
      interviewStyle: ["Behavioral", "Technical", "Leadership"],
      typicalRounds: ["Online Assessment", "Phone Screen", "Onsite (Loop)", "Bar Raiser"],
      mostAskedTopics: ["Leadership Principles", "System Design", "Algorithms", "Scalability"],
      estimatedDifficulty: "Hard",
      exampleQuestions: [
        "Tell me about a time you disagreed with your manager",
        "Design a distributed key-value store",
        "Implement a thread-safe queue",
        "How would you handle a system outage?",
      ],
    },
    microsoft: {
      name: "Microsoft",
      interviewStyle: ["Technical", "Behavioral", "Design"],
      typicalRounds: ["Online Assessment", "Phone Screen", "Onsite (3-4 interviews)", "Final Round"],
      mostAskedTopics: ["Coding", "System Design", "Communication", "Problem Solving"],
      estimatedDifficulty: "Medium",
      exampleQuestions: [
        "Design a parking lot system",
        "Explain polymorphism with examples",
        "Implement a binary tree traversal",
        "How do you handle tight deadlines?",
      ],
    },
    meta: {
      name: "Meta",
      interviewStyle: ["Coding", "Product Sense", "System Design"],
      typicalRounds: ["Phone Screen", "Technical Interview", "Onsite (Product + Coding)", "Design Interview"],
      mostAskedTopics: ["Algorithms", "Product Thinking", "System Design", "Data Structures"],
      estimatedDifficulty: "Hard",
      exampleQuestions: [
        "Design Facebook News Feed",
        "Implement a rate limiter",
        "How would you improve Instagram Stories?",
        "Find the longest palindrome in a string",
      ],
    },
    apple: {
      name: "Apple",
      interviewStyle: ["Technical", "Design", "Culture Fit"],
      typicalRounds: ["Phone Screen", "Technical Interview", "Onsite (5-6 interviews)", "Executive Review"],
      mostAskedTopics: ["iOS Development", "System Design", "Algorithms", "User Experience"],
      estimatedDifficulty: "Hard",
      exampleQuestions: [
        "Design the iOS notification system",
        "Explain memory management in iOS",
        "Implement a thread-safe singleton",
        "How would you improve Apple Maps?",
      ],
    },
    netflix: {
      name: "Netflix",
      interviewStyle: ["Cultural", "Technical", "Problem Solving"],
      typicalRounds: ["Phone Screen", "Technical Interview", "Onsite (Culture + Tech)", "Final Interview"],
      mostAskedTopics: ["Microservices", "Cloud Architecture", "Algorithms", "Culture Fit"],
      estimatedDifficulty: "Medium",
      exampleQuestions: [
        "Design a video streaming service",
        "How would you handle high traffic?",
        "Explain CAP theorem",
        "Tell me about a time you took a stand",
      ],
    },
    adobe: {
      name: "Adobe",
      interviewStyle: ["Technical", "Creative", "Problem Solving"],
      typicalRounds: ["Online Assessment", "Phone Screen", "Onsite (3-4 interviews)", "Portfolio Review"],
      mostAskedTopics: ["Creative Cloud", "Algorithms", "System Design", "User Experience"],
      estimatedDifficulty: "Medium",
      exampleQuestions: [
        "Design a real-time collaboration feature",
        "Implement an image compression algorithm",
        "How would you scale Photoshop for web?",
        "Explain the rendering pipeline",
      ],
    },
    atlassian: {
      name: "Atlassian",
      interviewStyle: ["Technical", "Collaboration", "Agile"],
      typicalRounds: ["Phone Screen", "Technical Interview", "Onsite (Team + Tech)", "Values Interview"],
      mostAskedTopics: ["Team Collaboration", "Agile Practices", "System Design", "Algorithms"],
      estimatedDifficulty: "Medium",
      exampleQuestions: [
        "Design a real-time document editor",
        "How do you handle merge conflicts?",
        "Implement a Kanban board backend",
        "Tell me about your experience with agile",
      ],
    },
    nvidia: {
      name: "NVIDIA",
      interviewStyle: ["Technical", "AI/ML", "System Design"],
      typicalRounds: ["Online Assessment", "Phone Screen", "Technical Interview", "Onsite (GPU + AI)"],
      mostAskedTopics: ["GPU Computing", "CUDA", "Machine Learning", "Parallel Computing"],
      estimatedDifficulty: "Hard",
      exampleQuestions: [
        "Explain GPU memory architecture",
        "Implement matrix multiplication in CUDA",
        "Design a neural network training pipeline",
        "How would you optimize deep learning inference?",
      ],
    },
    uber: {
      name: "Uber",
      interviewStyle: ["System Design", "Algorithms", "Scalability"],
      typicalRounds: ["Phone Screen", "Technical Interview", "Onsite (Design + Coding)", "Hiring Manager"],
      mostAskedTopics: ["System Design", "Scalability", "Algorithms", "Distributed Systems"],
      estimatedDifficulty: "Medium",
      exampleQuestions: [
        "Design Uber's ride matching system",
        "Implement a geospatial index",
        "How would you handle surge pricing?",
        "Design a real-time tracking system",
      ],
    },
    "goldman-sachs": {
      name: "Goldman Sachs",
      interviewStyle: ["Quantitative", "Technical", "Problem Solving"],
      typicalRounds: ["Online Assessment", "Phone Screen", "Technical Interview", "Superday"],
      mostAskedTopics: ["Quantitative Finance", "Algorithms", "Probability", "System Design"],
      estimatedDifficulty: "Hard",
      exampleQuestions: [
        "Calculate the probability of a stock price",
        "Design a trading system",
        "Explain Monte Carlo simulation",
        "Implement a binary search tree",
      ],
    },
    "jp-morgan": {
      name: "JP Morgan",
      interviewStyle: ["Financial", "Technical", "System Design"],
      typicalRounds: ["Online Assessment", "Phone Screen", "Technical Interview", "Onsite (Finance + Tech)"],
      mostAskedTopics: ["Finance", "Blockchain", "System Design", "Algorithms"],
      estimatedDifficulty: "Hard",
      exampleQuestions: [
        "Design a blockchain payment system",
        "Explain distributed ledger technology",
        "Implement a fraud detection algorithm",
        "How would you handle high-frequency trading?",
      ],
    },
  };

  const selectedCompanyDetails = selectedCompany ? companyDetailsMap[selectedCompany] : null;

  const handleContinue = () => {
    console.log("Continuing to interview type with company:", selectedCompany);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Choose Your Target Company</h1>
          <p className="text-slate-400 text-lg">Select the company you want to practice interviewing for.</p>
        </div>

        {/* Company Grid */}
        <CompanyGrid
          companies={companies}
          selectedCompany={selectedCompany}
          onSelectCompany={setSelectedCompany}
        />

        {/* Company Details Panel */}
        {selectedCompany && (
          <div className="mt-8">
            <CompanyDetails company={selectedCompanyDetails} />
          </div>
        )}

        {/* Continue Button */}
        {selectedCompany && (
          <div className="mt-8 max-w-md mx-auto">
            <ContinueButton onClick={handleContinue} />
          </div>
        )}
      </div>
    </div>
  );
}
