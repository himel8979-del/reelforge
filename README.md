# ReelForge — Cinematic Editing Dashboard

A dark-themed dashboard UI for a video editing / AI cinematic generation app,
built with Next.js 14 (App Router), React, TypeScript, and Tailwind CSS.

## Folder structure

```
reelforge/
├── app/
│   ├── layout.tsx      # Root layout, loads fonts (Space Grotesk, Inter, JetBrains Mono)
│   ├── page.tsx         # Dashboard page — composes Sidebar + VideoPreview + Timeline
│   └── globals.css      # Tailwind base + design tokens (sprocket-hole ruler pattern, film grain)
├── components/
│   ├── Sidebar.tsx       # Tool rack: Upload Reel / Video Trimmer / AI Cinematic Generator
│   ├── VideoPreview.tsx  # Player stage with transport controls
│   └── Timeline.tsx      # Bottom timeline with sprocket-hole ruler + clip lanes
├── tailwind.config.ts    # Color/type/radius tokens
├── postcss.config.js
├── tsconfig.json
└── package.json
```

## Design tokens

- **Palette**: near-black void (`#0B0C0E`), graphite panels (`#17181C`/`#1F2024`), warm amber accent
  (`#E8A33D`) for primary transport/editing actions (evokes tungsten film lighting), cyan (`#4FD1C5`)
  reserved only for AI-generated elements so AI-touched clips/actions are visually distinct at a glance.
- **Type**: Space Grotesk (display/headings), Inter (UI body text), JetBrains Mono (timecodes, frame counters).
- **Signature element**: the timeline ruler uses a sprocket-hole dot pattern (`.sprocket-row` in
  globals.css) instead of a plain tick line, referencing a physical film strip — reinforced by a
  subtle film-grain texture behind the preview stage.

## Setup

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Notes

- `Sidebar.tsx` currently manages active-tool state locally (`useState`) — wire the three tools
  (Upload Reel, Video Trimmer, AI Cinematic Generator) up to real panels/routes as you build them out.
- `VideoPreview.tsx` and `Timeline.tsx` use placeholder/mock data (no video source, mock clips) —
  swap in real media state (e.g. via context or a state library) once upload/trim logic exists.
- Icons via `lucide-react`.
