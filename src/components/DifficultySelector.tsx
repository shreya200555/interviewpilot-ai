"use client";

import { useState } from "react";

const difficulties = ["Easy", "Medium", "Hard"];

export default function DifficultySelector() {
  const [selected, setSelected] = useState("Medium");

  return (
    <div>
      <h3 className="text-sm font-semibold text-slate-300 mb-4">Difficulty</h3>
      <div className="flex gap-2">
        {difficulties.map((difficulty) => (
          <button
            key={difficulty}
            onClick={() => setSelected(difficulty)}
            className={`px-6 py-3 rounded-xl border transition-all duration-200 font-medium ${
              selected === difficulty
                ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white border-transparent"
                : "bg-white/5 border-white/10 text-slate-400 hover:bg-white/10 hover:border-white/20 hover:text-white"
            }`}
          >
            {difficulty}
          </button>
        ))}
      </div>
    </div>
  );
}
