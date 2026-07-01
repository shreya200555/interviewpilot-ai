"use client";

import { useState } from "react";

const types = [
  { name: "HR Interview", icon: "💬" },
  { name: "DSA Interview", icon: "🔧" },
  { name: "Behavioral Interview", icon: "🧠" },
  { name: "System Design", icon: "🏗️" },
];

export default function InterviewTypeSelector() {
  const [selected, setSelected] = useState("DSA Interview");

  return (
    <div>
      <h3 className="text-sm font-semibold text-slate-300 mb-4">Interview Type</h3>
      <div className="grid grid-cols-2 gap-3">
        {types.map((type) => (
          <button
            key={type.name}
            onClick={() => setSelected(type.name)}
            className={`p-4 rounded-xl border transition-all duration-200 ${
              selected === type.name
                ? "bg-gradient-to-br from-purple-500/20 to-blue-500/20 border-purple-500/50 shadow-lg shadow-purple-500/25"
                : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-xl">{type.icon}</span>
              <span className="text-white font-medium text-sm">{type.name}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
