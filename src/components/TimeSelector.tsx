"use client";

import { useState } from "react";

const times = ["15 Minutes", "30 Minutes", "45 Minutes"];

export default function TimeSelector() {
  const [selected, setSelected] = useState("30 Minutes");

  return (
    <div>
      <h3 className="text-sm font-semibold text-slate-300 mb-4">Estimated Time</h3>
      <div className="flex gap-2">
        {times.map((time) => (
          <button
            key={time}
            onClick={() => setSelected(time)}
            className={`px-6 py-3 rounded-xl border transition-all duration-200 font-medium ${
              selected === time
                ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white border-transparent"
                : "bg-white/5 border-white/10 text-slate-400 hover:bg-white/10 hover:border-white/20 hover:text-white"
            }`}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
}
