"use client";

import { Layers, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <nav className="sticky top-0 z-40 border-b border-black/10 bg-white/80 backdrop-blur relative">
      <div className="mx-auto flex items-center justify-between w-full max-w-6xl pl-2 sm:pl-4 lg:pl-6 pr-4 sm:pr-8 lg:pr-2 py-3">
        {/* === Left Section (Icon + Text) === */}
        <div className="flex items-center gap-3 -ml-4 sm:-ml-6 lg:-ml-20">
          {/* Logo Icon */}
          <button
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-black/5 ring-1 ring-black/10 focus:ring-2"
            style={{ outlineColor: "#F1B82D" }}
          >
            <Layers className="h-5 w-5" />
          </button>

          {/* Lab Text */}
          <div>
            <p className="text-sm leading-none text-black/70">Radiant Lab</p>
            <h1 className="text-base font-semibold tracking-tight">
              Reproducible Research — FLINC & CLI
            </h1>
          </div>
        </div>

        {/* === Right Section (Lab Website Button) === */}
        <Button
          className="gap-2 border border-black text-black bg-white hover:bg-black/5"
          asChild
        >
          <a
            href="https://radiant-systems-lab.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="h-4 w-4" /> Lab Website
          </a>
        </Button>
      </div>
    </nav>
  );
}
