"use client";

import { useState } from "react";
import Card from "./Card";

interface CompanyCardProps {
  company: {
    id: string;
    name: string;
    logo: string;
    difficulty: "Easy" | "Medium" | "Hard";
    focus: string[];
    color: string;
  };
  isSelected: boolean;
  onClick: () => void;
}

export default function CompanyCard({ company, isSelected, onClick }: CompanyCardProps) {
  return (
    <Card
      onClick={onClick}
      className={`cursor-pointer transition-all duration-300 ${
        isSelected
          ? `border-2 ${company.color} shadow-lg shadow-purple-500/25 transform scale-105`
          : "hover:border-purple-500/50 hover:transform hover:scale-102"
      }`}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        {/* Logo Placeholder */}
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${company.color} flex items-center justify-center`}>
          <span className="text-3xl">{company.logo}</span>
        </div>

        {/* Company Name */}
        <h3 className="text-xl font-bold text-white">{company.name}</h3>

        {/* Difficulty Badge */}
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            company.difficulty === "Easy"
              ? "bg-green-500/20 text-green-400"
              : company.difficulty === "Medium"
              ? "bg-yellow-500/20 text-yellow-400"
              : "bg-red-500/20 text-red-400"
          }`}
        >
          {company.difficulty}
        </span>

        {/* Hiring Focus */}
        <div className="text-slate-400 text-sm">
          {company.focus.map((item, index) => (
            <span key={index}>
              {item}
              {index < company.focus.length - 1 && " • "}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
}
