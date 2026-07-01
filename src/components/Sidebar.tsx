"use client";

import { useState } from "react";

interface SidebarProps {
  activeItem?: string;
}

export default function Sidebar({ activeItem = "Dashboard" }: SidebarProps) {
  const menuItems = [
    { name: "Dashboard", icon: "📊" },
    { name: "Mock Interviews", icon: "🎯" },
    { name: "Reports", icon: "📈" },
    { name: "My Resume", icon: "📄" },
    { name: "Settings", icon: "⚙️" },
  ];

  return (
    <aside className="w-64 bg-slate-900/50 backdrop-blur-xl border-r border-white/10 min-h-screen p-6">
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-white">
          Interview<span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Pilot</span>
        </h2>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.name}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
              activeItem === item.name
                ? "bg-gradient-to-r from-purple-500/30 to-blue-500/30 text-white border border-purple-500/50 shadow-lg shadow-purple-500/20"
                : "text-slate-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="font-medium">{item.name}</span>
          </button>
        ))}
      </nav>

      <div className="absolute bottom-6 left-6 right-6">
        <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-4">
          <p className="text-sm text-slate-300 mb-2">Upgrade to Pro</p>
          <p className="text-xs text-slate-500 mb-3">Unlock unlimited interviews</p>
          <button className="w-full py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all">
            Upgrade Now
          </button>
        </div>
      </div>
    </aside>
  );
}
