"use client";

import { Rocket, Play, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function SciunitHero() {
  return (
    <section className="w-full max-w-6xl mx-auto mt-16 px-0 sm:px-2 lg:px-3">
      {/* === Top Row: Badge + Try Quickstart === */}
      <div className="flex items-center justify-between mb-6">
        <Badge
          className="text-black font-medium text-sm ring-1"
          style={{
            backgroundColor: "#F1B82D",
            borderColor: "rgba(0,0,0,0.1)",
          }}
        >
          Sciunit CLI • Executable Research Objects
        </Badge>

        <Button
          className="gap-2 px-4 py-2 text-sm font-medium bg-[#F1B82D] text-black hover:bg-[#f5c643] rounded-md shadow-none"
        >
          <Rocket className="h-4 w-4" />
          Try Quickstart
        </Button>
      </div>

      {/* === Hero Content === */}
      <div className="grid items-start gap-10 md:grid-cols-[1.4fr_1.4fr]">
        {/* === Left Text === */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
            Make experiments{" "}
            <span style={{ color: "#F1B82D" }}>runnable</span>,{" "}
            <span style={{ color: "#F1B82D" }}>reusable</span>, and{" "}
            <span style={{ color: "#F1B82D" }}>shareable</span>
          </h2>

          <p className="mt-4 max-w-xl text-black/70">
            Sciunit CLI turns your research code, data, and environment into instantly 
            recomputable containers using application virtualization. Unlike traditional 
            research objects that only aggregate files, Sciunits enable exact, partial, and 
            modified repeatability — all with minimal storage and setup.
          </p>

          {/* === Bullets === */}
          <div className="mt-5 flex flex-wrap gap-4 text-sm text-black/70">
            <span className="inline-flex items-center gap-1">
              <CheckCircle className="h-3.5 w-3.5" /> Application virtualization for container creation
            </span>
            <span className="inline-flex items-center gap-1">
              <CheckCircle className="h-3.5 w-3.5" /> Versioned storage via deduplication
            </span>
            <span className="inline-flex items-center gap-1">
              <CheckCircle className="h-3.5 w-3.5" /> Provenance-guided reuse and visualization
            </span>
          </div>
        </div>

        {/* === Right Video === */}
        <div className="flex flex-col items-end gap-3">
          <div className="relative w-full rounded-2xl overflow-hidden ring-1 ring-black/10 bg-black/5">
            <iframe
              className="w-full h-[270px] sm:h-[300px] md:h-[340px] lg:h-[380px]"
              src="https://www.youtube.com/embed/qwosU7e9mqc"
              title="Sciunit Intro Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <p className="text-xs text-black/60">
            Watch the player for a quick understanding of sciunit.
          </p>
        </div>
      </div>
    </section>
  );
}
