"use client";

import { useState } from "react";
import { Play } from "./icons";

/**
 * Lightweight click-to-load Vimeo player. The heavy iframe only mounts after
 * the user clicks, keeping the page fast.
 */
export function VimeoFacade({
  videoId,
  title = "BossUp sample film",
}: {
  videoId: string;
  title?: string;
}) {
  const [active, setActive] = useState(false);

  return (
    <div className="relative aspect-video overflow-hidden rounded-3xl border border-line bg-surface shadow-2xl shadow-black/40">
      {active ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://player.vimeo.com/video/${videoId}?autoplay=1&title=0&byline=0&portrait=0`}
          title={title}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          className="group absolute inset-0 flex items-center justify-center"
          aria-label={`Play video: ${title}`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_38%,rgba(34,211,238,0.2),transparent_70%),linear-gradient(160deg,#101a37,#05070f)]" />
          <div className="grain absolute inset-0" />
          <span className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-brand text-ink shadow-[0_12px_50px_-8px_rgba(255,176,32,0.85)] transition-transform duration-300 group-hover:scale-110">
            <Play size={28} className="ml-1" />
          </span>
          <span className="absolute bottom-6 left-6 z-10 text-sm font-medium text-muted">
            Watch the 2-minute film
          </span>
        </button>
      )}
    </div>
  );
}
