"use client";

import { useState } from "react";
import { Upload, Scissors, Sparkles, Film, Settings } from "lucide-react";

type Tool = {
  id: string;
  label: string;
  hint: string;
  icon: React.ElementType;
  accent?: "amber" | "cyan";
};

const tools: Tool[] = [
  {
    id: "upload",
    label: "Upload Reel",
    hint: "Bring in raw footage",
    icon: Upload,
  },
  {
    id: "trim",
    label: "Video Trimmer",
    hint: "Cut in and out points",
    icon: Scissors,
  },
  {
    id: "ai",
    label: "AI Cinematic Generator",
    hint: "Generate cinematic cuts",
    icon: Sparkles,
    accent: "cyan",
  },
];

export default function Sidebar() {
  const [active, setActive] = useState("ai");

  return (
    <aside className="flex h-full w-[248px] shrink-0 flex-col border-r border-hairline bg-panel">
      <div className="flex items-center gap-2 px-5 py-5">
        <div className="flex h-8 w-8 items-center justify-center rounded bg-amber/10 text-amber">
          <Film size={18} strokeWidth={2} />
        </div>
        <span className="font-display text-[15px] font-semibold tracking-tight text-ink">
          ReelForge
        </span>
      </div>

      <nav className="flex flex-1 flex-col gap-1 px-3 pt-2">
        <span className="px-2 pb-2 pt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
          Tools
        </span>
        {tools.map((tool) => {
          const Icon = tool.icon;
          const isActive = active === tool.id;
          const accentText =
            tool.accent === "cyan" ? "text-cyan" : "text-amber";
          const accentBg =
            tool.accent === "cyan" ? "bg-cyan-soft" : "bg-amber-soft";

          return (
            <button
              key={tool.id}
              onClick={() => setActive(tool.id)}
              className={`group flex items-center gap-3 rounded-md px-3 py-2.5 text-left transition-colors ${
                isActive
                  ? `${accentBg} ${accentText}`
                  : "text-muted hover:bg-raised hover:text-ink"
              }`}
            >
              <Icon size={17} strokeWidth={2} />
              <span className="flex flex-1 flex-col">
                <span
                  className={`font-body text-[13px] font-medium ${
                    isActive ? accentText : "text-ink"
                  }`}
                >
                  {tool.label}
                </span>
                <span className="font-body text-[11px] text-muted">
                  {tool.hint}
                </span>
              </span>
              {tool.accent === "cyan" && (
                <span className="rounded-sm bg-cyan/15 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wide text-cyan">
                  AI
                </span>
              )}
            </button>
          );
        })}
      </nav>

      <div className="mt-auto border-t border-hairline px-3 py-3">
        <button className="flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-muted transition-colors hover:bg-raised hover:text-ink">
          <Settings size={17} strokeWidth={2} />
          <span className="font-body text-[13px] font-medium">Settings</span>
        </button>
      </div>
    </aside>
  );
}
