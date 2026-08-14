"use client";

import { useState } from "react";
import { Play, Pause, Volume2, Maximize2, Sparkles, Film } from "lucide-react";

export default function VideoPreview() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="flex flex-1 flex-col bg-void px-6 pb-4 pt-6">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h1 className="font-display text-[15px] font-semibold text-ink">
            Untitled_Reel_04
          </h1>
          <p className="font-mono text-[11px] text-muted">
            3840×2160 · 24fps · ProRes 422
          </p>
        </div>
        <button className="flex items-center gap-2 rounded-md bg-cyan-soft px-3 py-1.5 font-body text-[12px] font-medium text-cyan transition-colors hover:bg-cyan/20">
          <Sparkles size={14} />
          Generate cinematic cut
        </button>
      </div>

      {/* Stage */}
      <div className="film-grain relative flex flex-1 items-center justify-center overflow-hidden rounded-lg border border-hairline bg-[#08090A]">
        {/* Letterbox bars */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[8%] bg-black/60" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[8%] bg-black/60" />

        <div className="flex flex-col items-center gap-3 text-muted">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-hairline bg-panel/60">
            <Film size={22} strokeWidth={1.5} />
          </div>
          <p className="font-body text-[13px]">No footage loaded</p>
          <p className="font-body text-[12px] text-muted/70">
            Upload a reel to begin editing
          </p>
        </div>

        {/* Center play control */}
        <button
          onClick={() => setPlaying((p) => !p)}
          className="absolute flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-black/40 text-ink backdrop-blur-sm transition-transform hover:scale-105"
        >
          {playing ? (
            <Pause size={20} fill="currentColor" />
          ) : (
            <Play size={20} fill="currentColor" className="ml-0.5" />
          )}
        </button>

        {/* Timecode badge */}
        <div className="absolute bottom-4 left-4 rounded-sm bg-black/50 px-2 py-1 font-mono text-[11px] text-ink/80 backdrop-blur-sm">
          00:00:00:00
        </div>
      </div>

      {/* Transport bar */}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setPlaying((p) => !p)}
            className="flex h-8 w-8 items-center justify-center rounded-md bg-raised text-ink transition-colors hover:bg-hairline"
          >
            {playing ? (
              <Pause size={14} fill="currentColor" />
            ) : (
              <Play size={14} fill="currentColor" className="ml-0.5" />
            )}
          </button>
          <div className="flex items-center gap-2 text-muted">
            <Volume2 size={15} />
            <div className="h-1 w-20 rounded-full bg-raised">
              <div className="h-1 w-2/3 rounded-full bg-amber" />
            </div>
          </div>
        </div>
        <span className="font-mono text-[11px] text-muted">
          00:00:00:00 / 00:00:00:00
        </span>
        <button className="flex h-8 w-8 items-center justify-center rounded-md text-muted transition-colors hover:bg-raised hover:text-ink">
          <Maximize2 size={14} />
        </button>
      </div>
    </div>
  );
}
