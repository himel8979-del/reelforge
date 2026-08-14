"use client";

import { useState } from "react";
import { ZoomIn, ZoomOut, Scissors, Magnet } from "lucide-react";

const ticks = Array.from({ length: 48 });

const clips = [
  { id: 1, label: "A-roll_intro", start: 4, width: 18, lane: 0 },
  { id: 2, label: "B-roll_drone", start: 24, width: 22, lane: 0 },
  { id: 3, label: "AI_cut_transition", start: 24, width: 10, lane: 1, ai: true },
  { id: 4, label: "score_main.wav", start: 4, width: 42, lane: 2, audio: true },
];

export default function Timeline() {
  const [playhead, setPlayhead] = useState(30);

  return (
    <div className="flex h-[220px] shrink-0 flex-col border-t border-hairline bg-panel">
      {/* Toolbar */}
      <div className="flex items-center justify-between border-b border-hairline px-4 py-2">
        <div className="flex items-center gap-1">
          <button className="flex h-7 w-7 items-center justify-center rounded text-muted transition-colors hover:bg-raised hover:text-ink">
            <Scissors size={14} />
          </button>
          <button className="flex h-7 w-7 items-center justify-center rounded text-amber transition-colors hover:bg-amber-soft">
            <Magnet size={14} />
          </button>
          <div className="mx-2 h-4 w-px bg-hairline" />
          <span className="font-mono text-[11px] text-muted">
            00:00:{String(playhead).padStart(2, "0")}:00
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button className="flex h-7 w-7 items-center justify-center rounded text-muted transition-colors hover:bg-raised hover:text-ink">
            <ZoomOut size={14} />
          </button>
          <button className="flex h-7 w-7 items-center justify-center rounded text-muted transition-colors hover:bg-raised hover:text-ink">
            <ZoomIn size={14} />
          </button>
        </div>
      </div>

      {/* Ruler — sprocket-hole ticks, the signature motif */}
      <div
        className="sprocket-row relative h-6 shrink-0 cursor-pointer border-b border-hairline"
        onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const pct = (e.clientX - rect.left) / rect.width;
          setPlayhead(Math.max(0, Math.min(60, Math.round(pct * 60))));
        }}
      >
        <div className="flex h-full">
          {ticks.map((_, i) => (
            <div
              key={i}
              className="flex flex-1 items-end justify-start border-l border-hairline/60 pl-1"
            >
              {i % 4 === 0 && (
                <span className="pb-0.5 font-mono text-[9px] text-muted">
                  {String(i).padStart(2, "0")}s
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Track lanes */}
      <div className="relative flex-1 overflow-x-auto">
        {/* Playhead */}
        <div
          className="pointer-events-none absolute top-0 z-10 h-full w-px bg-amber"
          style={{ left: `${(playhead / 60) * 100}%` }}
        >
          <div className="absolute -left-[5px] -top-1 h-2.5 w-2.5 rotate-45 bg-amber" />
        </div>

        <div className="flex flex-col gap-1.5 p-2">
          {[0, 1, 2].map((lane) => (
            <div
              key={lane}
              className="relative h-11 rounded-sm bg-raised/50"
            >
              {clips
                .filter((c) => c.lane === lane)
                .map((clip) => (
                  <div
                    key={clip.id}
                    className={`absolute top-0 flex h-full items-center overflow-hidden rounded-sm border px-2 ${
                      clip.ai
                        ? "border-cyan/40 bg-cyan-soft"
                        : clip.audio
                        ? "border-hairline bg-[#20241f]"
                        : "border-hairline bg-[#242220]"
                    }`}
                    style={{
                      left: `${(clip.start / 60) * 100}%`,
                      width: `${(clip.width / 60) * 100}%`,
                    }}
                  >
                    <span
                      className={`truncate font-mono text-[10px] ${
                        clip.ai ? "text-cyan" : "text-ink/80"
                      }`}
                    >
                      {clip.label}
                    </span>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
