"use client";

import { useState } from "react";

const companies = [
  { name: "Google", color: "from-blue-500 to-blue-600" },
  { name: "Amazon", color: "from-orange-500 to-orange-600" },
  { name: "Microsoft", color: "from-cyan-500 to-cyan-600" },
  { name: "Meta", color: "from-blue-600 to-purple-600" },
];

export default function CompanySelector() {
  const [selected, setSelected] = useState("Google");

  return (
    <div>
      <h3 className="text-sm font-semibold text-slate-300 mb-4">Company</h3>
      <div className="grid grid-cols-2 gap-3">
        {companies.map((company) => (
          <button
            key={company.name}
            onClick={() => setSelected(company.name)}
            className={`relative p-4 rounded-xl border transition-all duration-200 ${
              selected === company.name
                ? `bg-gradient-to-br ${company.color} border-transparent shadow-lg shadow-${company.color.split("-")[1]}-500/25`
                : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
            }`}
          >
            <span className="text-white font-medium">{company.name}</span>
            {selected === company.name && (
              <div className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
